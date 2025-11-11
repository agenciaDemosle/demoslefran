import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, TrendingUp, Shield } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { ServiceSchema, BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Code,
    title: 'Desarrollo a medida',
    description: 'Plataformas web escalables construidas con tecnologías modernas y arquitectura sólida.',
  },
  {
    icon: Zap,
    title: 'Optimización extrema',
    description: 'Performance, SEO y conversión optimizados desde el primer día.',
  },
  {
    icon: TrendingUp,
    title: 'Orientado a resultados',
    description: 'Cada elemento diseñado para convertir visitas en clientes.',
  },
  {
    icon: Shield,
    title: 'Seguro y confiable',
    description: 'Código limpio, seguro y mantenible que crece con tu negocio.',
  },
];

export function Web() {
  return (
    <>
      <SEO
        title="Desarrollo web que vende"
        description="Creamos plataformas web escalables que convierten visitas en clientes. Desarrollo a medida con tecnologías modernas, optimizadas para conversión y resultados."
        url="/web"
      />
      <ServiceSchema
        serviceName="Desarrollo Web"
        description="Plataformas web escalables optimizadas para conversión"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Desarrollo Web', url: '/web' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">
            DESARROLLO WEB
            <br />
            <span className="gradient-text">QUE VENDE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Plataformas escalables que transforman visitas en clientes.
            Tecnología moderna, arquitectura sólida, resultados medibles.
          </p>
          <Link to="/contacto">
            <Button size="lg">
              Cotizar proyecto web
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

      {/* Process */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-12">Qué incluye</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Diseño UI/UX orientado a conversión</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Desarrollo con React, TypeScript y tecnologías modernas</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Integración con WordPress u otras plataformas</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">SEO técnico y optimización de performance</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Integración con herramientas de marketing y analytics</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Deploy profesional y hosting optimizado</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-900 text-white text-center">
        <h2 className="text-white mb-6">¿Listo para tu nueva plataforma web?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Conversemos sobre tu proyecto y diseñemos la solución perfecta.
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
