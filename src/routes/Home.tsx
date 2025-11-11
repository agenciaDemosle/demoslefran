import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Star,
  Zap,
  Target,
  Code2,
  BarChart3,
  Megaphone,
  Workflow,
  MapPin,
  Puzzle,
  Sparkles,
  LineChart,
  CheckCircle2,
  Rocket,
  Globe,
  Heart,
  Package,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { OrganizationSchema, WebSiteSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { trackCTAClick } from '@/hooks/useAnalytics';
import { staticReviews } from '@/data/staticReviews';

const services = [
  {
    title: 'WEB',
    subtitle: 'Sistemas que venden',
    description: 'Plataformas escalables que convierten visitas en clientes.',
    href: '/web',
  },
  {
    title: 'APPS',
    subtitle: 'Productos digitales',
    description: 'Aplicaciones móviles y web que tus usuarios aman.',
    href: '/apps',
  },
  {
    title: 'CREATIVE',
    subtitle: 'Marcas memorables',
    description: 'Branding e identidad visual que conecta y convierte.',
    href: '/creative',
  },
];

const methodSteps = [
  {
    number: '01',
    title: 'Entendemos tu negocio',
    description: 'Analizamos tu mercado, competencia y audiencia. Identificamos oportunidades reales de crecimiento antes de gastar un peso.',
  },
  {
    number: '02',
    title: 'Creamos la estrategia',
    description: 'Diseñamos sistemas completos que conectan web, publicidad, contenido y automatización. Todo alineado a vender más.',
  },
  {
    number: '03',
    title: 'Medimos todo',
    description: 'Cada acción se rastrea y optimiza. Sabes exactamente qué funciona, qué no, y dónde invertir para crecer.',
  },
];

const metrics = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '3x', label: 'ROI promedio' },
];

const testimonial = {
  quote: 'Fantástico servicio, rápidos, amables, destacables más allá de lo que me podía esperar, ha sido una emocionante experiencia y han dejado muy en alto las expectativas que tenía, totalmente recomendado.',
  author: 'Claudio Alonso Cotroneo',
  company: 'thecotrostore.cl',
};

