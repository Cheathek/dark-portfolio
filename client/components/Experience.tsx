import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, BriefcaseBusiness, Building2, MapPin, Dot, TvMinimalPlay, User, Clock, Box, MousePointerClick, User2, School, } from 'lucide-react';
import { Bootstrap5, Canva, CSS3, Figma, GitHubLight, HTML5, JavaScript, Laravel, MySQL, NextJs, PHP, Python, ReactQuery, ShadcnUI, TailwindCSS, TypeScript, VisualStudioCode, ViteJS, VueJs, WordPress } from 'developer-icons';
const techIcons: Record<string, React.ReactNode> = {
  React: <ReactQuery className="w-6 h-6" />,
  Python: <Python className="w-6 h-6" />,
  TypeScript: <TypeScript className="w-6 h-6" />,
  NextJs: <NextJs className="w-6 h-6" />,
  Figma: <Figma className="w-6 h-6" />,
  GitHub: <GitHubLight className="w-6 h-6" />,
  WordPress: <WordPress className="w-6 h-6" />,
  JavaScript: <JavaScript className="w-6 h-6" />,
  HTML: <HTML5 className="w-6 h-6" />,
  CSS: <CSS3 className="w-6 h-6" />,
  Bootstrap: <Bootstrap5 className="w-6 h-6" />,
  Tailwind: <TailwindCSS className="w-6 h-6" />,
  VSCode: <VisualStudioCode className="w-6 h-6" />,
  Canva: <Canva className="w-6 h-6" />,
  Laravel: <Laravel className="w-6 h-6" />,
  PHP: <PHP className="w-6 h-6" />,
  VueJs: <VueJs className="w-6 h-6" />,
  MySQL: <MySQL className="w-6 h-6" />,
  ViteJS: <ViteJS className="w-6 h-6" />,
  ShadcnUI: <ShadcnUI className="w-6 h-6" />,
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Jewelry Management System',
      companyName: 'Chhorn Chenda Jewelry',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Point of Sale System',
      role: 'Fullstack Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.',
      duration: 'Mar 2023 - Jan 2024',
      tech: ['VueJs', 'Laravel', 'Bootstrap', 'MySQL'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Enterprise Web Application',
      companyName: 'Durable Techs',
      companyLocation: 'Remote',
      projectType: 'Internship Project',
      role: 'Senior Frontend Developer',
      responsibility: 'Implemented dynamic UI components, live sync functionality with Socket.io, optimized Redis-based workflows for real-time data processing, and enhanced user experience with responsive design patterns.',
      duration: 'Jan 2022 - Nov 2022',
      tech: ['WordPress', 'PHP'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Peak Slaok',
      companyName: 'Personal Project',
      companyLocation: 'Open Source',
      projectType: 'Quote platform',
      role: 'UX/UI Designer',
      responsibility: 'Designed user-centric interfaces, implemented responsive layouts with Tailwind CSS, optimized performance for mobile devices, and integrated Shadcn UI components for a modern look.',
      duration: 'Jul 2025 - Present',
      tech: ['NextJs', 'TailwindCSS', 'ViteJS', 'ShadcnUI'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://aboutyoureadmore.online/',
    },
    {
      title: 'Portfolio Website',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Academic Project',
      role: 'Frontend Developer',
      responsibility: 'Created responsive design with modern CSS techniques, implemented smooth animations and transitions, optimized performance for fast loading times, and ensured cross-browser compatibility.',
      duration: 'Jan 2021 - Mar 2021',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'E-Commerce Platform',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Capstone Project',
      role: 'Product Engineer',
      responsibility: 'Integrated Stripe payment processing, configured Tailwind CSS themes for consistent design, implemented comprehensive inventory management system, and built admin dashboard with analytics.',
      duration: 'Jul 2021 - Jan 2022',
      tech: ['NextJs', 'Tailwind', 'MySQL'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Group Project',
      role: 'Frontend Developer',
      responsibility: 'Created interactive data visualizations with Chart.js, implemented scheduled post integrations, enhanced dashboard UX with intuitive navigation, and optimized real-time data updates with Redis.',
      duration: 'Feb 2021 - Apr 2021',
      tech: ['VueJs', 'JavaScript', 'CSS'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const categories = ['All', 'Company', 'Personal', 'Academy'];
  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="experience" className="overflow-hidden pt-28 px-2 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4 mx-auto max-w-max">
              <BriefcaseBusiness className="w-5 h-5" />
              <span className="text-sm text-white font-medium tracking-wide">EXPERIENCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
              PROFESSIONAL{' '}
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
              >
                EXPERIENCE
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-px bg-white mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Grouped by source. Showcasing innovation, automation, and creative engineering.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap justify-center gap-5 bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 p-1 rounded-md w-fit mx-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-md transition-colors ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.toUpperCase()}
                {category !== 'All' && (
                  <span className="ml-2 text-md font-normal">
                    {projects.filter((p) => p.category === category).length}
                  </span>
                )}
                {selectedCategory === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white rounded-md -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      bounce: 0.25
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          {/* Projects List */}
          <div className="space-y-4 sm:space-y-7">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 hover:border-cyan-400/30 shadow-inner shadow-black/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              >
                {/* Mobile-only click indicator */}
                <div className="sm:hidden absolute bottom-3 right-3 flex items-center gap-1 text-xs text-gray-400 animate-pulse">
                  <MousePointerClick className="w-4 h-4" />
                  <span>Tap to see more</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-6 sm:py-8">
                  {/* Left: Project Number & Category (Mobile Top) */}
                  <div className="sm:col-span-2 flex flex-row sm:flex-col justify-between items-start sm:items-center">
                    <div className="text-3xl sm:text-6xl font-light text-gray-100 group-hover:text-gray-600 transition-colors select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="sm:mt-4">
                      <span className="flex items-center gap-2 sm:gap-2 bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 px-2 sm:px-3 py-1 rounded-md">
                        <span className="flex-shrink-0">
                          {project.category === 'Personal' && <User2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                          {project.category === 'Academy' && <School className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                          {project.category === 'Company' && <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
                        </span>
                        <p className="text-sm sm:text-lg text-gray-400">
                          {project.category}
                        </p>
                      </span>
                    </div>
                  </div>

                  {/* Middle: Project Info */}
                  <div className="sm:col-span-7 space-y-3 sm:space-y-4">
                    {/* Title & Company */}
                    <div>
                      <h2 className="text-lg sm:text-3xl font-bold mb-1 group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-base text-gray-400">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          {project.companyName}
                        </span>
                        <Dot className="w-2 h-2 sm:w-3 sm:h-3" />
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {project.companyLocation}
                        </span>
                      </div>
                    </div>

                    {/* Role & Duration */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 items-center text-xs text-gray-400">
                      <span className="flex items-center gap-1 sm:gap-2 bg-gray-800 px-2 sm:px-3 py-1 rounded-md">
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.role}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 sm:gap-2">
                        <Box className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.projectType}
                      </span>
                    </div>

                    {/* Description - Show on Hover */}
                    <div className={`overflow-hidden transition-all duration-300 ${hoveredProject === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed border-l-2 border-gray-800 pl-3 sm:pl-4">
                        {project.responsibility}
                      </p>
                    </div>
                  </div>

                  {/* Right: Tech & Actions (Mobile Bottom) */}
                  <div className="sm:col-span-3 flex flex-col gap-4 sm:gap-0 justify-between mt-4 sm:mt-0">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 sm:justify-end cursor-default">
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 p-1 sm:p-2 bg-gray-900 border border-gray-800 text-xs text-gray-400 hover:border-cyan-400/30 hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all rounded-md"
                        >
                          <span>{techIcons[tech]}</span>
                          <span className="hidden sm:inline">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex gap-2 transition-all duration-300 ${hoveredProject === index || window.innerWidth < 640
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all hover:-translate-y-0.5 sm:hover:-translate-y-1 text-xs sm:text-sm rounded-md"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black hover:bg-gray-200 transition-all hover:-translate-y-0.5 sm:hover:-translate-y-1 text-xs sm:text-sm rounded-md"
                      >
                        <TvMinimalPlay className="w-3 h-3 sm:w-4 sm:w-4" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-20 pt-8 border-t border-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold">{projects.length}</p>
                <p className="text-gray-400 mt-1 text-sm">Total Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{new Set(projects.flatMap((p) => p.tech)).size}</p>
                <p className="text-gray-400 mt-1 text-sm">Technologies</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{categories.length - 1}</p>
                <p className="text-gray-400 mt-1 text-sm">Categories</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}