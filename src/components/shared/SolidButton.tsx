import React from 'react';

interface SolidButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export const SolidButton: React.FC<SolidButtonProps> = ({
  label,
  href,
  onClick,
  className = '',
  target,
  rel,
}) => {
  const baseClasses =
    "inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111111]";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        target={target}
        rel={rel}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </button>
  );
};
