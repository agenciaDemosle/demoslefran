import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hola! Me gustaría obtener más información sobre sus servicios.';
    const whatsappUrl = `https://wa.me/56966354128?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#FF00A8] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />

      {/* Ping animation */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF00A8] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.button>
  );
}
