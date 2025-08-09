import { GitHubLight, LinkedIn, Gmail, Telegram, Facebook } from "developer-icons";

export function Footer() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/socheathek-mao", icon: LinkedIn, label: "LinkedIn" },
    { href: "https://www.facebook.com/cheathzx", icon: Facebook, label: "X" },
    { href: "https://t.me/cheatzx", icon: Telegram, label: "Website" },
    { href: "mailto:maosocheathek@gmail.com", icon: Gmail, label: "Gmail" },
    { href: "https://github.com/Cheathek", icon: GitHubLight, label: "GitHub" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-slate-800/60 border border-slate-700/50 rounded-md text-xs font-medium text-slate-300 hover:bg-slate-700/60 hover:border-slate-600/70 hover:border-cyan-400/30 transition-all transform hover:-translate-y-1 duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Socheath Ek Mao. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
