import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[680px] sm:aspect-[640/820] flex flex-col">
      {/* 
        Background Video cropped to only show the starry sky ("lấy bầu trời thôi"):
        We scale and align to top so the rocks and person at the bottom are completely cropped out.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          src="/images/video-starry.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[135%] object-cover object-top origin-top scale-115 -translate-y-2"
        />
      </div>

      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-[#0C0D0E] -z-10" />

      {/* Specified gradient overlay for smooth editorial blending */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(17,17,17,0) 40%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)',
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10 flex-1 justify-between">
        {/* Top wordmark and subtitle */}
        <div>
          <h1
            className="text-[28px] leading-[1.1] tracking-tight text-[#F2F2F2]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Nguyễn Quỳnh Trang
          </h1>
          <p className="text-[13px] tracking-[0.22em] font-medium mt-2 text-[#83837D] uppercase">
            Personal Portfolio
          </p>
        </div>

        {/* Center editorial visual badge */}
        <div className="my-auto py-8 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#DCFF00] shadow-[0_0_25px_rgba(220,255,0,0.12)]">
            <Compass className="w-6 h-6 stroke-[1.5]" />
          </div>
        </div>

        {/* Main headline and CTA */}
        <div className="w-full flex flex-col items-center">
          <div className="text-white text-[11px] sm:text-[13px] tracking-[0.16em] font-semibold uppercase mb-4 text-[#E8E8E8]">
            KINH TẾ QUỐC TẾ · NGHIÊN CỨU · DỰ ÁN CỘNG ĐỒNG
          </div>

          <h2
            className="text-white text-[40px] sm:text-[54px] leading-[1.08] tracking-tight max-w-[560px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Nghiên cứu, hành động<br />và những điều tôi tâm đắc
          </h2>

          <a
            href="#about"
            className="mt-9 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D8F90A] focus:ring-offset-2 focus:ring-offset-[#111111]"
          >
            <span>Khám phá portfolio</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};
