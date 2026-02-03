'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Sistem Integrasi KVT',
    description: 'Sistem integrasi untuk manajemen KVT yang komprehensif dengan fitur lengkap untuk pengelolaan data dan pelaporan.',
    image: '/project/sistem integrasi KVT.png',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    github: '#',
    demo: '#',
    year: '2024',
  },
  {
    id: 2,
    title: 'Sistem K-Amu Laravel All in One',
    description: 'Aplikasi sistem sekolah berbasis Laravel dengan fitur all-in-one untuk manajemen akademik, kehadiran, dan administrasi.',
    image: '/project/sistem k-amu berbasi laravel all in one .png',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Livewire'],
    github: '#',
    demo: '#',
    year: '2024',
  },
  {
    id: 3,
    title: 'Laravel Inventory System',
    description: 'Sistem manajemen inventaris dengan fitur CRUD lengkap, laporan stok, dan tracking barang masuk/keluar.',
    image: null,
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    github: '#',
    demo: '#',
    year: '2023',
  },
  {
    id: 4,
    title: 'REST API Service',
    description: 'RESTful API service untuk berbagai aplikasi dengan authentication JWT dan dokumentasi Swagger.',
    image: null,
    tech: ['Laravel', 'API', 'JWT', 'Swagger'],
    github: '#',
    demo: '#',
    year: '2023',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Proyek Saya</h2>
          <p className="text-soft-gray-400 max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan, dari sistem informasi hingga aplikasi web modern.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-charcoal-900 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-900 to-charcoal-900">
                    <FiFolder className="w-16 h-16 text-navy-500/50" />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-navy-600/80 backdrop-blur-sm rounded-full text-xs font-medium">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-navy-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-soft-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-charcoal-800">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-soft-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    Kode
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-soft-gray-400 hover:text-navy-400 transition-colors text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/kikiproject"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy-400 hover:text-navy-300 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
            Lihat lebih banyak di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
