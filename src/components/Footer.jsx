import { motion } from 'framer-motion'

const footerLinks = {
  servicios: ['Gimnasio', 'Piscina', 'Sauna', 'Salón de Eventos', 'Zona BBQ', 'Lavandería', 'Seguridad 24h'],
  empresa: ['Sobre Nosotros', 'Blog', 'Trabaja con Nosotros', 'Política de Privacidad', 'Términos y Condiciones'],
}

const socials = [
  { name: 'Facebook', icon: 'f' },
  { name: 'Instagram', icon: 'ig' },
  { name: 'Twitter', icon: 'x' },
  { name: 'LinkedIn', icon: 'in' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(201,168,76,0.02),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20">
                <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Residencial <span className="text-accent">Paraíso</span></span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm"
            >
              Más que un hogar, un estilo de vida. Vive la mejor experiencia en nuestro conjunto residencial, donde cada detalle está pensado para tu bienestar.
            </motion.p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 transition-all text-xs font-bold"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Suscríbete para recibir noticias y ofertas exclusivas.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 glass rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent-light text-dark font-semibold px-4 py-2.5 rounded-xl text-sm transition-all"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Residencial Paraíso. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
