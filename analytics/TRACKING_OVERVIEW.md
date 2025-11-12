# 📊 Tracking Overview - Demosle Analytics

**Fecha:** Noviembre 2024
**Estado:** ✅ Listo para implementar
**GTM ID:** GTM-5QFTXQ8B
**GA4 ID:** G-W0JLPYHXMJ
**Meta Pixel:** 757787516978508

---

## 🎯 Resumen Ejecutivo

Sistema completo de analytics con:
- ✅ **15 eventos personalizados**
- ✅ **36 variables de dataLayer**
- ✅ **Scroll tracking automático** (25%, 50%, 75%, 100%)
- ✅ **Section visibility tracking** (Intersection Observer)
- ✅ **Engagement time tracking** (10s, 30s, 1m, 2m, 5m)
- ✅ **Meta Pixel + Meta CAPI** (deduplicación automática)

---

## 📋 Eventos Implementados (15 total)

### 🥇 Conversiones (2 eventos)

| Evento | Descripción | GA4 Event | Meta Event | Prioridad |
|--------|-------------|-----------|------------|-----------|
| **whatsapp_click** | Click en WhatsApp | Conversión Principal | Contact | 🔴 Crítico |
| **quote_completed** | Cotización completada | Conversión Secundaria | Lead | 🔴 Crítico |

### 📊 Engagement (6 eventos)

| Evento | Descripción | Cuándo se dispara |
|--------|-------------|-------------------|
| **service_card_click** | Click en card de servicio | Al hacer click en precio de servicio |
| **cta_click** | Click en CTA general | Hero, Nosotros, CTAs varios |
| **portfolio_view** | Vista de categoría portafolio | Al cambiar categoría (web, ecommerce, social) |
| **project_click** | Click en proyecto | Al hacer click en card de proyecto |
| **faq_opened** | Apertura de FAQ | Al abrir pregunta en FAQ |
| **review_view** | Vista de reviews | Al scrollear a sección reviews |

### 📝 Formularios (3 eventos)

| Evento | Descripción | Cuándo se dispara |
|--------|-------------|-------------------|
| **form_start** | Inicio de cotizador | Al entrar al Step 1 |
| **step_completed** | Paso completado | Al completar cada step del cotizador |
| **funnel_completo_detected** | Funnel completo detectado | Al seleccionar todos los servicios (descuento 10%) |

### 📜 Scroll & Engagement (4 eventos)

| Evento | Descripción | Cuándo se dispara |
|--------|-------------|-------------------|
| **scroll_depth** | Profundidad de scroll | Al alcanzar 25%, 50%, 75%, 100% |
| **section_view** | Vista de sección | Al ver 50% de una sección (Intersection Observer) |
| **engagement_time** | Tiempo en página | A los 10s, 30s, 1min, 2min, 5min |
| **page_view** | Vista de página | Al cargar página o cambiar sección |

---

## 📊 Variables de DataLayer (36 total)

### Críticas (9 variables)

```
✅ event
✅ click_location
✅ button_text
✅ service_name
✅ service_value
✅ services_selected
✅ services_count
✅ value
✅ currency
```

### Importantes (14 variables)

```
✅ form_name
✅ step_number
✅ step_name
✅ has_funnel_completo
✅ page_type
✅ cta_text
✅ cta_location
✅ cta_type
✅ section_name
✅ section
✅ scroll_depth
✅ scroll_percentage
✅ visibility_percentage
✅ engagement_time
```

### Opcionales (13 variables)

```
✅ service_interested
✅ category
✅ project_name
✅ project_category
✅ project_url
✅ project_count
✅ question
✅ review_count
✅ outbound_url
✅ link_text
✅ page_path
✅ page_title
✅ discount_applied
✅ discount_percentage
```

---

## 🎨 Tracking Automático

### Auto-track en useAnalytics()

El hook `useAnalytics()` automáticamente trackea:

1. **Page Views** - Cada cambio de ruta
2. **Scroll Depth** - 25%, 50%, 75%, 100%
3. **Engagement Time** - 10s, 30s, 1min, 2min, 5min

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  useAnalytics(); // ← Auto-trackea page views, scroll, engagement time

  // Tu componente...
}
```

### Manual track cuando sea necesario

```tsx
import {
  trackWhatsAppClick,
  trackQuoteCompleted,
  trackServiceCardClick,
  useSectionVisibility
} from '@/hooks/useAnalytics';

