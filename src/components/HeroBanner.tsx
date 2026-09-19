import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Heart, Flame, Award, CheckCircle2 } from 'lucide-react';

interface HeroBannerProps {
  onShopNow: () => void;
  onOpenQuiz: () => void;
  onSelectProduct: (productId: string) => void;
}

const SLIDES = [
  {
    tag: "THE VEDIC GOLD STANDARD",
    titleLine1: "Golden Purity.",
    titleLine2: "Slow-Churned",
    titleLine3: "Buffalo Bilona.",
    subtitle: "Handcrafted from curd of grass-fed Murrah buffaloes in earthen clay pots. 100% Pure, Danedar & Lab Certified.",
    bgGradient: "from-[#573610] via-[#854d0e] to-[#b47a16]",
    accentColor: "#d4af37",
    ctaProduct: "buffalo-bilona-ghee",
    badges: [
      { text: "Clay-Pot Wood Fired", icon: Flame },
      { text: "32L Murrah Milk / 1Kg", icon: Award },
      { text: "Granular Danedar Ghee", icon: Sparkles },
      { text: "0% Palm Oil / Additives", icon: ShieldCheck }
    ]
  },
  {
    tag: "ROYAL AYURVEDIC ELIXIR",
    titleLine1: "24K Swarna",
    titleLine2: "Gold Reserve",
    titleLine3: "Rasayana Ghee.",
    subtitle: "Enriched with certified 24-Karat Ayurvedic Swarna Bhasma & Kashmiri Mogra Kesar for vital Ojas & cellular longevity.",
    bgGradient: "from-[#382309] via-[#633a0b] to-[#925e14]",
    accentColor: "#f59e0b",
    ctaProduct: "swarna-bhasma-gold-ghee",
    badges: [
      { text: "Certified 24K Gold", icon: Award },
      { text: "Vedic Ojas & Immunity", icon: Heart },
      { text: "Kashmiri Mogra Kesar", icon: Sparkles },
      { text: "Bio-Cellular Rejuvenation", icon: ShieldCheck }
    ]
  },
  {
    tag: "BRAIN & NERVOUS SYSTEM HEALING",
    titleLine1: "Medhya Ghrita.",
    titleLine2: "Sharper Mind,",
    titleLine3: "Calmer Sleep.",
    subtitle: "Organic Brahmi, Ashwagandha & Shankhpushpi infused into Murrah buffalo ghee for focus, memory & deep Vata calm.",
    bgGradient: "from-[#1e1b18] via-[#453629] to-[#6d5138]",
    accentColor: "#d97706",
    ctaProduct: "medhya-herbal-ghee",
    badges: [
      { text: "Memory & Cognition", icon: Sparkles },
      { text: "Vata & Agni Balance", icon: Flame },
      { text: "Safe for Kids & Adults", icon: CheckCircle2 },
      { text: "Doctor Vaidya Choice", icon: ShieldCheck }
    ]
  }
];

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onShopNow,
  onOpenQuiz,
  onSelectProduct,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Container */}
      <div className={`relative bg-gradient-to-r ${slide.bgGradient} text-white py-12 md:py-20 px-4 sm:px-8 transition-colors duration-700`}>
        
        {/* Background decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_60%)] pointer-events-none" />

        {/* Carousel Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1c1815]/70 hover:bg-[#1c1815] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1c1815]/70 hover:bg-[#1c1815] text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 z-10 pl-6 sm:pl-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1815]/60 text-[#f5d77f] border border-[#d4af37]/40 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{slide.tag}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-4">
              <span>{slide.titleLine1}</span> <br />
              <span className="text-[#f5d77f] drop-shadow-xs">{slide.titleLine2}</span> <br />
              <span className="text-white/95">{slide.titleLine3}</span>
            </h1>

            <p className="text-base sm:text-lg font-normal text-white/90 max-w-lg mb-8 leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-shop-now-btn"
                onClick={() => {
                  onSelectProduct(slide.ctaProduct);
                }}
                className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] hover:text-white px-8 py-3.5 rounded-full font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-[#f5d77f]"
              >
                ORDER PURE GHEE
              </button>
              <button
                id="hero-symptom-quiz-btn"
                onClick={onOpenQuiz}
                className="bg-black/30 hover:bg-black/50 text-[#fbf7ee] border border-[#d4af37]/50 px-6 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all cursor-pointer backdrop-blur-xs flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                Find My Ghee Match
              </button>
            </div>
          </div>

          {/* Right Visual & Badges Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Grid of 4 Feature Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg z-10">
              {slide.badges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#1c1815]/50 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#d4af37]/30 shadow-lg text-white transition-all hover:bg-[#1c1815]/70 hover:border-[#d4af37]"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 text-[#f5d77f] flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wide leading-snug text-[#fdfbf6]">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Central golden warm glow */}
            <div className="absolute -inset-2 opacity-40 pointer-events-none flex justify-center items-center">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 z-10 relative">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges Ticker Banner */}
      <div id="trust-ticker-bar" className="bg-[#1c1815] text-[#e8d5a6] py-3.5 overflow-hidden border-y border-[#d4af37]/30">
        <div className="flex items-center space-x-6 text-xs sm:text-[13px] font-semibold tracking-wider uppercase whitespace-nowrap animate-marquee">
          <span>• 100% Murrah Buffalo A2 Milk</span>
          <span>• Hand-Churned Wooden Bilona</span>
          <span>• Slow Wood-Fired in Clay Pots</span>
          <span>• 100% Free from Palm Oil</span>
          <span>• 250°C Ultra-High Smoke Point</span>
          <span>• Rich in Gut-Healing Butyric Acid & CLA</span>
          <span>• 100% Lactose & Casein Free</span>
          <span>• NABL Lab Tested Batch Traceability</span>
          <span>• Zero Preservatives or Essence</span>
          <span>• Packaged in Food-Grade Glass Jars</span>
          {/* Loop repeat */}
          <span>• 100% Murrah Buffalo A2 Milk</span>
          <span>• Hand-Churned Wooden Bilona</span>
          <span>• Slow Wood-Fired in Clay Pots</span>
          <span>• 100% Free from Palm Oil</span>
          <span>• 250°C Ultra-High Smoke Point</span>
          <span>• Rich in Gut-Healing Butyric Acid & CLA</span>
          <span>• 100% Lactose & Casein Free</span>
          <span>• NABL Lab Tested Batch Traceability</span>
          <span>• Zero Preservatives or Essence</span>
          <span>• Packaged in Food-Grade Glass Jars</span>
        </div>
      </div>
    </div>
  );
};
