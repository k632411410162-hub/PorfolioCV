import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Dự án", href: "#projects" },
    { label: "Nghiên cứu", href: "#research" },
    { label: "Góc đọc sách", href: "#books" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <footer className="bg-[#080808] text-white pt-12 px-6 sm:px-[78px] text-center border-t border-white/5 pb-10">
      {/* Top Wordmark */}
      <div className="mb-2">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="text-[30px] tracking-tight text-white hover:text-[#DCFF00] transition-colors inline-block"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          aria-label="Về đầu trang"
        >
          Nguyễn Quỳnh Trang
        </a>
      </div>

      {/* Short footer copy */}
      <p className="text-[12px] text-[#83837D] leading-[1.5] pb-8">
        Kinh tế Quốc tế · Nghiên cứu · Dự án cộng đồng · Góc đọc sách
      </p>

      {/* Divider */}
      <div className="flex justify-center pb-8">
        <div className="h-px w-24 bg-white/20" />
      </div>

      {/* 3 Verified Action Icon Buttons */}
      <div className="flex items-center justify-center gap-4 pb-8">
        <a
          href={`mailto:${contactData.email}`}
          aria-label="Gửi thư điện tử cho Nguyễn Quỳnh Trang"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E8E8E8] hover:bg-[#DCFF00] hover:text-[#1E1E1E] hover:border-[#DCFF00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DCFF00]"
        >
          <Mail className="w-[18px] h-[18px]" />
        </a>

        <a
          href={`tel:${contactData.phone}`}
          aria-label="Gọi điện thoại cho Nguyễn Quỳnh Trang"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E8E8E8] hover:bg-[#DCFF00] hover:text-[#1E1E1E] hover:border-[#DCFF00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DCFF00]"
        >
          <Phone className="w-[18px] h-[18px]" />
        </a>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#E8E8E8] hover:bg-[#DCFF00] hover:text-[#1E1E1E] hover:border-[#DCFF00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DCFF00]"
        >
          <ArrowUp className="w-[18px] h-[18px]" />
        </button>
      </div>

      {/* Footer Navigation */}
      <nav aria-label="Điều hướng chân trang" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#83837D] pb-8">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-[#DCFF00] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <div className="text-xs text-[#83837D]/70 font-normal">
        © 2026 Nguyễn Quỳnh Trang
      </div>
    </footer>
  );
};