// Track WhatsApp click
onClick={() => {
  trackWhatsAppClick({
    click_location: 'hero',
    button_text: 'Contactar',
    service_interested: 'sitios_web',
    value: 299990
  });
}}

// Track section visibility
const heroRef = useRef(null);
const serviciosRef = useRef(null);

useSectionVisibility({
  hero: heroRef.current,
  servicios: serviciosRef.current
});
```

---

## 🚀 Embudo de Conversión Completo

```
100 visitantes
    ↓ (page_view)
    ↓ (scroll_depth: 25%)
    ↓ (section_view: hero)
60 llegan a Servicios (section_view: servicios)
    ↓ (scroll_depth: 50%)
40 interactúan con servicios (service_card_click)
    ↓ (scroll_depth: 75%)
25 ven Portafolio (portfolio_view)
    ↓ (engagement_time: 30s)
20 llegan a Cotizador
    ↓ (scroll_depth: 100%)
15 inician Cotizador (form_start)
    ↓ (engagement_time: 60s)
12 completan Step 1 (step_completed: 1)
    ↓
10 completan Step 2 (step_completed: 2)
    ↓
8 envían Cotización (quote_completed) 📝
    ↓ ⚠️ 25% abandono
6 hacen click en WhatsApp (whatsapp_click) 💬 ← CONVERSIÓN
    ↓
5 envían mensaje
    ↓
2 se convierten en clientes 💰
```

---

## 📈 KPIs a Monitorear

| KPI | Cálculo | Meta | Dónde verlo |
|-----|---------|------|-------------|
| **Tasa de Conversión WhatsApp** | `whatsapp_click / visitantes * 100` | > 2% | GA4 → Conversions |
| **Tasa Completación Cotizador** | `quote_completed / visitantes * 100` | > 2% | GA4 → Events |
| **Abandono Cotizador → WhatsApp** | `(quote_completed - whatsapp_click) / quote_completed * 100` | < 30% | GA4 → Funnel |
| **Engagement con Servicios** | `service_card_click / visitantes * 100` | > 20% | GA4 → Events |
| **Scroll Depth Promedio** | `AVG(scroll_percentage)` | > 60% | GA4 → Engagement |
| **Time on Page Promedio** | `AVG(engagement_time)` | > 45s | GA4 → Engagement |
| **Secciones Vistas por Sesión** | `COUNT(section_view) / sessions` | > 3 | GA4 → Custom Report |

---

## 🎯 Configuración en Plataformas

### Google Analytics 4 (GA4)

**Conversiones a marcar:**
- ✅ `whatsapp_click` - CONVERSIÓN PRINCIPAL
- ⚠️ `quote_completed` - Conversión secundaria (opcional)

**Audiencias a crear:**
1. **Completaron Cotizador pero NO Contactaron** 🔴
   - Remarketing urgente
2. **Contactaron vía WhatsApp** 🟢
   - Excluir de anuncios, crear lookalike
3. **Alto Engagement** 🟡
   - `scroll_depth >= 75%` Y `engagement_time >= 60s`
4. **Iniciaron Cotizador pero Abandonaron** 🟠
   - Recuperación rápida

### Meta Pixel + CAPI

**Mapeo de eventos:**

| Evento | Meta Event | CAPI |
|--------|------------|------|
| `quote_completed` | Lead | ✅ |
| `whatsapp_click` | Contact | ✅ |
| `service_card_click` | ViewContent | ✅ |
| `form_start` | InitiateCheckout | ✅ |
| `step_completed` | AddToCart | ❌ |

**Event Match Quality objetivo:** > 6.0/10

---

## 📚 Documentación Completa

```
📁 /analytics
├── README.md                      # Quick start y ejemplos
├── GA4_CONFIGURATION_GUIDE.md     # Configuración GA4 completa
├── IMPLEMENTATION_GUIDE.md        # Implementación técnica paso a paso
├── GTM_VARIABLES_SETUP.md         # 36 variables para GTM
├── META_CAPI_SETUP.md             # Setup de Meta Conversions API
└── TRACKING_OVERVIEW.md           # Este archivo - Overview completo
```

### Por dónde empezar:

1. **Si necesitas implementar:** `IMPLEMENTATION_GUIDE.md`
2. **Si necesitas configurar GTM:** `GTM_VARIABLES_SETUP.md`
3. **Si necesitas configurar GA4:** `GA4_CONFIGURATION_GUIDE.md`
4. **Si necesitas Meta CAPI:** `META_CAPI_SETUP.md`
5. **Si quieres overview general:** `TRACKING_OVERVIEW.md` (este archivo)

---

## ✅ Estado de Implementación

### ✅ Completado

- [x] Hook `useAnalytics.ts` con 15 eventos
- [x] Auto-tracking de scroll depth
- [x] Auto-tracking de engagement time
- [x] Auto-tracking de page views
- [x] Section visibility con Intersection Observer
- [x] Limpieza automática de dataLayer (sin contaminación)
- [x] Scripts GTM agregados a `index.html`
- [x] Variables de entorno configuradas (`.env`)
- [x] Documentación completa (5 archivos)
- [x] IDs reales configurados (GTM, GA4, Meta Pixel)

### ⏳ Pendiente

- [ ] Configurar 36 variables en GTM
- [ ] Crear tags de GA4 en GTM
- [ ] Crear tags de Meta Pixel en GTM
- [ ] Integrar tracking en componentes (Home.tsx, etc.)
- [ ] Testing con GTM Preview
- [ ] Marcar conversiones en GA4
- [ ] Crear audiencias en GA4
- [ ] (Opcional) Configurar Meta CAPI

---

## 🎓 Ejemplo de Uso Completo

```tsx
import { useRef } from 'react';
import {
  useAnalytics,
  useSectionVisibility,
  trackWhatsAppClick,
  trackServiceCardClick,
  trackCTAClick,
} from '@/hooks/useAnalytics';

