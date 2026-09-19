import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  Stethoscope,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { FAQS, FAQItem } from '../data/karatData';

interface FaqsPageProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
  onShopNow: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({
  onOpenConsultation,
  onNavigateHome,
  onShopNow,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'bilona_process', label: '🍯 Bilona Process & Texture' },
    { id: 'buffalo_vs_cow', label: '🥛 Buffalo vs Cow Ghee' },
    { id: 'health_ayurveda', label: '🌿 Health & Ayurveda' },
    { id: 'cooking_culinary', label: '🍳 Cooking & Smoke Point' },
    { id: 'storage_shipping', label: '📦 Storage & Packaging' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ = item.q.toLowerCase().includes(query);
        const matchA = item.a.toLowerCase().includes(query);
        return matchQ || matchA;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="faqs-page" className="min-h-screen bg-[#fcfaf5] text-[#1c1815] pb-24">
      
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
            <span className="text-[#1c1815] font-bold">Frequently Asked Questions</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#fbf7ed] to-[#fcfaf5] py-16 md:py-20 border-b border-[#ece2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf5df] border border-[#d4af37]/40 text-[#854d0e] text-xs font-black uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>VEDIC GHEE KNOWLEDGE BASE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#1c1815] tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#854d0e] mt-3 font-medium">
            Everything you need to know about 24 KARAT Buffalo Bilona Ghee, Ayurveda, and Health
          </p>
          <div className="w-20 h-1 bg-[#b8860b] mx-auto mt-6 rounded-full" />

          {/* Search Box in Hero */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-[#9c8975] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. cholesterol, empty stomach, shelf life, lactose)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#fffdfa] border border-[#d6c7ab] focus:outline-none focus:border-[#b8860b] text-xs sm:text-sm text-[#1c1815] shadow-xs placeholder-[#9c8975]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#8a7a69] hover:text-black font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main FAQs Content Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] shadow-sm'
                  : 'bg-[#fffdfa] text-[#6b5845] hover:bg-[#fbf7ed] border border-[#ebdcc4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="bg-[#fffdfa] rounded-3xl p-12 border border-[#ebdcc4] text-center my-8">
            <HelpCircle className="w-12 h-12 text-[#b8860b] mx-auto mb-4 opacity-50" />
            <h3 className="font-serif text-xl font-bold text-[#1c1815]">No questions found</h3>
            <p className="text-xs text-[#786450] mt-2">
              We couldn't find any questions matching "{searchQuery}". You can consult with our Ayurvedic Vaidya directly.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-6 px-6 py-2.5 bg-[#b8860b] text-white rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = !!openIndices[index];
              return (
                <div
                  key={index}
                  className="bg-[#fffdfa] rounded-2xl border border-[#e4d6bf] overflow-hidden shadow-2xs hover:border-[#d4af37] transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1c1815] leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#fdf6e2] text-[#854d0e]' : 'bg-[#fbf7ee] text-[#786450]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5e4b39] leading-relaxed border-t border-[#f2e7d5] bg-[#fffdfa]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Ayurvedic Morning Empty-Stomach Ritual Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-br from-[#fbf7ee] to-[#fffdfa] rounded-3xl p-8 sm:p-10 border border-[#ebdcc4] shadow-sm">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#b8860b] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>AYURVEDIC HEALTH RITUAL (SNEHANA)</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1c1815]">
            How to Take 24 KARAT Ghee Every Morning:
          </h3>
          <p className="text-xs sm:text-sm text-[#786450] mt-2 leading-relaxed">
            In classical Charaka Samhita, consuming pure clarified butter at dawn awakens digestive Agni, lubricates joints, heals gut mucous linings, and promotes cellular longevity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-2xl border border-[#ebdcc4]">
              <div className="w-7 h-7 rounded-full bg-[#fdf6e2] text-[#b8860b] font-bold text-xs flex items-center justify-center mb-2">
                1
              </div>
              <h4 className="font-bold text-xs text-[#1c1815]">One Level Tablespoon</h4>
              <p className="text-[11px] text-[#786450] mt-1">Take 1 tbsp of 24 KARAT Bilona Ghee at room temperature.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#ebdcc4]">
              <div className="w-7 h-7 rounded-full bg-[#fdf6e2] text-[#b8860b] font-bold text-xs flex items-center justify-center mb-2">
                2
              </div>
              <h4 className="font-bold text-xs text-[#1c1815]">Warm Water or Milk</h4>
              <p className="text-[11px] text-[#786450] mt-1">Follow immediately with a glass of lukewarm water or cow milk.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#ebdcc4]">
              <div className="w-7 h-7 rounded-full bg-[#fdf6e2] text-[#b8860b] font-bold text-xs flex items-center justify-center mb-2">
                3
              </div>
              <h4 className="font-bold text-xs text-[#1c1815]">Wait 30 Minutes</h4>
              <p className="text-[11px] text-[#786450] mt-1">Allow natural assimilation before consuming regular breakfast or tea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Contact Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-[#1c1815] text-[#fbf7ee] rounded-3xl p-8 sm:p-12 border border-[#d4af37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#d4af37]">
              PERSONALIZED GUIDANCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-white mt-2">
              Have a Specific Health or Dietary Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#cbb99d] mt-2">
              Our Ayurvedic Vaidyas are on call to answer questions regarding cholesterol, acid reflux, weight management, and postpartum nourishment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Talk to an Ayurvedic Vaidya</span>
            </button>
            <button
              onClick={onShopNow}
              className="bg-[#2a221b] hover:bg-[#3d3226] text-[#f5d77f] border border-[#d4af37]/50 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Shop All Ghee Jars</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
