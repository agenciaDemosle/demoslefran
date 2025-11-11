import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Cotizar', href: '#cotizador' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
        'w-[95%] max-w-7xl'
      )}
    >
      <nav
        className="rounded-2xl px-8 py-4 shadow-lg backdrop-blur-md"
        style={{ backgroundColor: '#7b34cd' }}
      >
        <div className="flex items-center justify-between">
          {/* Zona Izquierda - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'monospace' }}>
                DEMOSLE
              </span>
            </Link>
          </div>

          {/* Zona Central - Navegación Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/90 hover:text-white transition-colors font-medium"
                style={{ fontFamily: 'monospace', letterSpacing: '0.02em' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Zona Derecha - Botón CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => {
                const cotizadorSection = document.getElementById('cotizador');
                if (cotizadorSection) {
                  cotizadorSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#7b34cd] transition-all duration-300 text-sm font-semibold"
              style={{ fontFamily: 'monospace' }}
            >
              Cotizar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#7b34cd' }}
          >
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetId = item.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block py-2 text-base font-medium text-white/90 hover:text-white transition-colors"
                  style={{ fontFamily: 'monospace' }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20">
                <button
                  onClick={() => {
                    const cotizadorSection = document.getElementById('cotizador');
                    if (cotizadorSection) {
                      cotizadorSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  className="w-full px-5 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#7b34cd] transition-all duration-300 text-sm font-semibold"
                  style={{ fontFamily: 'monospace' }}
                >
                  Cotizar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
