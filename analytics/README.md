# 📊 Analytics - Demosle

Sistema completo de analytics con Google Analytics 4 (GA4), Google Tag Manager (GTM) y Meta Pixel.

---

## 📁 Estructura de Archivos

```
/analytics
├── README.md                          # Este archivo - Resumen general
├── GA4_CONFIGURATION_GUIDE.md         # Guía completa de configuración GA4
└── IMPLEMENTATION_GUIDE.md            # Guía técnica de implementación paso a paso
```

---

## 🚀 Quick Start

### 1. Crear Cuentas (Si no las tienes)

Sigue la sección "Configuración Inicial de Cuentas" en `IMPLEMENTATION_GUIDE.md`:

- ✅ Crear cuenta GA4 y obtener Measurement ID
- ✅ Crear cuenta GTM y obtener Container ID
- ✅ Crear Meta Pixel y obtener Pixel ID

### 2. Configurar Variables de Entorno

```bash
# Copiar .env.example
cp .env.example .env

# Editar .env y agregar tus IDs:
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_META_PIXEL_ID=1234567890123456
```

### 3. Instalar Scripts

Agrega los scripts de GTM a `index.html` siguiendo la sección "Instalación de Scripts" en `IMPLEMENTATION_GUIDE.md`.

### 4. Configurar GTM

- Crea las variables y tags en GTM (ver guía completa)
- Publica los cambios

### 5. Verificar

```bash
# Iniciar servidor
npm run dev

# Abrir GTM Preview y verificar eventos
```

---

## 📋 Eventos Implementados

### 🥇 Conversiones Principales

| Evento | Descripción | Dónde se dispara |
|--------|-------------|------------------|
| **`whatsapp_click`** | Click en WhatsApp (CONVERSIÓN PRINCIPAL) | Todos los botones de WhatsApp |
| **`quote_completed`** | Cotización completada | Cotizador - Al completar |

### 📊 Engagement

| Evento | Descripción | Dónde se dispara |
|--------|-------------|------------------|
| `service_card_click` | Click en card de servicio | Sección Servicios |
| `cta_click` | Click en CTA general | Hero, Nosotros, CTAs |
| `portfolio_view` | Vista de portafolio | Cambio de categoría |
| `project_click` | Click en proyecto | Portafolio - Cards |
| `faq_opened` | Apertura de FAQ | Sección FAQ |

### 📝 Formularios

| Evento | Descripción | Dónde se dispara |
|--------|-------------|------------------|
| `form_start` | Inicio de cotizador | Cotizador - Step 1 |
| `step_completed` | Paso completado | Cada step del cotizador |
| `funnel_completo_detected` | Funnel completo detectado | Al seleccionar todos los servicios |

Ver lista completa en: `GA4_CONFIGURATION_GUIDE.md`

---

## 💻 Uso en el Código

### Importar funciones de tracking

```tsx
import {
  trackWhatsAppClick,
  trackQuoteCompleted,
  trackServiceCardClick,
  trackCTAClick,
  trackFormStart,
  trackStepCompleted,
  trackPortfolioView,
  trackProjectClick,
  trackFAQOpened,
} from '@/hooks/useAnalytics';
```

### Ejemplos de uso

#### 1. Track WhatsApp Click (Conversión Principal)

```tsx
<button
  onClick={() => {
    trackWhatsAppClick({
      click_location: 'hero',
      service_interested: 'sitios_web',
      value: 299990
    });
    // Abrir WhatsApp...
  }}
>
  Contactar por WhatsApp
</button>
```

#### 2. Track Cotización Completada

```tsx
const handleSubmit = () => {
  trackQuoteCompleted({
    services_selected: ['web-simple', 'google-ads'],
    services_count: 2,
    has_funnel_completo: false,
    value: 419980
  });

  // Abrir WhatsApp con mensaje...
};
```

#### 3. Track Service Card Click

```tsx
<button
  onClick={() => {
    trackServiceCardClick('Sitio Web a Medida', 299990, 'servicios_section');
    // Abrir WhatsApp...
  }}
>
  desde $299.990
</button>
```

#### 4. Track CTA Click

```tsx
<button
  onClick={() => {
    trackCTAClick('Cotizar', 'hero', 'primary');
    // Scroll a cotizador...
  }}
>
  Cotizar
</button>
```

#### 5. Track Form Start & Steps

```tsx
// Al llegar al cotizador
useEffect(() => {
  if (step === 1) {
    trackFormStart('cotizador');
  }
}, [step]);

// Al completar un step
onClick={() => {
  trackStepCompleted(1, 'cotizador');
  setStep(2);
}}
```

#### 6. Track Portfolio View

```tsx
<button
  onClick={() => {
    trackPortfolioView('web', 8);
    setActiveCategory('web');
  }}
>
  Páginas Web
</button>
```

#### 7. Track Project Click

```tsx
<a
  href={project.url}
  onClick={() => {
    trackProjectClick(
      'Contadoor',
      'web',
      'https://contadoor.cl/'
    );
  }}
>
```

#### 8. Track FAQ Opened

```tsx
<button
  onClick={() => {
    trackFAQOpened('¿Entregan factura?', 'faq');
    setOpenIndex(index);
  }}
>
```

---

## 🎯 Conversiones en GA4

Después de que lleguen datos (24-48h), marcar como conversión en GA4:

**Ir a:** `GA4 → Admin → Events → Mark as conversion`

### ✅ Marcar como conversión:

1. **`whatsapp_click`** 🥇 **PRINCIPAL**
   - Conversión real - contacto efectivo

