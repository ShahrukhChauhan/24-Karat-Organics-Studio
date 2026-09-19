import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';
import { auth, logoutUser } from './firebase/config';
import { getUserCart, saveUserCart } from './services/firestoreService';
import { PRODUCTS, DOCTORS, COMMUNITY_STORIES } from './data/karatData';
import { Product, CartItem, Doctor } from './types';

// Components
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryRibbon } from './components/CategoryRibbon';
import { HowItWorks } from './components/HowItWorks';
import { CommunityReels } from './components/CommunityReels';
import { BestSellers } from './components/BestSellers';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ExpertsOnBoard } from './components/ExpertsOnBoard';
import { QuizSection } from './components/QuizSection';
import { PressCoverage } from './components/PressCoverage';
import { WhyKarat } from './components/WhyKarat';
import { ClinicalTrialReport } from './components/ClinicalTrialReport';
import { DoctorAppointmentBanner } from './components/DoctorAppointmentBanner';
import { BlogsSection } from './components/BlogsSection';
import { InstagramWall } from './components/InstagramWall';
import { Footer } from './components/Footer';

// Dedicated Full Pages
import { ShopPage } from './pages/ShopPage';
import { BilonaMethodPage } from './pages/BilonaMethodPage';
import { WhyKaratPage } from './pages/WhyKaratPage';
import { LabPurityPage } from './pages/LabPurityPage';
import { FaqsPage } from './pages/FaqsPage';

