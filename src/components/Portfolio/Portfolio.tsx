// Portfolio.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioHeader from './PortfolioHeader';
import PortfolioNavigation from './PortfolioNavigation';
import PortfolioSocialLinks from './PortfolioSocialLinks';
import PortfolioContentSection from './PortfolioContentSection';
import { navItems, socialLinks, scrollSections } from './portfolioData';
import type { PortfolioProps } from './types';

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode = true }) => {
          const [activeNav, setActiveNav] = useState('about');
          
          
          // Scroll spy functionality
          useEffect(() => {
                    const handleScroll = () => {
                              const sections = ['about', 'experience', 'projects'];
                              const scrollPosition = window.scrollY + 200;

                              for (const section of sections) {
                                        const element = document.getElementById(section);
                                        if (element) {
                                                  const offsetTop = element.offsetTop;
                                                  const offsetBottom = offsetTop + element.offsetHeight;

                                                  if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                                                            setActiveNav(section);
                                                            break;
                                                  }
                                        }
                              }
                    };

                    window.addEventListener('scroll', handleScroll);
                    return () => window.removeEventListener('scroll', handleScroll);
          }, []);

          

          return (
                    <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="min-h-screen w-full overflow-x-hidden"
                    >
                              {/* Desktop Layout */}
                              <div className="hidden lg:flex min-h-screen">
                                        {/* Fixed Left Section */}
                                        <div
                                                  className={`lg:fixed left-0 top-0 w-[500px] h-screen p-16 flex flex-col justify-center z-10 transition-colors duration-300 ${isDarkMode
                                                                      ? 'bg-slate-900/95 backdrop-blur-sm'
                                                                      : 'bg-white/95 backdrop-blur-sm border-r border-slate-200'
                                                            }`}
                                        >
                                                  <PortfolioHeader isDarkMode={isDarkMode} />
                                                  <PortfolioNavigation
                                                            navItems={navItems}
                                                            activeNav={activeNav}
                                                            setActiveNav={setActiveNav}
                                                            isDarkMode={isDarkMode}
                                                  />
                                                  <PortfolioSocialLinks
                                                            socialLinks={socialLinks}
                                                            isDarkMode={isDarkMode}
                                                  />
                                        </div>

                                        {/* Scrollable Right Section */}
                                        <motion.div
                                                  initial={{ opacity: 0, y: 50 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 1 }}
                                                  className="ml-[500px] flex-1 overflow-y-auto "
                                        >
                                                  <div className="p-8 space-y-8 sm:space-y-12 ">
                                                            {scrollSections.map((section) => (
                                                                      <motion.div
                                                                                key={section.id}
                                                                                initial={{ opacity: 0, y: 30 }}
                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                transition={{ duration: 0.8, delay: section.id * 0.2 }}
                                                                                viewport={{ once: true }}
                                                                      >
                                                                                <PortfolioContentSection
                                                                                          section={section}
                                                                                          isDarkMode={isDarkMode}
                                                                                          className=""
                                                                                />
                                                                      </motion.div>
                                                            ))}
                                                  </div>

                                        </motion.div>
                              </div>

                              {/* Mobile Layout - Optimized */}
                              <div className="lg:hidden min-h-screen w-full h-full ">
                                        {/* Mobile Header Section */}
                                        <motion.div
                                                  initial={{ opacity: 0, y: -50 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.8 }}
                                                  className={` px-5 py-8 transition-colors duration-300 h-inherit ${isDarkMode
                                                                      ? 'bg-slate-900/95 backdrop-blur-sm'
                                                                      : 'bg-white/95 backdrop-blur-sm'
                                                            }`}
                                        >
                                                  <div className="mb-8 max-w-full h-full">
                                                            <PortfolioHeader isDarkMode={isDarkMode} />
                                                  </div>

                                                  {/* Navigation */}
                                                  <div className="mb-8 w-full ">
                                                            <div className="w-full overflow-x-auto scrollbar-hide pb-2">
                                                                      <PortfolioNavigation
                                                                                navItems={navItems}
                                                                                activeNav={activeNav}
                                                                                setActiveNav={setActiveNav}
                                                                                isDarkMode={isDarkMode}
                                                                      />
                                                            </div>
                                                  </div>

                                                  {/* Social Links */}
                                                  <div className="flex justify-center">
                                                            <PortfolioSocialLinks
                                                                      socialLinks={socialLinks}
                                                                      isDarkMode={isDarkMode}
                                                            />
                                                  </div>
                                        </motion.div>

                                        {/* Mobile Content Sections - Simplified */}
                                        <div className="px-0 py-6 w-full ">
                                                  <div className="space-y-16 w-full h-full">
                                                            {scrollSections.map((section, index) => (
                                                                      <motion.div
                                                                                key={section.id}
                                                                                initial={{ opacity: 0, y: 30 }}
                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                                                                viewport={{ once: true, margin: "-50px" }}
                                                                                className={`w-full h-full ${isDarkMode
                                                                                                    ? 'text-slate-200'
                                                                                                    : 'text-slate-800'
                                                                                          }`}
                                                                      >
                                                                                <PortfolioContentSection
                                                                                          section={section}
                                                                                          isDarkMode={isDarkMode}
                                                                                />
                                                                      </motion.div>
                                                            ))}
                                                  </div>
                                        </div>
                              </div>
                    </motion.div>
          );
};

export default Portfolio;