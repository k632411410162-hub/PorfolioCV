import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Books } from './components/Books';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';

export const App: React.FC = () => {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#050505] py-6 sm:py-12 px-3 sm:px-4 font-sans selection:bg-[#DCFF00] selection:text-[#0A0A0A] relative overflow-x-hidden"
    >
      {/* 
        Full-viewport fixed moving starry sky background video:
        Uses the exact timelapse motion video, scaled and aligned to top to show only the starry sky.
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          src="/images/video-starry.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[140%] object-cover object-top origin-top scale-120 opacity-80"
        />
        {/* Subtle cosmic vignette for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(5,5,10,0.1) 0%, rgba(5,5,10,0.55) 60%, rgba(5,5,10,0.92) 100%)',
          }}
        />
      </div>

      {/* Background Audio Player running smoothly throughout the website */}
      <AudioPlayer />

      {/* Email-style container: narrow centered layout floating over the moving starry cosmic backdrop */}
      <main className="relative z-10 max-w-[640px] mx-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/10 rounded-2xl bg-[#111111] text-[#F2F2F2]">
        {/* 1. Hero with starry sky video background */}
        <Hero />

        {/* 2. Giới thiệu và học vấn with profile portrait card */}
        <About />

        {/* 3. Kinh nghiệm và cách tôi làm việc with media video */}
        <Experience />

        {/* 4. Dự án tiêu biểu with media video */}
        <Projects />

        {/* 5. Nghiên cứu */}
        <Research />

        {/* 6. Góc đọc sách */}
        <Books />

        {/* 7. Lime Contact CTA */}
        <Contact />

        {/* 8. Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