2. **`quote_completed`** ⚠️ **OPCIONAL**
   - Lead tibio - intención de contacto

Ver guía completa en: `GA4_CONFIGURATION_GUIDE.md` → "Configuración de Conversiones"

---

## 🎨 Audiencias para Remarketing

### Audiencias Críticas a Crear:

**1. "Completaron Cotizador pero NO Contactaron"** 🔴
```
✅ Incluir: quote_completed
❌ Excluir: whatsapp_click
Duración: 30 días
```
**Uso:** Remarketing urgente

**2. "Contactaron vía WhatsApp"** 🟢
```
✅ Incluir: whatsapp_click
```
**Uso:** Excluir de anuncios, crear lookalike

**3. "Iniciaron Cotizador pero Abandonaron"** 🟠
```
✅ Incluir: form_start
❌ Excluir: quote_completed
Duración: 7 días
```
**Uso:** Recuperación inmediata

Ver todas las audiencias recomendadas en: `GA4_CONFIGURATION_GUIDE.md` → "Audiencias Recomendadas"

---

## 📈 Embudo de Conversión

```
100 visitantes
    ↓ 40%
40 llegan a Servicios (service_card_click)
    ↓ 50%
20 ven Portafolio (portfolio_view)
    ↓ 75%
15 llegan a Cotizador
    ↓ 80%
12 inician Cotizador (form_start)
    ↓ 83%
10 completan Step 1 (step_completed)
    ↓ 80%
8 completan Cotizador (quote_completed)
    ↓ 75%
6 hacen click en WhatsApp (whatsapp_click) ← CONVERSIÓN
    ↓ 83%
5 envían mensaje
    ↓ 40%
2 se convierten en clientes
```

**KPIs a Monitorear:**

| KPI | Meta |
|-----|------|
| Conversión WhatsApp | > 2% |
| Completación Cotizador | > 2% |
| Abandono Cotizador → WhatsApp | < 30% |

Ver embudo completo en: `GA4_CONFIGURATION_GUIDE.md` → "Embudo de Conversión"

---

## 📚 Documentación Completa

### 📖 [GA4_CONFIGURATION_GUIDE.md](./GA4_CONFIGURATION_GUIDE.md)

**Contenido:**
- ✅ Estructura completa de todos los eventos
- ✅ Configuración de conversiones en GA4
- ✅ Audiencias recomendadas para remarketing
- ✅ Embudo de conversión detallado
- ✅ Mapeo de eventos GA4 → Meta Pixel
- ✅ Eventos por cada sección del sitio
- ✅ Informes personalizados recomendados
- ✅ Alertas recomendadas

### 🔧 [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)

**Contenido:**
- ✅ Cómo crear cuentas GA4, GTM y Meta Pixel paso a paso
- ✅ Instalación de scripts en `index.html`
- ✅ Configuración de variables de entorno
- ✅ Configuración de tags y variables en GTM
- ✅ Testing con GTM Preview
- ✅ Verificación en GA4 DebugView
- ✅ Verificación en Meta Events Manager
- ✅ Deploy a producción
- ✅ Troubleshooting común

---

## ✅ Checklist de Implementación

### Antes de Implementar

- [ ] Crear cuenta GA4 y obtener Measurement ID
- [ ] Crear cuenta GTM y obtener Container ID
- [ ] Crear Meta Pixel y obtener Pixel ID
- [ ] Actualizar archivo `.env`

### Implementación Técnica

- [ ] Agregar scripts GTM al `index.html`
- [ ] Configurar variables y tags en GTM
- [ ] Publicar cambios en GTM
- [ ] Verificar con GTM Preview
- [ ] Verificar en GA4 DebugView
- [ ] Verificar en Meta Events Manager

### Después de Deploy (24-48h)

- [ ] Marcar `whatsapp_click` como conversión en GA4
- [ ] Crear audiencias para remarketing
- [ ] Configurar embudo de conversión
- [ ] Configurar alertas de caída en conversiones

### Primer Mes

- [ ] Analizar KPIs y optimizar
- [ ] A/B test de mensajes WhatsApp
- [ ] Revisar abandono entre steps
- [ ] Crear informes personalizados

---

## 🚨 Testing y Debugging

### Ver eventos en consola (Development)

Todos los eventos se loggean en la consola con emojis:

```
📊 Page View: /
💬 WhatsApp Click: { click_location: 'hero', ... }
📝 Quote Completed: { services_count: 3, ... }
🎯 Service Card Click: { serviceName: 'Web', ... }
```

### Testing con GTM Preview

1. Abre GTM → Click en "Preview"
2. Ingresa tu URL (localhost o producción)
3. Navega y verifica que los eventos se disparen

### Verificar en GA4 DebugView

1. GA4 → Configure → DebugView
2. Navega por tu sitio
3. Verifica eventos en tiempo real

---

## 🔗 Enlaces Útiles

- [Google Analytics](https://analytics.google.com/)
- [Google Tag Manager](https://tagmanager.google.com/)
- [Meta Events Manager](https://business.facebook.com/events_manager)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)

---

## 📞 Soporte

**Documentación oficial:**
- [GA4 Docs](https://support.google.com/analytics/answer/9304153)
- [GTM Docs](https://support.google.com/tagmanager)
- [Meta Pixel Docs](https://developers.facebook.com/docs/meta-pixel)

---

**Última actualización:** Noviembre 2024
**Cliente:** Demosle
**Estado:** ✅ Listo para implementar
