import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showCredits, setShowCredits] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Attempt to autoplay on mount
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          // State will be updated by the onPlay event listener below
        } catch (e) {
          console.log("Autoplay blocked by browser policy. User interaction required.");
        }
      }
    };
    attemptAutoplay();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (browser policy):", e));
      }
      // Note: We don't manually setIsPlaying here anymore.
      // We rely on the <audio> onPlay/onPause events to update state.
      // This ensures the UI is always in sync with reality (e.g. if browser blocks autoplay).
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9000] flex flex-col items-end gap-2 animate-fade-in pointer-events-auto">
        
        {/* Credits Pop-up */}
        {showCredits && (
          <div className="mb-2 w-64 rounded border border-accent-blue/30 bg-bg-panel p-3 text-[0.65rem] text-text-dim shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="mb-2 border-b border-white/10 pb-1 font-mono font-bold text-accent-blue">
              TRACK_INFO
            </div>
            <p className="mb-2">
              <span className="text-white">Track:</span> Lost In Thought<br/>
              <span className="text-white">Artist:</span> Ghostrifter
            </p>
            <div className="border-l-2 border-accent-orange bg-white/5 p-2 font-mono text-[0.6rem] italic leading-relaxed">
              "Lost In Thought by Ghostrifter http://bit.ly/ghostrifter-yt<br/>
              Creative Commons — Attribution-NoDerivs 3.0 Unported — CC BY-ND 3.0<br/>
              Free Download: https://hypeddit.com/pwwwco"
            </div>
          </div>
        )}

        {/* Player Controls */}
        <div className="flex items-center gap-3 rounded-full border border-accent-orange/30 bg-bg-dark/90 px-4 py-2 shadow-[0_0_15px_rgba(255,107,53,0.15)] backdrop-blur transition-all hover:border-accent-orange">
          
          {/* Info Toggle */}
          <button 
            onClick={() => setShowCredits(!showCredits)}
            className="text-xs text-text-dim transition-colors hover:text-accent-blue cursor-none"
            data-cursor="hover"
            title="Credits"
          >
            <i className="fas fa-info-circle"></i>
          </button>

          {/* Play/Pause */}
          <button 
            onClick={togglePlay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-orange/10 text-accent-orange transition-all hover:bg-accent-orange hover:text-black cursor-none"
            data-cursor="hover"
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs`}></i>
          </button>

          {/* Track Name */}
          <div className="hidden w-24 overflow-hidden md:block">
            <div className={`whitespace-nowrap font-mono text-[0.65rem] text-white ${isPlaying ? 'animate-marquee' : ''}`}>
              LOST IN THOUGHT - GHOSTRIFTER
            </div>
          </div>

          {/* Volume Slider */}
          <div className="group relative flex items-center">
            <i className="fas fa-volume-down mr-2 text-[0.65rem] text-text-dim"></i>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 w-16 appearance-none rounded-full bg-white/10 accent-accent-orange outline-none cursor-none"
              data-cursor="hover"
            />
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      {/* INSTRUCTIONS: Create a folder named 'music' inside 'public' and add your mp3 file there named 'lost-in-thought.mp3' */}
      <audio 
        ref={audioRef}
        src="/music/lost-in-thought.mp3"
        loop
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;