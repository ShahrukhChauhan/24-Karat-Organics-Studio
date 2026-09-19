import React from 'react';
import { Award, FileText, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINICAL_TRIAL_STATS } from '../data/karatData';

interface ClinicalTrialReportProps {
  onSelectAkira: () => void;
}

export const ClinicalTrialReport: React.FC<ClinicalTrialReportProps> = ({ onSelectAkira }) => {
  return (
    <section id="purity-report" className="py-16 md:py-24 bg-white border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#fdf6e2] text-[#854d0e] border border-[#d4af37]/40 text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <Award className="w-4 h-4 text-[#b8860b]" />
            <span>NABL LABORATORY VERIFIED</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
            24 KARAT Laboratory Purity Analysis
          </h2>
          <p className="text-sm sm:text-base text-[#675442] mt-2">
            Every batch of 24 KARAT Buffalo Bilona Ghee is tested at accredited food laboratories using Gas Chromatography to guarantee zero palm oil, authentic RM values, and maximum living nutrients.
          </p>
          <div className="w-16 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Top 2 Primary Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          
          <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e8dcc4] flex items-center gap-6 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] flex flex-col items-center justify-center shrink-0 shadow-md">
              <span className="font-serif text-3xl font-black">31.8</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37]">RM VALUE</span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1c1815]">
                Pristine Reichert-Meissl Purity
              </h3>
              <p className="text-xs sm:text-sm text-[#625141] mt-1">
                Standard pure ghee baseline is &gt;28. 24 KARAT records an exceptional 31.8 RM value, proving 100% authentic pure dairy fat without vegetable adulterants.
              </p>
            </div>
          </div>

          <div className="bg-[#fffdfa] rounded-3xl p-8 border border-[#e8dcc4] flex items-center gap-6 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-[#854d0e] text-white flex flex-col items-center justify-center shrink-0 shadow-md">
              <span className="font-serif text-3xl font-black">0.0%</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">PALM OIL</span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1c1815]">
                Zero Palm Oil or Additives
              </h3>
              <p className="text-xs sm:text-sm text-[#625141] mt-1">
                Gas Chromatography Mass Spectrometry (GC-MS) certifies zero presence of palm oil, vanaspati, animal tallow, starch, or artificial coloring agents.
              </p>
            </div>
          </div>

        </div>

        {/* 8 Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {CLINICAL_TRIAL_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[#fbf7ee] rounded-2xl p-5 border border-[#ebdcc4] text-center shadow-xs hover:shadow-md transition-all group"
            >
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1c1815] group-hover:text-[#b8860b] transition-colors block">
                {stat.value}
              </span>
              <p className="text-xs font-semibold text-[#675442] mt-1.5 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button
            onClick={onSelectAkira}
            className="bg-[#1c1815] hover:bg-[#332a21] text-[#f5d77f] hover:text-white border border-[#d4af37] px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore 24 KARAT Buffalo Bilona Ghee</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
