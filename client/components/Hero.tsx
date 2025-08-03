import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Mail, ChevronsRight, CloudSun, BriefcaseBusiness } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Tech Innovator', 'Digital Artist'];

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
  const { text: greetingText, Icon: GreetingIcon, color: iconColor } = getGreeting();

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (typedText.length < currentText.length) {
        const speed = 60 + Math.random() * 40;
        timeoutId = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, speed);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        const deleteSpeed = 25 + Math.random() * 25;
        timeoutId = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 300);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [typedText, currentTextIndex, isTyping]);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8"
    >
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
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 space-y-4">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2 mt-24 sm:mt-20 animate-fade-in-up">
            <GreetingIcon className="w-5 h-5 mr-3" style={{ color: iconColor }} />
            <span className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
              {greetingText}, <span className="font-semibold text-cyan-300 tracking-wide">my name is</span>
            </span>
          </div>

          <h2 className="text-6xl sm:text-6xl md:text-8xl italic font-black text-white tracking-tight mb-4">
            RYOMEN
            <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              SUKUNA
            </motion.span>
          </h2>

          <div className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 h-16 flex items-center justify-center">
            <div className="font-light flex flex-col items-center">
              <span className="typing-cursor relative">
                I'm a <span className="relative inline-block">
                  {typedText}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                </span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Crafting extraordinary digital experiences through innovative design, cutting-edge technology,
          and a passion for pushing the boundaries of what's possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="group relative px-8 py-4 bg-white text-black hover:bg-gray-200 text-lg font-semibold glow-effect"
            onClick={() => scrollToSection('projects')}
          >
            <BriefcaseBusiness className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View My Work
            <ChevronsRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
          <div className="text-center glass-effect rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center glass-effect rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center glass-effect rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
