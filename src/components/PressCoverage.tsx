import React from 'react';

const MEDIA_OUTLETS = [
  'Vogue India',
  'Forbes India',
  'The Economic Times',
  'The Hindu',
  'NDTV Food',
  'Times Food',
  'Hindustan Times',
  'Architectural Digest',
  'India Today',
  'Better Nutrition'
];

export const PressCoverage: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-[#ede0cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#854d0e] mb-6">
          AS FEATURED IN LEADING CULINARY & LIFESTYLE PUBLICATIONS
        </p>
        
        <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 opacity-75 hover:opacity-100 transition-opacity">
          {MEDIA_OUTLETS.map((outlet, i) => (
            <span
              key={i}
              className="font-serif font-bold text-base sm:text-xl text-[#3d3126] tracking-tight hover:text-[#b8860b] transition-colors cursor-default"
            >
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
