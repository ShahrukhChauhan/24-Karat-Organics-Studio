import React from 'react';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

interface QuizSectionProps {
  onOpenQuiz: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenQuiz }) => {
  return (
    <section className="py-14 bg-[#fffdfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1c1815] via-[#2c2219] to-[#453424] text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-[#d4af37]/30">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column */}
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Personalized Vedic Ghee Assessment
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
                Find Your Ideal Ghee & Daily Ritual
              </h2>

              <p className="text-base sm:text-lg text-[#e6d8c3] max-w-xl font-normal leading-relaxed">
                Whether you need joint lubrication, acidity relief, brain focus for children, or 24K gold rasayana for royal vitality — take our 60-second Prakriti assessment for tailored dosage advice.
              </p>

              <div className="pt-2">
                <button
                  id="quiz-banner-take-btn"
                  onClick={onOpenQuiz}
                  className="bg-[#d4af37] hover:bg-[#b8860b] text-[#1c1815] hover:text-white border border-[#f5d77f] px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>TAKE THE GHEE QUIZ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#d4af37]/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                  alt="24 Karat Golden Buffalo Bilona Ghee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Decorative backdrop glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
