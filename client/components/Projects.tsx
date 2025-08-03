import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BriefcaseBusiness } from 'lucide-react';
import { TypeScript, NextJs, Python, React, Figma, GitHubLight, WordPress, JavaScript, HTML5, CSS3, Bootstrap5, TailwindCSS, VueJs, VisualStudioCode, Canva, Laravel, PHP } from "developer-icons";

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
};

export default function Projects() {
  const projects = [
    // company projects
    {
      title: 'AI-Powered Analytics Platform',
      role: 'Lead Backend Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines, and deployed to AWS.',
      duration: 'Mar 2023 – Jan 2024',
      tech: ['React', 'Python', 'TensorFlow', 'AWS'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'Real-time Collaboration Suite',
      role: 'Senior Frontend Developer',
      responsibility: 'Implemented dynamic UI, live sync, and optimized Redis-based workflows.',
      duration: 'Jan 2022 – Nov 2022',
      tech: ['React', 'Socket.io', 'Redis', 'PostgreSQL'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    // personal projects
    {
      title: 'Blockchain Voting System',
      role: 'Full Stack Developer',
      responsibility: 'Developed smart contracts, built React frontend, and secured with JWT.',
      duration: 'Oct 2022 – Dec 2022',
      tech: ['Solidity', 'React', 'NodeJs', 'JWT'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'Mobile Banking App',
      role: 'API Integrator',
      responsibility: 'Designed mobile workflows, secured endpoints with JWT, and built PostgreSQL queries.',
      duration: 'May 2021 – Sep 2021',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'Decentralized Finance App',
      role: 'Full Stack Developer',
      responsibility: 'Built trading UI, Web3 integrations, and backend APIs for smart contracts.',
      duration: 'Sep 2022 – Dec 2022',
      tech: ['Web3', 'Solidity', 'React', 'Node.js'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    // academy projects
    {
      title: 'Portfolio Website',
      role: 'Frontend Developer',
      responsibility: 'Created responsive design, implemented animations, and optimized performance.',
      duration: 'Jan 2021 – Mar 2021',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'E-Commerce Platform',
      role: 'Product Engineer',
      responsibility: 'Integrated Stripe, configured Tailwind themes, and implemented inventory system.',
      duration: 'Jul 2021 – Jan 2022',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
    {
      title: 'Social Media Dashboard',
      role: 'Frontend Developer',
      responsibility: 'Created data visualizations, scheduled integrations, and enhanced dashboard UX.',
      duration: 'Feb 2021 – Apr 2021',
      tech: ['VueJs', 'Express', 'Redis', 'Chart.js'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
      image: '/placeholder.jpg',
    },
  ];

  const categories = ['Company', 'Personal', 'Academy'];

  return (
    <section id="projects" className="py-32 px-4 relative">
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
            <div key={group} className="mb-20">
              <div className="flex items-center mb-10">
                <div className="w-12 h-px bg-white/40" />
                <h3 className="mx-4 text-2xl font-semibold uppercase tracking-wider">
                  {group}
                </h3>
                <div className="flex-grow h-px bg-white/40" />
              </div>


              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-600 hover:scale-[1.02]"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-3">
                          <Badge
                            className={`text-white border-0 backdrop-blur-sm ${project.category === 'Company'
                              ? 'bg-purple-500/90'
                              : project.category === 'Personal Project'
                                ? 'bg-orange-400/90'
                                : 'bg-blue-400/90'
                              }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-gray-200"
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

                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-white/60 mb-3">{project.duration}</p>
                      <p className="text-white/80 text-sm mb-3">
                        <span className="font-medium">Role:</span> {project.role}
                      </p>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">
                        <span className="font-medium">Responsibility:</span> {project.responsibility}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-1 px-2 py-1"
                          >
                            {techIcons[tech] || tech}
                            {/* If icon not found, fallback to text */}
                          </span>
                        ))}
                      </div>
                    </div>
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
