import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { React, ShadcnUI, TailwindCSS, ViteJS } from 'developer-icons';
import { Sun, Moon, Mail, ChevronsRight, CloudSun, BriefcaseBusiness } from 'lucide-react';
import RotatingText from './Reactbits/RotatingText'
import ShinyText from './Reactbits/ShinyText';

export default function Hero() {

  const items = [
    { icon: <React />, color: 'blue', label: 'Files' },
    { icon: <ShadcnUI />, color: 'purple', label: 'Books' },
    { icon: <TailwindCSS />, color: 'red', label: 'Health' },
    { icon: <ViteJS />, color: 'red', label: 'Health' },
  ]

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Good morning' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Good afternoon' };
    } else {
      return { text: 'Good evening' };
    }
  };

  const techStack = [
    { icon: <React className="h-10 w-10" />, label: 'React' },
    { icon: <ViteJS className="h-10 w-10" />, label: 'Vite' },
    { icon: <TailwindCSS className="h-10 w-10" />, label: 'Tailwind CSS' },
    { icon: <ShadcnUI className="h-10 w-10" />, label: 'Shadcn' },
  ];

  const { text: greetingText } = getGreeting();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 pt-28 sm:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 mesh-gradient-bg opacity-30"></div>
        <div className="absolute inset-0 grid-bg"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-full max-w-[320px] md:w-96 md:h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-full max-w-[300px] md:w-80 md:h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 space-y-4">
          <h2 className="text-6xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-10 leading-tight">
            <span className="block text-gray-400/80 text-2xl sm:text-xl md:text-3xl font-bold tracking-wide mb-4">
              {greetingText} <span className="font-light text-gray-300">I'm</span>
            </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
                SOCHEATH
              </span>
            </span>
          </h2>

          <div className="text-2xl sm:text-2xl md:text-3xl text-gray-300 mb-6 h-16 flex items-center justify-center">
            <div className="flex flex-col items-center cursor-default">
              <span className="relative">
                I'm a <span className="relative inline-block">
                  <RotatingText
                    texts={['Full Stack Developer', 'UI/UX Designer', 'Tech Innovator', 'Digital Artist']}
                    mainClassName="font-semibold px-2 sm:px-2 md:px-3 bg-white/10 border border-white/10 rounded-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    rotationInterval={4000}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          <ShinyText text="Crafting extraordinary digital experiences through innovative design, cutting-edge technology,
          and a passion for pushing the boundaries of what's possible." disabled={false} speed={3} className='custom-class' />
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="group relative px-8 py-4 bg-white text-black hover:bg-gray-50 text-lg font-semibold glow-effect"
            onClick={() => scrollToSection('experience')}>
            <BriefcaseBusiness className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View My Work
            <ChevronsRight className="ml-2 h-5 w-5 group-hover:translate-x-5 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative px-8 py-4 border-white/30 text-white text-lg font-semibold glass-effect overflow-hidden"
            onClick={() => scrollToSection('contact')}>
            {/* Holographic sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform z-10" />
            <span className="z-10">Let's Connect</span>
          </Button>
        </div>

        {/* Tech Stack Showcase */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            This Portfolio Was Built With
          </h2>
          <div className="flex flex-wrap justify-center cursor-default mt-7 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 p-3 bg-black/0 backdrop-blur-xs border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05, rotate: -3 }}
              >
                {tech.icon}
                <span className="text-sm text-gray-300">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}