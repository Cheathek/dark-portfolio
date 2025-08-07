import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Home, Mail, Menu, MessageCircle, User2Icon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background opacity
      setIsScrolled(window.scrollY > 50);

      // Handle active section highlighting
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User2Icon },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-2xl'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 text-white font-bold text-xl hover:text-cyan-300 transition-colors group"
            >
              <div className="relative">
                <Code2 className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-400/40 transition-all duration-300"></div>
              </div>
              <span className="hidden sm:block">SocheathEk•Mao</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3"> {/* increased space-x a bit */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full group flex items-center justify-center ${activeSection === item.id
                    ? 'text-black bg-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  style={{ zIndex: activeSection === item.id ? 10 : 'auto' }}
                >
                  {item.icon && (
                    <span className="flex items-center justify-center mr-2">
                      <item.icon className="h-4 w-4" />
                    </span>
                  )}
                  {item.label}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-black font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                Let's Talk
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-cyan-300 transition-colors p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen
          ? 'max-h-[360px] bg-black/95 backdrop-blur-lg border-b border-white/10' // Fixed height
          : 'max-h-0'
          }`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center w-full text-left px-4 py-2.5 text-base font-medium transition-all duration-300 rounded-lg ${activeSection === item.id
                  ? 'text-white bg-white/10 backdrop-blur-sm'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.icon && (
                  <span className="inline-flex mr-3">
                    <item.icon className="h-5 w-5" />
                  </span>
                )}
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center w-full gap-2 py-2.5 bg-transparent border border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-black font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
