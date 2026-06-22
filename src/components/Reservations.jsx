import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data/services'
import { serviceIcons } from './ServiceIcons'

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
]

const durations = [
  { value: 30, label: '30 min' },
  { value: 60, label: '1 hora' },
  { value: 90, label: '1.5 horas' },
  { value: 120, label: '2 horas' },
]

export default function Reservations() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDuration, setSelectedDuration] = useState(60)
  const [showConfirm, setShowConfirm] = useState(false)
  const [step, setStep] = useState(1)

  const reservable = services.filter(s => s.capacity)

  const handleReserve = () => {
    if (!selectedService || !selectedDate || !selectedTime) return
    setShowConfirm(true)
  }

  const handleConfirm = () => {
    setShowConfirm(false)
    setSelectedService(null)
    setSelectedDate('')
    setSelectedTime('')
    setSelectedDuration(60)
    setStep(1)
  }

  return (
    <section id="reservas" className="relative py-28 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(42,82,152,0.05),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-3">Reserva en Línea</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Reserva tu <span className="text-gradient">Espacio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecciona el servicio, elige la fecha y la hora. Reserva tu espacio de manera rápida y sencilla.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showConfirm ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      step >= s ? 'bg-accent text-dark' : 'glass text-gray-500'
                    }`}>
                      {step > s ? '✓' : s}
                    </div>
                    {s < 3 && (
                      <div className={`w-12 sm:w-20 h-0.5 transition-colors ${step > s ? 'bg-accent' : 'bg-white/10'}`} />
                    )}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-lg text-white font-semibold mb-4 text-center">¿Qué servicio deseas reservar?</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                      {reservable.map((service) => (
                        <motion.button
                          key={service.id}
                          onClick={() => { setSelectedService(service); setSelectedTime('') }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                            selectedService?.id === service.id
                              ? 'border-accent bg-accent/10 text-white shadow-lg shadow-accent/10'
                              : 'border-white/10 glass text-gray-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                            {serviceIcons[service.icon]}
                          </div>
                          <span className="text-sm font-medium">{service.name}</span>
                        </motion.button>
                      ))}
                    </div>
                    <div className="text-center">
                      <motion.button
                        onClick={() => selectedService && setStep(2)}
                        disabled={!selectedService}
                        whileHover={selectedService ? { scale: 1.02 } : {}}
                        whileTap={selectedService ? { scale: 0.98 } : {}}
                        className="bg-accent hover:bg-accent-light text-dark font-semibold px-8 py-3 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        Continuar
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass rounded-2xl p-6 sm:p-8 border border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Reservar: <span className="text-accent">{selectedService?.name}</span>
                    </h3>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Fecha</label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Duración</label>
                        <select
                          value={selectedDuration}
                          onChange={(e) => setSelectedDuration(Number(e.target.value))}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                        >
                          {durations.map((d) => (
                            <option key={d.value} value={d.value} className="bg-dark">{d.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-end">
                        <p className="text-sm text-gray-400">
                          Capacidad máxima: <span className="text-white font-semibold">{selectedService?.capacity} personas</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-3">Horario disponible</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-accent text-dark'
                                : 'glass text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <motion.button
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-gray-400 hover:text-white font-medium px-6 py-3 transition-colors"
                      >
                        ← Atrás
                      </motion.button>
                      <motion.button
                        onClick={() => { setStep(3); handleReserve() }}
                        disabled={!selectedDate || !selectedTime}
                        whileHover={selectedDate && selectedTime ? { scale: 1.02 } : {}}
                        whileTap={selectedDate && selectedTime ? { scale: 0.98 } : {}}
                        className="bg-accent hover:bg-accent-light text-dark font-semibold px-8 py-3 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Confirmar Reserva
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-md mx-auto"
            >
              <div className="glass-accent rounded-2xl p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">¡Reserva Confirmada!</h3>
                <p className="text-gray-300 mb-6">Tu reserva ha sido registrada exitosamente.</p>

                <div className="bg-white/5 rounded-xl p-5 mb-6 text-left space-y-3">
                  {[
                    { label: 'Servicio', value: selectedService?.name },
                    { label: 'Fecha', value: selectedDate },
                    { label: 'Hora', value: selectedTime },
                    { label: 'Duración', value: `${selectedDuration} min` },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{item.label}</span>
                      <span className="text-sm text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={handleConfirm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-accent to-accent-light text-dark font-semibold px-10 py-3.5 rounded-xl transition-all shadow-lg shadow-accent/20"
                >
                  Nueva Reserva
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
