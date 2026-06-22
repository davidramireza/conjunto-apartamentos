import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  { src: '/gallery/piscina.jpg', label: 'Piscina Climatizada', desc: 'Relájate en nuestra piscina semiolímpica' },
  { src: '/gallery/gimnasio.jpg', label: 'Gimnasio Moderno', desc: 'Equipado con tecnología de punta' },
  { src: '/gallery/eventos.jpg', label: 'Salón de Eventos', desc: 'Espacio elegante para tus celebraciones' },
  { src: '/gallery/bbq.jpg', label: 'Zona BBQ', desc: 'Comparte en familia al aire libre' },
  { src: '/gallery/parque.jpg', label: 'Parque Infantil', desc: 'Diversión segura para los más pequeños' },
  { src: '/gallery/sauna.jpg', label: 'Sauna & Spa', desc: 'Tu momento de relajación perfecto' },
]

const fallbackColors = [
  'from-blue-400 to-blue-700',
  'from-emerald-400 to-emerald-700',
  'from-purple-400 to-purple-700',
  'from-amber-400 to-orange-600',
  'from-green-400 to-emerald-600',
  'from-rose-400 to-red-600',
]

const fallbackIcons = [
  '🏊', '💪', '🎉', '🍖', '🌳', '🧖'
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loaded, setLoaded] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="galeria" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_50%,rgba(201,168,76,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-3">Nuestras Instalaciones</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Galería <span className="text-gradient">Virtual</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conoce cada espacio de nuestro conjunto residencial a través de esta galería interactiva.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
          <div className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColors[activeIndex]} opacity-80`} />
                <div className="absolute inset-0 bg-dark/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-4xl mb-2 block">{fallbackIcons[activeIndex]}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {galleryImages[activeIndex].label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {galleryImages[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % galleryImages.length)}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative h-[140px] sm:h-[180px] lg:h-[calc(236px)] rounded-xl overflow-hidden group cursor-pointer ${
                  activeIndex === i ? 'ring-2 ring-accent' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${fallbackColors[i]} opacity-70 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
                <div className="absolute bottom-2 left-3">
                  <span className="text-lg">{fallbackIcons[i]}</span>
                  <p className="text-white text-xs font-medium mt-0.5">{img.label}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
