import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Gmail, GitHubLight, LinkedIn, Telegram, Facebook } from "developer-icons";
import { Download, GraduationCap, UserRound } from "lucide-react";
const socials = [
  { href: "https://www.linkedin.com/in/socheathek-mao", icon: LinkedIn, label: "LinkedIn" },
  { href: "https://www.facebook.com/cheathzx", icon: Facebook, label: "X" },
  { href: "https://t.me/cheatzx", icon: Telegram, label: "Website" },
  { href: "mailto:maosocheathek@gmail.com", icon: Gmail, label: "Gmail" },
  { href: "https://github.com/Cheathek", icon: GitHubLight, label: "GitHub" },
];

const traits = ["Innovation", "Leadership", "Problem Solving", "Team Collaboration"];
const describe = `I have experience working both independently and in team environments, delivering quality projects on time. With a keen eye for design and a strong focus on user experience (UX/UI), I aim to build websites that not only look great but are also functional, fast, and accessible to all users, regardless of their devices or abilities. My skills also extend to ensuring that web applications are optimized for performance and meet modern web standards.`;

const education = [
  {
    school: "Kampong Thum High School",
    degree: "High School Diploma · 2021 - 2022",
  },
  {
    school: "Passerelles Numériques Cambodia (PNC)",
    degree: "Associate Degree · 2022 - 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <UserRound className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">ABOUT ME</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            WHO I
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
            >
              AM
            </motion.span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey, skills, and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <div className="order-2 lg:order-1 flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="rounded-3xl relative w-64 h-64 sm:w-72 sm:h-72 mb-4 bg-gradient-to-br from-gray-800 to-black shadow-inner shadow-black/50 border border-white/10 group">
                <Avatar className="w-full h-full">
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-1/5 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
                  </motion.div>
                  <AvatarImage
                    src="/image.gif"
                    alt="Profile"
                    className="object-cover"
                  />
                </Avatar>
              </div>
              {/* Name + Role + Company */}
              <div className="text-white space-y-1 mb-10">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Ryomen Sukuna
                </h3>
                <p className="text-lg font-semibold text-white/70">Full Stack Developer</p>
                <p className="text-md text-cyan-500">Tech Company, Inc.</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mb-5">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white hover:text-white transition duration-300 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition">
                      <Icon className="w-7 h-7" />
                    </div>
                  </a>
                ))}
              </div>
              {/* Download my CV */}
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4 hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                <Download className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-medium tracking-wide">Download CV</span>
              </a>

            </div>
          </div>

          {/* Bio + Traits + Education */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="max-w-3xl space-y-6 p-6 border border-white/20 rounded-2xl bg-white/5">
              {/* Title */}
              <h2 className="text-white text-3xl mb-8 font-semibold">Resume / Summary</h2>

              {/* Bio */}
              <div className="text-left md:text-justify text-base md:text-xl text-gray-300 leading-relaxed hyphens-none">
                &nbsp;&nbsp;&nbsp;&nbsp; {describe}
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-4">
                {traits.map((trait) => (
                  <Badge
                    key={trait}
                    variant="outline"
                    className="px-4 py-2 text-sm border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>


            {/* Education */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">Education</h4>
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-cyan-500 rounded-md">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-cyan-300 font-semibold text-lg">
                        {item.school}
                      </h5>
                      <p className="text-md text-gray-400">{item.degree}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
