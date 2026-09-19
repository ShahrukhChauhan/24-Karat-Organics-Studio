import React from 'react';
import { Calendar, PhoneCall, Stethoscope } from 'lucide-react';

interface DoctorAppointmentBannerProps {
  onBookAppointment: () => void;
}

export const DoctorAppointmentBanner: React.FC<DoctorAppointmentBannerProps> = ({ onBookAppointment }) => {
  return (
    <section className="py-14 bg-[#fbf7ee] border-b border-[#ebdcc4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="inline-flex items-center gap-1.5 bg-[#fdf6e2] text-[#854d0e] border border-[#d4af37]/40 text-xs font-bold px-3 py-1 rounded-full mb-1">
          <Stethoscope className="w-4 h-4 text-[#b8860b]" />
          <span>FREE AYURVEDIC VAIDYA TELE-CONSULTATION</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
          Need Guidance on Ghee Dosage or Dosha Balance?
        </h2>

        <p className="text-sm sm:text-base text-[#675442] max-w-xl mx-auto">
          Our certified Ayurvedic Vaidyas are here to answer your questions on morning consumption, gut healing, joint lubrication, or kids' memory regimens.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <button
            id="banner-book-appointment-btn"
            onClick={onBookAppointment}
            className="bg-[#1c1815] hover:bg-[#332b23] text-[#f5d77f] border border-[#d4af37] px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Book Free Vaidya Consult</span>
          </button>

          <a
            href="tel:+919876524240"
            className="border border-[#b8860b] text-[#854d0e] hover:bg-[#b8860b] hover:text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 bg-[#fdfaf3]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Toll-Free: 1800-24-KARAT</span>
          </a>
        </div>

      </div>
    </section>
  );
};
