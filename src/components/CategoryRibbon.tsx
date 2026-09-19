import React from 'react';
import { Sparkles, Flame, Award, Brain, Gift, CheckCircle2 } from 'lucide-react';

interface CategoryRibbonProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
  {
    id: 'all',
    title: 'All Ghee Jars',
    colorBg: 'bg-[#fbf7ee]',
    border: 'border-[#dfd3b8]',
    iconBg: 'bg-[#1c1815]',
    iconColor: 'text-[#d4af37]',
    icon: Sparkles,
    count: '5 Vedic Editions'
  },
  {
    id: 'physical',
    title: 'Pure Buffalo Bilona',
    colorBg: 'bg-[#fffaf0]',
    border: 'border-[#f5dfb8]',
    iconBg: 'bg-[#854d0e]',
    iconColor: 'text-white',
    icon: Award,
    count: 'Danedar • Glass Jars'
  },
  {
    id: 'emotional',
    title: '24K Swarna Reserve',
    colorBg: 'bg-[#fef9e7]',
    border: 'border-[#f2d06b]',
    iconBg: 'bg-[#b45309]',
    iconColor: 'text-[#fff8db]',
    icon: Sparkles,
    count: 'Gold Bhasma & Kesar'
  },
  {
    id: 'dermal',
    title: 'Clay-Pot Hand Churned',
    colorBg: 'bg-[#fbf5ed]',
    border: 'border-[#e4ccb2]',
    iconBg: 'bg-[#78350f]',
    iconColor: 'text-white',
    icon: Flame,
    count: 'Mitti Ke Bartan'
  },
  {
    id: 'uti',
    title: 'Medhya Herbal Ghee',
    colorBg: 'bg-[#f3f6f4]',
    border: 'border-[#c6d7cc]',
    iconBg: 'bg-[#294a3a]',
    iconColor: 'text-white',
    icon: Brain,
    count: 'Brahmi & Shankhpushpi'
  },
  {
    id: 'combo',
    title: 'Royal Festive Gift Boxes',
    colorBg: 'bg-[#fbf3e6]',
    border: 'border-[#e9cfb3]',
    iconBg: 'bg-[#92400e]',
    iconColor: 'text-white',
    icon: Gift,
    count: 'Brass Diya & Wooden Spoon'
  }
];

export const CategoryRibbon: React.FC<CategoryRibbonProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-7 bg-[#fffdfa] border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 shrink-0 cursor-pointer text-left ${
                  isSelected
                    ? 'ring-2 ring-[#b8860b] shadow-md bg-white border-[#b8860b]'
                    : `${cat.colorBg} ${cat.border} hover:shadow-xs hover:-translate-y-0.5`
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} ${cat.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2d2218] leading-tight">
                    {cat.title}
                  </h4>
                  <p className="text-[11px] text-[#786450] mt-0.5 font-medium">
                    {cat.count}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
