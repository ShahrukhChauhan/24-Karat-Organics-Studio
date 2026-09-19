import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Star,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Award,
  Filter,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Package,
  Clock,
  Search,
  Check
} from 'lucide-react';
import { Product, ProductPack } from '../types';

interface ShopPageProps {
  products: Product[];
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product, pack: ProductPack, quantity: number) => void;
  onOpenQuiz: () => void;
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onOpenQuiz,
  onOpenConsultation,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedNeed, setSelectedNeed] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'bestseller' | 'price-asc' | 'price-desc' | 'rating'>('bestseller');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Track selected pack per product
  const [selectedPacks, setSelectedPacks] = useState<{ [productId: string]: ProductPack }>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Initialize default pack for products if not selected
  const getSelectedPack = (product: Product): ProductPack => {
    if (selectedPacks[product.id]) {
      return selectedPacks[product.id];
    }
    // Default to the 1L or middle pack, or first pack
    const defaultPack = product.packs.find(p => p.tag?.includes('POPULAR') || p.tag?.includes('BILONA')) || product.packs[0];
    return defaultPack;
  };

  const handlePackChange = (productId: string, pack: ProductPack) => {
    setSelectedPacks(prev => ({
      ...prev,
      [productId]: pack,
    }));
  };

  const handleAddToCartClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const pack = getSelectedPack(product);
    onAddToCart(product, pack, 1);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 2200);
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        // Category filter
        if (selectedCategory !== 'all') {
          if (selectedCategory === 'bilona' && !product.id.includes('bilona')) return false;
          if (selectedCategory === 'gold' && !product.id.includes('swarna')) return false;
          if (selectedCategory === 'herbal' && !product.id.includes('ghrita') && !product.id.includes('medhya')) return false;
          if (selectedCategory === 'hamper' && !product.id.includes('gift')) return false;
        }

        // Health need filter
        if (selectedNeed !== 'all') {
          const matchNeed = product.symptomsTargeted.some(s =>
            s.toLowerCase().includes(selectedNeed.toLowerCase())
          );
          if (!matchNeed) return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchTitle = product.name.toLowerCase().includes(query);
          const matchSub = product.subtitle.toLowerCase().includes(query);
          const matchBenefits = product.benefitsSummary.toLowerCase().includes(query);
          if (!matchTitle && !matchSub && !matchBenefits) return false;
        }

        return true;
      })
      .sort((a, b) => {
        const packA = getSelectedPack(a);
        const packB = getSelectedPack(b);

        if (sortBy === 'price-asc') return packA.price - packB.price;
        if (sortBy === 'price-desc') return packB.price - packA.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default bestseller sort
        return b.reviewCount - a.reviewCount;
      });
  }, [products, selectedCategory, selectedNeed, searchQuery, sortBy, selectedPacks]);

  return (
    <div id="shop-page" className="min-h-screen bg-[#fcfaf5] text-[#1c1815] pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#fffdfa] border-b border-[#ece2cf] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs text-[#7d6954]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#b8860b] transition-colors cursor-pointer font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#b09e8b]" />
            <span className="text-[#1c1815] font-bold">Shop All Bilona Editions</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fbf7ed] to-[#fcfaf5] py-12 md:py-16 border-b border-[#ece2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf5df] border border-[#d4af37]/40 text-[#854d0e] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>THE 24 KARAT GHEE TREASURY</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight leading-tight">
            Handcrafted A2 Buffalo Bilona Ghee
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#854d0e] mt-3">
            "Slow wood-fired on Chulha in unglazed clay pots. 32 Litres of Whole Curd per 1 Kg."
          </p>
          <p className="text-xs sm:text-sm text-[#786450] mt-3 max-w-2xl mx-auto leading-relaxed">
            Free from industrial cream separators, heating coils, palm oil, and chemical stabilizers. Every jar is delivered in heavy shatterproof dark amber glass with an NABL purity batch certificate.
          </p>

          {/* Quick Perks Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#ebdcc4] text-xs">
            <div className="flex items-center justify-center gap-2 text-[#5e4b39]">
              <ShieldCheck className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span className="font-semibold">31.8 RM Lab Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#5e4b39]">
              <Flame className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span className="font-semibold">Clay Pot Firewood Churn</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#5e4b39]">
              <Package className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span className="font-semibold">Free Solid Brass Spoon</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#5e4b39]">
              <Award className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span className="font-semibold">100% Transit Safe Glass</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Controls Toolbar: Search, Filters & Sorting */}
        <div className="bg-[#fffdfa] rounded-2xl p-4 sm:p-6 border border-[#ebdcc4] shadow-xs mb-8 space-y-4">
          
          {/* Top Bar: Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#9c8975] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Bilona, Swarna, Medhya, Shatavari..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#fcfaf5] border border-[#d6c7ab] rounded-full focus:outline-none focus:border-[#b8860b] text-[#1c1815] placeholder-[#9c8975]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8a7a69] hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
              <span className="text-xs text-[#786450] font-medium">
                Showing <strong className="text-[#1c1815]">{filteredProducts.length}</strong> creations
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#786450] font-semibold hidden md:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="text-xs font-semibold bg-[#fcfaf5] border border-[#d6c7ab] rounded-xl px-3 py-2 text-[#1c1815] focus:outline-none focus:border-[#b8860b] cursor-pointer"
                >
                  <option value="bestseller">Best Sellers First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categories Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-[#f0e4d0] pt-4 no-scrollbar">
            <span className="text-xs font-bold text-[#786450] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#b8860b]" /> Collection:
            </span>
            {[
              { id: 'all', label: 'All Editions' },
              { id: 'bilona', label: 'Daily Kitchen Bilona' },
              { id: 'gold', label: '24K Swarna Reserve' },
              { id: 'herbal', label: 'Ayurvedic Ghritas' },
              { id: 'hamper', label: 'Festive Gift Hampers' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] shadow-xs'
                    : 'bg-[#f8f3e9] text-[#6b5845] hover:bg-[#ebdcc4] border border-[#e2d5be]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Health Needs Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-xs font-bold text-[#786450] uppercase tracking-wider shrink-0 mr-1">
              Target Need:
            </span>
            {[
              { id: 'all', label: 'All Needs' },
              { id: 'Acidity', label: 'Gut & Acidity Relief' },
              { id: 'Joint', label: 'Joint & Bone Density' },
              { id: 'Memory', label: 'Brain & Sleep (Medhya)' },
              { id: 'Hormon', label: 'Women & Postpartum' },
              { id: 'Digital', label: 'Eye Strain & Cleanse' },
            ].map(need => (
              <button
                key={need.id}
                onClick={() => setSelectedNeed(need.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedNeed === need.id
                    ? 'bg-[#854d0e] text-white font-bold'
                    : 'bg-[#f4ebd9] text-[#63513f] hover:bg-[#e8dcbf]'
                }`}
              >
                {need.label}
              </button>
            ))}

            {(selectedCategory !== 'all' || selectedNeed !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedNeed('all');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-[#854d0e] underline hover:text-black ml-2 whitespace-nowrap cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#fffdfa] rounded-3xl p-12 border border-[#ebdcc4] text-center my-12">
            <Package className="w-12 h-12 text-[#b8860b] mx-auto mb-4 opacity-60" />
            <h3 className="font-serif text-2xl font-bold text-[#1c1815]">No matching ghee creations found</h3>
            <p className="text-xs sm:text-sm text-[#786450] mt-2 max-w-md mx-auto">
              Try adjusting your category filter or search query to browse our pure Murrah buffalo bilona harvests.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedNeed('all'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2.5 bg-[#b8860b] text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#996f08] transition-all cursor-pointer"
            >
              Show All Editions
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const activePack = getSelectedPack(product);
              const isJustAdded = addedNotice === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product.id)}
                  className="group bg-[#fffdfa] rounded-3xl border border-[#e4d6bf] hover:border-[#d4af37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
                >
                  {/* Top Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#1c1815] text-[#f5d77f] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#d4af37]/60 shadow-md">
                      {product.badge}
                    </div>
                  )}

                  {/* Product Image Stage */}
                  <div className="relative aspect-4/3 w-full bg-[#fbf6ec] overflow-hidden p-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#1c1815] border border-[#ebdcc4] flex items-center gap-1 shadow-2xs">
                      <Star className="w-3.5 h-3.5 text-[#b8860b] fill-[#b8860b]" />
                      <span>{product.rating}</span>
                      <span className="text-[#857361] font-normal">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1815] group-hover:text-[#854d0e] transition-colors leading-snug line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#786450] mt-2 line-clamp-2 leading-relaxed">
                        {product.subtitle}
                      </p>

                      {/* Benefits Bullets (First 2) */}
                      <div className="mt-4 space-y-1.5">
                        {product.benefitsList.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#4a3b2c]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pack Size Selection Selector */}
                    <div className="mt-6 pt-4 border-t border-[#f0e4d0]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#786450]">
                          Select Size / Format:
                        </span>
                        {activePack.tag && (
                          <span className="text-[10px] font-black text-[#854d0e] bg-[#fdf5df] px-2 py-0.5 rounded border border-[#d4af37]/30">
                            {activePack.tag}
                          </span>
                        )}
                      </div>

                      {/* Pack Options Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-4">
                        {product.packs.map((pack) => {
                          const isSelected = activePack.id === pack.id;
                          return (
                            <button
                              key={pack.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePackChange(product.id, pack);
                              }}
                              className={`p-1.5 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#fdf6e2] border-[#b8860b] text-[#1c1815] shadow-xs'
                                  : 'bg-[#fbf7ed] border-[#e2d5be] text-[#5e4b39] hover:border-[#cbb99d]'
                              }`}
                            >
                              <div className="text-[11px] font-bold truncate">{pack.duration.split(' ')[0]} {pack.duration.split(' ')[1]}</div>
                              <div className="text-[10px] font-black text-[#854d0e]">₹{pack.price}</div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Pricing & Add to Cart Button */}
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-serif text-2xl font-black text-[#1c1815]">
                              ₹{activePack.price}
                            </span>
                            <span className="text-xs text-[#9c8975] line-through">
                              ₹{activePack.mrp}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            SAVE ₹{activePack.discount}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handleAddToCartClick(e, product)}
                          className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md ${
                            isJustAdded
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37]'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Ayurvedic Vaidya Consultation Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-[#1c1815] via-[#2a221a] to-[#1c1815] text-[#fbf7ee] rounded-3xl p-8 sm:p-12 border border-[#d4af37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#d4af37] flex items-center justify-center md:justify-start gap-1.5">
              <Stethoscope className="w-4 h-4" />
              CONFUSED ABOUT DOSHAS & GHEE SELECTION?
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black text-white mt-2">
              Get Free Consultation with an Ayurvedic Vaidya
            </h3>
            <p className="text-xs sm:text-sm text-[#cbb99d] mt-3 leading-relaxed">
              Unsure if you need traditional Bilona ghee for your joints, Swarna Bhasma for deep cellular vitality, or Medhya Ghrita for calm restorative sleep? Our certified Ayurvedic doctors evaluate your digestive Agni and Prakriti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <button
              onClick={onOpenQuiz}
              className="bg-[#fdf6e2] hover:bg-white text-[#1c1815] border border-[#d4af37] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#b8860b]" />
              <span>Take Dosha Quiz</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-[#b8860b] hover:bg-[#996f08] text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Book Free Call</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
