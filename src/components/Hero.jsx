import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const floatingWords = ['Comodidad', 'Lujo', 'Bienestar', 'Comunidad', 'Tranquilidad', 'Elegancia', 'Naturaleza', 'Armonía']

const stats = [
  { value: '12+', label: 'Servicios Exclusivos' },
  { value: '150+', label: 'Apartamentos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Seguridad' },
]

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % floatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0f1b2d] to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,168,76,0.15),transparent)]" />
      <div className="absolute inset-0 bg-grid" />

      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" />

      <div className="absolute top-32 left-1/4 hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-accent/20 text-7xl font-[family-name:var(--font-display)] select-none"
        >
          ✦
        </motion.div>
      </div>
      <div className="absolute bottom-1/3 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-accent/15 text-5xl select-none"
        >
          ◇
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-accent text-accent text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Bienvenido a tu nuevo hogar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          Vive la{' '}
          <span className="text-gradient">Experiencia</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-400 mt-4 block">
            más allá de{' '}
            <span className="relative inline-block">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-accent font-semibold"
              >
                {floatingWords[currentWord]}
              </motion.span>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Descubre un estilo de vida único con instalaciones de primer nivel,
          seguridad las 24 horas y una comunidad vibrante que te hará sentir en casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-accent to-accent-light text-dark font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 overflow-hidden"
          >
            <span className="relative z-10">Explorar Servicios</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          <motion.a
            href="#reservas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border border-white/20 hover:border-accent/50 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all overflow-hidden"
          >
            <span className="relative z-10">Reservar Ahora</span>
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}
