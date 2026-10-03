import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-5 sm:px-10 pb-12 pt-4 scroll-mt-6">
      <div className="bg-[#D8F90A] rounded-[10px] px-6 sm:px-10 py-12 text-center text-[#1E1E1E] shadow-xl relative overflow-hidden">
        {/* Subtle decorative background detail */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-black/[0.03] pointer-events-none -mr-16 -mt-16" />

        <h2
          className="text-[#1E1E1E] text-[40px] sm:text-[52px] leading-[1.08] tracking-tight mb-3"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Cùng trao đổi<br />và kết nối
        </h2>

        <p className="text-[#1E1E1E] text-[17px] sm:text-[18px] leading-[1.5] max-w-[480px] mx-auto mb-8 font-normal">
          Bạn muốn trao đổi về nghiên cứu, dự án cộng đồng hoặc những cuốn sách tôi tâm đắc? Hãy liên hệ với tôi.
        </p>

        {/* Lime button with dark border & dark styling so it stands out cleanly on the lime card */}
        <div className="mb-10">
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-3 bg-[#0A0A0A] text-[#DCFF00] font-bold rounded-lg px-8 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#1E1E1E] hover:text-[#DCFF00] hover:-translate-y-0.5 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2 focus:ring-offset-[#D8F90A]"
          >
            <span>Gửi email</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
          </a>
        </div>

        {/* Contact info list */}
        <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-[#1E1E1E]">
          <a
            href={`mailto:${contactData.email}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="w-4 h-4 text-[#0A0A0A]" />
            <span>{contactData.email}</span>
          </a>

          <a
            href={`tel:${contactData.phone}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4 text-[#0A0A0A]" />
            <span>{contactData.phone}</span>
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0A0A0A]" />
            <span>{contactData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
