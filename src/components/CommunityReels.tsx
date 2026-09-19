import React from 'react';
import { Play } from 'lucide-react';
import { COMMUNITY_STORIES } from '../data/karatData';

interface CommunityReelsProps {
  onSelectStory: (story: typeof COMMUNITY_STORIES[0]) => void;
}

export const CommunityReels: React.FC<CommunityReelsProps> = ({ onSelectStory }) => {
  return (
    <section className="py-16 bg-[#fffdfa] border-b border-[#ebdcc4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-1.5">
            REAL STORIES • SACRED TASTE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1c1815] tracking-tight">
            Heard in Kitchens Across India
          </h2>
          <p className="text-sm text-[#675442] mt-2 max-w-xl mx-auto">
            From generational home cooks and royal heritage chefs to Ayurvedic doctors and national athletes experiencing the golden purity of 24 KARAT.
          </p>
        </div>

        {/* Stories Grid / Reels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMMUNITY_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-9/14 bg-[#1c1815] border border-[#ebdcc4]"
            >
              <img
                src={story.thumbnail}
                alt={story.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1c1815]/80 group-hover:bg-[#d4af37] text-[#f5d77f] group-hover:text-[#1c1815] border border-[#d4af37]/60 flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-bold leading-snug line-clamp-2 drop-shadow-sm text-[#fdfaf3]">
                  {story.headline}
                </p>
                <div className="flex items-center justify-between text-[10px] text-white/80 mt-1.5 pt-1.5 border-t border-white/20">
                  <span className="font-semibold text-[#f5d77f]">{story.name}</span>
                  <span className="text-[#e2d5be]">{story.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
