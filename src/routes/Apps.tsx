import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Layers, Zap, Users } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { ServiceSchema, BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Smartphone,
    title: 'Apps nativas y multiplataforma',
    description: 'Desarrollo para iOS, Android o ambos con React Native.',
  },
  {
    icon: Layers,
    title: 'PWAs y web apps',
    description: 'Aplicaciones web progresivas que funcionan como apps nativas.',
  },
  {
    icon: Zap,
    title: 'Performance óptimo',
    description: 'Experiencias rápidas y fluidas que tus usuarios amarán.',
  },
  {
    icon: Users,
    title: 'UX centrada en el usuario',
    description: 'Interfaces intuitivas diseñadas para engagement y retención.',
  },
];

export function Apps() {
  return (
    <>
      <SEO
        title="Apps y productos digitales"
        description="Desarrollamos apps móviles y productos digitales que tus usuarios aman. iOS, Android, PWAs y web apps con tecnologías modernas."
        url="/apps"
      />
      <ServiceSchema
        serviceName="Desarrollo de Apps"
        description="Apps móviles y productos digitales multiplataforma"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Apps', url: '/apps' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">
            APPS Y PRODUCTOS
            <br />
            <span className="gradient-text">DIGITALES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Creamos aplicaciones móviles y productos digitales que tus usuarios
            aman y recomiendan. Funcionalidad, diseño y experiencia en cada tap.
          </p>
          <Link to="/contacto">
            <Button size="lg">
              Cotizar app
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
          <h2 className="text-center mb-12">Qué construimos</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Apps móviles nativas (iOS/Android)</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Apps multiplataforma con React Native</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Progressive Web Apps (PWAs)</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">SaaS y plataformas digitales</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Dashboards y herramientas internas</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-lg">Integraciones con APIs y servicios externos</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-900 text-white text-center">
        <h2 className="text-white mb-6">¿Tienes una idea?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transformemos tu concepto en una app que tus usuarios amen.
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
