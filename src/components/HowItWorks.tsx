import React from 'react';
import { ArrowRight, Sparkles, Flame, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onShopNow: () => void;
  onOpenQuiz: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onShopNow, onOpenQuiz }) => {
  return (
    <section id="bilona-process" className="py-16 md:py-24 bg-[#fbf7ee] border-b border-[#e9decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-2">
            The Ancient 5-Step Vedic Bilona Method
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
            How 24 KARAT Buffalo Ghee is Handcrafted
          </h2>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#675442] mt-4 font-medium">
            Unlike modern factories that boil machine-separated raw cream, 24 KARAT follows the rigorous 5,000-year-old Vedic curd-churning methodology.
          </p>
        </div>

        {/* Feature Container with warm ivory styling */}
        <div className="bg-[#fffdfa] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-[#e8dcc4] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/5 border border-[#dfceb0]">
                <img
                  src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Clay Pot Ghee Preparation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1c1815]/90 backdrop-blur-md rounded-xl p-3.5 text-xs border border-[#d4af37]/40 shadow-xs text-white">
                  <p className="font-bold text-[#f5d77f] flex items-center gap-1.5 text-sm">
                    <Flame className="w-4 h-4 text-[#d4af37]" />
                    Slow Wood-Fired Chulha
                  </p>
                  <p className="text-[#e2d5be] text-[11px] mt-0.5">
                    32 Litres of Murrah A2 Buffalo Milk for 1 Single Kilogram of Ghee
                  </p>
                </div>
              </div>
            </div>

            {/* Right Steps Column */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1815] border border-[#d4af37] text-[#f5d77f] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                  1
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1c1815]">
                    • Grass-Fed Murrah Buffalo A2 Milk
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625141] mt-0.5 leading-relaxed">
                    Sourced from healthy, cruelty-free, free-grazing Murrah buffaloes raised on nutrient-rich organic green fodder.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1815] border border-[#d4af37] text-[#f5d77f] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                  2
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1c1815]">
                    • Boiling in Clay Pots (Mitti Ke Bartan)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625141] mt-0.5 leading-relaxed">
                    Simmered over low wood-fire in porous earthen clay pots to retain natural alkaline minerals and eliminate heat-degradation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1815] border border-[#d4af37] text-[#f5d77f] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                  3
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1c1815]">
                    • Overnight Probiotic Curd Fermentation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625141] mt-0.5 leading-relaxed">
                    Cooled milk is inoculated with traditional Vedic starter cultures to transform lactose into gut-friendly probiotic curd.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1815] border border-[#d4af37] text-[#f5d77f] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                  4
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1c1815]">
                    • Two-Way Wooden Bilona Churning
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625141] mt-0.5 leading-relaxed">
                    Hand-churned clockwise & anti-clockwise with traditional wooden churner (Valona) to separate pure raw white makkhan.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1815] border border-[#d4af37] text-[#f5d77f] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                  5
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1c1815]">
                    • Clarified to Golden Danedar Liquid
                  </h3>
                  <p className="text-xs sm:text-sm text-[#625141] mt-0.5 leading-relaxed">
                    Makkhan is gently clarified over cow dung & neem chulha flame until golden granular ghee crystals separate and cool naturally.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onShopNow}
                  className="bg-[#1c1815] hover:bg-[#332b23] text-[#f5d77f] border border-[#d4af37] px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <span>SHOP 24 KARAT GHEE</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>
                <button
                  onClick={onOpenQuiz}
                  className="border border-[#b8860b] text-[#854d0e] hover:bg-[#b8860b] hover:text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 bg-[#fdfaf3]"
                >
                  <Sparkles className="w-4 h-4 text-[#b8860b]" />
                  <span>Find My Ghee Match</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
