'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Sertifikat', href: '#certificates' },
  { name: 'CV', href: '#cv' },
  { name: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RH</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">Rizki Habibi</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-soft-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/rizkihabibi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-charcoal-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden navbar-blur border-t border-charcoal-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-soft-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/rizkihabibi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 py-2 text-soft-gray-300 hover:text-white"
              >
                <FiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
