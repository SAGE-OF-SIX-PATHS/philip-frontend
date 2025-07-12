import React from 'react';

const HeroHeader: React.FC = () => {
          return (
                    <div className="flex justify-between items-start mb-8 lg:mb-0">
                              <div className="text-left">
                                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-lime-400 leading-tight">
                                                  Frontend<br />
                                                  Developer.
                                        </h1>
                                        <p className="text-white text-base md:text-lg mt-4 max-w-md">
                                                  I like to craft solid and scalable frontend products with great user experiences.
                                        </p>
                              </div>
                              <div className="hidden lg:block">
                                        <div className="w-6 h-6 border-2 border-lime-400  flex items-center justify-center">
                                                  <div className="w-2 h-2 bg-lime-400 "></div>
                                        </div>
                              </div>
                    </div>
          );
};

export default HeroHeader;