import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Facebook, GitHubLight, LinkedIn, Telegram } from "developer-icons";
import {
  Download,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Coffee,
  Lightbulb,
  Plane,
  BookOpen,
  Sprout,
  Camera,
  MessageCircle,
  Terminal,
  User,
} from "lucide-react";

const journey = `I'm a passionate full-stack developer and designer with over 5 years of experience creating digital experiences that matter. My journey began with curiosity about how things work on the web, and it has evolved into a deep expertise in modern technologies.`;

const personalInfos = [
  {
    icon: MapPin,
    handle: "San Francisco, CA",
    platform: "Location",
    link: "https://www.google.com/maps?q=San+Francisco,CA",
  },
  {
    icon: Mail,
    handle: "maosocheathek@gmail.com",
    platform: "Email",
    link: "mailto:maosocheathek@gmail.com",
  },
  {
    icon: Phone,
    handle: "+1 (555) 123-4567",
    platform: "Phone",
    link: "tel:+15551234567",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Stanford University",
    field: "Software Engineering & AI",
    years: "2021 - 2022",
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    field: "Cloud Architecture",
    years: "2022 - 2024",
  },
];

const interests = [
  { icon: Coffee, title: "Coffee", subtitle: "Enthusiast" },
  { icon: Lightbulb, title: "Tech", subtitle: "Innovation" },
  { icon: Plane, title: "Travel &", subtitle: "Culture" },
  { icon: BookOpen, title: "Continuous", subtitle: "Learning" },
];

const socials = [
  {
    icon: GitHubLight,
    handle: "@johndoe",
    platform: "GitHub",
    link: "https://github.com/johndoe",
  },
  {
    icon: LinkedIn,
    handle: "/in/johndoe",
    platform: "LinkedIn",
    link: "https://linkedin.com/in/johndoe",
  },
  {
    icon: Telegram,
    handle: "@johndoe",
    platform: "Telegram",
    link: "https://t.me/johndoe",
  },
  {
    icon: Facebook,
    handle: "@cheatzx",
    platform: "Facebook",
    link: "https://facebook.com/cheatzx",
  },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden pt-28 px-2 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <User className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">
              SKILLS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            WHO I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              AM
            </span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            My toolkit for building scalable, beautiful experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl" data-aos='fade-right' data-aos-duration='600'>
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-md opacity-60 animate-spin-slow" />
                  <Avatar className="w-70 h-70 border-4 border-white/10 relative">
                    <AvatarImage
                      src="/profile.jpg"
                      alt="Profile"
                      className="object-cover"
                    />
                  </Avatar>
                </div>
                <h3 className="text-2xl font-bold text-center mb-1">
                  SOCHEATH EK MAO
                </h3>
                <p className="text-gray-400 mb-6">Fullstack Developer</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 cursor-default w-full mb-6">
                  {socials.map((social, index) => (
                    <motion.a
                      whileHover={{ y: -5 }}
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-white/5 overflow-hidden group transition-colors duration-300"
                    >
                      {/* Sweep Effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                      <social.icon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                      <div>
                        <p className="text-white font-medium text-sm">
                          {social.platform}
                        </p>
                        <p className="text-gray-400 text-sm">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Download Button - Holographic Effect */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <a
                    href="/"
                    download
                    className="relative inline-flex items-center gap-3 px-10 py-3.5 rounded-full bg-gray-800/50 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <div className="relative h-5 w-5 overflow-hidden">
                      <Download className="absolute top-0 left-0 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-full" />
                      <Download className="absolute top-0 left-0 w-5 h-5 text-white transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0" />
                    </div>
                    <span className="font-medium tracking-wide text-white">
                      Download CV
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Contact Information */}
            <div
              data-aos='fade-up' data-aos-duration='600'
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {personalInfos.map((info, index) => (
                  <motion.a
                    whileHover={{ y: -5 }}
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-start gap-4 p-2 rounded-lg bg-gray-800/50 border border-white/5 overflow-hidden group transition-colors duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <div className="p-2 rounded-lg bg-gray-800/50 border border-white/5 transition-colors">
                      <info.icon className="w-5 h-5 text-gray-300 transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.platform}</p>
                      <p className="text-white font-medium">{info.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* My Journey */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl" data-aos='fade-left' data-aos-duration='600' data-aos-delay='400'>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sprout className="w-6 h-6" />
                My Professional Journey
              </h3>
              <div className="text-lg sm:text-xl md:text-xl text-gray-200 leading-relaxed max-w-none">
                <p className="text-gray-300 mb-4">{journey}</p>
                <p className="text-gray-300 mb-4">
                  I specialize in React, Node.js, and cloud technologies, but
                  what sets me apart is my ability to bridge the gap between
                  design and development. I don't just build applications—I
                  craft experiences that users love and businesses depend on.
                </p>
                <p className="text-gray-300">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through talks and
                  mentoring.
                </p>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl" data-aos='fade-up' data-aos-duration='600' data-aos-delay='200' >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex items-center relative pl-8 pb-6 last:pb-0"
                    >
                      <div className="absolute left-0 transform -translate-x-1/2 w-px bg-stone-50 h-full top-0" />
                      <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-50 top-1" />
                      {/* Education Content (Text on the right) */}
                      <div className="">
                        <h4 className="text-lg sm:text-xl md:text-xl text-gray-200 leading-relaxed">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400 mb-1">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.field}</p>
                        <p className="text-sm text-stone-50 mt-5">
                          {edu.years}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10 shadow-xl" data-aos='fade-up' data-aos-duration='600' data-aos-delay='400'
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Camera className="w-6 h-6" />
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 gap-4 cursor-default">
                  {interests.map((interest, index) => (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={index}
                      className="group relative flex flex-col items-center p-4 rounded-xl bg-gray-800/50 border border-white/5 overflow-hidden"
                    >
                      {/* Hover Sweep Effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
                      <interest.icon className="w-8 h-8 text-stone-50 mb-2 relative z-10" />
                      <h4 className="text-white font-medium text-center relative z-10">
                        {interest.title}
                      </h4>
                      <p className="text-gray-400 text-sm text-center relative z-10">
                        {interest.subtitle}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
