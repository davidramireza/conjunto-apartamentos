import { motion } from 'framer-motion'
import { useState } from 'react'

const paymentMethods = [
  {
    id: 'card',
    name: 'Tarjeta de Crédito / Débito',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'transfer',
    name: 'Transferencia Bancaria',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'pse',
    name: 'PSE',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'nequi',
    name: 'Nequi / Daviplata',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    color: 'from-rose-500 to-rose-700',
  },
]

const paymentHistory = [
  { date: '15 May 2026', concept: 'Administración Mayo', amount: 220, status: 'Pagado' },
  { date: '15 Abr 2026', concept: 'Administración Abril', amount: 220, status: 'Pagado' },
  { date: '15 Mar 2026', concept: 'Administración Marzo', amount: 220, status: 'Pagado' },
  { date: '15 Feb 2026', concept: 'Administración Febrero', amount: 220, status: 'Pagado' },
  { date: '01 Feb 2026', concept: 'Parqueadero Visitantes', amount: 45, status: 'Pagado' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Payments() {
  const [selectedMethod, setSelectedMethod] = useState(null)

  return (
    <section id="pagos" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(201,168,76,0.03),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Pago en Línea
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Paga tu <span className="text-gradient">Administración</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Realiza el pago de tu cuota de administración de forma rápida y segura desde cualquier lugar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Estado de Cuenta
            </h3>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="glass rounded-xl p-5">
                <span className="text-gray-400 text-sm">Cuota Mensual</span>
                <p className="text-2xl font-bold text-white mt-1">$220.000</p>
                <span className="text-xs text-gray-500">Apto 203 - Torre B</span>
              </div>
              <div className="glass rounded-xl p-5">
                <span className="text-gray-400 text-sm">Próximo Vencimiento</span>
                <p className="text-2xl font-bold text-accent mt-1">15 Jul 2026</p>
                <span className="text-xs text-gray-500">Dentro de 22 días</span>
              </div>
              <div className="glass rounded-xl p-5 border border-accent/20">
                <span className="text-gray-400 text-sm">Estado</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">Al Día</p>
                <span className="text-xs text-gray-500">Sin deudas pendientes</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Método de Pago</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <motion.button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                    selectedMethod === method.id
                      ? 'border-accent bg-accent/5'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shrink-0`}>
                    <span className="text-white">{method.icon}</span>
                  </div>
                  <span className="text-white text-sm font-medium">{method.name}</span>
                  {selectedMethod === method.id && (
                    <svg className="w-5 h-5 text-accent ml-auto shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </motion.button>
              ))}
            </div>

            {selectedMethod && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 glass rounded-xl p-6 border border-accent/10"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Nombre del Titular</label>
                    <div className="w-full glass rounded-xl px-4 py-3 text-white text-sm border border-white/10">
                      Carlos Andrés López
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      {selectedMethod === 'card' ? 'Número de Tarjeta' : selectedMethod === 'transfer' ? 'Banco Origen' : selectedMethod === 'nequi' ? 'Número de Celular' : 'Tipo de Documento'}
                    </label>
                    <div className="w-full glass rounded-xl px-4 py-3 text-white/40 text-sm border border-white/10">
                      {selectedMethod === 'card' ? '**** **** **** 4532' : selectedMethod === 'transfer' ? 'Bancolombia' : selectedMethod === 'nequi' ? '300 123 4567' : 'CC'}
                    </div>
                  </div>
                  {selectedMethod === 'card' && (
                    <>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Vencimiento</label>
                        <div className="w-full glass rounded-xl px-4 py-3 text-white/40 text-sm border border-white/10">12/28</div>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">CVC</label>
                        <div className="w-full glass rounded-xl px-4 py-3 text-white/40 text-sm border border-white/10">***</div>
                      </div>
                    </>
                  )}
                  {(selectedMethod === 'transfer' || selectedMethod === 'pse') && (
                    <>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Número de Cuenta</label>
                        <div className="w-full glass rounded-xl px-4 py-3 text-white/40 text-sm border border-white/10">*** 4567 8910</div>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Monto</label>
                        <div className="w-full glass rounded-xl px-4 py-3 text-white text-sm border border-accent/20">$220.000</div>
                      </div>
                    </>
                  )}
                  {selectedMethod === 'nequi' && (
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Monto</label>
                      <div className="w-full glass rounded-xl px-4 py-3 text-white text-sm border border-accent/20">$220.000</div>
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-accent to-accent-light text-dark font-semibold py-4 rounded-xl text-base transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                >
                  Pagar $220.000
                </motion.button>

                <p className="text-center text-gray-500 text-xs mt-3">
                  Pago simulado — transacción no real. Solo demostración visual.
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Historial de Pagos
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {paymentHistory.map((payment, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="glass rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{payment.concept}</span>
                      <span className="text-white font-semibold">${payment.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{payment.date}</span>
                      <span className="text-emerald-400 text-xs font-medium">{payment.status}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Pagado (2026)</span>
                  <span className="text-white font-bold">$925.000</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Información de Pago</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los pagos se procesan de forma segura. La cuota de administración incluye:
                mantenimiento de áreas comunes, servicios públicos, seguridad 24/7,
                administración y fondo de reserva.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pago seguro SSL
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Recibo electrónico
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Soporte 24/7
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
