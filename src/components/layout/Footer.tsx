import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const navigation = {
  servicios: [
    { name: 'Desarrollo Web', href: '/#servicios' },
    { name: 'Apps Móviles', href: '/#servicios' },
    { name: 'E-commerce', href: '/#servicios' },
    { name: 'Branding', href: '/#servicios' },
  ],
  empresa: [
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Portafolio', href: '/#portafolio' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Cotizar', href: '/#cotizador' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos y Condiciones', href: '/terminos' },
  ],
};

const social = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/listo.demosle' },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">
              DEMOSLE
            </h3>
            <p className="text-sm text-gray-400">
              Creamos sistemas que venden. Conectamos estrategia, creatividad y tecnología.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {navigation.servicios.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                    onClick={(e) => {
                      if (item.href.startsWith('/#')) {
                        e.preventDefault();
                        const id = item.href.replace('/#', '');
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {navigation.empresa.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                    onClick={(e) => {
                      if (item.href.startsWith('/#')) {
                        e.preventDefault();
                        const id = item.href.replace('/#', '');
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+56966354128"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>+56 9 6635 4128</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@demosle.cl"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>hola@demosle.cl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Demosle. Todos los derechos reservados.
              </p>
              <p className="text-xs text-gray-500">
                Creado por{' '}
                <a
                  href="https://demosle.cl"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demosle.cl
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
