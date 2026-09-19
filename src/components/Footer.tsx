import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenQuiz: () => void;
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
  onNavigatePage?: (page: 'home' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuiz,
  onOpenConsultation,
  onNavigateHome,
  onNavigatePage,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handlePageClick = (page: 'home' | 'shop' | 'bilona-method' | 'why-24karat' | 'lab-purity' | 'faqs') => {
    if (onNavigatePage) {
      onNavigatePage(page);
    } else {
      onNavigateHome();
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#14100d] text-[#e5d8c3] pt-16 pb-12 border-t border-[#2a221a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Box */}
        <div className="bg-[#1f1914] rounded-3xl p-8 sm:p-12 mb-16 border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#d4af37] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              ROYAL HERITAGE PRIVILEGE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-white mt-1">
              Join The 24 KARAT Heritage Club
            </h3>
            <p className="text-xs sm:text-sm text-[#bdae99] mt-2">
              Receive limited-batch harvest notifications, private festive gift reservations, and traditional Ayurvedic kitchen recipes.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-[#2d2419] text-[#f5d77f] border border-[#d4af37] px-6 py-3 rounded-full text-xs font-bold text-center">
                ✓ Welcome to the family! Enjoy ₹250 off your first jar with code: GOLDEN24
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md w-full">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-l-full bg-[#2a221b] border border-[#4d3d2e] text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] placeholder-[#8a7a69]"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] px-6 py-3 rounded-r-full text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer shrink-0 border border-[#d4af37]"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2d241c]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer flex items-center gap-2" onClick={onNavigateHome}>
              <div className="w-9 h-9 rounded-xl bg-[#d4af37] flex items-center justify-center font-serif font-black text-[#1c1815] text-lg shadow-sm border border-[#f5d77f]">
                24
              </div>
              <span className="font-serif text-3xl font-black tracking-tight text-white">
                24 KARAT<span className="text-[#d4af37] font-sans text-xs ml-1 font-bold">TM</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#b5a591] leading-relaxed max-w-sm">
              The benchmark of pure Buffalo Bilona Desi Ghee in India. Handcrafted from grass-fed Murrah buffalo A2 curd, slow-cooked in clay pots over wood fire without chemicals, palm oil, or preservatives.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#e6d8c2]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>FSSAI Certified • NABL Lab Tested • 100% Glass Packaging</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-black text-[#d4af37] uppercase tracking-wider text-xs">COLLECTION</h4>
            <ul className="space-y-2 text-[#b5a591]">
              <li><button onClick={() => handlePageClick('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Pure Buffalo Bilona Ghee</button></li>
              <li><button onClick={() => handlePageClick('bilona-method')} className="hover:text-white transition-colors cursor-pointer text-left">5-Step Vedic Bilona Process</button></li>
              <li><button onClick={() => handlePageClick('why-24karat')} className="hover:text-white transition-colors cursor-pointer text-left">Why 24 KARAT Ghee</button></li>
              <li><button onClick={onOpenQuiz} className="hover:text-white transition-colors cursor-pointer text-left">Prakriti Ghee Match Quiz</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer text-left">Free Vaidya Consultation</button></li>
            </ul>
          </div>

          {/* Quality & Trust */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-black text-[#d4af37] uppercase tracking-wider text-xs">PURITY & TRUST</h4>
            <ul className="space-y-2 text-[#b5a591]">
              <li><button onClick={() => handlePageClick('lab-purity')} className="hover:text-white transition-colors cursor-pointer text-left">NABL Gas Chromatography Report</button></li>
              <li><button onClick={() => handlePageClick('lab-purity')} className="hover:text-white transition-colors cursor-pointer text-left">Reichert-Meissl (RM) Certification</button></li>
              <li><button onClick={() => handlePageClick('why-24karat')} className="hover:text-white transition-colors cursor-pointer text-left">Grass-Fed Murrah Buffalo Welfare</button></li>
              <li><button onClick={() => handlePageClick('why-24karat')} className="hover:text-white transition-colors cursor-pointer text-left">Zero Palm Oil Guarantee</button></li>
              <li><button onClick={() => handlePageClick('faqs')} className="hover:text-white transition-colors cursor-pointer text-left">Frequently Asked Questions (FAQs)</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-black text-[#d4af37] uppercase tracking-wider text-xs">CARE DESK</h4>
            <div className="space-y-2.5 text-[#b5a591]">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+919876524240" className="hover:text-white">+91-98765-24240</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="mailto:care@24karatghee.com" className="hover:text-white">care@24karatghee.com</a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Heritage Haveli Estate, Jind Organic Dairy Corridor, Haryana 126102, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#857463] text-center md:text-left">
          <p>
            © 2026 24 KARAT (India) Private Limited. All Rights Reserved. Prepared in accordance with traditional Charaka Samhita ghee clarification guidelines.
          </p>
          <p className="flex items-center gap-1 justify-center text-[#bdae99]">
            Handcrafted with <Heart className="w-3 h-3 text-[#d4af37] fill-current" /> for family longevity and vitality
          </p>
        </div>

      </div>
    </footer>
  );
};
