import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Heart, 
  Check, 
  Plus, 
  Minus, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  Sparkles, 
  Award, 
  Clock, 
  Flame, 
  MessageSquarePlus,
  Zap
} from 'lucide-react';
import { Product, ProductPack, ReviewItem } from '../types';
import { getProductReviews } from '../services/firestoreService';
import { FAQS } from '../data/karatData';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, packId: string, quantity: number) => void;
  onInstantBuy: (product: Product, packId: string, quantity: number) => void;
  onOpenConsultation: () => void;
  onOpenQuiz: () => void;
  onOpenReviewModal: () => void;
  refreshReviewsTrigger: number;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onAddToCart,
  onInstantBuy,
  onOpenConsultation,
  onOpenQuiz,
  onOpenReviewModal,
  refreshReviewsTrigger,
}) => {
  const [selectedPack, setSelectedPack] = useState<ProductPack>(product.packs[1] || product.packs[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.image);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewFilter, setReviewFilter] = useState<'all' | '5' | 'recent'>('all');

  // Accordion open states
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    benefits: true,
    ingredients: false,
    dosage: true,
    symptoms: false,
    faqs: false
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Load Firestore reviews
  useEffect(() => {
    let isMounted = true;
    async function loadReviews() {
      setLoadingReviews(true);
      const data = await getProductReviews(product.id);
      if (isMounted) {
        setReviews(data);
        setLoadingReviews(false);
      }
    }
    loadReviews();
    return () => { isMounted = false; };
  }, [product.id, refreshReviewsTrigger]);

  // Review filters
  const filteredReviews = reviews.filter(r => {
    if (reviewFilter === '5') return r.rating === 5;
    return true;
  });

  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fourStarCount = reviews.filter(r => r.rating === 4).length;
  const threeStarCount = reviews.filter(r => r.rating === 3).length;
  const totalReviews = reviews.length || 1;

  return (
    <div className="bg-[#fffdfa] min-h-screen pb-24">
      
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[#f2e7d5]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#854d0e] hover:text-[#b8860b] transition-colors cursor-pointer mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 24 KARAT Ghee Collections</span>
        </button>
        <div className="text-xs text-[#806f5e] flex items-center gap-2">
          <span>Home</span>
          <span>/</span>
          <span>24 KARAT Ghee</span>
          <span>/</span>
          <span className="text-[#1c1815] font-semibold truncate max-w-xs sm:max-w-md">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Gallery & Badges */}
          <div className="lg:col-span-6">
            <div className="sticky top-24 space-y-4">
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-b from-[#fbf5e9] to-[#fffdfa] rounded-3xl p-6 sm:p-10 border border-[#ebdcc4] flex items-center justify-center overflow-hidden shadow-sm">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]/50 text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-md tracking-wider">
                    {product.badge}
                  </span>
                )}
                
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-[380px] sm:max-h-[460px] w-auto object-cover rounded-2xl drop-shadow-xl transition-all duration-300 hover:scale-102"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-[#fdfaf3] shrink-0 cursor-pointer ${
                        activeImage === img ? 'border-[#b8860b] ring-2 ring-[#b8860b]/20 scale-102' : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}

              {/* Laboratory Tested Guarantee Callout */}
              <div className="bg-[#fbf7ee] rounded-2xl p-4 border border-[#ebdcc4] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1c1815] text-[#f5d77f] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1c1815] block text-xs sm:text-sm">Batch Laboratory Authenticated</span>
                    <span className="text-[#675442] text-[11px]">NABL Certified • 31.8 RM Value • 0% Palm Oil / Vanaspati</span>
                  </div>
                </div>
                <span className="text-[11px] font-black text-[#854d0e] bg-[#fdf2d0] px-2.5 py-1 rounded-full border border-[#f0da9c]">
                  PASS 100%
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Product Info & Purchasing */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
                24 KARAT BILONA DESI GHEE
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl font-black text-[#1c1815] tracking-tight mt-1 leading-tight">
                {product.name}
              </h1>

              {/* Ratings and reviews bar */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-[#d97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#1c1815]">{product.rating}</span>
                <span className="text-xs text-[#786450]">
                  ({reviews.length || product.reviewCount} verified consumer reviews)
                </span>
              </div>

              {/* Perks / Bonus text */}
              {product.perks && (
                <div className="mt-3 inline-flex items-center gap-2 bg-[#fdf6e2] text-[#854d0e] text-xs font-bold px-3.5 py-1.5 rounded-lg border border-[#ebd5a4]">
                  <Sparkles className="w-4 h-4 text-[#b8860b]" />
                  <span>{product.perks}</span>
                </div>
              )}
            </div>

            {/* Pack / Jar Size Selection */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-[#1c1815]">
                Select Jar Size & Edition:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.packs.map((pack) => {
                  const isSelected = selectedPack.id === pack.id;

                  return (
                    <div
                      key={pack.id}
                      onClick={() => setSelectedPack(pack)}
                      className={`relative rounded-2xl p-4 border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-[#b8860b] bg-[#fdfaf3] shadow-md ring-1 ring-[#b8860b]'
                          : 'border-[#ebdcc4] bg-[#fffdfa] hover:border-[#cfba95]'
                      }`}
                    >
                      {pack.tag && (
                        <span className={`absolute -top-2.5 right-2 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          pack.tag === 'DOCTOR RECOMMENDED' || pack.tag === 'AYURVEDIC CHOICE'
                            ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]/40'
                            : pack.tag === 'MOST POPULAR'
                            ? 'bg-[#b45309] text-white'
                            : 'bg-stone-800 text-white'
                        }`}>
                          {pack.tag}
                        </span>
                      )}
                      
                      <div className="font-bold text-sm text-[#1c1815]">{pack.duration}</div>
                      <div className="text-[11px] text-[#786450]">
                        {pack.bottles} {pack.bottles === 1 ? 'Jar' : 'Jars'} ({pack.tablets ? `${pack.tablets}g` : 'Glass Jar'})
                      </div>
                      
                      <div className="mt-2 text-xs font-bold text-[#b45309]">
                        SAVE ₹{pack.discount}
                      </div>

                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xs text-gray-400 line-through">₹{pack.mrp.toLocaleString('en-IN')}</span>
                        <span className="text-sm font-black text-[#1c1815]">₹{pack.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="pt-2 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-[#1c1815] uppercase tracking-wider">Quantity:</span>
                <div className="flex items-center border border-[#d6ccbd] rounded-xl bg-white overflow-hidden shadow-2xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="px-3 py-2 text-[#1c1815] hover:bg-[#fbf7ee] transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 py-1.5 text-sm font-bold text-[#1c1815] min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="px-3 py-2 text-[#1c1815] hover:bg-[#fbf7ee] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  id="pdp-add-to-cart-btn"
                  onClick={() => onAddToCart(product, selectedPack.id, quantity)}
                  className="w-full bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] py-3.5 px-6 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                  <span>ADD TO BAG</span>
                </button>

                <button
                  id="pdp-buy-now-btn"
                  onClick={() => onInstantBuy(product, selectedPack.id, quantity)}
                  className="w-full bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] py-3.5 px-6 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
                >
                  BUY NOW
                </button>
              </div>

              {/* Free consultation banner trigger */}
              <div className="bg-[#fdfaf3] rounded-xl p-3.5 border border-[#ebdcc4] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-[#b8860b]" />
                  <span className="text-xs text-[#1c1815] font-semibold">
                    Questions on daily dosage or Agni balance?
                  </span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[#854d0e] underline hover:text-[#b8860b] cursor-pointer"
                >
                  Free Vaidya Advice
                </button>
              </div>
            </div>

            {/* Description Text */}
            <div className="pt-2 border-t border-[#f0e4d2] text-xs sm:text-sm text-[#5a4837] leading-relaxed space-y-3">
              <p>{product.description}</p>
              <div>
                <h4 className="font-bold text-[#1c1815] mb-1">Why Choose 24 KARAT {product.name}?</h4>
                <p>{product.whyChoose}</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-4 border-t border-[#f0e4d2] space-y-2.5">
              
              {/* Accordion: Benefits */}
              <div className="border border-[#ebdcc4] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('benefits')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#1c1815] hover:bg-[#faf7f2] transition-colors"
                >
                  <span>+ Health & Nutritional Benefits</span>
                  {openAccordions.benefits ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordions.benefits && (
                  <div className="p-4 pt-1 text-xs sm:text-sm text-[#625141] border-t border-[#f0e4d2] space-y-2 bg-[#fdfaf3]">
                    {product.benefitsList.map((ben, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion: Ingredients */}
              <div className="border border-[#ebdcc4] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('ingredients')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#1c1815] hover:bg-[#faf7f2] transition-colors"
                >
                  <span>+ Purity, Composition & Heritage Origin</span>
                  {openAccordions.ingredients ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordions.ingredients && (
                  <div className="p-4 pt-1 text-xs text-[#625141] border-t border-[#f0e4d2] space-y-3 bg-[#fdfaf3]">
                    {product.ingredients.map((ing, i) => (
                      <div key={i} className="border-b border-[#ebdcc4] pb-2 last:border-b-0">
                        <div className="font-bold text-[#1c1815] text-xs sm:text-sm">{ing.name}</div>
                        <div className="text-[11px] text-[#857463] italic">{ing.botanical}</div>
                        <div className="text-xs text-[#625141] mt-0.5">{ing.role}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion: Dosage & How to Use */}
              <div className="border border-[#ebdcc4] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('dosage')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#1c1815] hover:bg-[#faf7f2] transition-colors"
                >
                  <span>+ Daily Ritual & Culinary Usage</span>
                  {openAccordions.dosage ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordions.dosage && (
                  <div className="p-4 pt-1 text-xs sm:text-sm text-[#625141] border-t border-[#f0e4d2] bg-[#fdfaf3] leading-relaxed">
                    <p>{product.dosage}</p>
                  </div>
                )}
              </div>

              {/* Accordion: Symptoms Targeted */}
              <div className="border border-[#ebdcc4] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('symptoms')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#1c1815] hover:bg-[#faf7f2] transition-colors"
                >
                  <span>+ Ayurvedic Doshas & Wellness Targets</span>
                  {openAccordions.symptoms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {openAccordions.symptoms && (
                  <div className="p-4 pt-1 text-xs text-[#625141] border-t border-[#f0e4d2] bg-[#fdfaf3]">
                    <div className="flex flex-wrap gap-2">
                      {product.symptomsTargeted.map((sym, i) => (
                        <span key={i} className="bg-[#f7efe1] text-[#1c1815] px-2.5 py-1 rounded-md font-semibold border border-[#e8dac2]">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Clean Guarantee Badges Row */}
            <div className="pt-4 border-t border-[#f0e4d2] grid grid-cols-5 gap-2 text-center text-[10px] sm:text-[11px] font-bold text-[#854d0e]">
              <div>• Murrah A2</div>
              <div>• Earthen Chulha</div>
              <div>• 0% Palm Oil</div>
              <div>• Heavy Glass Jar</div>
              <div>• 100% Danedar</div>
            </div>

          </div>

        </div>
      </div>

      {/* Vedic Root Cause Feature Strip */}
      <section className="mt-14 py-12 bg-[#fbf7ee] border-y border-[#ebdcc4]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest text-[#b8860b] uppercase mb-1">
            ANCIENT WISDOM • CLINICAL REVERENCE
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#1c1815]">
            The 3 Sacred Pillars of Authentic Buffalo Bilona Ghee
          </h2>
          <p className="text-xs sm:text-sm text-[#675442] mt-2 max-w-xl mx-auto">
            Unlike commercial brands that boil cold industrial cream, 24 KARAT adheres strictly to sacred Charaka Samhita guidelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-left">
            <div className="bg-[#fffdfa] p-5 rounded-2xl border border-[#ebdcc4] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#1c1815] text-[#f5d77f] flex items-center justify-center font-bold text-xs mb-3">1</div>
              <h3 className="font-bold text-sm text-[#1c1815]">Overnight Probiotic Curd Culturing</h3>
              <p className="text-xs text-[#675442] mt-1">Whole milk is fermented with live starters, eliminating lactose and synthesizing healing butyrate.</p>
            </div>
            <div className="bg-[#fffdfa] p-5 rounded-2xl border border-[#ebdcc4] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#1c1815] text-[#f5d77f] flex items-center justify-center font-bold text-xs mb-3">2</div>
              <h3 className="font-bold text-sm text-[#1c1815]">Clay Pots & Low Wood Flame</h3>
              <p className="text-xs text-[#675442] mt-1">Simmered gently in unglazed earthen pots over neem wood flame to preserve delicate vitamins A, D, E, K2.</p>
            </div>
            <div className="bg-[#fffdfa] p-5 rounded-2xl border border-[#ebdcc4] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#1c1815] text-[#f5d77f] flex items-center justify-center font-bold text-xs mb-3">3</div>
              <h3 className="font-bold text-sm text-[#1c1815]">Granular Golden Danedar Texture</h3>
              <p className="text-xs text-[#675442] mt-1">Natural slow cooling allows aromatic ghee crystals to form without artificial homogenizers or stabilizers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section powered by Firestore! */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ebdcc4] shadow-sm">
          
          {/* Reviews Header & Overall Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#f0e4d2]">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1815]">
                Verified Customer Reviews
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center text-[#d97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xl font-extrabold text-[#1c1815]">{product.rating.toFixed(2)}</span>
                <span className="text-xs sm:text-sm text-[#786450]">
                  based on {reviews.length || product.reviewCount} verified purchases
                </span>
              </div>
            </div>

            {/* Write a Review Button */}
            <div>
              <button
                id="write-review-btn"
                onClick={onOpenReviewModal}
                className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#d4af37]" />
                <span>Write a review</span>
              </button>
            </div>
          </div>

          {/* Rating Breakdown Bar Chart */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-[#f0e4d2]">
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-[#1c1815] font-semibold">5 Stars</span>
                <div className="flex-1 h-3 bg-[#f5ecdd] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#d97706] rounded-full transition-all" 
                    style={{ width: `${Math.round((fiveStarCount / totalReviews) * 100)}%` }} 
                  />
                </div>
                <span className="w-10 text-right text-gray-500 font-medium">
                  {Math.round((fiveStarCount / totalReviews) * 100)}%
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-[#1c1815] font-semibold">4 Stars</span>
                <div className="flex-1 h-3 bg-[#f5ecdd] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#d97706] rounded-full transition-all" 
                    style={{ width: `${Math.round((fourStarCount / totalReviews) * 100)}%` }} 
                  />
                </div>
                <span className="w-10 text-right text-gray-500 font-medium">
                  {Math.round((fourStarCount / totalReviews) * 100)}%
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-[#1c1815] font-semibold">3 Stars</span>
                <div className="flex-1 h-3 bg-[#f5ecdd] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#d97706] rounded-full transition-all" 
                    style={{ width: `${Math.round((threeStarCount / totalReviews) * 100)}%` }} 
                  />
                </div>
                <span className="w-10 text-right text-gray-500 font-medium">
                  {Math.round((threeStarCount / totalReviews) * 100)}%
                </span>
              </div>
            </div>

            {/* Filter pills */}
            <div className="md:col-span-6 flex items-center md:justify-end gap-2">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  reviewFilter === 'all' ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]' : 'bg-[#fbf7ee] text-[#1c1815] hover:bg-[#f0e4d2] border border-[#ebdcc4]'
                }`}
              >
                All Reviews ({reviews.length})
              </button>
              <button
                onClick={() => setReviewFilter('5')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  reviewFilter === '5' ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]' : 'bg-[#fbf7ee] text-[#1c1815] hover:bg-[#f0e4d2] border border-[#ebdcc4]'
                }`}
              >
                5 Star Only ({fiveStarCount})
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="divide-y divide-[#f2e7d5]">
            {loadingReviews ? (
              <div className="py-8 text-center text-xs text-gray-500">Loading verified customer reviews...</div>
            ) : filteredReviews.length === 0 ? (
              <div className="py-8 text-center text-xs text-gray-500">No reviews yet for this filter. Be the first to share your experience!</div>
            ) : (
              filteredReviews.map((rev) => (
                <div key={rev.id} className="py-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#1c1815]">{rev.author}</span>
                      {rev.verified && (
                        <span className="bg-[#fdf8e6] text-[#854d0e] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#f5dfb8]">
                          ✓ Verified Buyer
                        </span>
                      )}
                      {rev.userLocation && (
                        <span className="text-[11px] text-[#806f5e]">({rev.userLocation})</span>
                      )}
                    </div>
                    <span className="text-xs text-[#806f5e]">{rev.date}</span>
                  </div>

                  <div className="flex items-center text-[#d97706]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {rev.title && (
                    <h4 className="font-bold text-xs sm:text-sm text-[#1c1815]">{rev.title}</h4>
                  )}

                  <p className="text-xs sm:text-sm text-[#5a4837] leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8" id="faqs-section">
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1815] text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#ebdcc4] overflow-hidden shadow-2xs">
              <button
                onClick={() => toggleAccordion(`faq-${i}`)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#1c1815] flex items-center justify-between hover:bg-[#fdfaf3] transition-colors"
              >
                <span>{faq.q}</span>
                {openAccordions[`faq-${i}`] ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
              </button>
              {openAccordions[`faq-${i}`] && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-[#625141] border-t border-[#f0e4d2] bg-[#fdfaf3] leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Quick Add Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#1c1815]/95 backdrop-blur-md border-t border-[#d4af37]/40 p-3 sm:p-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg bg-[#2a221b] p-0.5 shrink-0 border border-[#d4af37]/40" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-white truncate">{product.name}</p>
              <p className="text-xs text-[#f5d77f] font-bold">
                ₹{selectedPack.price.toLocaleString('en-IN')} <span className="text-[#a89886] font-normal">({selectedPack.duration})</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onAddToCart(product, selectedPack.id, quantity)}
              className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] px-5 sm:px-7 py-2.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
