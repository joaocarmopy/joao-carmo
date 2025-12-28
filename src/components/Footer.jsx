import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/joaocarmopy/joaocarmopy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joaocarmopy', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joaocarmo.py@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>       
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;