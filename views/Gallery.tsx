import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavProps } from '../types';

// HOW TO ADD NEW CATEGORIES:
// 1. Add the new name to the list below (e.g., 'SKETCHES' | 'OC')
// 2. Add the button for it in the "Filter Bar" section further down
type Category = 'ALL' | 'VAL' | 'YAN' | 'CAMILLE' | 'FANART';

interface ArtWork {
  id: number;
  title: string;
  category: Exclude<Category, 'ALL'>;
  src: string;
}

// INSTRUCTIONS FOR ADDING PHOTOS:
// 1. Put your image files in: public/images/
// 2. Update the filenames below to match your actual files
const ARTWORKS: ArtWork[] = [
  { id: 1, title: 'VAL_PORTRAIT.PNG', category: 'VAL', src: '/images/street witch 50 lr.jpg' },
  { id: 2, title: 'CAMILLE_PORTRAIT.PNG', category: 'CAMILLE', src: '/images/camille 5 lr.jpg' },
  { id: 3, title: 'YAN_STREETWEAR.PNG', category: 'YAN', src: '/images/yan lr.jpg' },
  { id: 4, title: 'ELLEN JOE STREET WITCH', category: 'FANART', src: '/images/ellen street witch lr.jpg' },
  { id: 5, title: 'ELOISE', category: 'FANART', src: '/images/eloise lr.jpg' },
  { id: 6, title: 'STREET WITCH 65.PNG', category: 'VAL', src: '/images/street witch 65 lr.jpg' },
  { id: 7, title: 'YAN_ZZZ.PNG', category: 'YAN', src: '/images/yan street bg 2.jpg' },
  { id: 8, title: 'VAL STREET BUNNY.PNG', category: 'VAL', src: '/images/street witch 90 lr.jpg' },
  { id: 9, title: 'KAZUSA.PNG', category: 'FANART', src: '/images/kazusa lr.jpg' },
  { id: 10, title: 'VAL STREET WEAR.PNG', category: 'VAL', src: '/images/street witch 74 lr.jpg' },
  { id: 11, title: 'ERI.PNG', category: 'FANART', src: '/images/eri lr.jpg' },
  { id: 12, title: 'VAL RACING.PNG', category: 'VAL', src: '/images/street witch 64 lr.jpg' },
  { id: 13, title: 'VAL FASHION.PNG', category: 'VAL', src: '/images/street witch 58 lr.jpg' },
  { id: 14, title: 'VAL RACING.PNG', category: 'VAL', src: '/images/street witch 59 lr.jpg' },
  { id: 15, title: 'VAL FASHION.PNG', category: 'VAL', src: '/images/street witch 56 lr.jpg' },
  { id: 16, title: 'YAN SWIMSUIT.PNG', category: 'YAN', src: '/images/yan swimsuit lr.jpg' },
  // If you don't have these files yet, the site will show a broken image icon.
  // Replace these filenames with the actual ones you dragged into the folder!
];

const Gallery: React.FC<NavProps> = ({ setView }) => {
  const [filter, setFilter] = useState<Category>('ALL');
  const [selectedImage, setSelectedImage] = useState<ArtWork | null>(null);

  // Note: We map directly over ARTWORKS in the render to keep elements mounted (preventing reloads)
  // and just toggle visibility with CSS classes.

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 min-h-screen relative z-10 animate-fade-in">
      
      {/* Top Left Navigation for easier access */}
      <button 
        onClick={() => setView('HOME')}
        className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-2 font-mono text-xs text-text-dim hover:text-accent-orange transition-colors cursor-none"
        data-cursor="hover"
      >
        <i className="fas fa-chevron-left"></i>
        <span>RETURN_ROOT</span>
      </button>
      
      {/* Header */}
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="font-mono text-3xl font-bold text-white shadow-[2px_2px_0px_#FF6B35] mb-1">
            VISUAL_ARCHIVE
          </h1>
          <p className="font-mono text-xs text-accent-blue tracking-wider">
            &gt;&gt; ACCESSING MEMORY FILES...
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3">
          {(['ALL', 'VAL', 'YAN', 'CAMILLE', 'FANART'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`border px-4 py-2 font-mono text-xs transition-all cursor-none ${
                filter === cat
                  ? 'border-accent-orange bg-accent-orange/10 text-accent-orange shadow-[0_0_10px_rgba(255,107,53,0.2)]'
                  : 'border-text-dim text-text-dim hover:border-accent-orange hover:text-accent-orange'
              }`}
              data-cursor="hover"
            >
              [{cat === 'ALL' ? 'ALL_DATA' : cat}]
            </button>
          ))}
        </div>
      </header>

      {/* Masonry Grid (Simulated with Columns) */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {ARTWORKS.map((art) => {
          const isVisible = filter === 'ALL' || art.category === filter;
          
          return (
            <div
              key={art.id}
              onClick={() => setSelectedImage(art)}
              className={`group relative break-inside-avoid overflow-hidden bg-bg-panel border border-transparent hover:border-accent-blue/30 transition-all hover:-translate-y-1 hover:shadow-2xl cursor-none mb-6 ${isVisible ? '' : 'hidden'}`}
              data-cursor="hover"
            >
              {/* Tech Corners */}
              <div className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-accent-blue opacity-0 transition-opacity group-hover:opacity-100 z-20"></div>
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-accent-blue opacity-0 transition-opacity group-hover:opacity-100 z-20"></div>

              <img
                src={art.src}
                alt={art.title}
                loading="lazy"
                className="w-full grayscale-[0.3] contrast-[1.1] transition-all duration-300 group-hover:grayscale-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/400/500?grayscale"; // Fallback
                }}
              />
              
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="block font-mono text-sm text-white">{art.title}</span>
                <span className="block font-mono text-[0.65rem] text-accent-orange uppercase">{art.category}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => setView('HOME')}
          className="inline-block border border-text-dim bg-bg-dark px-6 py-3 font-mono text-sm text-text-main transition-all hover:border-accent-orange hover:text-accent-orange hover:shadow-[0_0_15px_rgba(255,107,53,0.2)] cursor-none"
          data-cursor="hover"
        >
          &lt; RETURN TO BAR
        </button>
      </div>

      {/* Lightbox - Using Portal to render outside the main container's stacking context */}
      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[20000] flex flex-col items-center justify-center bg-[#0a0b10]/95 backdrop-blur-sm animate-fade-in cursor-none"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-8 top-8 text-3xl text-text-dim transition-colors hover:text-accent-orange cursor-none"
            data-cursor="hover"
          >
            &times;
          </button>
          
          <div className="relative max-h-[85vh] max-w-[90vw] border border-accent-orange shadow-[0_0_50px_rgba(255,107,53,0.2)] p-1 bg-black">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
          <p className="mt-4 font-mono text-text-main">{selectedImage.title}</p>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Gallery;