import { SEO } from '@/seo/SEOConfig';
import { Section } from '@/components/ui/Section';

export function Terminos() {
  return (
    <>
      <SEO
        title="Términos y Condiciones"
        description="Términos y condiciones de uso de los servicios de Demosle"
        url="/terminos"
      />

      <Section className="bg-white py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-CL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                Bienvenido a Demosle. Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Demosle ofrece servicios de desarrollo web, aplicaciones móviles, branding, marketing digital y soluciones tecnológicas personalizadas. Los detalles específicos de cada servicio se acuerdan mediante propuestas comerciales individuales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de Pago</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Los proyectos requieren un pago del 60% para iniciar y 40% al entregar, salvo acuerdo contrario por escrito.</li>
                <li>Los servicios de campaña (Google Ads, Meta Ads) se pagan mensualmente por adelantado.</li>
                <li>Todos los precios son en pesos chilenos (CLP) + IVA, salvo indicación contraria.</li>
                <li>El incumplimiento de pago puede resultar en la suspensión temporal o cancelación de los servicios.</li>
                <li>Emitimos factura electrónica para todos nuestros servicios.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Plazos de Entrega</h2>
              <p className="text-gray-700 leading-relaxed">
                Los plazos de entrega se establecen en cada propuesta comercial. El cumplimiento de estos plazos depende de la entrega oportuna de contenidos, feedback y accesos por parte del cliente. Demoras en la entrega de materiales por parte del cliente pueden extender los plazos acordados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una vez completado el pago total del proyecto, el cliente obtiene los derechos de uso del trabajo entregado. Sin embargo, Demosle retiene el derecho de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mostrar el trabajo en nuestro portafolio y materiales de marketing</li>
                <li>Reutilizar componentes, metodologías y conocimientos adquiridos en otros proyectos</li>
                <li>Mantener copias del trabajo para fines de archivo y referencia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Garantía y Soporte</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos una garantía de 1 año por fallas técnicas del desarrollo, que incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Corrección de errores de programación</li>
                <li>Solución de problemas técnicos derivados del desarrollo original</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                La garantía NO incluye: nuevos requerimientos, cambios de contenido, actualizaciones de diseño, ni problemas causados por modificaciones realizadas por terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilidades del Cliente</h2>
              <p className="text-gray-700 leading-relaxed mb-4">El cliente es responsable de:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar contenidos (textos, imágenes, videos) con los derechos de uso correspondientes</li>
                <li>Entregar accesos necesarios a plataformas, dominios y servicios</li>
                <li>Revisar y aprobar entregas en los plazos establecidos</li>
                <li>Mantener backups de su información</li>
                <li>Cumplir con todas las leyes aplicables en el uso de nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Demosle no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios. Nuestra responsabilidad máxima se limita al monto pagado por el servicio específico en cuestión.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cancelación y Reembolsos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las solicitudes de cancelación deben hacerse por escrito. Los reembolsos se evaluarán caso por caso considerando:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>El trabajo ya realizado</li>
                <li>Los recursos invertidos en el proyecto</li>
                <li>El tiempo transcurrido desde el inicio</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Los pagos iniciales no son reembolsables una vez iniciado el trabajo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones a los Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web. El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales competentes de Santiago, Chile.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para consultas sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <ul className="list-none text-gray-700 space-y-2 mt-4">
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
