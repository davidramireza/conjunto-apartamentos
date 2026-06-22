import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Básico',
    price: '$120',
    period: '/mes',
    desc: 'Perfecto para quienes buscan lo esencial.',
    features: ['Acceso a Gimnasio', 'Uso de Lavandería', 'Parque Infantil', 'Seguridad 24/7'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$220',
    period: '/mes',
    desc: 'La opción más popular con beneficios adicionales.',
    features: ['Todo del plan Básico', 'Piscina y Sauna', 'Zona BBQ', 'Salón de Eventos (2 hrs/mes)', 'Parking preferencial'],
    highlight: true,
  },
  {
    name: 'VIP',
    price: '$350',
    period: '/mes',
    desc: 'Acceso ilimitado a todas las instalaciones.',
    features: ['Todo del plan Premium', 'Acceso ilimitado a eventos', 'Servicio de limpieza', 'Reserva prioritaria', 'Descuentos en convenios'],
    highlight: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
  })
}

export default function Plans() {
  return (
    <section id="planes" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(201,168,76,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-3">Planes para Residentes</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Elige tu <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecciona el plan que mejor se adapte a tus necesidades y disfruta de todos los beneficios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={plan.highlight ? { scale: 1.03 } : { scale: 1.02 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.highlight
                  ? 'glass-accent shadow-xl shadow-accent/10 ring-1 ring-accent/30'
                  : 'glass hover:border-accent/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-light text-dark text-xs font-bold px-4 py-1 rounded-full">
                  MÁS POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#reservas"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-accent to-accent-light text-dark shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30'
                    : 'border border-white/20 text-white hover:bg-white/5 hover:border-accent/30'
                }`}
              >
                Elegir Plan
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
