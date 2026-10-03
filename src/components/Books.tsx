import React from 'react';
import { BookOpen, AlertTriangle } from 'lucide-react';
import { booksData } from '../data/portfolioData';
import { DetailAccordion } from './shared/DetailAccordion';
import { Divider } from './shared/Divider';

export const Books: React.FC = () => {
  return (
    <section id="books" className="pt-6 scroll-mt-6">
      {/* Section Heading & Intro */}
      <div className="px-6 sm:px-[78px] text-center mb-8">
        <h2
          className="text-white text-[36px] sm:text-[46px] leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Những trang sách tôi tâm đắc
        </h2>
        <p className="text-[17px] leading-[1.6] text-[#E8E8E8] mt-4 max-w-[540px] mx-auto">
          Một góc dành cho những cuốn sách tôi tâm đắc, từ ký ức và tình thân đến những câu hỏi về con người, lý trí, cảm xúc và cái đẹp.
        </p>
      </div>

      {/* Book list */}
      <div className="px-5 sm:px-[42px] space-y-7">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="group rounded-[14px] border border-white/10 bg-[#161616] p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            {/* Book Cover Image */}
            {book.image && (
              <div className="flex justify-center mb-5 overflow-hidden rounded-[10px]">
                <img
                  src={`/images/${book.image}`}
                  alt={book.title}
                  loading="lazy"
                  className="h-[240px] sm:h-[300px] object-contain rounded-[10px]"
                />
              </div>
            )}

            {/* Typographic CSS Book Plate Header */}
            <div className="p-5 rounded-[12px] bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-white/10 mb-5 relative overflow-hidden flex flex-col justify-between min-h-[110px]">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-[#DCFF00]/5 pointer-events-none" />
              <div className="flex items-center justify-between text-[#83837D] text-xs font-mono uppercase tracking-wider mb-2">
                <span>Góc đọc sách</span>
                <BookOpen className="w-4 h-4 text-[#DCFF00]/70" />
              </div>
              <div>
                <h3
                  className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-snug"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {book.title}
                </h3>
                <p className="text-sm font-medium text-[#DCFF00] mt-1">
                  {book.author}
                </p>
              </div>
            </div>

            {/* Display Subtitle if present */}
            {book.subtitle && (
              <p className="text-xs uppercase tracking-wider font-semibold text-[#83837D] mb-3">
                {book.subtitle}
              </p>
            )}

            {/* Concise thematic summary */}
            <p className="text-[16px] leading-[1.6] text-[#E8E8E8] mb-5">
              {book.summary}
            </p>

            {/* Expandable "Đọc thêm" panel */}
            <DetailAccordion
              title="Đọc thêm về các chủ đề chính"
              subtitle="Ghi chép cảm thụ và thông điệp nổi bật"
            >
              <div className="space-y-3 pt-2">
                {book.hasSpoilerWarning && (
                  <div className="p-3 rounded-lg bg-[#DCFF00]/10 border border-[#DCFF00]/25 text-xs text-[#DCFF00] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>
                      Lưu ý: Phần mở rộng có thể đề cập đến chi tiết logic và diễn biến tâm lý tác phẩm.
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-[#83837D] uppercase block mb-2">
                    Các chủ đề & suy tưởng trọng tâm:
                  </span>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-[#E8E8E8]">
                    {book.expandedThemes.map((theme, tIdx) => (
                      <li key={tIdx} className="leading-relaxed">
                        {theme}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DetailAccordion>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};
