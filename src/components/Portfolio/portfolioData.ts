// portfolioData.ts

import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import type { NavItem, ScrollSection, SocialLink } from './types';

export const navItems: NavItem[] = [
          { id: 'about', label: 'ABOUT' },
          { id: 'experience', label: 'EXPERIENCE' },
          { id: 'projects', label: 'PROJECTS' }
];

export const socialLinks: SocialLink[] = [
          { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
          { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
          { icon: FaExternalLinkAlt, href: '#', label: 'External Link' }
];


export const scrollSections: ScrollSection[] = [
           {
                    id: 1,
                    sectionId: 'about',
                    title: 'About Me',
                    company: 'Personal Profile',
                    period: 'UNIZIK COMPUTER SCIENCE ALUMNI & FULLSTACK ENGINEER',
                    description:
                              'My name is Akpamgbo Philip, Top 10 graduating computer science student in my BSc degree programme at UNIZIK with an outstanding second class upper division award, Passionate fullstack engineer with expertise in building responsive, optimized digital experiences. I specialize in modern web technologies and have a strong focus on user experience & performance optimization.',
                    tags: ['2021 — 2025', 'Fullstack Engineer', 'UNIZIK Alumni'],
                    bgColor: 'inherit'
          },
          {
                    id: 2,
                    sectionId: 'experience',
                    title: 'Junior Frontend Intern',
                    company: '3MTT',
                    period: '2023 — 2023',
                    description:
                              "At 3MTT under Afrihub, I Build and maintain critical components and UIs used to  frontend and Worked closely with cross-functional teams, including developers, product designers, and product managers.",
                    tags: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
                    bgColor: 'bg-slate-800/50'
          },
          {
                    id: 3,
                    sectionId: 'experience',
                    title: 'Lead Engineer',
                    company: 'Upstatement',
                    period: '2018 — 2024',
                    description:
                              'Build, style, and ship high-quality websites, design systems, mobile apps, for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University,',
                    tags: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js'],
                    bgColor: 'bg-slate-800/50'
          },
          {
                    id: 4,
                    sectionId: 'projects',
                    title: 'Personal Portfolio Website',
                    company: 'Personal Project',
                    period: '2024',
                    description:
                              'Developed a modern, responsive portfolio website using React and TypeScript. Features include smooth scrolling navigation, theme switching, and interactive animations. Built with accessibility and performance in mind.',
                    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                    bgColor: 'bg-slate-800/50'
          },
          {
                    id: 5,
                    sectionId: 'projects',
                    title: 'E-commerce Platform',
                    company: 'Client Project',
                    period: '2023',
                    description:
                              'Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented features like product catalog, shopping cart, payment integration, and admin dashboard. Focused on scalability and user experience.',
                    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    bgColor: 'bg-slate-800/50'
          },
          {
                    id: 6,
                    sectionId: 'projects',
                    title: 'Design System Library',
                    company: 'Open Source',
                    period: '2023',
                    description:
                              'Created and maintained a comprehensive design system library with reusable components, design tokens, and documentation. Used by multiple teams to ensure consistency across products.',
                    tags: ['React', 'CSS Variables', 'API Documentation'],
                    bgColor: 'bg-slate-800/50'
          }
];
