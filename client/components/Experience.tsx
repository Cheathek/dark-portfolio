import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BriefcaseBusiness, Building2, Calendar, User, Award, MapPin } from 'lucide-react';
import { TypeScript, NextJs, Python, React, Figma, GitHubLight, WordPress, JavaScript, HTML5, CSS3, Bootstrap5, TailwindCSS, VueJs, VisualStudioCode, Canva, Laravel, PHP, MySQL, ViteJS, ShadcnUI } from "developer-icons";

const techIcons: Record<string, React.ReactNode> = {
  React: <React className="w-6 h-6" />,
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
  Vue: <VueJs className="w-6 h-6" />,
  VSCode: <VisualStudioCode className="w-6 h-6" />,
  Canva: <Canva className="w-6 h-6" />,
  Laravel: <Laravel className="w-6 h-6" />,
  PHP: <PHP className="w-6 h-6" />,
  VueJs: <VueJs className="w-6 h-6" />,
  Bootstrap5: <Bootstrap5 className="w-6 h-6" />,
  MySQL: <MySQL className="w-6 h-6" />,
  TailwindCSS: <TailwindCSS className="w-6 h-6" />,
  ViteJS: <ViteJS className="w-6 h-6" />,
  ShadcnUI: <ShadcnUI className="w-6 h-6" />,
};

export default function Projects() {
  const projects = [
    // company projects
    {
      title: 'Jewelry Management System',
      companyName: 'Chhorn Chenda Jewelry',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Point of Sale System',
      role: 'Fullstack Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.',
      duration: 'Mar 2023 - Jan 2024',
      tech: ['VueJs', 'Laravel', 'Bootstrap5', 'MySQL'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
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
      image: '/placeholder.jpg',
    },
    // personal projects
    {
      title: 'Blockchain Voting System',
      companyName: 'Personal Project',
      companyLocation: 'Open Source',
      projectType: 'DApp Development',
      role: 'Full Stack Developer',
      responsibility: 'Developed smart contracts with Solidity, built React frontend with Web3 integration, implemented secure JWT authentication, and created transparent voting mechanisms with blockchain verification.',
      duration: 'Oct 2022 - Dec 2022',
      tech: ['NextJs', 'TailwindCSS', 'ViteJS', 'ShadcnUI'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    // academy projects
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
      image: '/placeholder.jpg',
    },
    {
      title: 'E-Commerce Platform',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Capstone Project',
      role: 'Product Engineer',
      responsibility: 'Integrated Stripe payment processing, configured Tailwind CSS themes for consistent design, implemented comprehensive inventory management system, and built admin dashboard with analytics.',
      duration: 'Jul 2021 - Jan 2022',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'Social Media Dashboard',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Group Project',
      role: 'Frontend Developer',
      responsibility: 'Created interactive data visualizations with Chart.js, implemented scheduled post integrations, enhanced dashboard UX with intuitive navigation, and optimized real-time data updates with Redis.',
      duration: 'Feb 2021 - Apr 2021',
      tech: ['VueJs', 'Express', 'Redis', 'Chart.js'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
  ];

  const categories = ['Company', 'Personal', 'Academy'];

  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <BriefcaseBusiness className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">EXPERIENCE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            PROFESSIONAL
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
            >
              EXPERIENCE
            </motion.span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Grouped by source. Showcasing innovation, automation, and creative engineering.
          </p>
        </div>

        {categories.map((group) => {
          const filtered = projects.filter((p) => p.category === group);
          if (!filtered.length) return null;

          return (
            <div key={group} className="mb-24">
              {/* Enhanced Section Header */}
              <div className="flex items-center mb-12 relative">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-400/60 to-slate-400/60" />
                <h3 className="mx-6 text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent relative">
                  {group}
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-slate-400/60 via-slate-400/60 to-transparent" />
              </div>

              {/* Enhanced Project Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-700 hover:border-slate-600/80 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    {/* Enhanced Image Container */}
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />

                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`text-white border-0 backdrop-blur-md font-medium ${project.category === 'Company'
                            ? 'bg-gradient-to-r from-purple-600/90 to-purple-500/90 shadow-lg shadow-purple-500/20'
                            : project.category === 'Personal'
                              ? 'bg-gradient-to-r from-orange-500/90 to-red-500/90 shadow-lg shadow-orange-500/20'
                              : 'bg-gradient-to-r from-blue-500/90 to-cyan-500/90 shadow-lg shadow-blue-500/20'
                            }`}
                        >
                          {project.category}
                        </Badge>
                      </div>

                      {/* Project Type Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="text-xs text-slate-200 bg-black/60 backdrop-blur-md border border-slate-600/50">
                          {project.projectType}
                        </Badge>
                      </div>

                      {/* Enhanced Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="flex space-x-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-400/60 text-white hover:bg-slate-800/80 hover:text-white backdrop-blur-md hover:border-slate-300/80 transition-all duration-300"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 shadow-lg transition-all duration-300"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Project Title */}
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300 mb-1">
                          {project.title}
                        </h4>
                      </div>

                      {/* Company Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span className="font-medium text-sm">{project.companyName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{project.companyLocation}</span>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>

                      {/* Role */}
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-4 h-4 text-slate-400" />
                          <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Role</span>
                        </div>
                        <p className="text-slate-200 text-sm font-medium">{project.role}</p>
                      </div>

                      {/* Responsibility */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-slate-400" />
                          <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                            Key Contributions
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed pl-6">
                          {project.responsibility}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-2 cursor-pointer">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              title={tech} 
                              className="flex items-center justify-center px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-700/60 hover:border-slate-600/70 hover:text-slate-200 transition-all duration-300"
                            >
                              {techIcons[tech] && (
                                <span className="text-sm">{techIcons[tech]}</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}