import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { React, ShadcnUI, TailwindCSS, ViteJS } from 'developer-icons';
import { Sun, Moon, Mail, ChevronsRight, CloudSun, BriefcaseBusiness } from 'lucide-react';
import RotatingText from './Reactbits/RotatingText'
import ShinyText from './Reactbits/ShinyText';
import ClickSpark from './Reactbits/ClickSpark';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  // const texts = ['Full Stack Developer', 'UI/UX Designer', 'Tech Innovator', 'Digital Artist'];

  const items = [
    { icon: <React />, color: 'blue', label: 'Files' },
    { icon: <ShadcnUI />, color: 'purple', label: 'Books' },
    { icon: <TailwindCSS />, color: 'red', label: 'Health' },
    { icon: <ViteJS />, color: 'red', label: 'Health' },
  ]

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Good morning', Icon: CloudSun, color: '#FCD34D' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Good afternoon', Icon: Sun, color: '#60A5FA' };
    } else {
      return { text: 'Good evening', Icon: Moon, color: '#A78BFA' };
    }
  };

  const techStack = [
    { icon: <React className="h-10 w-10" />, label: 'React' },
    { icon: <ViteJS className="h-10 w-10" />, label: 'Vite' },
    { icon: <TailwindCSS className="h-10 w-10" />, label: 'Tailwind CSS' },
    { icon: <ShadcnUI className="h-10 w-10" />, label: 'Shadcn' },
  ];

  const { text: greetingText, Icon: GreetingIcon, color: iconColor } = getGreeting();

  // useEffect(() => {
  //   const currentText = texts[currentTextIndex];
  //   let timeoutId: NodeJS.Timeout;

  //   if (isTyping) {
  //     if (typedText.length < currentText.length) {
  //       const speed = 60 + Math.random() * 40;
  //       timeoutId = setTimeout(() => {
  //         setTypedText(currentText.slice(0, typedText.length + 1));
  //       }, speed);
  //     } else {
  //       timeoutId = setTimeout(() => {
  //         setIsTyping(false);
  //       }, 2000);
  //     }
  //   } else {
  //     if (typedText.length > 0) {
  //       const deleteSpeed = 25 + Math.random() * 25;
  //       timeoutId = setTimeout(() => {
  //         setTypedText(typedText.slice(0, -1));
  //       }, deleteSpeed);
  //     } else {
  //       timeoutId = setTimeout(() => {
  //         setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  //         setIsTyping(true);
  //       }, 300);
  //     }
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [typedText, currentTextIndex, isTyping]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8">
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

      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-24 sm:mt-20 flex justify-center">
              {/* Content wrapper */}
              <div className="flex items-center gap-5 px-8 py-6">
                {/* Animated icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-white/10 shadow-sm"
                >
                  <GreetingIcon className="w-6 h-6 text-cyan-300" style={{ color: iconColor }} />
                </motion.div>
                {/* Text stack */}
                <div className="flex flex-col">
                  <motion.span
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    className="text-xs uppercase tracking-[0.2em] font-medium mb-1">
                    {greetingText}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-light text-white leading-tight">
                    My name is
                  </motion.h2>
                </div>
              </div>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl md:text-8xl italic font-black text-white tracking-tight mb-4">
              SOCHEATH EK
              <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                MAO
              </motion.span>
            </h2>

            <div className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 h-16 flex items-center justify-center">
              <div className="font-black flex flex-col items-center">
                <span className="relative">
                  I'm a <span className="relative inline-block">
                    <RotatingText
                      texts={['Full Stack Developer', 'UI/UX Designer', 'Tech Innovator', 'Digital Artist']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-white/10 border border-white/10 rounded-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
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
              onClick={() => scrollToSection('experience')}
            >
              <BriefcaseBusiness className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View My Work
              <ChevronsRight className="ml-2 h-5 w-5 group-hover:translate-x-5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-4 border-white/30 text-white hover:bg-white hover:text-black text-lg font-semibold glass-effect"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
          </div>

          {/* Tech Stack Showcase */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              This Portfolio Was Built With
            </h2>

            <div className="flex flex-wrap justify-center cursor-default gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  // whileHover={{ scale: 1.05 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  {tech.icon}
                  <span className="text-sm text-gray-300">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
}