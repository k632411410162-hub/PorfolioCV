import React from 'react';
import { Briefcase } from 'lucide-react';
import { mainExperience, earlierExperiences } from '../data/portfolioData';
import { Step } from './shared/Step';
import { DetailAccordion } from './shared/DetailAccordion';
import { SolidButton } from './shared/SolidButton';
import { Divider } from './shared/Divider';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="pt-6 scroll-mt-6">
      {/* Section Heading */}
      <div className="px-6 sm:px-[78px] text-center mb-8">
        <h2
          className="text-white text-[36px] sm:text-[46px] leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Từ ý tưởng đến triển khai
        </h2>
        <p className="text-[14px] text-[#83837D] mt-2 uppercase tracking-wider font-medium">
          Kinh nghiệm điều phối và phát triển dự án
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
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
          />
        </div>
      </div>

      {/* Main Experience: Enactus FTU Hanoi */}
      <div className="px-6 sm:px-[76px] mb-8">
        <div className="mb-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-[#DCFF00]" />
              <h3 className="text-[20px] font-bold text-white tracking-tight">
                {mainExperience.organization}
              </h3>
            </div>
            <p className="text-[15px] font-medium text-[#DCFF00]">
              {mainExperience.role}
            </p>
          </div>
          <span className="text-xs font-semibold text-[#83837D] bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
            {mainExperience.period}
          </span>
        </div>

        {/* 4 Step numbered rows */}
        <div className="space-y-4">
          {mainExperience.steps?.map((stepText, idx) => (
            <Step key={idx} number={idx + 1}>
              {stepText}
            </Step>
          ))}
        </div>
      </div>

      {/* Earlier Experiences: Expandable cards */}
      <div className="px-6 sm:px-[76px] space-y-4 mb-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#83837D] mb-2">
          Kinh nghiệm trước đó
        </div>

        {earlierExperiences.map((exp, idx) => (
          <DetailAccordion
            key={idx}
            title={exp.organization}
            subtitle={`${exp.role} · (${exp.period})`}
          >
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#DCFF00] mb-2 uppercase tracking-wide">
                Nhiệm vụ chính:
              </p>
              <ul className="space-y-2 list-disc list-inside text-[15px] text-[#E8E8E8]">
                {exp.responsibilities?.map((resp, rIdx) => (
                  <li key={rIdx} className="leading-[1.6]">
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DetailAccordion>
        ))}
      </div>

      {/* CTA Button */}
      <div className="px-6 text-center">
        <SolidButton
          label="Khám phá dự án tiêu biểu"
          href="#projects"
        />
      </div>

      <Divider />
    </section>
  );
};
