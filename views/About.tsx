import React from 'react';
import { NavProps } from '../types';

const About: React.FC<NavProps> = ({ setView }) => {
  return (
    <div className="flex w-full items-center justify-center p-4 min-h-[90vh] py-10">
      
      {/* Top Left Navigation for easier access */}
      <button 
        onClick={() => setView('HOME')}
        className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-2 font-mono text-xs text-text-dim hover:text-accent-orange transition-colors"
        data-cursor="hover"
      >
        <i className="fas fa-chevron-left"></i>
        <span>RETURN_ROOT</span>
      </button>

      <div className="grid w-full max-w-[1000px] grid-cols-1 overflow-hidden rounded-xl border border-accent-orange/30 bg-bg-panel shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md md:grid-cols-[300px_1fr] animate-fade-in relative z-10">
        
        {/* Top Decorative Line */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-orange to-transparent"></div>

        {/* Sidebar */}
        <aside className="flex flex-col items-center border-r border-white/5 bg-black/20 p-8 text-center md:items-start md:text-left">
          <div className="relative mb-6 p-1.5 border-2 border-accent-orange">
            <div className="aspect-square w-[160px] overflow-hidden bg-gray-900">
              {/* INSTRUCTIONS: Name your file 'avatar.png' and put it in public/images/ folder */}
               <img 
                src="/images/avatar.jpg" 
                alt="Avatar" 
                className="h-full w-full object-cover contrast-125 sepia-[0.2]" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/300/300?grayscale";
                }}
              />
            </div>
            <span className="absolute -bottom-2.5 right-2 bg-bg-dark px-2 font-mono text-[0.7rem] text-accent-orange">
              IMG_01
            </span>
          </div>

          <div className="w-full space-y-3 font-mono text-sm hidden md:block">
            <div className="flex justify-between border-b border-dashed border-white/10 pb-1">
              <span className="text-text-dim">CLASS:</span>
              <span className="text-accent-blue">ARTIST</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-white/10 pb-1">
              <span className="text-text-dim">MASK:</span>
              <span className="text-accent-blue">YAN</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-white/10 pb-1">
              <span className="text-text-dim">STATUS:</span>
              <span className="text-accent-orange animate-pulse">ONLINE</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="h-full p-8 md:p-12 overflow-y-auto max-h-[80vh] scrollbar-thin">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-2xl text-accent-orange">&gt;&gt;</span>
            <h1 className="font-mono text-2xl font-bold text-white md:text-3xl">FILE: YAN_KODIAC</h1>
          </div>

          <div className="prose prose-invert max-w-none text-text-main">
            <p className="mb-4 leading-relaxed">
              Welcome to the digital archive. I am <strong className="text-white">Yan Kodiac</strong>, a digital artist and the architect of this virtual space.
            </p>
            <p className="mb-8 leading-relaxed">
              While I spend my days creating illustrations, this bar is managed by <strong className="text-white">Yan</strong>, my bartender OC and the true face of the establishment. Whether you're here for commissions or just to browse the gallery, Yan ensures the drinks and the vibes are immaculate.
            </p>

            <h2 className="mb-4 mt-8 w-full border-b border-accent-blue/30 pb-2 font-mono text-lg text-accent-blue">
              &gt;&gt; SYSTEM LOGS: RECENT HIGHLIGHTS
            </h2>

            <div className="mb-4 border-l-2 border-accent-orange bg-white/5 p-4 font-mono text-sm">
              <span className="block mb-1 font-bold text-accent-orange">[ANIME EXPO]</span>
              Partnered with <strong className="text-white">Mosobox</strong> for Anime Expo last year! While I couldn't be there in person, my prints were available at their booth, along with a life-sized Val standee greeting everyone who stopped by.
            </div>

            <div className="mb-8 border-l-2 border-accent-orange bg-white/5 p-4 font-mono text-sm">
              <span className="block mb-1 font-bold text-accent-orange">[VAL PLUSH]</span>
              The <span className="text-accent-orange">Val Plushies</span> are officially underway! Production is starting now. They will be shipping out to supporters soon.
            </div>

            <h2 className="mb-4 mt-8 w-full border-b border-accent-blue/30 pb-2 font-mono text-lg text-accent-blue">
              &gt;&gt; CURRENT OBJECTIVE
            </h2>
            <p className="mb-4 leading-relaxed">
              My primary focus is the continuously improving at art and applying for upcoming conventions.
            </p>
            <p className="mb-8 leading-relaxed">
              Simultaneously, my other goal is to develop a <strong className="text-white">fashion line for Val</strong>, with the ultimate goal of compiling these designs into a physical art book.
            </p>
          </div>

          <button 
            onClick={() => setView('HOME')}
            className="mt-6 inline-block border border-text-dim px-6 py-3 font-mono text-sm transition-all hover:border-accent-orange hover:text-accent-orange hover:shadow-[0_0_15px_rgba(255,107,53,0.2)]"
            data-cursor="hover"
          >
            &lt; RETURN TO BAR
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;