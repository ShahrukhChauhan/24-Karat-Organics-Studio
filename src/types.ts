export interface ProductPack {
  id: string;
  duration: string; // e.g. "1 Month", "2 Months", "3 Months"
  bottles: number;
  tablets: number;
  mrp: number;
  price: number;
  discount: number;
  tag?: string; // "MOST POPULAR" | "DOCTOR RECOMMENDED" | "TRIAL PACK"
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'emotional' | 'physical' | 'dermal' | 'uti' | 'combo';
  rating: number;
  reviewCount: number;
  mrp: number;
  price: number;
  discountLabel: string;
  badge?: string;
  image: string;
  gallery: string[];
  perks?: string;
  benefitsSummary: string;
  description: string;
  whyChoose: string;
  benefitsList: string[];
  ingredients: { name: string; botanical: string; role: string }[];
  dosage: string;
  symptomsTargeted: string[];
  packs: ProductPack[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialty: string;
  avatar: string;
  availableDays: string[];
}

export interface ReviewItem {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  userLocation?: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  packId: string;
  packDuration: string;
  unitPrice: number;
  quantity: number;
  image: string;
}

export interface ConsultationBooking {
  id: string;
  userId?: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface SymptomAssessment {
  id: string;
  userId?: string;
  ageRange: string;
  primarySymptoms: string[];
  severity: string;
  recommendedProducts: string[];
  createdAt: string;
}

export interface Order {
  id: string;
  userId?: string;
  items: CartItem[];
  totalAmount: number;
  discountAmount: number;
  finalAmount: number;
  couponApplied?: string;
  customerDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  };
  paymentMethod: string;
  status: string;
  createdAt: string;
}
