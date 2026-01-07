import React, { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Particles from './components/Particles';
import Scanlines from './components/Scanlines';
import Home from './views/Home';
import About from './views/About';
import Gallery from './views/Gallery';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  // Artist Protection: Disable Right Click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-bg-dark text-text-main font-sans selection:bg-accent-orange selection:text-black">
      
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none z-[999] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_50%,transparent_50%)] bg-[length:100%_4px] opacity-60"></div>
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,107,53,0.05)_0%,transparent_20%),radial-gradient(circle_at_90%_80%,rgba(77,238,234,0.05)_0%,transparent_20%)]"></div>
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <Cursor />
      <Particles />
      <Scanlines />

      {/* Main Content Area */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        {currentView === 'HOME' && <Home currentView={currentView} setView={setCurrentView} />}
        {currentView === 'ABOUT' && <About currentView={currentView} setView={setCurrentView} />}
        {currentView === 'GALLERY' && <Gallery currentView={currentView} setView={setCurrentView} />}
      </main>

    </div>
  );
};

export default App;