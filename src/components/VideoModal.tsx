import React from 'react';
import { X, Quote, Play } from 'lucide-react';
import { COMMUNITY_STORIES } from '../data/karatData';

interface VideoModalProps {
  story: typeof COMMUNITY_STORIES[0] | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#14231d] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2b4b3e] text-white animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-[#2b4b3e]">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">{story.name}</h3>
            <p className="text-xs text-[#a0baae]">{story.age} • {story.city}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Section */}
        <div className="relative aspect-9/12 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={story.thumbnail}
            alt={story.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/90 text-[#0d382d] flex items-center justify-center shadow-xl mb-4">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white/90 max-w-xs">
              {story.headline}
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <p className="italic text-xs sm:text-sm text-white/95 leading-relaxed">
              {story.quote}
            </p>
          </div>
        </div>

        <div className="p-4 text-center">
          <button
            onClick={onClose}
            className="w-full bg-[#c75628] hover:bg-[#ad481d] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
};
