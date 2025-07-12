// ✅ portfolioData.ts

import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import type { NavItem, ScrollSection, SocialLink } from './types';

export const navItems: NavItem[] = [
          { id: 'about', label: 'ABOUT' },
          { id: 'experience', label: 'EXPERIENCE' },
          { id: 'projects', label: 'PROJECTS' },
];

export const socialLinks: SocialLink[] = [
          { icon: FaGithub, href: 'https://github.com/SAGE-OF-SIX-PATHS', label: 'GitHub' },
          { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nzube-akpamgbo-104157372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
          { icon: FaExternalLinkAlt, href: '#', label: 'External Link' },
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
                    tags: [
                              { label: '2021 — 2025', href: '' },
                              { label: 'Fullstack Engineer', href: 'https://drive.google.com/file/d/12h58tdk7xHmvacm2rsOdJmjjOJ1PudyE/view?usp=drive_link' },
                              { label: 'UNIZIK Alumni', href: 'https://drive.google.com/file/d/1wKOoDgn1r1xOHChk0FGzbUI9dKIwmhO1/view?usp=drive_link' },
                    ],
                    bgColor: 'inherit',
          },
          {
                    id: 2,
                    sectionId: 'experience',
                    title: 'Junior Frontend Intern',
                    company: '3MTT',
                    period: '2023',
                    description:
                              'At 3MTT under Afrihub, I build and maintain critical components and UIs for the frontend and work closely with cross-functional teams, including developers, product designers, and product managers.',
                    tags: [
                              { label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                              { label: 'HTML & SCSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                              { label: 'React', href: 'https://react.dev' },
                    ],
                    bgColor: 'bg-slate-800/50',
          },
          {
                    id: 3,
                    sectionId: 'experience',
                    title: 'Lead Engineer',
                    company: 'Genesys Techub',
                    period: '2024 — 2025',
                    description:
                              'As a Lead Extern at Genesys Techub, I lead the development of innovative web applications like Pivot and Pivot challenge website, Urgent2kay directed bill payment system, focusing on performance and user experience. I mentor junior developers in the upskill and learnable program and collaborate with cross-functional teams to deliver high-quality software solutions.',
                    tags: [
                              { label: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                              { label: 'TypeScript', href: 'https://www.typescriptlang.org/' },
                              { label: 'HTML & SCSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                              { label: 'React', href: 'https://react.dev' },
                              { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
                              { label: 'Framer-motion', href: 'https://www.framer.com/motion/' },
                              { label: 'Node.js', href: 'https://nodejs.org/' },
                              { label: 'Express.js', href: 'https://expressjs.com/' },
                              { label: 'MongoDB', href: 'https://www.mongodb.com/' },
                              { label: 'PostgreSQL', href: 'https://www.postgresql.org/' },
                              { label: 'GIT & GitHub', href: 'https://github.com/' },
                    ],
                    bgColor: 'bg-slate-800/50',
          },
          {
                    id: 4,
                    sectionId: 'projects',
                    title: 'Personal Portfolio Website',
                    company: 'Personal Project',
                    period: '2024',
                    description:
                              'Developed a modern, responsive portfolio website using React and TypeScript. Features include smooth scrolling navigation, theme switching, and interactive animations. Built with accessibility and performance in mind.',
                    tags: [
                              { label: 'React', href: 'https://react.dev' },
                              { label: 'TypeScript', href: 'https://www.typescriptlang.org/' },
                              { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
                              { label: 'Framer Motion', href: 'https://www.framer.com/motion/' },
                    ],
                    bgColor: 'bg-slate-800/50',
          },
          {
                    id: 5,
                    sectionId: 'projects',
                    title: 'Pivot Website',
                    company: 'Contract Project',
                    period: '2023',
                    description:
                              'The pivot project comprised of product designers and product manager, frontend and backend experts, where we collaborated in building, deploying and hosting a system for Partners, sponsors, volunteers and business owners to apply to join the programme of pivot in Awka Nigeria.',
                    tags: [
                              { label: 'React' },
                              { label: 'CSS Variables' },
                              { label: 'API Documentation' },
                    ],
                    bgColor: 'bg-slate-800/50',
                    image: './images/pivot.png', 
                    liveLink: 'https://thepivotsite.netlify.app', 
                    githubLink: 'https://github.com/pivotweb/Pivot-frontend.git' 
          },
          {
                    id: 6,
                    sectionId: 'projects',
                    title: 'Pivot Website',
                    company: 'Contract Project',
                    period: '2025',
                    description:
                              'The pivot project comprised of product designers and product manager, frontend and backend experts, where we collaborated in building, deploying and hosting a system for Partners, sponsors, volunteers and business owners to apply to join the programme of pivot in Awka Nigeria.',
                    tags: [
                              { label: 'React' },
                              { label: 'CSS Variables' },
                              { label: 'API Documentation' },
                    ],
                    bgColor: 'bg-slate-800/50',
                    image: './images/urgent2kay.png',
                    liveLink: 'https://web-dash-spark.vercel.app', 
                    githubLink: 'https://github.com/SAGE-OF-SIX-PATHS/urgent-2kay.git'
          },
          {
                    id: 7,
                    sectionId: 'projects',
                    title: 'Pivot Website',
                    company: 'Contract Project',
                    period: '2025',
                    description:
                              'The pivot project comprised of product designers and product manager, frontend and backend experts, where we collaborated in building, deploying and hosting a system for Partners, sponsors, volunteers and business owners to apply to join the programme of pivot in Awka Nigeria.',
                    tags: [
                              { label: 'React' },
                              { label: 'CSS Variables' },
                              { label: 'API Documentation' },
                    ],
                    bgColor: 'bg-slate-800/50',
                    image: './images/pivotChallenge.png', 
                    liveLink: 'https://challenge.thepivot.ng', 
                    githubLink: 'https://github.com/pivotweb/Pivot-Website.git' 
          },
          {
                    id: 8,
                    sectionId: 'projects',
                    title: 'Fintech Website',
                    company: 'Personal Project',
                    period: '2024',
                    description:
                              'This is some of the first websites i built and deployed after learnign react, especially useState & side effects, hooks and setState.',
                    tags: [
                              { label: 'React' },
                              { label: 'CSS Variables' },
                              { label: 'API Documentation' },
                    ],
                    bgColor: 'bg-slate-800/50',
                    image: './images/fintech.png',
                    liveLink: 'https://challenge.thepivot.ng',
                    githubLink: 'https://github.com/SAGE-OF-SIX-PATHS/FintechEdited.git'
          }
];
