'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp, FiPhone } from 'react-icons/fi'

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/rizkihabibi', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/in/rizkihabibi', color: 'hover:text-blue-500' },
  { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/rizkihabibi', color: 'hover:text-pink-500' },
  { name: 'Email', icon: FiMail, href: 'mailto:rizkihabibi2432@gmail.com', color: 'hover:text-red-400' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative py-16 px-4 bg-charcoal-950 border-t border-charcoal-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Mari Terhubung! 👋
          </h2>
          <p className="text-soft-gray-400 max-w-md mx-auto mb-6">
            Tertarik untuk berkolaborasi atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="tel:+62882009725053" 
              className="flex items-center gap-2 text-soft-gray-400 hover:text-navy-400 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span>+62 882-009-725-053</span>
            </a>
            <span className="hidden sm:block text-soft-gray-600">|</span>
            <a 
              href="mailto:rizkihabibi2432@gmail.com" 
              className="flex items-center gap-2 text-soft-gray-400 hover:text-navy-400 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              <span>rizkihabibi2432@gmail.com</span>
            </a>
          </div>

          {/* Contact Button */}
          <motion.a
            href="mailto:rizkihabibi2432@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiMail className="w-5 h-5" />
            Hubungi Saya
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl bg-charcoal-800/50 text-soft-gray-400 ${social.color} transition-all duration-300 hover:bg-charcoal-700`}
              title={social.name}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-charcoal-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-soft-gray-500 text-sm flex items-center gap-1"
            >
              © {new Date().getFullYear()} Rizki Habibi. Dibuat dengan
              <FiHeart className="w-4 h-4 text-red-500" />
              menggunakan Next.js
            </motion.p>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {['Beranda', 'Proyek', 'Sertifikat', 'CV'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase() === 'beranda' ? 'home' : link.toLowerCase() === 'proyek' ? 'projects' : link.toLowerCase() === 'sertifikat' ? 'certificates' : 'cv'}`}
                  className="text-soft-gray-500 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-navy-600 text-soft-gray-400 hover:text-white transition-all"
              title="Kembali ke atas"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-soft-gray-600 text-xs">
            Built with Next.js • Tailwind CSS • Framer Motion • Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
