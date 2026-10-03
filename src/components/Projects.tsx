import React from 'react';
import { Rocket, UserCheck, HeartHandshake, CheckCircle2, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { DetailAccordion } from './shared/DetailAccordion';
import { Divider } from './shared/Divider';

export const Projects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'seph-2026':
        return <Rocket className="w-6 h-6 text-[#DCFF00]" />;
      case 'recruitment-2025':
        return <UserCheck className="w-6 h-6 text-[#DCFF00]" />;
      case 'tom-2025':
        return <HeartHandshake className="w-6 h-6 text-[#DCFF00]" />;
      default:
        return <Rocket className="w-6 h-6 text-[#DCFF00]" />;
    }
  };

  return (
    <section id="projects" className="pt-6 scroll-mt-6">
      <div className="px-6 sm:px-[78px] text-center mb-8">
        <h2
          className="text-white text-[36px] sm:text-[46px] leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Những dự án tôi tham gia
        </h2>
        <p className="text-[14px] text-[#83837D] mt-2 uppercase tracking-wider font-medium">
          Dự án xã hội, tuyển quân & phát triển cộng đồng
        </p>
      </div>

      {/* Video card per prompt specification */}
      <div className="px-5 sm:px-[42px] pb-10">
        <div className="block overflow-hidden rounded-[14px] group border border-white/10 bg-[#161616] shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[280px] sm:h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
          />
        </div>
      </div>

      <div className="px-5 sm:px-[42px] space-y-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group rounded-[14px] border border-white/10 bg-[#161616] p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl"
          >
            {/* Visual banner header with icon & badge */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-[10px] bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {getProjectIcon(project.id)}
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#DCFF00]/10 text-[#DCFF00] border border-[#DCFF00]/25">
                  {project.role}
                </span>
              </div>
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="mb-5 overflow-hidden rounded-[10px]">
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto rounded-[10px]"
                />
              </div>
            )}

            {/* Title */}
            <h3
              className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight mb-3 leading-snug"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {project.title}
            </h3>

            {/* Overview */}
            <p className="text-[16px] leading-[1.6] text-[#E8E8E8] mb-5">
              {project.overview}
            </p>

            {/* Responsibilities */}
            <div className="mb-5 bg-white/[0.02] border border-white/5 rounded-[12px] p-4">
              <div className="text-xs font-bold text-[#DCFF00] uppercase tracking-wider mb-3">
                Trách nhiệm & Nhiệm vụ cá nhân
              </div>
              <ul className="space-y-2.5">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-[#E8E8E8]">
                    <CheckCircle2 className="w-4 h-4 text-[#DCFF00] flex-shrink-0 mt-1 opacity-80" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expandable program details if SEPH */}
            {project.programDetails && (
              <DetailAccordion
                title="Thông tin chi tiết chương trình SEPH 2026"
                subtitle="Đối tượng, quy mô dự kiến, hình thức & hoạt động"
              >
                <div className="space-y-3 pt-2">
                  <div>
                    <span className="text-xs font-semibold text-[#83837D] uppercase block">
                      Đối tượng hướng tới:
                    </span>
                    <span className="text-[#F2F2F2]">
                      {project.programDetails.targetAudience}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#83837D] uppercase block">
                      Quy mô:
                    </span>
                    <span className="text-[#DCFF00] font-medium">
                      {project.programDetails.plannedScale}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#83837D] uppercase block">
                      Hình thức:
                    </span>
                    <span className="text-[#F2F2F2]">
                      {project.programDetails.format}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#83837D] uppercase block mb-1">
                      Hoạt động chính:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#E8E8E8]">
                      {project.programDetails.activities.map((act, aIdx) => (
                        <li key={aIdx}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#83837D] uppercase block">
                      Giá trị cốt lõi:
                    </span>
                    <span className="text-white font-medium">
                      {project.programDetails.coreValues}
                    </span>
                  </div>
                </div>
              </DetailAccordion>
            )}

            {/* Expandable subsection for TOM 2025 */}
            {project.contextDetails && (
              <DetailAccordion
                title={project.contextDetails.title}
                subtitle="Thông tin ghi nhận theo tư liệu chương trình"
              >
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-[#83837D] flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#DCFF00] flex-shrink-0 mt-0.5" />
                    <span>
                      Ghi chú: Các thông tin dưới đây phản ánh bối cảnh hoạt động chung của dự án theo tư liệu chương trình; không khẳng định vai trò tổ chức hay điều hành trực tiếp của cá nhân ngoài phạm vi mùa 2025 đã xác nhận.
                    </span>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-sm text-[#E8E8E8]">
                    {project.contextDetails.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              </DetailAccordion>
            )}
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};
