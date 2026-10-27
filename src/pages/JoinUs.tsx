import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Copy, Check, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2200);
    }
  };

  const contacts = [
    {
      key: 'euge',
      name: 'Euge',
      role: 'Curaduría & Asesoramiento',
      phoneDisplay: '11 2779-0627',
      phoneRaw: '+5491127790627',
      whatsappUrl: 'https://wa.me/5491127790627?text=Hola%20Euge,%20te%20escribo%20desde%20Allier%20Art%20Studio',
      initials: 'E',
    },
    {
      key: 'cris',
      name: 'Cris',
      role: 'Artista & Curaduría',
      phoneDisplay: '11 6192-3712',
      phoneRaw: '+5491161923712',
      whatsappUrl: 'https://wa.me/5491161923712?text=Hola%20Cris,%20te%20escribo%20desde%20Allier%20Art%20Studio',
      initials: 'C',
    },
  ];

  return (
    <div className="pt-32 md:pt-40 pb-32 px-6 min-h-screen bg-luxury-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-ink/5 border border-luxury-ink/10 mb-6">
            <Sparkles size={12} className="text-luxury-ink/60" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-luxury-ink/70">
              Atención Personalizada
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight text-luxury-ink mb-6">
            Hablemos
          </h1>

          <p className="text-sm md:text-base font-light leading-relaxed text-luxury-ink/70">
            Nos encanta conectar de forma directa con coleccionistas, diseñadores, arquitectos y amantes del arte. 
            Escribinos o contactanos directamente para coordinar visitas privadas, cotizaciones o asesoramiento exclusivo para tus espacios.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="space-y-8">
          {/* Card: Correo Electrónico Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 md:p-10 rounded-3xl bg-white border border-luxury-ink/10 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-ink/5 flex items-center justify-center text-luxury-ink">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-ink/40 block">
                      Correo Electrónico
                    </span>
                    <a
                      href="mailto:allierartstudio@gmail.com"
                      className="text-xl md:text-2xl font-serif text-luxury-ink hover:text-luxury-accent transition-colors break-all"
                    >
                      allierartstudio@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-xs md:text-sm font-light text-luxury-ink/60 max-w-xl pl-0 md:pl-[52px]">
                  Consultas generales, colaboraciones institucionales y proyectos de arquitectura. Respondemos en el día.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 md:pt-0">
                <button
                  type="button"
                  onClick={() => handleCopy('allierartstudio@gmail.com', 'email')}
                  className="px-5 py-3 rounded-full border border-luxury-ink/15 hover:border-luxury-ink text-luxury-ink text-xs uppercase tracking-wider font-medium transition-all duration-200 inline-flex items-center gap-2 bg-luxury-bg/50 hover:bg-white active:scale-95"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="opacity-60" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:allierartstudio@gmail.com"
                  className="px-6 py-3 rounded-full bg-luxury-ink text-luxury-bg text-xs uppercase tracking-[0.2em] font-medium hover:bg-luxury-ink/90 transition-all duration-200 inline-flex items-center gap-2 shadow-sm active:scale-95"
                >
                  <span>Escribir mail</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Section: Teléfonos & WhatsApp Directos */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-semibold text-luxury-ink/50">
                  Teléfonos de Contacto Directo
                </h2>
                <p className="text-xs font-light text-luxury-ink/60 mt-1">
                  Elegí con quién comunicarte por llamada o mensaje directo de WhatsApp:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + index * 0.1 }}
                  className="p-8 rounded-3xl bg-white border border-luxury-ink/10 shadow-sm flex flex-col justify-between space-y-6 hover:border-luxury-ink/20 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-luxury-ink text-luxury-bg font-serif text-lg flex items-center justify-center font-normal">
                          {contact.initials}
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-luxury-ink leading-none">
                            {contact.name}
                          </h3>
                          <span className="text-[10px] uppercase tracking-wider text-luxury-ink/50 block mt-1">
                            {contact.role}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                        Disponible
                      </span>
                    </div>

                    <div className="mt-4 p-4 rounded-2xl bg-luxury-bg/70 border border-luxury-ink/5">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-luxury-ink/40 block mb-1">
                        Teléfono Móvil
                      </span>
                      <div className="flex items-center justify-between">
                        <a
                          href={`tel:${contact.phoneRaw}`}
                          className="text-lg md:text-xl font-medium tracking-wide text-luxury-ink hover:text-luxury-accent transition-colors"
                        >
                          {contact.phoneDisplay}
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopy(contact.phoneDisplay, contact.key)}
                          title="Copiar número"
                          className="p-2 rounded-full hover:bg-white text-luxury-ink/60 hover:text-luxury-ink transition-colors"
                        >
                          {copiedKey === contact.key ? (
                            <Check size={16} className="text-emerald-600" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contact Actions: WhatsApp & Call */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-full bg-[#1F2937] hover:bg-black text-white text-[11px] uppercase tracking-wider font-medium inline-flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                      <ArrowUpRight size={13} className="opacity-70" />
                    </a>

                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="py-3 px-4 rounded-full border border-luxury-ink/15 hover:border-luxury-ink text-luxury-ink text-[11px] uppercase tracking-wider font-medium inline-flex items-center justify-center gap-2 bg-luxury-bg/50 hover:bg-white transition-all active:scale-95"
                    >
                      <Phone size={14} className="opacity-75" />
                      <span>Llamar</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Location & Studio Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="p-8 rounded-3xl bg-[#FAF9F7] border border-luxury-ink/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-ink/5 flex items-center justify-center text-luxury-ink shrink-0">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-sm font-serif font-medium text-luxury-ink">
                  Estudio en Buenos Aires, Argentina
                </h4>
                <p className="text-xs font-light text-luxury-ink/60 mt-0.5">
                  Coordinamos asesoramientos presenciales y envíos especializados de obra a todo el país.
                </p>
              </div>
            </div>

            <div className="shrink-0 text-left md:text-right">
              <span className="text-[10px] uppercase tracking-widest text-luxury-ink/40 block">
                Horario de atención
              </span>
              <span className="text-xs font-light text-luxury-ink/80 block mt-0.5">
                Lunes a Sábados — 9:00 a 20:00 hs
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