export function Home() {
  return (
    <>
      <SEO
        title="Creamos sistemas que venden"
        description="No construimos piezas sueltas: conectamos web, redes, campañas, automatización y datos en una arquitectura medible que transforma clics en clientes."
        url="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Hero Section - Creative Studio Layout */}
      <Section className="relative overflow-hidden py-0" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* Left Column - Content */}
            <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12 max-w-xl w-full"
              >
              {/* Titular gigante - Estructura escalonada */}
              <div className="space-y-3">
                <h1 style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  {/* Línea 1: "Creamos" - tamaño normal */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-3">
                    Creamos
                  </div>

                  {/* Línea 2: "Sistemas" - sobre franja rosada con "que" superpuesto */}
                  <div className="mb-3 relative">
                    <span className="inline-block bg-[#FF00A8] px-6 py-3">
                      <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                        Sistemas
                      </span>
                    </span>
                    {/* "que" posicionado en la parte inferior de la franja */}
                    <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 text-2xl md:text-3xl lg:text-4xl font-light text-white">
                      que
                    </span>
                  </div>

                  {/* Línea 3: "venden" grande */}
                  <div className="leading-none -mt-4">
                    <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white">venden</span>
                  </div>
                </h1>
              </div>

              {/* Texto descriptivo */}
              <p className="text-lg md:text-xl text-[#CFCFCF] leading-relaxed max-w-xl">
                No solo diseñamos interfaces bonitas. Construimos sistemas completos que conectan tu marca con tus clientes, automatizan procesos y generan resultados medibles desde el día uno.
              </p>

              {/* CTA principal con flecha decorativa */}
              <div className="relative inline-block">
                <Link to="/contacto">
                  <button
                    onClick={() => trackCTAClick('Cotizar', 'Hero')}
                    className="group relative bg-[#7b34cd] hover:bg-[#6a2db8] text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#7b34cd]" strokeWidth={2.5} />
                    </div>
                    <span>Cotizar</span>
                  </button>
                </Link>

                {/* Flecha curva decorativa */}
                <div className="absolute -bottom-16 left-32 hidden lg:block">
                  <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
                    <path d="M10 10 Q 50 50, 90 30" stroke="#C39AE9" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M85 25 L 90 30 L 85 35" stroke="#C39AE9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              </motion.div>
            </div>

            {/* Right Column - Full Video */}
            <div className="relative overflow-hidden">
              <motion.video
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/hero.mp4" type="video/mp4" />
              </motion.video>
            </div>

          </div>
        </div>
      </Section>

      {/* Services Section - Nuestros servicios */}
      <Section id="servicios" className="relative overflow-hidden py-16 md:py-24 bg-white">
        {/* Diagonal Fucsia Strip - Crosses entire screen */}
        <div className="absolute left-0 w-[150vw] h-24 md:h-40 lg:h-48 bg-[#FF00A8] -rotate-2 shadow-2xl" style={{ top: '80px', transformOrigin: 'left center' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* Header with Diagonal Strip */}
          <div className="mb-12 md:mb-16 relative">

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-none mb-2">
                En demosle,
              </h2>
              {/* Desktop: texto horizontal sin saltos, Mobile: permite saltos */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none mb-8 md:mb-12 -rotate-2 inline-block md:whitespace-nowrap" style={{ transformOrigin: 'left center' }}>
                LO HACEMOS DIFERENTE
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-3xl relative z-10 bg-white pt-2">
              Somos un equipo de expertos en marketing + desarrolladores. No sólo hacemos sitios geniales, si no que también diseñamos sistemas que venden, medibles y listos para escalar tus campañas.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Globe,
                title: "Sitios Web a Medida",
                subtitle: "(sin plantillas)",
                description: "Diseño 100% personalizado, hecho en código. Performance y SEO técnico desde el día uno.",
                prices: [
                  { label: "Sitio Web", price: "$299.990" },
                  { label: "eCommerce", price: "$499.990" }
                ]
              },
              {
                icon: TrendingUp,
                title: "Google Ads & Meta Ads",
                subtitle: "",
                description: "Publicidad enfocada en ventas, no en clics bonitos. Con pruebas A/B continuas.",
                prices: [{ label: "Google Ads / Meta Ads", price: "$119.990" }]
              },
              {
                icon: Zap,
                title: "Automatizaciones",
                subtitle: "que Cierran",
                description: "Conecta tu tráfico con ingresos. Carrito abandonado, seguimiento post-venta y cross-sell.",
                prices: [{ label: "Automatizaciones", price: "$299.990" }]
              },
              {
                icon: Rocket,
                title: "SaaS & Software",
                subtitle: "a Medida",
                description: "¿Tienes una idea? La volvemos producto. Arquitectura escalable y analítica integrada.",
                prices: [{ label: "Software a Medida", price: "$1.090.000" }]
              },
              {
                icon: Heart,
                title: "Redes Sociales",
                subtitle: "& Marketing",
                description: "Contenido que construye marca y trae clientes. Calendario editorial estratégico.",
                prices: [{ label: "Redes Sociales", price: "$249.990" }]
              },
              {
                icon: Package,
                title: "Funnel Completo",
                subtitle: "Listo para Vender",
                description: "De la estrategia al cierre, todo conectado. Alineamos Ads, Web, Contenido y Automatizaciones.",
                prices: [{ label: "Todos los Servicios", price: "10% descuento" }]
              }
            ].map((service, index) => {
              const Icon = service.icon;
              const rotations = [-2, 1, -1, 2, -3, 1];

              const handleWhatsAppClick = (priceLabel: string, priceValue: string) => {
                const message = `Hola! Me interesa cotizar: ${service.title} - ${priceLabel} (${priceValue})`;
                const whatsappUrl = `https://wa.me/56966354128?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                trackCTAClick(`WhatsApp - ${service.title} - ${priceLabel}`, 'Service Card');
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ rotate: rotations[index] }}
                  className="relative bg-white rounded-xl border-4 border-black shadow-2xl p-6 overflow-hidden"
                >
                  {/* Decorative circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-black/10 rounded-xl">
                      <Icon className="w-6 h-6 text-black" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-1 leading-tight">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-base font-light text-black/70 mb-3 leading-tight">
                        {service.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-black/70 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Prices */}
                    <div className="flex flex-wrap gap-2">
                      {service.prices.map((priceItem, priceIndex) => (
                        <button
                          key={priceIndex}
                          onClick={() => handleWhatsAppClick(priceItem.label, priceItem.price)}
                          className="inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 hover:bg-black/90"
                        >
                          <span className="opacity-80">{priceItem.label}</span>
                          <span>desde {priceItem.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Section>

      {/* Connected System Section - Minimalist */}
      <Section className="relative bg-[#FFF100] overflow-hidden py-0">
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* Left Column - Yellow with Grid */}
            <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-20">

              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-lg"
              >

                {/* Hierarchical Typography */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] mb-8">
                  <span className="block">SITIOS WEB</span>
                  <span className="block mt-2">CONECTADOS</span>
                </h2>

                <p className="text-xl md:text-2xl text-black/80 font-medium mb-8 leading-relaxed">
                  Integraciones esenciales desde el día uno para posteriores campañas
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    'Meta Pixel',
                    'Google Analytics',
                    'Tag Manager'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-black" />
                      <span className="text-lg md:text-xl text-black font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contacto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => trackCTAClick('Cotizar web + campañas', 'Connected System')}
                      className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors duration-300 shadow-xl"
                    >
                      Cotizar web + campañas
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Full Image */}
            <div className="relative overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                src="/images/web.jpg"
                alt="Sitios Web"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Campañas Google Ads & Meta Ads Section - Imagen invertida */}
      <Section className="relative bg-[#7B34CD] overflow-hidden py-0">
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout - Invertido */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* Left Column - Full Image (Invertido) */}
            <div className="relative overflow-hidden order-2 lg:order-1">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                src="/images/marketing.jpg"
                alt="Campañas Publicitarias"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Purple with Content */}
            <div className="relative flex items-center justify-center px-8 py-12 sm:p-8 md:p-16 lg:p-20 order-1 lg:order-2">

              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-lg w-full"
              >

                {/* Hierarchical Typography */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                  <span className="block">CAMPAÑAS</span>
                  <span className="block mt-2">PUBLICITARIAS</span>
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-8 leading-relaxed">
                  Publicidad enfocada en ventas, no en clics bonitos
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    'Google Ads',
                    'Meta Ads (Facebook & Instagram)',
                    'Optimización continua',
                    'Reportes con métricas reales'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                      <span className="text-base sm:text-lg md:text-xl text-white font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contacto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => trackCTAClick('Cotizar campañas', 'Ads Section')}
                      className="bg-white text-[#7B34CD] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                    >
                      Cotizar campañas
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Redes Sociales & Marketing de Contenido Section */}
      <Section className="relative bg-[#FF6B6B] overflow-hidden py-0">
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* Left Column - Red with Grid */}
            <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-20">

              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-lg"
              >

                {/* Hierarchical Typography */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                  <span className="block">REDES</span>
                  <span className="block mt-2">SOCIALES</span>
                </h2>

                <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 leading-relaxed">
                  Contenido que construye marca y trae clientes
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    'Gestión de redes sociales',
                    'Marketing de contenidos',
                    'Calendario editorial estratégico',
                    'Posts, Reels & Stories'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-lg md:text-xl text-white font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contacto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => trackCTAClick('Cotizar redes sociales', 'Social Media Section')}
                      className="bg-white text-[#FF6B6B] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                    >
                      Cotizar redes sociales
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Full Image */}
            <div className="relative overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                src="/images/redes.jpg"
                alt="Redes Sociales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section - Unique Centered Design */}
      <Section id="nosotros" className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#F8F7E5] via-white to-[#F8F7E5]">

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
              SOMOS JAVIER Y FRAN
            </h2>

            {/* Rectángulo chueco con frase */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block bg-[#7B34CC] px-8 py-4 mb-12 transform -rotate-2"
            >
              <p className="text-2xl md:text-3xl text-white font-light">
                Los que estamos detrás de Demosle :)
              </p>
            </motion.div>

            {/* Story Text */}
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Tú tienes un negocio, una idea o un proyecto que merece escalar. Y si estás aquí, probablemente ya probaste de todo: campañas que no miden, webs que no convierten o redes que se ven bien... pero no venden.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                Tranquilo. No estás solo.
              </p>
              <p>
                Por eso creamos <strong className="text-[#7b34cd] font-bold">Demosle</strong>: para unir estrategia, creatividad y tecnología en un sistema que hace lo que todos prometen — <strong className="text-gray-900 font-bold">vender de verdad</strong>.
              </p>
            </div>
          </motion.div>

          {/* Team Photos - Horizontal Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-16">

            {/* Javier Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/javier.png"
                  alt="Javier"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white font-black text-2xl mb-1">JAVIER</h3>
                  <p className="text-white/90 text-sm uppercase tracking-wider">Estrategia & Tech</p>
                </div>
              </div>
            </motion.div>

            {/* Fran Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-[3deg] group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/fran.png"
                  alt="Fran"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white font-black text-2xl mb-1">FRAN</h3>
                  <p className="text-white/90 text-sm uppercase tracking-wider">Creatividad y Diseño</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* CTA Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => trackCTAClick('Trabajemos juntos', 'Team Section')}
                className="group relative bg-[#7B34CD] hover:bg-[#6a2db8] text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-4"
              >
                <span>Trabajemos juntos</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
              </motion.button>
            </Link>
          </motion.div>

        </div>

        {/* Background Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#7b34cd]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFF100]/20 rounded-full blur-3xl"
        />
      </Section>

      {/* Reviews Section */}
      <Section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 text-center mb-16"
          >
            ¿Qué dicen nuestros clientes?
          </motion.h2>

          {/* Reviews Horizontal Scroll */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#7B34CD] scrollbar-track-gray-100">
              {staticReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex-none w-[350px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 snap-start"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-base line-clamp-6">
                    "{review.text}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7B34CD] flex items-center justify-center text-white font-bold text-sm">
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm">{review.author_name}</p>
                      <p className="text-gray-500 text-xs">{review.relative_time_description} • Google</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">Desliza para ver más reseñas</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Link to Google Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://g.page/r/CX4YHK05ErwfEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7B34CD] font-semibold text-lg hover:underline"
            >
              <span>Ver todas las reseñas en Google</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </Section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Quote Wizard Section */}
      <QuoteWizardSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isSocialMedia = project.category === 'social';

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex-shrink-0 bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
      style={{
        width: 'calc(25% - 18px)',
        minWidth: '300px',
        scrollSnapAlign: 'start',
        border: '3px solid #000000'
      }}
    >
      {/* Project Image - Vertical/Tall */}
      <div className="relative bg-gray-200 overflow-hidden" style={{ aspectRatio: isSocialMedia ? '9/16' : '3/4', height: isSocialMedia ? '600px' : '400px' }}>
        {project.image.endsWith('.MP4') || project.image.endsWith('.mov') ? (
          <>
            <video
              ref={videoRef}
              src={project.image}
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Audio Control Button - Only for social media */}
            {isSocialMedia && (
              <button
                onClick={toggleMute}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                aria-label={isMuted ? 'Activar audio' : 'Desactivar audio'}
              >
                {isMuted ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B34CD]/30 to-[#FF00A8]/30" />
            <div className="w-full h-full flex items-center justify-center text-gray-500 p-6 text-center">
              <span className="text-sm font-bold">{project.title}</span>
            </div>
          </>
        )}
      </div>

      {/* Instagram Reel - Only for projects with instagram link */}
      {project.instagram && (
        <div className="w-full bg-gray-100 p-4">
          <iframe
            src={`${project.instagram.replace('/reel/', '/p/').replace('?igsh=', '/embed/?utm_source=ig_embed&igshid=')}`.replace(/\?igsh=.*$/, '/embed/')}
            className="w-full h-[300px] border-0 rounded-lg"
            scrolling="no"
            allowTransparency={true}
          />
        </div>
      )}

      {/* Project Info - Hide for social media */}
      {!isSocialMedia && (
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        </div>
      )}
    </motion.a>
  );
}

// Portfolio Section Component - Horizontal Scroll
function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('web');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projectsByCategory = {
    web: [
      {
        id: 2,
        title: "Contadoor",
        description: "Página web profesional con recursos, herramientas, cotizador y servicio de Google Ads",
        image: "/images/contadoor.mov",
        url: "https://contadoor.cl/",
        tech: ["React", "TypeScript", "Google Ads"],
        results: [
          "Sistema de cotización automatizado",
          "Recursos y herramientas profesionales",
          "Campañas de Google Ads optimizadas"
        ]
      },
      {
        id: 5,
        title: "Fumigaciones Lourdes",
        description: "Página web de fumigaciones y servicio de Google Ads",
        image: "/images/fumigaciones.mov",
        url: "https://fumigacioneslourdes.cl/",
        tech: ["WordPress", "Google Ads", "SEO"],
        results: [
          "Campañas de Google Ads efectivas",
          "Aumento en leads cualificados",
          "Posicionamiento local optimizado"
        ]
      },
      {
        id: 6,
        title: "La Prov Studio",
        description: "Página web profesional con cotizador dinámico",
        image: "/images/laprov.MP4",
        url: "https://laprovstudio.cl/",
        tech: ["React", "TypeScript", "Cotizador Dinámico"],
        results: [
          "Cotizador interactivo en tiempo real",
          "Diseño profesional y moderno",
          "Formulario de contacto optimizado"
        ]
      },
      {
        id: 8,
        title: "Piscinas Alfa",
        description: "Página web profesional",
        image: "/images/piscinasalfa.mov",
        url: "https://piscinasalfa.cl/",
        tech: ["WordPress", "Diseño Web", "SEO"],
        results: [
          "Diseño profesional y moderno",
          "Galería de proyectos",
          "Formulario de cotización"
        ]
      },
      {
        id: 9,
        title: "Wings",
        description: "Página web profesional enlazada con Angendra Pro para gestión integral",
        image: "/images/wings.MP4",
        url: "https://wings.cl/",
        tech: ["React", "Angendra Pro", "Integración"],
        results: [
          "Integración con sistema Angendra Pro",
          "Gestión integral automatizada",
          "Diseño profesional y funcional"
        ]
      },
      {
        id: 11,
        title: "Grúas JPV",
        description: "Página web profesional para servicios de grúas",
        image: "/images/gruas.mov",
        url: "https://gruasjpv.cl/",
        tech: ["WordPress", "Diseño Web", "SEO"],
        results: [
          "Diseño profesional y corporativo",
          "Información de servicios clara",
          "Formulario de contacto optimizado"
        ]
      },
      {
        id: 12,
        title: "Morgan Cauchos",
        description: "Landing page profesional para venta de cauchos y neumáticos",
        image: "/images/morgancauchos.MP4",
        url: "https://morgancauchos.cl/",
        tech: ["WordPress", "Diseño Web", "SEO"],
        results: [
          "Página web profesional y moderna",
          "Información clara de productos",
          "Formulario de contacto optimizado"
        ]
      },
      {
        id: 13,
        title: "Senby",
        description: "Plataforma de logística con tracking de envíos en tiempo real y cotizador automático",
        image: "/images/senby.MP4",
        url: "https://senby.cl/",
        tech: ["React", "Tracking", "Sistema de Cotización"],
        results: [
          "Sistema de tracking en tiempo real",
          "Cotizador automático de envíos",
          "Panel de gestión logística completo"
        ]
      },
    ],
    ecommerce: [
      {
        id: 1,
        title: "Stomping Ground Patagonia",
        description: "E-commerce de Rent a Car y Turismo 4x4 en la Patagonia chilena",
        image: "/images/stomping.MP4",
        url: "https://stompingroundpatagonia4x4.cl/",
        tech: ["WordPress", "WooCommerce", "PHP"],
        results: [
          "Sistema de reservas online integrado",
          "Catálogo de vehículos 4x4 y tours",
          "Procesamiento de pagos automatizado"
        ]
      },
      {
        id: 3,
        title: "Escandalosos",
        description: "E-commerce gastronómico, selección de pizzas y combos por pasos, sistema de delivery personalizado",
        image: "/images/escandalosos.mov",
        url: "https://escandalosospizzas.cl/",
        tech: ["React", "Node.js", "E-commerce"],
        results: [
          "Selección por pasos intuitiva",
          "Sistema de delivery personalizado",
          "Gestión de pedidos en tiempo real"
        ]
      },
      {
        id: 4,
        title: "Tactical Outdoor",
        description: "E-commerce duo de equipo táctico y outdoor con control de modo para cambiar toda la web",
        image: "/images/tacticaloutdoor.MP4",
        url: "https://tacticaloutdoor.cl/",
        tech: ["React", "Modo Dual", "E-commerce"],
        results: [
          "Sistema de modo dual (Táctico/Outdoor)",
          "Cambio completo de tema y productos",
          "Gestión de inventario unificada"
        ]
      },
      {
        id: 7,
        title: "Mamasous",
        description: "E-commerce gastronómico en Shopify",
        image: "/images/mamasous.MP4",
        url: "https://mamasous.cl/",
        tech: ["Shopify", "E-commerce", "Gastronomía"],
        results: [
          "Tienda online completa en Shopify",
          "Catálogo de productos gastronómicos",
          "Sistema de pagos integrado"
        ]
      },
      {
        id: 10,
        title: "Rey Piscinas",
        description: "E-commerce con sistema de cotizador personalizado para piscinas",
        image: "/images/reypiscinas.mov",
        url: "https://reypiscinas.cl/",
        tech: ["React", "E-commerce", "Cotizador"],
        results: [
          "E-commerce completo de piscinas",
          "Cotizador personalizado online",
          "Sistema de gestión de productos"
        ]
      },
    ],
    social: [
      {
        id: 14,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram.MP4",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 15,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram2.mov",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 16,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram3.mov",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 17,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram4.mov",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 18,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram5.MP4",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 19,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram6.MP4",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
      {
        id: 20,
        title: "Gestión de Redes Sociales",
        description: "",
        image: "/images/instagram7.MP4",
        url: "#",
        category: "social",
        tech: ["Instagram", "Facebook", "Content Strategy"],
        results: []
      },
    ]
  };

  const projects = projectsByCategory[activeCategory as keyof typeof projectsByCategory];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portafolio" className="relative py-24 md:py-32" style={{ backgroundColor: '#FFF100', overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] mb-4">
            Portafolio
          </h2>
          <p className="text-2xl md:text-3xl text-[#111111] mb-8">
            Nuestros trabajos
          </p>

          {/* Category Filters */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'web'
                  ? 'bg-[#7B34CD] text-white shadow-lg'
                  : 'bg-white text-[#111111] hover:bg-gray-100'
              }`}
            >
              Páginas Web
            </button>
            <button
              onClick={() => setActiveCategory('ecommerce')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'ecommerce'
                  ? 'bg-[#7B34CD] text-white shadow-lg'
                  : 'bg-white text-[#111111] hover:bg-gray-100'
              }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setActiveCategory('social')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'social'
                  ? 'bg-[#7B34CD] text-white shadow-lg'
                  : 'bg-white text-[#111111] hover:bg-gray-100'
              }`}
            >
              Redes Sociales
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            aria-label="Scroll right"
          >
            →
          </button>

          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-800 text-sm font-medium"
        >
          ← Desliza para ver más proyectos →
        </motion.div>

        {/* Hide scrollbar */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

      </div>
    </section>
  );
}

// Quote Wizard Section Component
function QuoteWizardSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    services: [] as string[]
  });

  const services = [
    { id: 'web-simple', name: 'Página Web Profesional (sin carrito)', price: 'desde $299.990' },
    { id: 'web-ecommerce', name: 'Página Web con Carrito (eCommerce)', price: 'desde $499.990' },
    { id: 'google-ads', name: 'Google Ads', price: 'desde $119.990' },
    { id: 'meta-ads', name: 'Meta Ads (Facebook & Instagram)', price: 'desde $119.990' },
    { id: 'social-media', name: 'Gestión de Redes Sociales', price: 'desde $249.990' },
    { id: 'automatizacion', name: 'Automatización', price: 'desde $299.990' },
    { id: 'software', name: 'Software a Medida', price: 'desde $1.090.000' }
  ];

  // Verificar si se seleccionaron todos excepto software (Funnel Completo)
  // Debe tener: (web-simple O web-ecommerce) + google-ads + meta-ads + social-media + automatizacion
  const hasWebPage = formData.services.includes('web-simple') || formData.services.includes('web-ecommerce');
  const hasAllOtherServices = formData.services.includes('google-ads') &&
    formData.services.includes('meta-ads') &&
    formData.services.includes('social-media') &&
    formData.services.includes('automatizacion');
  const doesNotHaveSoftware = !formData.services.includes('software');

  const isFunnelCompleto = hasWebPage && hasAllOtherServices && doesNotHaveSoftware;

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = () => {
    const selectedServices = services
      .filter(s => formData.services.includes(s.id))
      .map(s => `${s.name} (${s.price})`)
      .join('\n');

    const message = `Hola! Me gustaría cotizar los siguientes servicios:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nServicios:\n${selectedServices}`;

    const whatsappUrl = `https://wa.me/56966354128?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="cotizador" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cotiza tu Proyecto
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            Cuéntanos qué necesitas y te contactamos
          </p>
        </motion.div>

        {/* Wizard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-4 border-[#7B34CD] p-8 md:p-12 shadow-2xl"
          style={{ transform: 'rotate(-1deg)' }}
        >
          <div style={{ transform: 'rotate(1deg)' }}>

            {/* Step Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#7B34CD] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-[#7B34CD]' : 'bg-gray-200'}`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#7B34CD] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
              </div>
            </div>

            {/* Step 1: Contact Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div style={{ transform: 'rotate(-1deg)' }}>
                  <label className="block text-lg font-bold text-gray-900 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7B34CD] focus:outline-none text-lg"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div style={{ transform: 'rotate(1deg)' }}>
                  <label className="block text-lg font-bold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7B34CD] focus:outline-none text-lg"
                    placeholder="tu@email.com"
                  />
                </div>

                <div style={{ transform: 'rotate(-1.5deg)' }}>
                  <label className="block text-lg font-bold text-gray-900 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="tel"
                    autoComplete="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7B34CD] focus:outline-none text-lg"
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email || !formData.whatsapp}
                  className="w-full bg-[#7B34CD] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-[#6a2db8] transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  Siguiente
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Services Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Selecciona los servicios que necesitas
                </h3>

                {/* Funnel Completo Badge */}
                {isFunnelCompleto && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="bg-gradient-to-r from-[#7B34CD] to-[#FF00A8] text-white px-6 py-4 rounded-xl text-center mb-6 shadow-2xl"
                    style={{ transform: 'rotate(-2deg)' }}
                  >
                    <div style={{ transform: 'rotate(2deg)' }}>
                      <p className="text-2xl font-black mb-1">¡Funnel Completo!</p>
                      <p className="text-lg font-semibold">10% de descuento aplicado</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      whileHover={{
                        scale: 1.02,
                        rotate: formData.services.includes(service.id)
                          ? (index % 2 === 0 ? 2 : -2)
                          : (index % 2 === 0 ? -2 : 2)
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-4 border-3 rounded-lg text-left transition-all duration-300 ${
                        formData.services.includes(service.id)
                          ? 'bg-[#7B34CD] text-white border-[#7B34CD]'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-[#7B34CD]'
                      }`}
                      style={{
                        transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                        borderWidth: '3px'
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-lg">{service.name}</p>
                          <p className={`text-sm ${formData.services.includes(service.id) ? 'text-white/80' : 'text-gray-600'}`}>
                            {service.price}
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.services.includes(service.id)
                            ? 'bg-white border-white'
                            : 'bg-transparent border-gray-400'
                        }`}>
                          {formData.services.includes(service.id) && (
                            <div className="w-3 h-3 rounded-full bg-[#7B34CD]" />
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02, rotate: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-300"
                    style={{ transform: 'rotate(2deg)' }}
                  >
                    Atrás
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={formData.services.length === 0}
                    className="flex-1 bg-[#7B34CD] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-lg shadow-lg hover:bg-[#6a2db8] transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    style={{ transform: 'rotate(-2deg)' }}
                  >
                    Enviar Cotización
                  </motion.button>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>

      </div>
    </Section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Entregan factura?",
      answer: "Sí. Todos nuestros precios son + IVA y emitimos factura electrónica."
    },
    {
      question: "¿Cuánto demoran en entregar una página web?",
      answer: "Entre 10 y 15 días hábiles. El plazo depende del flujo de feedback y entrega de contenidos: mientras más rápido respondas, más rápido avanzamos."
    },
    {
      question: "¿El servicio de Google Ads incluye el costo publicitario?",
      answer: "No. Nuestro servicio tiene un valor de $119.990 CLP + el 20% de lo que inviertas en anuncios durante el mes. El presupuesto publicitario se paga directo a Google."
    },
    {
      question: "¿Cómo son los pagos?",
      answer: "Trabajamos con 60% para iniciar y 40% al entregar. En campañas, el fee se paga mensual por adelantado."
    },
    {
      question: "¿Qué necesito para empezar?",
      answer: "Logo, lineamientos de marca (si tienes), textos, fotos, lista de servicios/productos, políticas (envíos, cambios/devoluciones) y accesos a dominio/hosting/plataformas (GA4, Tag Manager, Meta, etc.)."
    },
    {
      question: "¿Incluyen SEO y analítica?",
      answer: "Entregamos la web lista para medir (instalación de GA4 y GTM con tus accesos). Implementamos SEO técnico base; estrategias avanzadas o contenidos SEO se cotizan aparte."
    },
    {
      question: "¿En qué tecnología trabajan sus páginas web?",
      answer: 'Construimos sitios con código personalizado (sin plantillas) para máxima flexibilidad: "si lo imaginas, lo creamos". Para eCommerce usamos WooCommerce o Shopify como base; el diseño y frontend los desarrollamos aparte para que tu tienda sea única.'
    },
    {
      question: "¿La información de la web la redactan ustedes?",
      answer: "No. El contenido (textos, descripciones, precios, políticas) debe enviarlo el cliente. Si necesitas copywriting, podemos cotizarlo como adicional."
    },
    {
      question: "¿Qué incluye el soporte posterior al lanzamiento?",
      answer: "Incluye ajustes técnicos menores post-lanzamiento (según propuesta). Cambios de contenido, nuevas secciones o integraciones se cotizan vía plan de mantención/bolsa de horas."
    },
    {
      question: "¿Tienen garantía por fallas?",
      answer: "Sí. 1 año de garantía por fallas técnicas del desarrollo (no aplica a nuevos requerimientos o cambios de contenido)."
    },
    {
      question: "¿Puedo personalizar productos, precios, etc.?",
      answer: "Claro. Podrás agregar, editar o eliminar productos, precios, categorías y variaciones cuando quieras."
    }
  ];

  return (
    <Section id="faq" className="relative bg-[#7B34CD] overflow-hidden py-0">
      <div className="max-w-7xl mx-auto">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* Left Column - Full Image */}
          <div className="relative overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              src="/images/faq.png"
              alt="Preguntas Frecuentes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Purple with Content */}
          <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-20">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full"
            >

              {/* Hierarchical Typography */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                <span className="block">PREGUNTAS</span>
                <span className="block mt-2">FRECUENTES</span>
              </h2>

              <p className="text-lg md:text-xl text-white/90 font-medium mb-6 leading-relaxed">
                Todo lo que necesitas saber
              </p>

              {/* FAQ Items (Compacted) */}
              <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="relative">
                  {/* Main FAQ item */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/20"
                  >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-white/20 transition-colors duration-200"
                  >
                    <span className="text-sm md:text-base font-bold text-white pr-3">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 text-white/90 text-xs md:text-sm leading-relaxed border-t border-white/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                </div>
              ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
}
