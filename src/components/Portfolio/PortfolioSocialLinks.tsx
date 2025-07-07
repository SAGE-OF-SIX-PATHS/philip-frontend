import React from 'react';
import type { SocialLinksProps } from './types';

const PortfolioSocialLinks: React.FC<SocialLinksProps> = ({
          socialLinks,
          isDarkMode
}) => {
          return (
                    <div className="flex space-x-6">
                              {socialLinks.map((link, index) => (
                                        <a
                                                  key={index}
                                                  href={link.href}
                                                  aria-label={link.label}
                                                  className={`transition-colors cursor-pointer ${isDarkMode
                                                                      ? 'text-slate-400 hover:text-white'
                                                                      : 'text-slate-600 hover:text-slate-900'
                                                            }`}
                                        >
                                                  <link.icon className="w-6 h-6" />
                                        </a>
                              ))}
                    </div>
          );
};

export default PortfolioSocialLinks;