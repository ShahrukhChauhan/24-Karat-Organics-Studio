import React from 'react';
import { Sparkles, ShieldCheck, Flame, Award, CheckCircle2, ArrowRight, X } from 'lucide-react';

interface WhyKaratProps {
  onShopNow: () => void;
}

export const WhyKarat: React.FC<WhyKaratProps> = ({ onShopNow }) => {
  return (
    <section id="why-24karat" className="py-16 md:py-24 bg-[#fbf7ee] border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-2">
            THE 24 KARAT COMMITMENT
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight leading-tight">
            Why 24 KARAT Buffalo Bilona Ghee?
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#854d0e] mt-2 font-medium">
            "The Gold Standard of Purity — As Pure as Nature Intended"
          </p>
          <div className="w-16 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full" />
        </div>

        {/* What We Do Differently 3 Pillars */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#1c1815] mb-10">
            What Sets 24 KARAT Apart
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e6d8be] shadow-xs text-center flex flex-col items-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-6 shadow-xs">
                <Award className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1815]">
                100% Curd-Churned (Bilona)
              </h4>
              <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
                We never touch industrial cream separators or high-speed centrifuges. Our ghee is crafted exclusively from cultured whole Murrah buffalo A2 curd using a traditional wooden bilona churner.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e6d8be] shadow-xs text-center flex flex-col items-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-6 shadow-xs">
                <Flame className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1815]">
                Slow Chulha Fire in Clay Pots
              </h4>
              <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
                Makkhan is clarified at low temperatures over cow-dung cakes and neem wood fires in thick earthen pots. This gentle caramelization yields iconic golden danedar grains without nutrient breakdown.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e6d8be] shadow-xs text-center flex flex-col items-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 text-[#b8860b] flex items-center justify-center mb-6 shadow-xs">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1815]">
                31.8 RM Value Lab Certified
              </h4>
              <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
                Every batch is independently certified by NABL laboratories. We verify 0% palm oil, 0% adulterants, zero artificial yellow dyes, and supreme volatile fatty acid purity with scan-ready QR codes on every jar.
              </p>
            </div>

          </div>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="bg-[#fffdfa] rounded-3xl p-6 sm:p-10 border border-[#e6d8be] shadow-md overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
              TRANSPARENT COMPARISON
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1815] mt-1">
              24 KARAT Bilona vs Regular Commercial Ghee
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#ebdcc4] text-xs font-bold uppercase tracking-wider text-[#6b5845]">
                  <th className="py-4 px-4">Attribute</th>
                  <th className="py-4 px-4 text-[#854d0e] font-black bg-[#fdf6e2]/60 rounded-t-xl">
                    24 KARAT Buffalo Bilona Ghee
                  </th>
                  <th className="py-4 px-4 text-gray-500">
                    Commercial Cream Ghee
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0e4d0]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Source Material</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    Cultured Murrah A2 Buffalo Curd (Dahi)
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Machine-separated raw industrial cream (Malai)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Churning Method</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    Two-way traditional wooden Bilona
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    High-speed motorized metal centrifuge
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Cooking Heat & Vessel</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    Slow Chulha fire in unglazed clay pots
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Pressurized stainless steel industrial steam boilers
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Milk Required per 1 Kg</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    30 to 35 Litres of whole A2 milk
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    ~10 to 12 Litres (uses chemically bleached fats)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Gut Butyric Acid</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    Rich & bio-active (heals gut barrier & acid reflux)
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Degraded by intense industrial flash pasteurization
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Texture & Aroma</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-semibold text-[#1c1815]">
                    Naturally crystalline Danedar with nutty aroma
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Flat, waxy, or artificially flavored with chemicals
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onShopNow}
              className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Taste the 24 KARAT Difference</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
