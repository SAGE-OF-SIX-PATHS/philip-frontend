import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ContentSectionProps } from './types';
import AnimatedButton from '../navigations/AnimatedBottonProps';

const PortfolioContentSection: React.FC<ContentSectionProps> = ({
  section,
  isDarkMode,
  className,
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
        flex flex-col justify-center items-center sm:items-start
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
        <span
          className={`text-xs sm:text-sm font-medium tracking-wide ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
        >
          {section.period}
        </span>
      </div>

      <h3
        className={`text-xl sm:text-2xl font-bold mb-2 transition-colors text-center sm:text-left ${isDarkMode
          ? 'text-white group-hover:text-slate-200'
          : 'text-slate-900 group-hover:text-slate-700'
          }`}
      >
        {section.title}
      </h3>

      <div className="flex flex-col sm:flex-row items-center sm:items-center mb-3 text-center sm:text-left">
        <span
          className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
        >
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

      <p
        className={`leading-relaxed mb-5 text-sm sm:text-base transition-colors text-center sm:text-left ${isDarkMode
          ? 'text-slate-300 group-hover:text-slate-200'
          : 'text-slate-700 group-hover:text-slate-600'
          }`}
      >
        {section.description}
      </p>

      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
        {section.tags.map((tag, index) => (
          <AnimatedButton className='rounded-full'>
            <a
              key={index}
              href={tag.href} // ✅ Each tag can have its own link!
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${isDarkMode
                ? 'bg-slate-700/50 text-slate-300 group-hover:bg-slate-600/50'
                : 'bg-slate-200 text-slate-700 group-hover:bg-slate-300'
                }`}
            >
              {tag.label}
            </a>
          </AnimatedButton>
        ))}
      </div>

      {/** ✅ Only show these project-specific extras for `projects` sections */}
      {section.sectionId === 'projects' && (
        <div className="w-full flex flex-col items-center sm:items-start gap-4">
          {section.image && (
            <img
              src={section.image} // ✅ Add your image URL in `scrollSections`!
              alt={section.title}
              className="w-full rounded-lg shadow-lg"
            />
          )}

          <div className="flex gap-4">
            {section.liveLink && (
              <AnimatedButton className='rounded-md'>
                <a
                  href={section.liveLink} // ✅ Add your live app URL in `scrollSections`!
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-4 py-3 sm:py-4 min-h-[3rem] sm:min-h-[3.5rem] text-xs sm:text-sm font-semibold ${isDarkMode
                      ? ' text-white '
                      : ' text-white '
                    }`}
                >
                  View Live
                </a>
              </AnimatedButton>
            )}
            {section.githubLink && (
              <AnimatedButton className='rounded-md'>
                <a
                  href={section.githubLink} // ✅ Add your GitHub repo URL in `scrollSections`!
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-4 py-3 sm:py-4 min-h-[3rem] sm:min-h-[3.5rem] text-xs sm:text-sm font-semibold ${isDarkMode
                    ? 'bg-inherit text-white '
                    : 'bg-inherit text-white '
                    }`}
                >
                  GitHub Repo
                </a>
              </AnimatedButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioContentSection;
