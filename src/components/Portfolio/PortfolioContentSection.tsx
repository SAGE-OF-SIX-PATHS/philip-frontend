import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ContentSectionProps } from './types';

const PortfolioContentSection: React.FC<ContentSectionProps> = ({
          section,
          isDarkMode,
          className
}) => {
          return (
                    <div
                              id={section.sectionId}
                              className={`
        ${isDarkMode
                                                  ? section.bgColor
                                                  : 'bg-white/80 backdrop-blur-sm border border-slate-200'
                                        }
        rounded-lg 
        p-6 sm:p-8
        mb-8 
        flex flex-col justify-center items-center sm:items-start /* ✅ Center items mobile, left-align sm+ */
        transition-all duration-300 hover:translate-x-2 sm:hover:translate-x-4
        ${isDarkMode
                                                  ? 'hover:shadow-2xl hover:shadow-slate-900/50'
                                                  : 'hover:shadow-2xl hover:shadow-slate-500/20'
                                        }
        cursor-pointer group
        ${section.id === 1 ? 'ml-2 mt-6 sm:mt-0' : 'ml-4'} 
        ${className ?? ''}
      `}
                    >
                              <div className="mb-3 text-center sm:text-left">
                                        {/* ✅ Center text on mobile */}
                                        <span className={`text-xs sm:text-sm font-medium tracking-wide ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                                  {section.period}
                                        </span>
                              </div>

                              <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors text-center sm:text-left ${isDarkMode
                                        ? 'text-white group-hover:text-slate-200'
                                        : 'text-slate-900 group-hover:text-slate-700'
                                        }`}>
                                        {section.title}
                              </h3>

                              <div className="flex flex-col sm:flex-row items-center sm:items-center mb-3 text-center sm:text-left">
                                        {/* ✅ Flex-col on mobile for vertical centering */}
                                        <span className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                                  {section.company}
                                        </span>
                                        <ExternalLink
                                                  className={`ml-0 sm:ml-2 mt-1 sm:mt-0 transition-colors ${isDarkMode
                                                            ? 'text-slate-400 group-hover:text-slate-200'
                                                            : 'text-slate-600 group-hover:text-slate-800'
                                                            }`}
                                                  size={18}
                                        />
                              </div>

                              <p className={`leading-relaxed mb-5 text-sm sm:text-base transition-colors text-center sm:text-left ${isDarkMode
                                        ? 'text-slate-300 group-hover:text-slate-200'
                                        : 'text-slate-700 group-hover:text-slate-600'
                                        }`}>
                                        {section.description}
                              </p>

                              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                        {/* ✅ Tags centered mobile, left sm+ */}
                                        {section.tags.map((tag, index) => (
                                                  <span
                                                            key={index}
                                                            className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${isDarkMode
                                                                      ? 'bg-slate-700/50 text-slate-300 group-hover:bg-slate-600/50'
                                                                      : 'bg-slate-200 text-slate-700 group-hover:bg-slate-300'
                                                                      }`}
                                                  >
                                                            {tag}
                                                  </span>
                                        ))}
                              </div>
                    </div>
          );
};

export default PortfolioContentSection;
