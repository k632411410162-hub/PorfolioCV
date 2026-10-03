import React from 'react';

interface StepProps {
  number: number | string;
  children: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({ number, children }) => {
  return (
    <div className="flex items-start gap-5 mb-6 last:mb-0">
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1 select-none">
        {number}.
      </div>
      <div className="text-[17px] leading-[1.55] text-[#E8E8E8] flex-1">
        {children}
      </div>
    </div>
  );
};
