import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  Heart,
  Droplets,
  RotateCw,
  Utensils,
  BookOpen
} from 'lucide-react';

interface BilonaMethodPageProps {
  onShopNow: () => void;
  onNavigateHome: () => void;
}

export const BilonaMethodPage: React.FC<BilonaMethodPageProps> = ({
  onShopNow,
  onNavigateHome,
}) => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      step: 1,
      title: 'Ahimsa Milking of Free-Grazing Murrah Buffaloes',
      subtitle: 'The Mother & Calf Blessing — Calves Drink First',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=900&q=80',
      description:
        'Purity begins with reverence. Our indigenous Murrah buffaloes graze freely on organic pastures of lush green clover, mustard greens, and medicinal herbs. Milking is performed strictly in accordance with Ahimsa principles: the calf is allowed to drink its full share of mother\'s milk first. We never administer synthetic hormones, oxytocin, or industrial feed pellets.',
      keyTakeaway: 'Natural A2 protein beta-casein, exceptionally high natural calcium and bio-available lipids.',
      timeframe: 'Morning Sunrise & Dusk',
      vessel: 'Hand-tinned brass cans (Kansi)'
    },
    {
      step: 2,
      title: 'Slow Clay Pot Boiling & Culturing into Whole Curd (Dahi)',
      subtitle: '14-Hour Overnight Fermentation with Indigenous Starter',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      description:
        'Fresh raw milk is boiled slowly in thick, unglazed terracotta earthen pots (Mitti ke Handi) over a gentle cow-dung fire. The porous clay retains natural heat, evenly distributing warmth without scorching the delicate milk enzymes. Once cooled to lukewarm temperature, an indigenous probiotic curd starter (Jamun) is added. The pot is covered with cotton cloth and rested overnight for 14 hours until thick, aromatic, probiotic curd forms.',
      keyTakeaway: 'Transforms dairy sugars into digestible lactic acid and generates living probiotic enzymes.',
      timeframe: 'Overnight (14-16 Hours)',
      vessel: 'Unglazed Haryana Terracotta Handi'
    },
    {
      step: 3,
      title: 'Traditional Two-Way Wooden Bilona Churning',
      subtitle: 'Clockwise & Counter-Clockwise Churning at Brahma Muhurta',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
      description:
        'At Brahma Muhurta (pre-dawn hours between 4:00 AM and 5:30 AM), the cultured dahi is churned using a traditional fluted wooden bilona (Mathani) operated by two-way jute ropes. Unlike modern motorized centrifuges that generate shearing friction and heat, this gentle rhythmic bidirectional rotation separates pure white cultured butterfat (Makkhan) from the buttermilk (Chhaas).',
      keyTakeaway: 'The cultured butter holds all fat-soluble vitamins (A, D, E, K2) intact without lipid rupture.',
      timeframe: '90-120 Minutes of Hand-Churning',
      vessel: 'Carved Neem/Sheesham Wooden Mathani'
    },
    {
      step: 4,
      title: 'Gentle Wood-Fired Clarification on Chulha',
      subtitle: 'Low-Temperature Caramelization over Neem Wood & Cow-Dung',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
      description:
        'The freshly harvested cultured makkhan is placed into an unglazed clay cauldron placed atop an earthen Chulha. Mild, steady heat is maintained using sun-dried cow-dung cakes and neem wood embers. As the butter gently simmers, all moisture evaporates cleanly, and milk solids caramelize at the bottom without charring, releasing the iconic nutty fragrance of pure liquid gold.',
      keyTakeaway: 'Concentrates gut-healing butyric acid (short-chain fatty acids) and creates a smoke point of 250°C.',
      timeframe: '4 to 6 Hours of Slow Simmering',
      vessel: 'Open Terracotta Mitti Karahi'
    },
    {
      step: 5,
      title: 'Muslin Cloth Straining & Danedar Crystalline Cooling',
      subtitle: 'Slow Resting at Room Temperature to Form Golden Granules',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80',
      description:
        'The molten golden ghee is filtered through multiple layers of unbleached organic muslin cloth to separate every trace of caramelized curd solids. It is poured into lead-free, heavy dark amber glass jars and allowed to cool undisturbed at ambient room temperature. This slow natural cooling triggers the authentic crystallization of fat globules into the celebrated granular "Danedar" texture.',
      keyTakeaway: 'Zero moisture (<0.15%), 100% shelf-stable for 12+ months naturally without preservatives.',
      timeframe: '8 Hours Natural Cooling & Packing',
      vessel: 'Lead-Free UV-Safe Amber Glass Jars'
    }
  ];

  return (
    <div id="bilona-method-page" className="min-h-screen bg-[#fcfaf5] text-[#1c1815] pb-24">
      
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
            <span className="text-[#1c1815] font-bold">The Sacred 5-Step Bilona Method</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fbf7ed] to-[#fcfaf5] py-16 md:py-24 border-b border-[#ece2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf5df] border border-[#d4af37]/40 text-[#854d0e] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>THE ANCIENT VEDIC BILONA SCIENCE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#1c1815] tracking-tight leading-tight">
            How True Bilona Ghee is Born
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#854d0e] mt-4 font-medium">
            "Snehanam Sarvam Param" — Ghee is the Supreme Unctuous Elixir of Life
          </p>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto mt-6 rounded-full" />
          <p className="text-xs sm:text-sm text-[#786450] mt-6 leading-relaxed max-w-2xl mx-auto">
            In ancient Ayurveda, clarified butter was never extracted from boiled raw milk cream (malai). Charaka Samhita prescribes that true Ghrita must always be churned from probiotic curd (Dahi). Discover why this sacred 5-stage alchemy takes 32 litres of milk to yield a single kilogram of 24 KARAT Ghee.
          </p>
        </div>
      </section>

      {/* Interactive 5 Stages Step Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
            STEP-BY-STEP REVELATION
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1c1815] mt-1">
            The 5 Sacred Stages of Vedic Alchemy
          </h2>
          <p className="text-xs sm:text-sm text-[#786450] mt-2">
            Click on any stage below to inspect the equipment, duration, and biological transformation.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 no-scrollbar mb-10">
          {stages.map((stage) => {
            const isActive = activeStage === stage.step;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(stage.step)}
                className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] shadow-lg scale-105'
                    : 'bg-[#fffdfa] text-[#6b5845] hover:bg-[#fbf7ed] border border-[#ebdcc4]'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    isActive ? 'bg-[#d4af37] text-[#1c1815]' : 'bg-[#ebdcc4] text-[#4a3b2c]'
                  }`}
                >
                  {stage.step}
                </span>
                <span className="hidden sm:inline">Stage {stage.step}:</span>
                <span>{stage.title.split(' ')[0]} {stage.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Detail Display */}
        {(() => {
          const current = stages.find(s => s.step === activeStage) || stages[0];
          return (
            <div className="bg-[#fffdfa] rounded-3xl border border-[#e4d6bf] p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 bg-[#fbf6ec] border border-[#ebdcc4] relative">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1c1815]/90 backdrop-blur-xs text-[#f5d77f] border border-[#d4af37]/60 text-xs font-black px-3.5 py-1 rounded-full">
                  STAGE {current.step} OF 5
                </div>
              </div>

              {/* Text Description & Scientific Insights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#854d0e]">
                    {current.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1815] mt-1">
                    {current.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5e4b39] leading-relaxed">
                  {current.description}
                </p>

                {/* Technical Parameters Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#f0e4d0]">
                  <div className="bg-[#fbf7ee] p-3.5 rounded-xl border border-[#ebdcc4]">
                    <div className="text-[10px] uppercase font-bold text-[#857361]">Traditional Vessel</div>
                    <div className="text-xs font-bold text-[#1c1815] mt-1">{current.vessel}</div>
                  </div>
                  <div className="bg-[#fbf7ee] p-3.5 rounded-xl border border-[#ebdcc4]">
                    <div className="text-[10px] uppercase font-bold text-[#857361]">Duration & Time</div>
                    <div className="text-xs font-bold text-[#1c1815] mt-1">{current.timeframe}</div>
                  </div>
                  <div className="bg-[#fbf7ee] p-3.5 rounded-xl border border-[#ebdcc4]">
                    <div className="text-[10px] uppercase font-bold text-[#857361]">Biochemical Outcome</div>
                    <div className="text-xs font-bold text-[#854d0e] mt-1 line-clamp-1">{current.keyTakeaway}</div>
                  </div>
                </div>

                {/* Next Stage Navigation */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#857361]">
                    Vedic Standard: Charaka Samhita Sutrasthana (27/231)
                  </span>
                  {current.step < 5 ? (
                    <button
                      onClick={() => setActiveStage(current.step + 1)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#854d0e] hover:text-black cursor-pointer"
                    >
                      <span>Proceed to Stage {current.step + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={onShopNow}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b8860b] hover:text-black cursor-pointer"
                    >
                      <span>Taste This Golden Harvest</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          );
        })()}

      </section>

      {/* The 32 Litre Math Section */}
      <section className="bg-[#1c1815] text-[#fbf7ee] py-16 md:py-20 border-y border-[#3d3226]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#d4af37]">
                THE HONEST MATH OF PURITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-white leading-tight">
                Why Does 1 Kg of Bilona Ghee Cost More Than Supermarket Ghee?
              </h2>
              <p className="text-xs sm:text-sm text-[#d1c2ab] leading-relaxed">
                Supermarket ghee manufacturers use electric centrifuges to slice off the raw cream from 10 to 12 litres of mixed milk, boiling the cream at high heat with artificial aroma agents.
              </p>
              <p className="text-xs sm:text-sm text-[#d1c2ab] leading-relaxed">
                In authentic Vedic Bilona, we ferment the whole milk into curd first. It takes between <strong className="text-[#f5d77f]">30 to 35 litres of whole Murrah buffalo milk</strong> to make just 1 kilogram of 24 KARAT Bilona Ghee. You are not buying diluted fat; you are holding the distilled nutritional essence of 32 litres of living nature.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#2a221b] p-4 rounded-2xl border border-[#4d3e2f]">
                  <div className="font-serif text-3xl font-black text-[#d4af37]">32 Litres</div>
                  <div className="text-xs text-[#b8a792] mt-1">Whole A2 Murrah milk required per 1 Kg jar</div>
                </div>
                <div className="bg-[#2a221b] p-4 rounded-2xl border border-[#4d3e2f]">
                  <div className="font-serif text-3xl font-black text-[#d4af37]">0% Palm Oil</div>
                  <div className="text-xs text-[#b8a792] mt-1">NABL gas-chromatography certified</div>
                </div>
              </div>
            </div>

            {/* Visual Math Card */}
            <div className="bg-[#261f19] rounded-3xl p-8 border border-[#d4af37]/30 space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#f5d77f]">
                The Vedic Bilona Transformation Equation:
              </h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#3d3226]">
                  <span className="text-[#cbb99d]">Step 1: Grass-fed Murrah A2 Milk</span>
                  <span className="font-bold text-white">32 to 35 Litres</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#3d3226]">
                  <span className="text-[#cbb99d]">Step 2: Cultured Probiotic Dahi</span>
                  <span className="font-bold text-white">~33 Kilograms Curd</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#3d3226]">
                  <span className="text-[#cbb99d]">Step 3: Two-Way Wooden Bilona Makkhan</span>
                  <span className="font-bold text-white">~1.4 Kilograms White Butter</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#3d3226]">
                  <span className="text-[#cbb99d]">Step 4: Chulha Clay-Pot Clarification</span>
                  <span className="font-bold text-white">Evaporates all moisture</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-serif text-base font-bold text-[#f5d77f]">Final 24 KARAT Danedar Ghee</span>
                  <span className="font-serif text-xl font-black text-[#d4af37]">Exact 1.0 Kilogram</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onShopNow}
                  className="w-full py-3.5 rounded-full bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                >
                  Shop the Authentic Harvest
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Classical Ayurveda Shloka Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-[#fffdfa] rounded-3xl p-8 sm:p-12 border border-[#ebdcc4] shadow-sm">
          <BookOpen className="w-8 h-8 text-[#b8860b] mx-auto mb-4" />
          <p className="font-serif text-lg sm:text-xl text-[#854d0e] font-semibold italic">
            "सर्पिः सर्वस्नेहानामुत्तमं शीतवीर्यं मधुररसविपाकं..."
          </p>
          <p className="font-serif text-sm text-[#6b5845] mt-2 italic">
            — चरकसंहिता, सूत्रस्थानम् (Charaka Samhita Sutrasthana)
          </p>
          <div className="w-12 h-0.5 bg-[#b8860b] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-[#5e4b39] leading-relaxed max-w-xl mx-auto">
            "Ghee is the foremost of all unctuous substances. It has cooling energy (Sheeta Veerya), a sweet post-digestive taste (Madhura Vipaka), pacifies Vata and Pitta, nourishes Ojas, kindles the digestive fire (Agni), and enhances intellect, memory, and longevity."
          </p>
        </div>
      </section>

    </div>
  );
};
