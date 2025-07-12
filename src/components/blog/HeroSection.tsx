import React from 'react';
import HeroHeader from './HeroHeader';
import HeroImage from './HeroImage';
import HeroSkills from './HeroSkills';

const HeroSection: React.FC = () => {
          return (
                    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 relative overflow-hidden">
                              {/* Background decorative elements */}
                              <div className="absolute inset-0">
                                        <div className="absolute top-20 right-1/4 grid grid-cols-8 gap-1 opacity-20">
                                                  {Array.from({ length: 40 }).map((_, i) => (
                                                            <div key={i} className="w-1 h-1 bg-blue-900 rounded-full"></div>
                                                  ))}
                                        </div>
                                        <div className="absolute bottom-20 left-1/4 opacity-20">
                                                  <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-400">
                                                            <path d="M10 30 L30 10 L50 30 L30 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                                                  </svg>
                                        </div>
                              </div>

                              {/* Main content */}
                              <div className="relative z-10">
                                        {/* Navigation */}
                                        <nav className="flex justify-between items-center p-6 lg:p-8">
                                                  <div className="text-lime-400 text-2xl font-bold">
                                                            sage
                                                            <div className="grid grid-cols-6 gap-1">
                                                                      {Array.from({ length: 30 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-gradient-to-br from-lime-700 to-lime-100 opacity-60"></div>
                                                                      ))}
                                                            </div>
                                                  </div>
                                                
                                                  <div className="lg:hidden">
                                                            <button className="text-lime-400">
                                                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                                                                <line x1="3" y1="18" x2="21" y2="18"></line>
                                                                      </svg>
                                                            </button>
                                                  </div>
                                        </nav>

                                        {/* Hero content */}
                                        <div className="px-6 lg:px-8 pb-8">
                                                  <div className="max-w-7xl mx-auto">
                                                            {/* Desktop layout */}
                                                            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                                                                      <div className="lg:col-span-5">
                                                                                <HeroHeader />
                                                                      </div>
                                                                      <div className="lg:col-span-4 lg:col-start-7">
                                                                                <HeroImage />
                                                                      </div>
                                                            </div>

                                                            {/* Mobile layout */}
                                                            <div className="lg:hidden">
                                                                      <HeroHeader />
                                                                      <div className="mt-8 mb-8">
                                                                                <HeroImage />
                                                                      </div>
                                                            </div>

                                                            {/* Skills section */}
                                                            <div className="mt-8 lg:mt-12">
                                                                      <HeroSkills />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              {/* Green section on the right */}
                              <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-300 hidden lg:block">
                                        <div className="relative h-full">
                                                  <div className="absolute top-8 right-8">
                                                            <button className="text-blue-800">
                                                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                                                                <line x1="3" y1="18" x2="21" y2="18"></line>
                                                                      </svg>
                                                            </button>
                                                  </div>

                                                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                                                            <div className="text-blue-800 text-4xl font-bold">
                                                                      Akpamgbo
                                                            </div>
                                                  </div>

                                                  <div className="absolute bottom-8 right-8 flex ">
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 1 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 2 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 3 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 4 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                                                                                      
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 5 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 4 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 3 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 2 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                            <div className="flex flex-col space-y-2">
                                                                      {Array.from({ length: 1 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                                      ))}
                                                            </div>
                                                  </div>

                                                  <div className="absolute top-1/3 right-1/2 transform translate-x-1/2">
                                                            <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                                                  </div>

                                                  <div className="absolute bottom-1/3 right-1/3">
                                                            <div className="w-3 h-3 bg-blue-400 transform rotate-45"></div>
                                                  </div>

                                                  <div className="absolute top-1/4 right-1/4">
                                                            <div className="grid grid-cols-3 gap-1">
                                                                      {Array.from({ length: 9 }).map((_, i) => (
                                                                                <div key={i} className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                                                      ))}
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default HeroSection;