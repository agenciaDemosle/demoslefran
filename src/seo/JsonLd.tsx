import { Helmet } from 'react-helmet-async';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://franciscal40.sg-host.com';

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Demosle',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Creamos sistemas que venden. Agencia digital especializada en desarrollo web, apps y branding.',
    telephone: '+56974664281',
    email: 'info@demosle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
      addressLocality: 'Chile',
    },
    foundingDate: '2014',
    founders: [
      {
        '@type': 'Person',
        name: 'Javier Honorato',
        jobTitle: 'Co-Founder | Software & Growth',
      },
      {
        '@type': 'Person',
        name: 'Francisca Labra',
        jobTitle: 'Co-Founder | Brand & Design',
      },
    ],
    sameAs: [
      // Add social media links when available
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: 'Demosle',
    description: 'Agencia digital que crea sistemas que venden.',
    url: siteUrl,
    telephone: '+56974664281',
    email: 'info@demosle.com',
    image: `${siteUrl}/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// WebSite Schema
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Demosle',
    url: siteUrl,
    description: 'Creamos sistemas que venden',
    inLanguage: 'es-CL',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Service Schema
export function ServiceSchema({ serviceName, description }: { serviceName: string; description: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Demosle',
      url: siteUrl,
    },
    description: description,
    areaServed: {
      '@type': 'Country',
      name: 'Chile',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// BreadcrumbList Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
