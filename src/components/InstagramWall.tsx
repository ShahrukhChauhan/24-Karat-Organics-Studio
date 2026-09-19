import React from 'react';
import { Instagram } from 'lucide-react';

const INSTA_IMAGES = [
  'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=80'
];

export const InstagramWall: React.FC = () => {
  return (
    <section className="py-16 bg-[#fffdfa] border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Sacred Sanskrit Phrase */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1815] leading-snug tracking-wide">
            घृतं वै प्राणाः
          </p>
          <p className="text-sm sm:text-base font-serif italic text-[#854d0e] mt-1.5 font-medium">
            "Ghee is the true essence of Vital Life Energy & Ojas" — Rigveda
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs font-extrabold tracking-widest text-[#1c1815] uppercase">
            <Instagram className="w-4 h-4 text-[#b8860b]" />
            <span>#24KaratPureGhee • Follow @24karatghee</span>
          </div>
        </div>

        {/* 6-Photo Mosaic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {INSTA_IMAGES.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden aspect-square border border-[#ebdcc4] shadow-xs cursor-pointer"
            >
              <img
                src={img}
                alt="24 Karat Buffalo Bilona Ghee Life"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1c1815]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#f5d77f]">
                <Instagram className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
