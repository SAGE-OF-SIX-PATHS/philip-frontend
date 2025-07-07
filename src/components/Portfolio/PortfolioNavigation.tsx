import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { NavigationProps } from './types';

const PortfolioNavigation: React.FC<NavigationProps> = ({
          navItems,
          activeNav,
          setActiveNav,
          isDarkMode
}) => {

          const scrollToSection = (sectionId: string) => {
                    setActiveNav(sectionId);
                    const element = document.getElementById(sectionId);
                    if (element) {
                              element.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                        inline: 'nearest'
                              });
                    }
          };

          return (
                    <nav className="mb-16">
                              {navItems.map((item) => (
                                        <div
                                                  key={item.id}
                                                  className={`group flex items-center mb-8 cursor-pointer transition-all duration-300 hover:scale-105 ${activeNav === item.id
                                                                      ? isDarkMode ? 'text-white' : 'text-slate-900'
                                                                      : isDarkMode ? 'text-slate-500' : 'text-slate-400'
                                                            }`}
                                                  onClick={() => scrollToSection(item.id)}
                                        >
                                                  <div
                                                            className={`h-0.5 mr-6 transition-all duration-500 ease-out ${activeNav === item.id
                                                                                ? isDarkMode
                                                                                          ? 'w-16 bg-white'
                                                                                          : 'w-16 bg-slate-900'
                                                                                : isDarkMode
                                                                                          ? 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-white'
                                                                                          : 'w-8 bg-slate-300 group-hover:w-16 group-hover:bg-slate-900'
                                                                      }`}
                                                  />
                                                  <span className="text-sm font-medium tracking-widest transition-all duration-300">
                                                            {item.label}
                                                  </span>
                                                  <ExternalLink
                                                            className={`ml-3 transition-all duration-300 ${activeNav === item.id || 'group-hover:scale-110'
                                                                      }`}
                                                            size={16}
                                                  />
                                        </div>
                              ))}
                    </nav>
          );
};

export default PortfolioNavigation;