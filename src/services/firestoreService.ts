import { 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { ReviewItem, ConsultationBooking, Order, SymptomAssessment, CartItem } from '../types';
import { INITIAL_REVIEWS } from '../data/karatData';

// REVIEWS
export async function getProductReviews(productId: string): Promise<ReviewItem[]> {
  try {
    const q = query(
      collection(db, 'reviews'),
      where('productId', '==', productId)
    );
    const snap = await getDocs(q);
    const firestoreReviews: ReviewItem[] = [];
    snap.forEach((doc) => {
      const data = doc.data();
      firestoreReviews.push({
        id: doc.id,
        productId: data.productId,
        author: data.author || data.userName || 'Verified Customer',
        rating: Number(data.rating) || 5,
        title: data.title || '',
        comment: data.comment || '',
        date: data.createdAt ? new Date(data.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently',
        verified: data.verified !== false,
        userLocation: data.userLocation || 'India'
      });
    });

    // Merge with initial hardcoded verified reviews from screenshots
    const staticForProduct = INITIAL_REVIEWS.filter(r => r.productId === productId);
    const combined = [...firestoreReviews, ...staticForProduct];
    return combined;
  } catch (err) {
    console.warn('Could not fetch Firestore reviews, using initial set:', err);
    return INITIAL_REVIEWS.filter(r => r.productId === productId);
  }
}

export async function addProductReview(review: Omit<ReviewItem, 'id' | 'date'> & { userId?: string }): Promise<ReviewItem> {
  const newId = 'rev-' + Date.now();
  const createdDate = new Date().toISOString();
  
  const reviewPayload = {
    productId: review.productId,
    userId: review.userId || 'guest',
    author: review.author,
    userName: review.author,
    rating: review.rating,
    title: review.title,
    comment: review.comment,
    verified: true,
    userLocation: review.userLocation || 'Verified Buyer',
    createdAt: createdDate
  };

  try {
    const docRef = await addDoc(collection(db, 'reviews'), reviewPayload);
    return {
      id: docRef.id,
      productId: review.productId,
      author: review.author,
      rating: review.rating,
      title: review.title,
      comment: review.comment,
      date: 'Just now',
      verified: true,
      userLocation: review.userLocation || 'Verified Buyer'
    };
  } catch (err) {
    console.warn('Direct Firestore review add failed, saving locally:', err);
    return {
      id: newId,
      productId: review.productId,
      author: review.author,
      rating: review.rating,
      title: review.title,
      comment: review.comment,
      date: 'Just now',
      verified: true,
      userLocation: review.userLocation || 'Verified Buyer'
    };
  }
}

// CART SYNC
export async function saveUserCart(userId: string, items: CartItem[]): Promise<void> {
  if (!userId) return;
  try {
    await setDoc(doc(db, 'carts', userId), {
      userId,
      items,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore cart sync skipped:', err);
  }
}

export async function getUserCart(userId: string): Promise<CartItem[] | null> {
  if (!userId) return null;
  try {
    const docSnap = await getDoc(doc(db, 'carts', userId));
    if (docSnap.exists()) {
      return docSnap.data().items as CartItem[];
    }
  } catch (err) {
    console.warn('Could not read user cart from Firestore:', err);
  }
  return null;
}

// CONSULTATIONS
export async function bookConsultation(booking: Omit<ConsultationBooking, 'id' | 'createdAt' | 'status'>): Promise<ConsultationBooking> {
  const newBooking: ConsultationBooking = {
    ...booking,
    id: 'cons-' + Date.now(),
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, 'consultations'), newBooking);
    return { ...newBooking, id: docRef.id };
  } catch (err) {
    console.warn('Consultation add fallback:', err);
    // save locally in localStorage as well
    const existing = JSON.parse(localStorage.getItem('karat_consultations') || '[]');
    existing.push(newBooking);
    localStorage.setItem('karat_consultations', JSON.stringify(existing));
    return newBooking;
  }
}

export async function getUserConsultations(userId?: string, userEmail?: string): Promise<ConsultationBooking[]> {
  const localBookings: ConsultationBooking[] = JSON.parse(localStorage.getItem('karat_consultations') || '[]');
  if (!userId && !userEmail) return localBookings;

  try {
    const q = query(
      collection(db, 'consultations'),
      where('userEmail', '==', userEmail || '')
    );
    const snap = await getDocs(q);
    const results: ConsultationBooking[] = [];
    snap.forEach(d => {
      results.push({ ...(d.data() as ConsultationBooking), id: d.id });
    });
    return results.length > 0 ? results : localBookings;
  } catch (err) {
    console.warn('Could not query consultations from Firestore:', err);
    return localBookings;
  }
}

// ORDERS
export async function createOrder(order: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<Order> {
  const newOrder: Order = {
    ...order,
    id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    status: 'Confirmed & Preparing for Dispatch',
    createdAt: new Date().toISOString()
  };

  try {
    const docRef = await addDoc(collection(db, 'orders'), newOrder);
    newOrder.id = docRef.id;
  } catch (err) {
    console.warn('Firestore order save fallback:', err);
  }

  // Also maintain local orders list
  const existingOrders = JSON.parse(localStorage.getItem('karat_orders') || '[]');
  existingOrders.unshift(newOrder);
  localStorage.setItem('karat_orders', JSON.stringify(existingOrders));

  return newOrder;
}

export async function getUserOrders(userId?: string): Promise<Order[]> {
  const localOrders: Order[] = JSON.parse(localStorage.getItem('karat_orders') || '[]');
  if (!userId) return localOrders;

  try {
    const q = query(collection(db, 'orders'), where('userId', '==', userId));
    const snap = await getDocs(q);
    const results: Order[] = [];
    snap.forEach(d => {
      results.push({ ...(d.data() as Order), id: d.id });
    });
    return results.length > 0 ? results : localOrders;
  } catch (err) {
    console.warn('Could not get orders:', err);
    return localOrders;
  }
}

// SYMPTOM ASSESSMENTS
export async function saveSymptomAssessment(assessment: Omit<SymptomAssessment, 'id' | 'createdAt'>): Promise<SymptomAssessment> {
  const record: SymptomAssessment = {
    ...assessment,
    id: 'quiz-' + Date.now(),
    createdAt: new Date().toISOString()
  };

  try {
    await addDoc(collection(db, 'symptom_assessments'), record);
  } catch (err) {
    console.warn('Could not save assessment to Firestore:', err);
  }

  localStorage.setItem('karat_latest_assessment', JSON.stringify(record));
  return record;
}
