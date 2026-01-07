import React, { useEffect, useState } from 'react';
import { NavProps } from '../types';
import GlitchText from '../components/GlitchText';

const Home: React.FC<NavProps> = ({ setView }) => {
  const [greeting, setGreeting] = useState(">> STATUS: LOADING...");

  useEffect(() => {
    const hour = new Date().getHours();
    let text = "Bar Status: OPEN FOR BUSINESS";
    
    if (hour >= 5 && hour < 12) {
      text = "Coffee Machine: WARMING_UP...";
    } else if (hour >= 12 && hour < 23) {
      text = "Bar Status: OPEN FOR BUSINESS";
    } else {
      text = "You're up late. Drink?";
    }
    setGreeting(text);
  }, []);

  return (
    <div className="flex w-full items-center justify-center p-4 min-h-[80vh]">
      <div className="relative flex w-full max-w-[950px] flex-col-reverse overflow-hidden rounded-xl border border-accent-orange/30 bg-bg-panel shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md md:flex-row animate-fade-in">
        
        {/* Decorative Screws */}
        <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-text-dim shadow-[0_0_0_2px_rgba(20,22,30,0.9),0_0_0_3px_#808090]" />
        <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-text-dim shadow-[0_0_0_2px_rgba(20,22,30,0.9),0_0_0_3px_#808090]" />

        {/* Left Side: Content */}
        <div className="flex flex-[1.3] flex-col justify-center border-r border-white/5 p-8 md:p-14">
          <div className="mb-8">
            <GlitchText 
              as="h1" 
              text="YAN KODIAC" 
              className="font-mono text-4xl font-bold uppercase tracking-tighter text-white shadow-[2px_2px_0px_#FF6B35] md:text-5xl" 
            />
            <GlitchText 
              as="p" 
              text={greeting} 
              className="mt-2 min-h-[1.5em] font-mono text-sm tracking-widest text-accent-blue opacity-80" 
            />
          </div>

          {/* Menu Section: Standard Mixes */}
          <div className="mb-8 w-full">
            <div className="mb-4 flex justify-between border-b border-text-dim pb-1 font-mono text-xs text-text-dim">
              <span>STANDARD MIXES</span>
              <span>PRICE</span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'HOME', price: 'FREE', action: () => setView('HOME') },
                { label: 'ABOUT', price: 'BIO', action: () => setView('ABOUT') },
                { label: 'GALLERY', price: 'VIEW', action: () => setView('GALLERY') },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="group flex w-full items-end text-left font-mono text-base text-text-main transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  data-cursor="hover"
                >
                  <span className="relative font-bold whitespace-nowrap pl-4 transition-all group-hover:pl-5">
                    <span className="absolute left-0 text-accent-orange opacity-0 transition-opacity group-hover:opacity-100">&gt;</span>
                    {item.label}
                  </span>
                  <span className="mb-1.5 mx-3 flex-grow border-b-2 border-dotted border-gray-700 transition-colors group-hover:border-accent-orange" />
                  <span className="font-bold text-accent-orange text-sm md:text-base">{item.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Section: Signature Cocktails */}
          <div className="mb-8 w-full">
            <div className="mb-4 flex justify-between border-b border-text-dim pb-1 font-mono text-xs text-text-dim">
              <span className="text-accent-orange">SIGNATURE COCKTAILS</span>
              <span>STATUS</span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'COMMISSIONS', status: 'OPEN', href: 'https://vgen.co/Yan_Kodiac' },
                { label: 'MERCH STORE', status: 'BUY', href: 'https://shop.moso.moe/yan-kodiac/' },
                { label: 'PATREON', status: 'JOIN', href: 'https://www.patreon.com/yankodiac' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-end text-left font-mono text-base text-accent-orange transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  data-cursor="hover"
                >
                  <span className="relative font-bold whitespace-nowrap pl-4 transition-all group-hover:pl-5">
                    <span className="absolute left-0 text-accent-orange opacity-0 transition-opacity group-hover:opacity-100">&gt;</span>
                    {item.label}
                  </span>
                  <span className="mb-1.5 mx-3 flex-grow border-b-2 border-dotted border-gray-700 transition-colors group-hover:border-accent-orange" />
                  <span className="rounded bg-accent-orange px-1.5 py-0.5 text-xs font-bold text-black group-hover:bg-white">
                    {item.status}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-6 border-t border-white/10 pt-6">
            <a href="https://x.com/Yan_Kodiac" target="_blank" rel="noopener noreferrer" className="text-text-dim text-lg transition-transform hover:-translate-y-1 hover:text-accent-blue" data-cursor="hover">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://bsky.app/profile/yankodiac.com" target="_blank" rel="noopener noreferrer" className="text-text-dim text-lg transition-transform hover:-translate-y-1 hover:text-accent-blue" data-cursor="hover">
              <i className="fab fa-bluesky"></i>
            </a>
            <a href="mailto:yan.kodiac@gmail.com" className="text-text-dim text-lg transition-transform hover:-translate-y-1 hover:text-accent-blue" data-cursor="hover">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex h-[300px] flex-1 items-end justify-center overflow-hidden bg-black/40 md:h-auto">
          {/* Subtle Grid Background for Right Side */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          
          {/* Neon Circle */}
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.2)_0%,transparent_70%)] blur-xl"></div>
          
          {/* Character Image */}
          {/* INSTRUCTIONS: Name your file 'home-yan.png' and put it in public/images/ folder */}
          <img 
            src="/images/home-yan.png" 
            alt="Yan Kodiac OC" 
            className="relative z-10 w-[90%] max-w-[400px] object-cover mix-blend-normal mask-image-gradient md:w-[110%]"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
              filter: 'sepia(0.2) contrast(1.1)'
            }} 
            onError={(e) => {
              // Fallback if image isn't found yet
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/400/600?grayscale";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
