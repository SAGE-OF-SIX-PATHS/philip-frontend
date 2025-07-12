import React from 'react';

const HeroImage: React.FC = () => {
          return (
                    <div className="relative">
                              <div className="w-32 max-w-xs mx-auto lg:max-w-none lg:w-60 lg:h-60">
                                        <div className="bg-gray-300 overflow-hidden shadow-lg h-48 lg:h-full">
                                                  <img
                                                            src="./public/images/philip3.jpg"
                                                            alt="Frontend Developer"
                                                            className="w-full h-full object-cover"
                                                  />
                                        </div>
                              </div>


                              {/* Decorative elements */}
                              <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8">
                                       
                              </div>

                              <div className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8">
                                        <div className="flex flex-col space-y-2">
                                                  {Array.from({ length: 5 }).map((_, i) => (
                                                            <div key={i} className="flex space-x-1">
                                                                      {Array.from({ length: i + 1 }).map((_, j) => (
                                                                                <div key={j} className="w-2 h-2 bg-lime-400"></div>
                                                                      ))}
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              <div className="absolute bottom-1 -right-1 lg:-right">
                                        <div className="flex flex-col space-y-2 mb-2">
                                                  {Array.from({ length: 4 }).map((_, i) => (
                                                            <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>

                                                  ))}
                                        </div>
                                        <div className="flex flex-col space-y-2 mb-2">
                                                  {Array.from({ length: 4 }).map((_, i) => (
                                                            <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>
                                                            
                                                  ))}
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                                  {Array.from({ length: 4 }).map((_, i) => (
                                                            <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45"></div>

                                                  ))}
                                        </div>
                              </div>
                    </div>
          );
};

export default HeroImage;