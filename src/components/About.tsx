import React from 'react';
import { GraduationCap } from 'lucide-react';
import { aboutData, educationData } from '../data/portfolioData';
import { PrimaryButton } from './shared/PrimaryButton';
import { Divider } from './shared/Divider';
import profileImg from '../assets/profile.jpg';

export const About: React.FC = () => {
  const quickLinks = [
    { label: "Kinh nghiệm", href: "#experience" },
    { label: "Dự án", href: "#projects" },
    { label: "Nghiên cứu", href: "#research" },
    { label: "Góc đọc sách", href: "#books" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <section id="about" className="pt-10 scroll-mt-6">
      <div className="px-6 sm:px-[78px] text-center">
        {/* Section Heading */}
        <h2
          className="text-white text-[36px] sm:text-[46px] leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Đôi nét về tôi
        </h2>

        {/* Editorial Profile Image Card with uploaded portrait */}
        <div className="mb-8 max-w-[460px] mx-auto overflow-hidden rounded-[14px] border border-white/10 bg-[#161616] group shadow-2xl">
          <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
            <img
              src={profileImg}
              alt="Nguyễn Quỳnh Trang"
              className="w-full h-full object-cover object-top rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              onError={(e) => {
                // Fallback to public path if needed
                (e.currentTarget as HTMLImageElement).src = '/images/profile.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#E8E8E8]">
              <span className="font-medium bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Nguyễn Quỳnh Trang · K63 FTU
              </span>
              <span className="text-[#DCFF00] font-mono text-[11px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                2024–2028
              </span>
            </div>
          </div>
        </div>

        {/* Bio paragraph */}
        <p className="text-[18px] leading-[1.55] text-[#E8E8E8] text-justify sm:text-center font-normal">
          {aboutData.bio}
        </p>

        {/* Education Timeline */}
        <div className="mt-10 text-left">
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <GraduationCap className="w-5 h-5 text-[#DCFF00]" />
            <h3
              className="text-[22px] tracking-tight text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Học vấn
            </h3>
          </div>

          <div className="space-y-4">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[12px] border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-start justify-between gap-2 hover:border-white/20 transition-colors"
              >
                <div>
                  <h4 className="text-[17px] font-semibold text-[#F2F2F2]">
                    {edu.institution}
                  </h4>
                  <div className="text-[15px] text-[#83837D] mt-1 space-y-0.5">
                    {edu.major && <div>{edu.major} · {edu.program}</div>}
                    {edu.cohort && <div>Khóa: {edu.cohort}</div>}
                    {edu.specialization && <div>{edu.specialization}</div>}
                  </div>
                </div>
                <div className="text-xs font-medium text-[#DCFF00] bg-[#DCFF00]/10 px-2.5 py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-center border border-[#DCFF00]/20">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick in-page navigation anchors */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-2">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-[#83837D] hover:text-[#DCFF00] px-3 py-1.5 rounded-full border border-white/5 hover:border-[#DCFF00]/30 transition-colors"
            >
              {link.label} →
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <PrimaryButton label="Xem các dự án" href="#projects" />
        </div>
      </div>

      <Divider />
    </section>
  );
};
