import { SEO } from '@/seo/SEOConfig';
import { Section } from '@/components/ui/Section';

export function Privacidad() {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Demosle"
        url="/privacidad"
      />

      <Section className="bg-white py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-CL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                En Demosle, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información personal cuando utiliza nuestro sitio web y servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Información que nos proporciona directamente:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono / WhatsApp</li>
                <li>Nombre de la empresa (si aplica)</li>
                <li>Información del proyecto o servicio que solicita</li>
                <li>Cualquier otra información que nos proporcione en formularios de contacto o cotización</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Información recopilada automáticamente:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas en nuestro sitio</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Fuente de referencia (cómo llegó a nuestro sitio)</li>
                <li>Datos de cookies y tecnologías similares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Usamos su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Responder a sus consultas y solicitudes de cotización</li>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre proyectos en curso</li>
                <li>Enviar actualizaciones sobre nuestros servicios (con su consentimiento)</li>
                <li>Analizar el uso del sitio web y mejorar la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
                <li>Prevenir fraudes y garantizar la seguridad de nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies y Tecnologías de Seguimiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos las siguientes herramientas de análisis y seguimiento:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web y comprender cómo los visitantes interactúan con nuestro sitio.</li>
                <li><strong>Google Tag Manager:</strong> Para gestionar etiquetas de seguimiento y scripts de manera eficiente.</li>
                <li><strong>Meta Pixel (Facebook):</strong> Para rastrear conversiones de campañas publicitarias y mejorar la segmentación de anuncios.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartir Información con Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Como plataformas de hosting, procesadores de pago, y herramientas de email marketing que nos ayudan a operar nuestro negocio.</li>
                <li><strong>Plataformas de análisis:</strong> Google Analytics, Meta Business Suite, para análisis y mejora de servicios.</li>
                <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Todos nuestros proveedores están obligados contractualmente a proteger su información y solo pueden usarla para los fines especificados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los datos de facturación se conservan según lo requerido por la legislación tributaria chilena.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Acceder</strong> a sus datos personales que tenemos</li>
                <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                <li><strong>Cancelar</strong> sus datos cuando ya no sean necesarios</li>
                <li><strong>Oponerse</strong> al tratamiento de sus datos en ciertos casos</li>
                <li><strong>Revocar</strong> su consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer estos derechos, contáctenos en hola@demosle.cl
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
              <p className="text-gray-700 leading-relaxed">
                Algunos de nuestros proveedores de servicios (como Google, Meta) pueden estar ubicados fuera de Chile. Al utilizar nuestros servicios, usted consiente estas transferencias internacionales, que están sujetas a medidas de protección adecuadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Enlaces a Sitios de Terceros</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio web de terceros que visite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacidad de Menores</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si tiene conocimiento de que un menor nos ha proporcionado datos personales, contáctenos para que podamos eliminarlos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios significativos se notificarán mediante un aviso destacado en nuestro sitio web. El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de la nueva política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos personales, puede contactarnos en:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Email: hola@demosle.cl</li>
                <li>Teléfono: +56 9 6635 4128</li>
                <li>Sitio web: https://demosle.cl</li>
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
