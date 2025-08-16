import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Download, Home, Mail, Menu, User2Icon, X } from 'lucide-react';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        ? 'bg-black/10 backdrop-blur-lg border-b border-white/20 shadow-2xl'
        : 'bg-transparent'
        }`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-32">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Side */}
            <div className="flex-1 flex items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 text-white font-bold text-xl hover:text-cyan-300 transition-all duration-300 group"
              >
                <div className="relative w-8 h-8">
                  <img
                    src="/favicon.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-300 hover:transition-all"
                  />
                </div>
                <span className="hidden sm:block tracking-tighter">SOCHEATH</span>
              </button>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="flex-1 flex justify-end">
              <div className="flex-1 flex justify-end">
                <div className="hidden lg:flex items-center gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-2xl group flex items-center ${activeSection === item.id
                          ? 'text-white bg-gray-800'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-gray-800 rounded-2xl -z-10 border border-gray-700"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <div className="lg:hidden flex-1 flex justify-end">
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
