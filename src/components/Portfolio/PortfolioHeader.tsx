// PortfolioHeader.tsx
import React from 'react';
import type { ThemeProps } from './types';

const PortfolioHeader: React.FC<ThemeProps> = ({ isDarkMode }) => {
          return (
                    <div className="mb-12 md:mb-16 text-center md:text-left">
                              <h1 className={`text-4xl sm:text-5xl mb-4 sm:mb-6 bg-gradient-to-r ${isDarkMode
                                                  ? 'from-white to-slate-300'
                                                  : 'from-slate-900 to-slate-700'
                                        } bg-clip-text text-transparent`}>
                                        Akpamgbo Philip
                              </h1>
                              <h2 className={`text-lg sm:text-xl mb-6 sm:mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                                        }`}>
                                        Front End Engineer
                              </h2>
                              <p className={`text-base sm:text-lg leading-relaxed max-w-sm mx-auto md:mx-0 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                                        }`}>
                                        I build responsive, optimized and scalable digital experiences for the web.
                              </p>
                    </div>
          );
};

export default PortfolioHeader;