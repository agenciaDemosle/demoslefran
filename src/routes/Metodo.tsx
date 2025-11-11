import { Link } from 'react-router-dom';
import { ArrowRight, Search, Lightbulb, LineChart } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Entendemos tu negocio',
    description: 'Analizamos tu mercado, competencia y audiencia. Identificamos oportunidades reales de crecimiento antes de gastar un peso.',
    details: [
      'Auditoría completa de tu presencia digital actual',
      'Análisis de competencia y benchmarking',
      'Investigación de audiencia y buyer personas',
      'Identificación de gaps y oportunidades',
      'Definición de objetivos medibles (KPIs)',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Creamos la estrategia',
    description: 'Diseñamos sistemas completos que conectan web, publicidad, contenido y automatización. Todo alineado a vender más.',
    details: [
      'Arquitectura de la solución técnica',
      'Estrategia de contenido y messaging',
      'Plan de adquisición y conversión',
      'Diseño de flujos automatizados',
      'Roadmap de implementación por fases',
    ],
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Medimos todo',
    description: 'Cada acción se rastrea y optimiza. Sabes exactamente qué funciona, qué no, y dónde invertir para crecer.',
    details: [
      'Implementación de tracking avanzado',
      'Dashboards personalizados en tiempo real',
      'Reportes mensuales con insights accionables',
      'Tests A/B y optimización continua',
      'Ajustes basados en data, no en opiniones',
    ],
  },
];

export function Metodo() {
  return (
    <>
      <SEO
        title="Nuestro método"
        description="Así es como hacemos que tu negocio crezca: entendemos tu negocio, creamos la estrategia y medimos todo. Un método probado para transformar clics en clientes."
        url="/metodo"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Método', url: '/metodo' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">
            ASÍ ES COMO HACEMOS QUE
            <br />
            <span className="gradient-text">TU NEGOCIO CREZCA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Un método probado para transformar tu negocio en una máquina de ventas.
            Sin trucos, sin humo. Solo estrategia, ejecución y resultados medibles.
          </p>
        </div>
      </Section>

      {/* Method Steps */}
      {steps.map((step, index) => (
        <Section
          key={step.number}
          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="text-8xl font-bold text-primary-100 mb-4">
                {step.number}
              </div>
              <div className="flex items-center mb-4">
                <step.icon className="text-primary-600 mr-3" size={32} />
                <h2 className="text-4xl">{step.title}</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">{step.description}</p>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="card bg-white">
                <h4 className="font-bold text-lg mb-4">Qué incluye:</h4>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Why it works */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-8">¿Por qué funciona este método?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Porque no vendemos piezas sueltas. Diseñamos <strong>sistemas completos</strong> que
            conectan cada punto de contacto con tu audiencia.
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Web, redes, campañas, automatización y analytics trabajando juntos —
            todo medido, todo optimizable, todo enfocado en <strong>vender más</strong>.
          </p>
          <Link to="/contacto">
            <Button variant="accent" size="lg">
              Aplicar este método a mi negocio
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