export function Home() {
  // Auto-track: page_view, scroll_depth, engagement_time
  useAnalytics();

  // Section visibility tracking
  const heroRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const portafolioRef = useRef<HTMLDivElement>(null);

  useSectionVisibility({
    hero: heroRef.current,
    servicios: serviciosRef.current,
    portafolio: portafolioRef.current,
  });

  return (
    <>
      {/* Hero Section */}
      <section id="hero" ref={heroRef}>
        <button
          onClick={() => {
            trackCTAClick('Cotizar', 'hero', 'primary');
            // Scroll logic...
          }}
        >
          Cotizar
        </button>
      </section>

      {/* Servicios Section */}
      <section id="servicios" ref={serviciosRef}>
        <button
          onClick={() => {
            trackServiceCardClick('Sitio Web', 299990, 'servicios_section', 'desde $299.990');
            trackWhatsAppClick({
              click_location: 'service_card',
              button_text: 'desde $299.990',
              service_interested: 'sitio_web',
              value: 299990,
            });
            // WhatsApp logic...
          }}
        >
          desde $299.990
        </button>
      </section>

      {/* Portafolio Section */}
      <section id="portafolio" ref={portafolioRef}>
        {/* Portfolio content... */}
      </section>
    </>
  );
}
```

---

## 🔗 Links Útiles

- [Google Tag Manager](https://tagmanager.google.com/)
- [Google Analytics 4](https://analytics.google.com/)
- [Meta Events Manager](https://business.facebook.com/events_manager)
- [GTM Preview Mode](https://tagmanager.google.com/)
- [GA4 DebugView](https://analytics.google.com/)

---

## 📞 Siguiente Paso

**Para implementar completamente el tracking:**

1. ✅ Código ya está listo (`useAnalytics.ts`)
2. ⏳ Configura las 36 variables en GTM (`GTM_VARIABLES_SETUP.md`)
3. ⏳ Crea los tags de GA4 en GTM (`IMPLEMENTATION_GUIDE.md`)
4. ⏳ Integra tracking en componentes (ejemplos arriba)
5. ⏳ Testing con GTM Preview
6. ⏳ Deploy a producción

---

**Última actualización:** Noviembre 2024
**Estado:** ✅ Documentación completa, código listo
