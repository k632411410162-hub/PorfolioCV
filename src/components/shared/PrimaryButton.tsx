import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  href,
  onClick,
  className = '',
  target,
  rel,
  download,
}) => {
  const baseClasses =
    "inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DCFF00] focus:ring-offset-2 focus:ring-offset-[#111111]";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        target={target}
        rel={rel}
        download={download}
      >
        <span>{label}</span>
        <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
    </button>
  );
};
