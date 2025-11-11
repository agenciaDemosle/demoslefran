import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { SEO } from '@/seo/SEOConfig';
import { BreadcrumbSchema } from '@/seo/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { apiClient } from '@/lib/axios';
import { trackFormSubmit, trackLeadGenerated } from '@/hooks/useAnalytics';
import type { ContactFormData, ApiResponse } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(['Web', 'Apps', 'Creative', 'Otro'], {
    message: 'Selecciona un tipo de proyecto',
  }),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function Contacto() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormInputs) => {
      const response = await apiClient.post<ApiResponse>('/send-email.php', data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        setSubmitSuccess(true);
        toast.success('¡Listo! Te contactaremos para revisar tu proyecto.');
        trackFormSubmit('Formulario de contacto');
        trackLeadGenerated('Contacto web');
        reset();
      } else {
        toast.error(data.message || 'Algo no salió bien. Intenta de nuevo.');
      }
    },
    onError: () => {
      toast.error('Algo no salió bien. Intenta de nuevo o escríbenos directo.');
    },
  });

  const onSubmit = (data: ContactFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <>
      <SEO
        title="Cotizar proyecto"
        description="¿Listo para hacer crecer tu negocio? Conversemos sobre tu proyecto y diseñemos juntos el sistema que necesitas para vender más."
        url="/contacto"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Contacto', url: '/contacto' },
        ]}
      />

      {/* Hero */}
      <Section className="gradient-bg pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6">
            <span className="gradient-text">HABLEMOS</span>
            <br />
            DE TU PROYECTO
          </h1>
          <p className="text-xl text-gray-700">
            Cuéntanos qué necesitas y diseñemos juntos el sistema que hará
            crecer tu negocio.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-green-800 font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700">
                  Gracias por contactarnos. Revisaremos tu mensaje y te responderemos
                  lo antes posible.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Tu empresa"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de proyecto *
                </label>
                <select
                  {...register('projectType')}
                  id="projectType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Web">Desarrollo Web</option>
                  <option value="Apps">Apps Móviles</option>
                  <option value="Creative">Branding & Creative</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe tu proyecto, objetivos, timeline, presupuesto estimado, etc."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={mutation.isPending}
              >
                {mutation.isPending ? 'Enviando...' : 'Enviar mensaje'}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@demosle.com"
                  className="flex items-start space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Mail className="flex-shrink-0 mt-1" size={20} />
                  <span>info@demosle.com</span>
                </a>
                <a
                  href="tel:+56974664281"
                  className="flex items-start space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className="flex-shrink-0 mt-1" size={20} />
                  <span>+56 9 7466 4281</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <span>Chile</span>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-accent-50">
              <h4 className="font-bold mb-3">Tiempo de respuesta</h4>
              <p className="text-gray-700 text-sm">
                Respondemos todos los mensajes en menos de 24 horas hábiles.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-accent-50 to-primary-50">
              <h4 className="font-bold mb-3">¿Prefieres agendar una llamada?</h4>
              <p className="text-gray-700 text-sm mb-4">
                Conversemos en vivo sobre tu proyecto.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Agendar llamada
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
