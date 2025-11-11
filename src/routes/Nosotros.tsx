import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const team = [
  {
    name: 'Javier Honorato',
    role: 'Co-Founder | Software & Growth',
    description: 'Desarrollador full-stack y arquitecto de sistemas. Construye plataformas escalables, automatizaciones inteligentes y soluciones técnicas que venden.',
    linkedin: '#',
  },
  {
    name: 'Francisca Labra',
    role: 'Co-Founder | Brand & Design',
    description: 'Estratega de marca y diseño. Construye identidades visuales memorables, experiencias de usuario que convierten y narrativas que conectan.',
    linkedin: '#',
  },
];

const metrics = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '50+', label: 'Proyectos completados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '3x', label: 'ROI promedio' },
];

export function Nosotros() {
  return (
    <>
      <SEO
        title="Quiénes somos"
        description="Hola, somos Javier y Fran, los que estamos detrás de Demosle. Creamos sistemas que venden uniendo estrategia, creatividad y tecnología."
        url="/nosotros"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Nosotros', url: '/nosotros' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-8">
            <span className="gradient-text">HOLA, SOMOS JAVIER Y FRAN</span>
            <br />
            LOS QUE ESTAMOS DETRÁS DE DEMOSLE
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Tú tienes un negocio, una idea o un proyecto que merece escalar.
            Y si estás aquí, probablemente ya probaste de todo: campañas que no miden,
            webs que no convierten o redes que se ven bien... pero no venden.
          </p>
          <p className="text-xl text-gray-700 font-semibold">
            Por eso creamos Demosle: para unir estrategia, creatividad y tecnología
            en un sistema que hace lo que todos prometen — <strong>vender de verdad</strong>.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">Nuestra Misión</h2>
          <p className="text-xl text-gray-700 mb-6">
            Nuestra misión es simple: ayudar a las marcas a vender de forma
            inteligente, medible y sostenible.
          </p>
          <p className="text-xl text-gray-700">
            <strong>No vendemos piezas.</strong> Diseñamos sistemas vivos que venden,
            miden y evolucionan.
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-gray-50">
        <h2 className="text-center mb-12">El Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="card text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Metrics */}
      <Section className="bg-white">
        <h2 className="text-center mb-12">Demosle en números</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-lg text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-center mb-12">Lo que nos mueve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Resultados reales</h4>
              <p className="text-gray-300">
                No vendemos humo. Cada proyecto está diseñado para generar
                resultados medibles y demostrables.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Transparencia total</h4>
              <p className="text-gray-300">
                Sabes exactamente qué estamos haciendo, por qué lo hacemos
                y qué resultados estamos obteniendo.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Visión de largo plazo</h4>
              <p className="text-gray-300">
                Construimos sistemas que escalan contigo. No parches temporales,
                sino arquitecturas que crecen con tu negocio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="gradient-bg text-center">
        <h2 className="mb-8">¿Trabajamos juntos?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Si buscas un equipo que entienda tu negocio y diseñe soluciones
          que realmente vendan, conversemos.
        </p>
        <Link to="/contacto">
          <Button size="lg">
            Comenzar un proyecto
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </Section>
    </>
  );
}
