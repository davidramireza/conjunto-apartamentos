import { motion } from 'framer-motion'
import { services } from '../data/services'
import { serviceIcons } from './ServiceIcons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(201,168,76,0.03),transparent)]" />

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
            Servicios <span className="text-gradient">Exclusivos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Disfruta de instalaciones diseñadas para tu bienestar, comodidad y entretenimiento.
            Todo lo que necesitas, sin salir de casa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 hover:border-accent/40 transition-all duration-500 cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                {serviceIcons[service.icon]}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500 border-t border-white/5 pt-3">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.schedule}
                </div>
                {service.capacity && (
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Cap. {service.capacity}
                  </div>
                )}
              </div>

              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
