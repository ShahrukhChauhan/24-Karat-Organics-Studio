import React, { useState } from 'react';
import { Search, ShoppingBag, User, X, Sparkles, Calendar, Stethoscope } from 'lucide-react';
import { User as FirebaseUser } from 'firebase/auth';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenConsultation: () => void;
  onOpenAuth: () => void;
  onOpenProfile: () => void;
  onNavigateHome: () => void;
  onSelectCategory: (category: string) => void;
  currentUser: FirebaseUser | null;
  onSearch: (term: string) => void;
  currentPage?: string;
  onNavigatePage?: (page: 'home' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
  onOpenConsultation,
  onOpenAuth,
  onOpenProfile,
  onNavigateHome,
  onSelectCategory,
  currentUser,
  onSearch,
  currentPage = 'home',
  onNavigatePage,
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageClick = (page: 'home' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs') => {
    if (onNavigatePage) {
      onNavigatePage(page);
    } else {
      onNavigateHome();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fffdfa]/95 backdrop-blur-md border-b border-[#e9e1ce] transition-all shadow-xs">
      {/* Top Announcement Bar */}
      {showBanner && (
        <div id="top-announcement-bar" className="bg-[#1c1815] text-[#fbf7ee] text-xs sm:text-sm font-medium py-1.5 px-4 flex items-center justify-between transition-all border-b border-[#d4af37]/30">
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <span className="bg-[#d4af37] text-[#1c1815] text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">
              VEDIC PURITY
            </span>
            <span>
              Save up to ₹250 on Pure Buffalo Bilona Ghee Jars • Use Code:{' '}
              <strong className="underline tracking-wider font-bold text-[#f5d77f]">GOLD250</strong>
            </span>
          </div>
          <button
            id="dismiss-announcement-btn"
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss announcement"
            className="text-[#fbf7ee]/80 hover:text-white p-1 ml-2 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Left Navigation & Quiz CTA */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              id="nav-take-quiz-btn"
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#b8860b] text-[#854d0e] hover:bg-[#b8860b] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs bg-[#fdfbf6]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Ghee & Dosha Quiz</span>
            </button>

            {/* Desktop Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-semibold tracking-wide text-[#3f3529]">
              <button 
                onClick={() => handlePageClick('shop')}
                className={`transition-colors cursor-pointer py-1 relative ${
                  currentPage === 'shop'
                    ? 'text-[#854d0e] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b8860b]'
                    : 'hover:text-[#b8860b]'
                }`}
              >
                SHOP
              </button>
              <button 
                onClick={() => handlePageClick('bilona-method')}
                className={`transition-colors cursor-pointer py-1 relative ${
                  currentPage === 'bilona-method'
                    ? 'text-[#854d0e] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b8860b]'
                    : 'hover:text-[#b8860b]'
                }`}
              >
                BILONA METHOD
              </button>
              <button 
                onClick={() => handlePageClick('why-24karat')}
                className={`transition-colors cursor-pointer py-1 relative ${
                  currentPage === 'why-24karat'
                    ? 'text-[#854d0e] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b8860b]'
                    : 'hover:text-[#b8860b]'
                }`}
              >
                WHY 24 KARAT
              </button>
              <button 
                onClick={() => handlePageClick('lab-purity')}
                className={`transition-colors cursor-pointer py-1 relative ${
                  currentPage === 'lab-purity'
                    ? 'text-[#854d0e] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b8860b]'
                    : 'hover:text-[#b8860b]'
                }`}
              >
                LAB PURITY
              </button>
              <button 
                onClick={() => handlePageClick('faqs')}
                className={`transition-colors cursor-pointer py-1 relative ${
                  currentPage === 'faqs'
                    ? 'text-[#854d0e] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b8860b]'
                    : 'hover:text-[#b8860b]'
                }`}
              >
                FAQS
              </button>
              <button
                id="nav-book-appointment-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1 text-[#854d0e] hover:underline font-bold cursor-pointer"
              >
                <Stethoscope className="w-3.5 h-3.5 text-[#b8860b]" />
                CONSULT VAIDYA
              </button>
            </nav>
          </div>

          {/* Center Brand Logo: 24 KARAT */}
          <div className="flex flex-col items-center cursor-pointer select-none py-1" onClick={() => handlePageClick('home')}>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-[#1c1815]">
                24 <span className="font-serif italic text-[#b8860b]">KARAT</span>
              </span>
              <span className="text-[10px] font-bold text-[#b8860b] bg-[#fdf6e2] px-1 py-0.5 rounded border border-[#d4af37]/40 leading-none">
                A2
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#854d0e] font-bold hidden sm:block -mt-1">
              Buffalo Bilona Desi Ghee
            </span>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Trigger */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    id="nav-search-input"
                    type="text"
                    placeholder="Search Bilona, Swarna, Medhya..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                    className="w-40 sm:w-56 text-xs px-3 py-1.5 bg-[#fbf7ee] border border-[#d6c7ab] rounded-full focus:outline-none focus:border-[#b8860b] text-[#1c1815]"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 text-gray-500 hover:text-black ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  id="nav-search-btn"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search store"
                  className="p-2 text-[#2d241c] hover:bg-[#fbf7ee] rounded-full transition-colors cursor-pointer"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Auth / Account Profile */}
            {currentUser ? (
              <button
                id="nav-user-profile-btn"
                onClick={onOpenProfile}
                className="flex items-center gap-2 p-1.5 rounded-full hover:bg-[#fbf7ee] transition-colors cursor-pointer border border-[#d4cbbe]"
                title={`Signed in as ${currentUser.displayName || currentUser.email || 'User'}`}
              >
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || 'User Avatar'}
                    className="w-6 h-6 rounded-full object-cover border border-[#b8860b]"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#b8860b] text-white flex items-center justify-center text-xs font-bold">
                    {(currentUser.displayName?.[0] || currentUser.email?.[0] || 'U').toUpperCase()}
                  </div>
                )}
                <span className="text-xs font-semibold text-[#1c1815] hidden md:inline max-w-[90px] truncate">
                  {currentUser.displayName?.split(' ')[0] || 'My Account'}
                </span>
              </button>
            ) : (
              <button
                id="nav-auth-login-btn"
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 text-xs font-bold text-[#1c1815] hover:bg-[#fbf7ee] px-2.5 py-1.5 rounded-full transition-colors cursor-pointer border border-transparent hover:border-[#d4af37]/30"
                title="Sign in with Google or Guest"
              >
                <User className="w-5 h-5 text-[#b8860b]" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}

            {/* Shopping Cart Bag */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative p-2 text-[#1c1815] hover:bg-[#fbf7ee] rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-[#854d0e]" />
              {cartCount > 0 && (
                <span
                  id="nav-cart-badge"
                  className="absolute -top-0.5 -right-0.5 bg-[#b8860b] text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation bar */}
        <div className="flex lg:hidden items-center space-x-1 py-2 border-t border-[#f2ebe0] text-xs font-semibold text-[#3f3529] overflow-x-auto no-scrollbar">
          <button 
            onClick={() => handlePageClick('shop')} 
            className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors cursor-pointer ${
              currentPage === 'shop' ? 'bg-[#1c1815] text-[#f5d77f]' : 'hover:text-[#b8860b]'
            }`}
          >
            Shop
          </button>
          <button 
            onClick={() => handlePageClick('bilona-method')}
            className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors cursor-pointer ${
              currentPage === 'bilona-method' ? 'bg-[#1c1815] text-[#f5d77f]' : 'hover:text-[#b8860b]'
            }`}
          >
            Bilona Method
          </button>
          <button 
            onClick={() => handlePageClick('why-24karat')}
            className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors cursor-pointer ${
              currentPage === 'why-24karat' ? 'bg-[#1c1815] text-[#f5d77f]' : 'hover:text-[#b8860b]'
            }`}
          >
            Why 24 Karat
          </button>
          <button 
            onClick={() => handlePageClick('lab-purity')}
            className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors cursor-pointer ${
              currentPage === 'lab-purity' ? 'bg-[#1c1815] text-[#f5d77f]' : 'hover:text-[#b8860b]'
            }`}
          >
            Lab Purity
          </button>
          <button 
            onClick={() => handlePageClick('faqs')}
            className={`whitespace-nowrap px-3 py-1 rounded-full transition-colors cursor-pointer ${
              currentPage === 'faqs' ? 'bg-[#1c1815] text-[#f5d77f]' : 'hover:text-[#b8860b]'
            }`}
          >
            FAQs
          </button>
          <button 
            onClick={onOpenConsultation}
            className="whitespace-nowrap px-3 py-1 text-[#854d0e] font-bold flex items-center gap-1 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" /> Consult Vaidya
          </button>
        </div>
      </div>
    </header>
  );
};
