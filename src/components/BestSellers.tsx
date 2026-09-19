import React from 'react';
import { Star, ShoppingBag, Eye, ShieldCheck, Gift, Award } from 'lucide-react';
import { Product } from '../types';

interface BestSellersProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, packId?: string) => void;
  selectedCategory: string;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  selectedCategory,
}) => {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory || (selectedCategory === 'combo' && p.category === 'combo'));

  return (
    <section id="best-sellers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-1.5">
            24 KARAT ROYAL COLLECTION
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
            Best Sellers & Reserves
          </h2>
          <p className="text-sm sm:text-base text-[#675442] mt-2">
            100% Pure Vedic slow-churned Murrah buffalo A2 ghee. Danedar texture, rich nutty aroma, and lab certified 0% palm oil.
          </p>
          <div className="w-16 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const defaultPack = product.packs[0];

            return (
              <div
                key={product.id}
                className="group relative bg-[#fffdfa] rounded-2xl border border-[#ebdcc4] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]/40 text-[10.5px] font-black uppercase px-3 py-1 rounded-full shadow-sm tracking-wider flex items-center gap-1">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image Area with warm golden backdrop */}
                <div
                  onClick={() => onSelectProduct(product.id)}
                  className="relative h-64 sm:h-72 bg-gradient-to-b from-[#fbf5e8] to-[#fffdfa] p-6 flex items-center justify-center cursor-pointer overflow-hidden border-b border-[#f2e6d2]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#1c1815]/90 text-[#f5d77f] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-[#d4af37]/50 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3
                      onClick={() => onSelectProduct(product.id)}
                      className="font-serif text-lg sm:text-xl font-bold text-[#1c1815] hover:text-[#b8860b] cursor-pointer line-clamp-2 transition-colors leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Perk / Bonus Text */}
                    {product.perks && (
                      <div className="mt-2.5 flex items-start gap-1.5 text-xs text-[#854d0e] font-bold bg-[#fcf6e8] p-2 rounded-lg border border-[#edd5a4]">
                        <Award className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{product.perks}</span>
                      </div>
                    )}

                    {/* Benefit summary */}
                    <p className="mt-2 text-xs text-[#625141] line-clamp-2 font-normal leading-relaxed">
                      {product.benefitsSummary}
                    </p>

                    {/* Ratings */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex items-center text-[#d97706]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#1c1815]">
                        {product.rating}
                      </span>
                      <span className="text-xs text-[#827160]">
                        ({product.reviewCount.toLocaleString('en-IN')}+ verified reviews)
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mt-4 pt-3 border-t border-[#ede0cc] flex items-baseline gap-2 flex-wrap">
                      <span className="text-xs text-gray-500 line-through">
                        MRP: ₹{defaultPack ? defaultPack.mrp.toLocaleString('en-IN') : product.mrp.toLocaleString('en-IN')}
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-[#1c1815]">
                        ₹{defaultPack ? defaultPack.price.toLocaleString('en-IN') : product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-[#b45309] bg-[#fef3c7] px-2 py-0.5 rounded-md border border-[#fde68a]">
                        Save ₹{defaultPack ? defaultPack.discount.toLocaleString('en-IN') : (product.mrp - product.price).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="mt-5 grid grid-cols-1 gap-2">
                    <button
                      id={`add-to-cart-${product.id}`}
                      onClick={() => onAddToCart(product, defaultPack?.id)}
                      className="w-full bg-[#1c1815] hover:bg-[#332b23] text-[#f5d77f] hover:text-white border border-[#d4af37] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                      <span>ADD TO BAG</span>
                    </button>
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="w-full text-[#854d0e] hover:bg-[#fbf7ee] py-2 px-3 rounded-lg text-xs font-bold tracking-wide transition-colors cursor-pointer text-center"
                    >
                      View Packs, Lab Analysis & Dosage →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
