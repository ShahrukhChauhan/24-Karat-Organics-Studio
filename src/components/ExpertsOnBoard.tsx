import React from 'react';
import { Stethoscope, Calendar, Award } from 'lucide-react';
import { DOCTORS } from '../data/karatData';
import { Doctor } from '../types';

interface ExpertsOnBoardProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export const ExpertsOnBoard: React.FC<ExpertsOnBoardProps> = ({ onSelectDoctor }) => {
  return (
    <section id="experts-board" className="py-16 md:py-24 bg-[#fbf7ee] border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-2">
            Clinical Ayurvedic Guidance & Rasayana Care
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
            AYURVEDIC VAIDYAS ON BOARD
          </h2>
          <p className="text-sm sm:text-base text-[#675442] mt-2">
            Schedule a complimentary tele-consultation with our senior Ayurvedic physicians on personalized ghee dosage, digestive Agni, joint therapy, and kids' brain development.
          </p>
          <div className="w-16 h-1 bg-[#b8860b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#fffdfa] rounded-2xl p-4 sm:p-5 border border-[#e8dcc4] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Avatar */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-[#b8860b]/30 mb-3.5 group-hover:border-[#b8860b] transition-colors shadow-xs">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1c1815] leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#854d0e] font-bold mt-0.5">
                    {doc.role}
                  </p>
                  <p className="text-[11px] text-[#705e4d] mt-0.5">
                    {doc.qualifications}
                  </p>
                  <p className="text-[11px] text-[#55473a] mt-1.5 line-clamp-2 italic">
                    {doc.specialty}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-[#f0e3ce]">
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="w-full bg-[#fbf7ee] hover:bg-[#1c1815] text-[#854d0e] hover:text-[#f5d77f] border border-[#d4af37]/40 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#b8860b]" />
                  <span>Free Vaidya Consult</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
