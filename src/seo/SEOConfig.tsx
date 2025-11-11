import { Helmet } from 'react-helmet-async';
import type { SEOConfig } from '@/types';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://demosle.cl';
const siteName = import.meta.env.VITE_SITE_NAME || 'Demosle';

interface SEOProps extends Partial<SEOConfig> {
  children?: React.ReactNode;
}

export function SEO({
  title,
  description = 'Creamos sistemas que venden. Conectamos web, redes, campañas, automatización y datos en una arquitectura medible que transforma clics en clientes.',
  keywords = ['agencia digital', 'desarrollo web', 'apps móviles', 'branding', 'marketing digital', 'sistemas de venta'],
  image = `${siteUrl}/og-image.jpg`,
  url,
  type = 'website',
  author = 'Demosle',
  children,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} | Creamos sistemas que venden`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_CL" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />

      {children}
    </Helmet>
  );
}
