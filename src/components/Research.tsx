import React from 'react';
import { AlertCircle, TrendingUp } from 'lucide-react';
import { researchData } from '../data/portfolioData';
import { DetailAccordion } from './shared/DetailAccordion';
import { Divider } from './shared/Divider';

export const Research: React.FC = () => {
  return (
    <section id="research" className="pt-6 scroll-mt-6">
      {/* Section Heading & Intro */}
      <div className="px-6 sm:px-[78px] text-center mb-8">
        <h2
          className="text-white text-[36px] sm:text-[46px] leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Những câu hỏi tôi theo đuổi
        </h2>
        <p className="text-[17px] leading-[1.6] text-[#E8E8E8] mt-4 max-w-[520px] mx-auto">
          Các công trình tôi tham gia tập trung vào kinh tế phát triển, thể chế, đổi mới sáng tạo, môi trường, thương mại quốc tế và cấu trúc ngành.
        </p>
      </div>

      {/* 5 Research Cards */}
      <div className="px-5 sm:px-[42px] space-y-7">
        {researchData.map((res, index) => (
          <div
            key={res.id}
            className="group rounded-[14px] border border-white/10 bg-[#161616] p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:border-white/20"
          >
            {/* Index, Role badge, & Short title */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono font-semibold text-[#DCFF00] tracking-wider uppercase">
                Công trình {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8E8E8]">
                {res.authorshipRole}
              </span>
            </div>

            <h3
              className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight mb-2 leading-snug"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {res.shortTitle}
            </h3>

            {/* Full title in italics / secondary styling */}
            <p className="text-sm italic text-[#83837D] mb-4 leading-relaxed border-l-2 border-[#DCFF00]/40 pl-3">
              "{res.fullTitle}"
            </p>

            {/* Research Focus */}
            <div className="mb-4">
              <span className="text-xs font-bold text-[#83837D] uppercase tracking-wider block mb-1">
                Câu hỏi & Trọng tâm nghiên cứu:
              </span>
              <p className="text-[15px] leading-[1.6] text-[#E8E8E8]">
                {res.researchFocus}
              </p>
            </div>

            {/* Core Finding Summary (Always Visible) */}
            <div className="p-4 rounded-[12px] bg-white/[0.02] border border-white/10 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#DCFF00]" />
                <span className="text-xs font-bold text-[#DCFF00] uppercase tracking-wide">
                  Kết quả nghiên cứu chính trong mẫu:
                </span>
              </div>
              <p className="text-[15px] leading-[1.6] text-[#F2F2F2]">
                {res.findings}
              </p>
              {res.additionalFindings && (
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-[#E8E8E8]">
                  {res.additionalFindings.map((item, fIdx) => (
                    <li key={fIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Expandable panel for Dataset, Methods & Implications */}
            <DetailAccordion
              title="Phương pháp, dữ liệu & hàm ý chính sách"
              subtitle="Nhấn để xem chi tiết mô hình, mẫu quan sát và lưu ý khoa học"
            >
              <div className="space-y-4 pt-2">
                {/* Data */}
                <div>
                  <span className="text-xs font-bold text-[#83837D] uppercase block mb-1">
                    Dữ liệu & Mẫu nghiên cứu:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#E8E8E8]">
                    {res.data.map((d, dIdx) => (
                      <li key={dIdx}>{d}</li>
                    ))}
                  </ul>
                </div>

                {/* Methods */}
                <div>
                  <span className="text-xs font-bold text-[#83837D] uppercase block mb-1">
                    Phương pháp & Mô hình định lượng:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#E8E8E8]">
                    {res.methods.map((m, mIdx) => (
                      <li key={mIdx}>{m}</li>
                    ))}
                  </ul>
                </div>

                {/* Implications */}
                <div>
                  <span className="text-xs font-bold text-[#83837D] uppercase block mb-1">
                    Hàm ý chính sách & quản trị:
                  </span>
                  <p className="text-sm leading-relaxed text-[#F2F2F2]">
                    {res.implications}
                  </p>
                </div>

                {/* Scientific qualification */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-[#83837D] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#DCFF00] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#E8E8E8]">Lưu ý phương pháp:</strong> {res.qualification}
                  </span>
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