// Modals
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DoctorBookingModal } from './components/DoctorBookingModal';
import { SymptomQuizModal } from './components/SymptomQuizModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<'home' | 'product-detail' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('buffalo-bilona-ghee');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Cart & Orders State
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('karat_local_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [appliedCoupon, setAppliedCoupon] = useState<string>('GOLDEN24');

  // Firebase Auth State
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  // Modals Visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<typeof COMMUNITY_STORIES[0] | null>(null);
  const [refreshReviewsTrigger, setRefreshReviewsTrigger] = useState(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Sync cart from Firestore
        const remoteCart = await getUserCart(user.uid);
        if (remoteCart && remoteCart.length > 0) {
          setCart(remoteCart);
        } else if (cart.length > 0) {
          await saveUserCart(user.uid, cart);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Save cart changes to localStorage and Firestore if logged in
  useEffect(() => {
    localStorage.setItem('karat_local_cart', JSON.stringify(cart));
    if (currentUser) {
      saveUserCart(currentUser.uid, cart);
    }
  }, [cart, currentUser]);

  // Cart Handlers
  const handleAddToCart = (product: Product, packId?: string, quantity: number = 1) => {
    const pack = product.packs.find(p => p.id === packId) || product.packs[0];
    const targetPackId = pack.id;

    setCart(prev => {
      const existing = prev.find(item => item.packId === targetPackId);
      if (existing) {
        return prev.map(item =>
          item.packId === targetPackId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          packId: targetPackId,
          packDuration: pack.duration,
          unitPrice: pack.price,
          quantity,
          image: product.image
        }
      ];
    });

    showToast(`Added ${quantity}x ${product.name.split(' - ')[0]} to bag!`);
    setIsCartOpen(true);
  };

  const handleInstantBuy = (product: Product, packId: string, quantity: number) => {
    handleAddToCart(product, packId, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (packId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.packId === packId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (packId: string) => {
    setCart(prev => prev.filter(item => item.packId !== packId));
  };

  const handleApplyCoupon = (code: string): boolean => {
    if (code === 'GOLDEN24' || code === 'BILONA251' || code === 'AYURVEDA251') {
      setAppliedCoupon(code);
      return true;
    }
    return false;
  };

  // Navigation Handlers
  const handleNavigatePage = (page: 'home' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs') => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsDoctorModalOpen(true);
  };

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  // Search filtered products
  const displayProducts = searchTerm.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.benefitsSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : PRODUCTS;

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdfa] text-[#1c1815] selection:bg-[#d4af37] selection:text-[#1c1815]">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1c1815] text-[#f5d77f] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs sm:text-sm font-bold animate-in slide-in-from-top-4 border border-[#d4af37]">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenConsultation={() => {
          setSelectedDoctor(null);
          setIsDoctorModalOpen(true);
        }}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onNavigateHome={handleNavigateHome}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          if (currentView !== 'shop' && currentView !== 'home') {
            setCurrentView('shop');
          }
        }}
        currentUser={currentUser}
        onSearch={(term) => {
          setSearchTerm(term);
          if (currentView !== 'home' && currentView !== 'shop') {
            setCurrentView('shop');
          }
        }}
        currentPage={currentView}
        onNavigatePage={handleNavigatePage}
      />

      {/* View Switcher */}
      <main className="flex-1">
        {currentView === 'product-detail' && (
          <ProductDetailPage
            product={currentProduct}
            onBack={handleNavigateHome}
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
            onOpenConsultation={() => {
              setSelectedDoctor(null);
              setIsDoctorModalOpen(true);
            }}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            refreshReviewsTrigger={refreshReviewsTrigger}
          />
        )}

        {currentView === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(prod, pack, qty) => handleAddToCart(prod, pack.id, qty)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenConsultation={() => {
              setSelectedDoctor(null);
              setIsDoctorModalOpen(true);
            }}
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'bilona-method' && (
          <BilonaMethodPage
            onShopNow={() => handleNavigatePage('shop')}
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'why-24karat' && (
          <WhyKaratPage
            onShopNow={() => handleNavigatePage('shop')}
            onNavigateHome={handleNavigateHome}
            onOpenConsultation={() => {
              setSelectedDoctor(null);
              setIsDoctorModalOpen(true);
            }}
          />
        )}

        {currentView === 'lab-purity' && (
          <LabPurityPage
            onShopNow={() => handleNavigatePage('shop')}
            onNavigateHome={handleNavigateHome}
          />
        )}

        {currentView === 'faqs' && (
          <FaqsPage
            onOpenConsultation={() => {
              setSelectedDoctor(null);
              setIsDoctorModalOpen(true);
            }}
            onNavigateHome={handleNavigateHome}
            onShopNow={() => handleNavigatePage('shop')}
          />
        )}

        {currentView === 'home' && (
          <>
            {/* Search feedback if searching */}
            {searchTerm && (
              <div className="bg-[#fbf7ee] py-4 border-b border-[#ebdcc4]">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-semibold text-[#1c1815]">
                    Showing search results for: <strong>"{searchTerm}"</strong> ({displayProducts.length} items)
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-xs font-bold text-[#b45309] underline cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}

            {/* 1. Hero Section for 24 KARAT */}
            <HeroBanner
              onShopNow={() => handleNavigatePage('shop')}
              onOpenQuiz={() => setIsQuizOpen(true)}
              onSelectProduct={handleSelectProduct}
            />

            {/* 2. Category Ribbon */}
            <CategoryRibbon
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                const el = document.getElementById('best-sellers');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 3. How It Works - The 5 Vedic Bilona Stages */}
            <HowItWorks
              onShopNow={() => handleNavigatePage('shop')}
              onOpenQuiz={() => setIsQuizOpen(true)}
            />

            {/* 4. Community Inspiration Stories */}
            <CommunityReels
              onSelectStory={(story) => setSelectedStory(story)}
            />

            {/* 5. Best Sellers Jars */}
            <BestSellers
              products={displayProducts}
              onSelectProduct={handleSelectProduct}
              onAddToCart={(prod, packId) => handleAddToCart(prod, packId)}
              selectedCategory={selectedCategory}
            />

            {/* 6. Experts on Board (Ayurvedic Vaidyas) */}
            <ExpertsOnBoard
              onSelectDoctor={handleSelectDoctor}
            />

            {/* 7. Need Ghee Assessment Diagnostic Banner */}
            <QuizSection
              onOpenQuiz={() => setIsQuizOpen(true)}
            />

            {/* 8. Media Coverage Bar */}
            <PressCoverage />

            {/* 9. Why 24 KARAT & Ancient Chulha Clarification */}
            <WhyKarat
              onShopNow={() => handleNavigatePage('shop')}
            />

            {/* 10. Laboratory Purity Analysis (RM Value, Fatty Acids) */}
            <ClinicalTrialReport
              onSelectAkira={() => handleSelectProduct('buffalo-bilona-ghee')}
            />

            {/* 11. Vaidya Appointment Consultation Banner */}
            <DoctorAppointmentBanner
              onBookAppointment={() => {
                setSelectedDoctor(null);
                setIsDoctorModalOpen(true);
              }}
            />

            {/* 12. Latest Blogs */}
            <BlogsSection />

            {/* 13. Instagram Community Wall (#24KaratBilona) */}
            <InstagramWall />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenConsultation={() => {
          setSelectedDoctor(null);
          setIsDoctorModalOpen(true);
        }}
        onNavigateHome={handleNavigateHome}
        onNavigatePage={handleNavigatePage}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        appliedCoupon={appliedCoupon}
        currentUser={currentUser}
        onOrderSuccess={() => {
          setCart([]);
          showToast('Order confirmed! Tracking details saved to your profile.');
        }}
      />

      {/* Doctor Booking Consultation Modal */}
      <DoctorBookingModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        selectedDoctor={selectedDoctor}
        currentUser={currentUser}
      />

      {/* Ghee Assessment Diagnostic Quiz Modal */}
      <SymptomQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        currentUser={currentUser}
        onSelectProduct={handleSelectProduct}
      />

      {/* Firebase Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          showToast(`Welcome back, ${user.displayName || 'Member'}!`);
        }}
      />

      {/* User Account Profile Modal with Firestore Orders & Consultations */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        currentUser={currentUser}
        onLogout={async () => {
          await logoutUser();
          setCurrentUser(null);
          showToast('Logged out successfully.');
        }}
      />

      {/* Customer Write Review Modal (Firestore synced) */}
      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        productId={currentProduct.id}
        productName={currentProduct.name}
        currentUser={currentUser}
        onReviewAdded={() => {
          setRefreshReviewsTrigger(prev => prev + 1);
          showToast('Thank you! Your verified review was added.');
        }}
      />

      {/* Video Story Viewer Modal */}
      <VideoModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

    </div>
  );
}
