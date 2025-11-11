import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Sparkles, Target, Heart } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { ServiceSchema, BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Palette,
    title: 'Branding e identidad',
    description: 'Marcas memorables que conectan emocionalmente con tu audiencia.',
  },
  {
    icon: Sparkles,
    title: 'Diseño que convierte',
    description: 'Cada elemento visual pensado para generar acción y resultados.',
  },
  {
    icon: Target,
    title: 'Estrategia creativa',
    description: 'Creatividad con propósito, alineada a tus objetivos de negocio.',
  },
  {
    icon: Heart,
    title: 'Experiencias memorables',
    description: 'Diseñamos interacciones que tus usuarios recordarán.',
  },
];

export function Creative() {
  return (
    <>
      <SEO
        title="Branding y creatividad que convierte"
        description="Creamos marcas memorables e identidades visuales que conectan y convierten. Branding, diseño y estrategia creativa con propósito."
        url="/creative"
      />
      <ServiceSchema
        serviceName="Branding & Creative"
        description="Branding, identidad visual y diseño estratégico"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Creative', url: '/creative' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">
            BRANDING Y CREATIVE
            <br />
            <span className="gradient-text">QUE CONVIERTE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Construimos marcas memorables e identidades visuales que conectan
            emocionalmente y generan resultados medibles.
          </p>
          <Link to="/contacto">
            <Button size="lg">
              Cotizar proyecto creativo
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <feature.icon className="text-primary-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-12">Qué creamos</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Identidad de marca completa (logo, colores, tipografía)</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Brand guidelines y sistemas de diseño</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Diseño UI/UX para web y apps</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Piezas gráficas y materiales de marketing</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Content design y copywriting estratégico</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Animaciones y motion graphics</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-900 text-white text-center">
        <h2 className="text-white mb-6">¿Tu marca necesita evolucionar?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Construyamos juntos una identidad que haga que tu audiencia te recuerde y te elija.
        </p>
        <Link to="/contacto">
          <Button variant="accent" size="lg">
            Comenzar proyecto
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </Section>
    </>
  );
}
