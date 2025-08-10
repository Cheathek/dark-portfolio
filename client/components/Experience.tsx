import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BriefcaseBusiness, Building2, MapPin, ChevronRight, Dot, } from 'lucide-react';
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
    <section id="experience" className="min-h-screen bg-black relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4 mx-auto max-w-max">
            <BriefcaseBusiness className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            PROFESSIONAL{' '}
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
            >
              EXPERIENCE
            </motion.span>
          </h2>
          <div className="w-20 sm:w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Grouped by source. Showcasing innovation, automation, and creative engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16 flex flex-wrap justify-center gap-2 bg-gray-900 p-1 rounded-md w-fit mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category.toUpperCase()}
              {category !== 'All' && (
                <span className="ml-2 text-xs font-normal">
                  ({projects.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 hover:border-cyan-400/30 shadow-inner shadow-black/40 hover:shadow-lg hover:shadow-white/10 transition duration-300 ${
                hoveredProject === index ? 'bg-gray-950' : 'hover:bg-gray-950'
              }`}
            >
              <div className="grid grid-cols-12 gap-6 sm:gap-8 py-8 px-4 sm:px-6">
                {/* Left: Project Number & Category */}
                <div className="col-span-2 flex flex-col justify-between items-center sm:items-start">
                  <div className="text-4xl sm:text-6xl font-light text-gray-800 group-hover:text-gray-600 transition-colors select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-2 mt-4 sm:mt-0 flex flex-col items-center sm:items-start">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        project.category === 'Company'
                          ? 'bg-white'
                          : project.category === 'Personal'
                          ? 'bg-gray-500'
                          : 'bg-gray-700'
                      }`}
                    ></div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Middle: Project Info */}
                <div className="col-span-10 sm:col-span-7 space-y-4">
                  {/* Title & Company */}
                  <div>
                    <h2 className="text-xl sm:text-3xl font-bold mb-1 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm sm:text-base">
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <Building2 className="w-4 h-4" />
                        {project.companyName}
                      </span>
                      <Dot className="w-3 h-3" />
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <MapPin className="w-4 h-4" />
                        {project.companyLocation}
                      </span>
                    </div>
                  </div>

                  {/* Role & Duration */}
                  <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm text-gray-400">
                    <span className="bg-gray-900 px-3 py-1 rounded">{project.role}</span>
                    <span>{project.duration}</span>
                    <span>•</span>
                    <span>{project.projectType}</span>
                  </div>

                  {/* Description - Show on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 max-w-full ${
                      hoveredProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed text-sm mt-4 border-l-2 border-gray-800 pl-4">
                      {project.responsibility}
                    </p>
                  </div>
                </div>

                {/* Right: Tech & Actions */}
                <div className="col-span-12 sm:col-span-3 flex flex-col justify-between items-end mt-6 sm:mt-0">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 justify-end mb-4 max-w-full">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1 px-2 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-400 hover:border-gray-600 transition-colors rounded"
                      >
                        <span>{techIcons[tech]}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons - Show on Hover */}
                  <div
                    className={`flex gap-2 transition-all duration-500 ${
                      hoveredProject === index
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all text-sm rounded"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-all text-sm rounded"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
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