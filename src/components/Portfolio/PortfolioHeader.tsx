import React from 'react';
import type { ThemeProps } from './types';

const PortfolioHeader: React.FC<ThemeProps> = ({ isDarkMode }) => {
  return (
    <div
      className="
        pt-4 sm:pt-6 md:pt-8   /* ✅ Reduced top padding */
        pb-2 sm:pb-4 md:pb-6   /* ✅ Reduced bottom padding */
        mb-2 md:mb-6           /* ✅ Reduced bottom margin */
        text-center md:text-left
      "
    >
      <h1
        className={`
          text-3xl sm:text-4xl mb-2 sm:mb-4   /* ✅ Smaller font size & tighter margin */
          bg-gradient-to-r
          ${isDarkMode ? 'from-white to-slate-300' : 'from-slate-900 to-slate-600'}
          bg-clip-text text-transparent font-orbitron font-bold tracking-tight
        `}
      >
        Akpamgbo Philip
      </h1>

      <h2
        className={`
          text-base sm:text-lg mb-2 sm:mb-4   /* ✅ Slightly smaller, tighter spacing */
          ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}
        `}
      >
        Fullstack Engineer (MERN)
      </h2>

      <p
        className={`
          text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0
          ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}
        `}
      >
        I build responsive, <br /> optimized and scalable <br /> digital experiences for the web.
      </p>
    </div>
  );
};

export default PortfolioHeader;
