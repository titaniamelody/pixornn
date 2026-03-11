import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, color: "hover:text-[#5865F2]" },
  { href: "https://twitter.com", icon: <FaTwitter />, color: "hover:text-[#1DA1F2]" },
  { href: "https://youtube.com", icon: <FaYoutube />, color: "hover:text-[#FF0000]" },
  { href: "https://medium.com", icon: <FaMedium />, color: "hover:text-[#00FF60]" },
];

const Footer = () => {
  return (
    <footer className="w-screen py-12 border-t border-white/10 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/img/logo.svg" alt="logo" className="w-14" />
            <span className="text-white font-zentry text-2xl">Pixorn</span>
          </div>
          
          <div className="flex justify-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-50 transition-colors duration-500 ease-in-out ${link.color} text-3xl`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-blue-50 text-sm">
            © 2024 Pixorn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
