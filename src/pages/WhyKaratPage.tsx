import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Flame,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Heart,
  Droplet,
  Package,
  Feather,
  Sun,
  X
} from 'lucide-react';

interface WhyKaratPageProps {
  onShopNow: () => void;
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

export const WhyKaratPage: React.FC<WhyKaratPageProps> = ({
  onShopNow,
  onNavigateHome,
  onOpenConsultation,
}) => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-[#b8860b]" />,
      title: '1. Indigenous Murrah A2 Buffalo Breed',
      subtitle: 'Pure A2 Beta-Casein Without Genetic Modification',
      desc: 'Our indigenous Murrah buffaloes are celebrated for yielding whole milk rich in A2 beta-casein, exceptionally high natural calcium, and bio-available lipids that are gentle on human digestive Agni.'
    },
    {
      icon: <RotateCwIcon className="w-6 h-6 text-[#b8860b]" />,
      title: '2. 100% Curd Churned (True Bilona)',
      subtitle: 'Never Raw Cream or Motorized Centrifuges',
      desc: 'We never bypass fermentation. Churning whole cultured curd ensures that dairy proteins break down naturally, saturating the butterfat with gut-healing butyrate and natural probiotics.'
    },
    {
      icon: <Flame className="w-6 h-6 text-[#b8860b]" />,
      title: '3. Unglazed Earthen Terracotta Pots',
      subtitle: 'Natural Alkaline Infusion & Sondhi Khushbu',
      desc: 'Simmering makkhan in unglazed Haryana clay handis neutralizes excess lactic acidity and enriches the ghee with trace alkaline minerals without aluminum or stainless-steel leaching.'
    },
    {
      icon: <Sun className="w-6 h-6 text-[#b8860b]" />,
      title: '4. Slow Chulha Cow-Dung & Neem Firewood',
      subtitle: 'Gentle Controlled Heat Below 110°C',
      desc: 'Industrial autoclaves blast milk fat at over 150°C, stripping vitamins and forming trans fats. Our low-flame wood embers allow gentle caramelization that locks in fat-soluble vitamins A, D, E, and K2.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#b8860b]" />,
      title: '5. Certified 31.8 RM Value (NABL Tested)',
      subtitle: 'Exceeds Government Benchmark of 28.0',
      desc: 'Every single harvest is certified by independent NABL laboratories. We verify absolute 0% palm oil, 0% animal tallow, and zero artificial coloring agents with batch QR codes.'
    },
    {
      icon: <Package className="w-6 h-6 text-[#b8860b]" />,
      title: '6. Lead-Free Heavy Amber Glass Jars',
      subtitle: 'Zero Plastic Leaching & UV Protection',
      desc: 'Ghee stored in plastic containers leaches harmful endocrine-disrupting phthalates. We pack exclusively in food-grade, heavy dark amber glass jars that prevent photo-oxidation.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#b8860b]" />,
      title: '7. Ahimsa Calf-First Compassionate Milking',
      subtitle: 'Mother & Calf Bond Respected',
      desc: 'We operate non-industrial gaushalas where the calf drinks to satisfaction before milking begins. Our buffaloes are never tied in narrow stalls or injected with oxytocin for artificial yield.'
    }
  ];

  return (
    <div id="why-karat-page" className="min-h-screen bg-[#fcfaf5] text-[#1c1815] pb-24">
      
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
            <span className="text-[#1c1815] font-bold">Why 24 KARAT</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fbf7ed] to-[#fcfaf5] py-16 md:py-24 border-b border-[#ece2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf5df] border border-[#d4af37]/40 text-[#854d0e] text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>THE 24 KARAT ETHOS</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#1c1815] tracking-tight leading-tight">
            The Gold Standard of Purity
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#854d0e] mt-4 font-medium">
            "We Refuse Every Industrial Shortcut That Modern Food Processing Invented."
          </p>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto mt-6 rounded-full" />
          <p className="text-xs sm:text-sm text-[#786450] mt-6 leading-relaxed max-w-2xl mx-auto">
            In an era when 85% of market ghee is blended with palm olein, synthetic aromas, or industrial cream extracts, 24 KARAT was founded on a singular conviction: return to the uncompromising standards of Vedic Charaka Samhita.
          </p>
        </div>
      </section>

      {/* 7 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
            FOUNDATIONAL PROMISES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1815] mt-1">
            Our 7 Sacred Purity Pillars
          </h2>
          <p className="text-xs sm:text-sm text-[#786450] mt-2">
            Every drop of 24 KARAT Bilona Ghee adheres strictly to these seven non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e4d6bf] hover:border-[#d4af37] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fdf6e2] border border-[#d4af37]/40 flex items-center justify-center mb-6 shadow-2xs">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1c1815] leading-snug">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-[#854d0e] mt-1">
                  {pillar.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#786450] mt-3 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-[#1c1815] to-[#2d241c] text-[#fbf7ee] rounded-3xl p-8 border border-[#d4af37]/40 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#d4af37]">
                NABL CERTIFIED BATCHES
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-2">
                Verify Your Jar's Purity
              </h3>
              <p className="text-xs sm:text-sm text-[#cbb99d] mt-3 leading-relaxed">
                Scan the batch QR code on your jar lid to inspect the exact gas-chromatography analysis, RM value, and butyric acid concentration.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onShopNow}
                className="w-full py-3 rounded-full bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Order Certified Jar
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Direct Comparison Matrix */}
      <section className="bg-[#fbf7ee] py-16 md:py-20 border-y border-[#ebdcc4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b8860b]">
              TRANSPARENCY MATRIX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1815] mt-1">
              24 KARAT vs Commercial Ghee
            </h2>
            <p className="text-xs sm:text-sm text-[#786450] mt-2">
              See the direct differences in raw materials, processing heat, and nutritional impact.
            </p>
          </div>

          <div className="bg-[#fffdfa] rounded-3xl p-6 sm:p-10 border border-[#e4d6bf] shadow-md overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#ebdcc4] text-xs font-bold uppercase tracking-wider text-[#6b5845]">
                  <th className="py-4 px-4">Feature / Metric</th>
                  <th className="py-4 px-4 text-[#854d0e] font-black bg-[#fdf6e2]/80 rounded-t-xl">
                    24 KARAT Buffalo Bilona Ghee
                  </th>
                  <th className="py-4 px-4 text-gray-500">
                    Commercial Dairy Ghee (Centrifuge Cream)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0e4d0]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Starting Material</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    Cultured Murrah A2 Buffalo Curd (Dahi)
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Raw Industrial Separated Cream (Malai)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Churning Mechanism</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    Two-way traditional wooden Bilona
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    High-speed metal motorized centrifuges
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Vessel & Heat Source</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    Slow Chulha fire in unglazed earthen clay pots
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    High-pressure pressurized industrial steam boilers
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Milk Needed per 1 Kg</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    30 to 35 Litres of whole unadulterated milk
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    10 to 12 Litres (often blended with palm fat)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Reichert-Meissl (RM) Value</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#854d0e]">
                    31.8 (Supreme volatile fatty acid purity)
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    26.0 - 28.0 (Bare minimum legal standard)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Gut Butyric Acid Content</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    3.8% – 4.2% (Active colon lining support)
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Degraded by intense heat pasteurization
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Texture & Granulation</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    Naturally crystalline Danedar granules
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Flat, waxy, or artificially textured
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1c1815]">Packaging</td>
                  <td className="py-4 px-4 bg-[#fdf6e2]/40 font-bold text-[#1c1815]">
                    Lead-free dark amber glass jar
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    Plastic pouches or tin cans with BPA liners
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onShopNow}
              className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] border border-[#d4af37] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Taste the 24 KARAT Difference</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

// Helper icon component
function RotateCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}
