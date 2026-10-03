import React, { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';

interface DetailAccordionProps {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const DetailAccordion: React.FC<DetailAccordionProps> = ({
  title,
  subtitle,
  defaultOpen = false,
  children,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const buttonId = useId();

  return (
    <div
      className={`rounded-[14px] border border-white/10 bg-white/[0.025] overflow-hidden transition-colors duration-200 hover:border-white/20 ${className}`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-1 focus:ring-[#DCFF00]/50 transition-colors"
      >
        <div className="flex-1 pr-2">
          <span className="text-[15px] font-medium text-[#F2F2F2] block">
            {title}
          </span>
          {subtitle && (
            <span className="text-xs text-[#83837D] mt-0.5 block">
              {subtitle}
            </span>
          )}
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[#83837D] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#DCFF00]' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="px-5 pb-5 pt-1 text-[15px] leading-[1.7] text-[#E8E8E8] border-t border-white/5"
        >
          {children}
        </div>
      )}
    </div>
  );
};
