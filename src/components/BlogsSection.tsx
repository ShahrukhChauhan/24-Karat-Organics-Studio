import React, { useState } from 'react';
import { BLOGS } from '../data/karatData';
import { Clock, ArrowRight } from 'lucide-react';

export const BlogsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'VEDIC SCIENCE' | 'PURITY GUIDE' | 'GUT HEALTH'>('ALL');

  const filteredBlogs = activeFilter === 'ALL'
    ? BLOGS
    : BLOGS.filter(b => b.category === activeFilter);

  return (
    <section id="blogs-section" className="py-16 md:py-24 bg-white border-b border-[#ebdcc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b8860b] uppercase mb-1.5">
              Vedic Wisdom & Gastronomy
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1c1815] tracking-tight">
              24 KARAT Journal & Guides
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {(['ALL', 'VEDIC SCIENCE', 'PURITY GUIDE', 'GUT HEALTH'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#1c1815] text-[#f5d77f] border border-[#d4af37] shadow-xs'
                    : 'bg-[#fbf7ee] text-[#625141] hover:bg-[#f2e6d2] border border-[#e8dcc4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-[#fffdfa] rounded-2xl border border-[#ebdcc4] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden bg-gray-100 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1c1815] text-[#f5d77f] border border-[#d4af37]/40 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#827160] mb-2 font-medium">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1c1815] group-hover:text-[#b8860b] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#675442] mt-2.5 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-bold text-[#854d0e] group-hover:text-[#b8860b] inline-flex items-center gap-1.5">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#b8860b]" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
