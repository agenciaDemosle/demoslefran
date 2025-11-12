# Guía de Configuración GA4 - Demosle

**Fecha:** Noviembre 2024
**Sitio:** https://demosle.com
**GTM Container ID:** GTM-5QFTXQ8B
**GA4 Measurement ID:** G-W0JLPYHXMJ
**Meta Pixel ID:** 757787516978508

---

## 📊 Tabla de Contenidos

1. [Estructura de Eventos](#estructura-de-eventos)
2. [Configuración de Conversiones](#configuración-de-conversiones)
3. [Audiencias Recomendadas](#audiencias-recomendadas)
4. [Embudo de Conversión](#embudo-de-conversión)
5. [Meta Pixel Configuration](#meta-pixel-configuration)
6. [Eventos por Sección del Sitio](#eventos-por-sección-del-sitio)

---

## 📋 Estructura de Eventos

### Eventos Principales

| Evento | Descripción | Parámetros | Dónde se dispara |
|--------|-------------|------------|------------------|
| `quote_completed` | Usuario completó formulario cotizador | `services_selected`, `value`, `currency`, `has_funnel_completo` | Cotizador - Al completar Step 2 |
| `whatsapp_click` | Click en botón WhatsApp | `click_location`, `service_interested`, `value` | Servicios, CTAs, Cards |
| `service_card_click` | Click en card de servicio | `service_name`, `service_value`, `click_location` | Sección Servicios |
| `cta_click` | Click en CTA general | `cta_text`, `cta_location`, `cta_type` | Hero, Nosotros, Servicios específicos |
| `form_start` | Inicio de formulario cotizador | `form_name` | Cotizador - Step 1 |
| `step_completed` | Paso completado en cotizador | `step_number`, `form_name` | Cotizador - Cada paso |
| `portfolio_view` | Vista de portafolio | `category`, `project_count` | Portafolio - Cambio de categoría |
| `project_click` | Click en proyecto del portafolio | `project_name`, `project_category`, `project_url` | Portafolio - Click en card |
| `faq_opened` | Apertura de FAQ | `question`, `section` | Sección FAQ |
| `review_view` | Vista de reviews | `review_count` | Sección Reviews - Scroll |
| `phone_click` | Click en teléfono | `click_location` | Varios |

---

## 🎯 Configuración de Conversiones

### Flujo Real del Usuario

```
1. Usuario visita sitio
   ↓
2. Ve servicios y precios
   ↓
3. Click en card de servicio → service_card_click (engagement)
   ↓
4. Navega a cotizador → form_start
   ↓
5. Completa Step 1 → step_completed (step_number: 1)
   ↓
6. Selecciona servicios → step_completed (step_number: 2)
   ↓
7. Envía cotización → quote_completed 📝
   ↓
8. Click en WhatsApp → whatsapp_click 💬 ← CONVERSIÓN REAL
```

### ⚠️ IMPORTANTE: quote_completed vs whatsapp_click

**`quote_completed`:**
- Usuario completó el formulario del cotizador
- Seleccionó servicios y dejó datos
- Tiene intención pero NO contactó todavía
- NO es la conversión final

**`whatsapp_click`:**
- Usuario hizo click para contactar por WhatsApp
- **ESTA ES LA CONVERSIÓN REAL**
- Contacto efectivo con el negocio
- Puede venir desde: cotizador, cards de servicios, CTAs

### Conversiones a Marcar en GA4

**Ir a:** `GA4 → Admin → Events → Toggle "Mark as conversion"`

#### ✅ MARCAR COMO CONVERSIÓN:

1. **`whatsapp_click`** 🥇 **PRINCIPAL**
   - **Razón:** Conversión real - usuario contactó efectivamente
   - **Incluye:** Todos los clicks de WhatsApp del sitio
   - **Valor:** Alto

#### ⚠️ OPCIONAL:

2. **`quote_completed`**
   - **Razón:** Lead tibio - completó formulario
   - **Valor:** Medio
   - **Nota:** Solo marcar si quieres medir "intención de contacto"

3. **`service_card_click`**
   - **Razón:** Interés específico en un servicio
   - **Valor:** Medio-Bajo
   - **Nota:** Para medir qué servicios generan más interés

#### ❌ NO MARCAR:

- `form_start` - Solo inicio de embudo
- `step_completed` - Parte del embudo
- `portfolio_view` - Solo engagement
- `project_click` - Solo engagement
- `faq_opened` - Solo engagement
- `cta_click` - Depende del tipo de CTA

---

## 🎯 Audiencias Recomendadas

**Ir a:** `GA4 → Admin → Audiences → Create audience`

### 1. "Completaron Cotizador pero NO Contactaron" 🔴
**Uso:** Remarketing de alta prioridad

```
Condiciones:
✅ Incluir: event_name = quote_completed
❌ Excluir: event_name = whatsapp_click
Duración: 30 días

Estrategia:
- Remarketing urgente en Meta/Google Ads
- Mensaje: "¿Tienes dudas sobre tu cotización? Conversemos por WhatsApp"
- Ofrecer descuento o consulta gratuita
```

### 2. "Contactaron vía WhatsApp" 🟢
**Uso:** Excluir de anuncios, crear lookalike

```
Condiciones:
✅ Incluir: event_name = whatsapp_click

Estrategia:
- Excluir de campañas de captación
- Crear Lookalike Audience en Meta
- Seguimiento de conversiones
```

### 3. "Interesados en Servicios Específicos" 🟡
**Uso:** Remarketing con mensajes personalizados

```
Condiciones por servicio:

Audiencia "Interés en Google Ads":
✅ service_interested contains "Google Ads"
❌ Excluir: whatsapp_click

Audiencia "Interés en Sitios Web":
✅ service_interested contains "Web"
❌ Excluir: whatsapp_click

Estrategia:
- Mensajes personalizados por servicio
- Casos de éxito del servicio específico
```

### 4. "Vieron Portafolio - Alta Intención" 🔵
**Uso:** Remarketing con casos de éxito

```
Condiciones:
✅ Incluir: event_name = portfolio_view
✅ Y: event_count >= 2
❌ Excluir: event_name = quote_completed

Estrategia:
- Mostrar más casos de éxito
- Mensaje: "¿Te gustó lo que viste? Cotiza tu proyecto"
```

### 5. "Iniciaron Cotizador pero Abandonaron" 🟠
**Uso:** Recuperación inmediata

```
Condiciones:
✅ Incluir: event_name = form_start
❌ Excluir: event_name = quote_completed
Duración: 7 días

Estrategia:
- Remarketing urgente
- Mensaje: "¿Necesitas ayuda? Completa tu cotización en 2 minutos"
```

---

## 📈 Embudo de Conversión

### Embudo Completo

```
100 usuarios visitan el sitio
    ↓
    60 navegan más de 1 página
    ↓
    40 llegan a sección Servicios
    ↓
    25 interactúan con cards de servicios (service_card_click)
    ↓
    20 ven el portafolio (portfolio_view)
    ↓
    15 llegan al cotizador
    ↓
    12 inician el cotizador (form_start) 📝
    ↓
    10 completan Step 1 (step_completed - step_number: 1)
    ↓
    8 completan cotizador (quote_completed) 📝
    ↓ ⚠️ 25% de abandono entre cotizador y WhatsApp
    6 hacen click en WhatsApp (whatsapp_click) 💬 ← CONVERSIÓN
    ↓
    5 envían mensaje efectivamente
    ↓
    2 se convierten en clientes 💰
```

### KPIs Principales a Monitorear

| KPI | Cálculo | Meta |
|-----|---------|------|
| **Tasa de Conversión Principal** | `whatsapp_click / visitantes * 100` | > 2% |
| **Tasa de Completación Cotizador** | `quote_completed / visitantes * 100` | > 2% |
| **Tasa de Abandono Cotizador → WhatsApp** | `(quote_completed - whatsapp_click) / quote_completed * 100` | < 30% |
| **Engagement con Servicios** | `service_card_click / visitantes * 100` | > 20% |
| **Tasa de Inicio Cotizador** | `form_start / visitantes * 100` | > 3% |
| **Completación Form Step 1 → Step 2** | `step_completed(2) / step_completed(1) * 100` | > 80% |

---

## 🎨 Meta Pixel Configuration

### Mapeo de Eventos GA4 → Meta Pixel

| Evento del Sitio | GA4 Event | Meta Pixel Event | Uso en Meta |
|------------------|-----------|------------------|-------------|
| `quote_completed` | `quote_completed` | **Lead** | Lead principal |
| `whatsapp_click` | `whatsapp_click` | **Contact** | Contacto directo |
| `form_start` | `form_start` | **InitiateCheckout** | Inicio de formulario |
| `service_card_click` | `service_card_click` | **ViewContent** | Interés en servicio |
| `portfolio_view` | `portfolio_view` | **ViewContent** | Vio portafolio |
| `project_click` | `project_click` | **ViewContent** | Vio proyecto específico |
| `step_completed` | `step_completed` | **AddToCart** | Avance en embudo |

### 🏆 Conversión Principal en Meta

**`quote_completed` se marca como Lead en Meta**

**Razón:**
- Captura datos del cliente (nombre, email, teléfono)
- Meta optimiza campañas para evento "Lead"
- `whatsapp_click` es "Contact" (acción de contacto)

### Parámetros enviados a Meta

#### Para `quote_completed` (Lead):
```javascript
fbq('track', 'Lead', {
  value: [valor_total_servicios],
  currency: 'CLP',
  content_name: 'cotizador',
  content_category: [servicios_seleccionados],
  num_items: [cantidad_servicios]
})
```

#### Para `whatsapp_click` (Contact):
```javascript
fbq('track', 'Contact', {
  content_name: [click_location],
  content_category: [service_interested]
})
```

#### Para `service_card_click` (ViewContent):
```javascript
fbq('track', 'ViewContent', {
  content_name: [service_name],
  content_type: 'service',
  value: [service_value],
  currency: 'CLP'
})
```

---

## 📍 Eventos por Sección del Sitio

### Hero Section

**Eventos:**
- `page_view` (automático)
- `cta_click` cuando click en "Cotizar"
  ```javascript
  {
    event: 'cta_click',
    cta_text: 'Cotizar',
    cta_location: 'hero',
    cta_type: 'primary'
  }
  ```

### Servicios Section

**Eventos:**
1. `service_card_click` cuando click en botón de precio
   ```javascript
   {
     event: 'service_card_click',
     service_name: 'Sitio Web a Medida',
     service_value: 299990,
     currency: 'CLP',
     click_location: 'servicios_section'
   }
   ```

2. `whatsapp_click` desde botón de servicio
   ```javascript
   {
     event: 'whatsapp_click',
     click_location: 'service_card',
     service_interested: 'Sitio Web a Medida',
     value: 299990,
     currency: 'CLP'
   }
   ```

### Sitios Web Conectados Section

**Eventos:**
- `cta_click` cuando click en "Cotizar web + campañas"
  ```javascript
  {
    event: 'cta_click',
    cta_text: 'Cotizar web + campañas',
    cta_location: 'connected_system',
    cta_type: 'secondary'
  }
  ```

- `whatsapp_click` cuando abre WhatsApp
  ```javascript
  {
    event: 'whatsapp_click',
    click_location: 'connected_system_cta',
    service_interested: 'web_campañas'
  }
  ```

### Campañas Publicitarias Section

**Eventos:**
- `cta_click` + `whatsapp_click`
  ```javascript
  {
    event: 'whatsapp_click',
    click_location: 'ads_section',
    service_interested: 'campañas_publicitarias'
  }
  ```

### Redes Sociales Section

**Eventos:**
- `cta_click` + `whatsapp_click`
  ```javascript
  {
    event: 'whatsapp_click',
    click_location: 'social_media_section',
    service_interested: 'redes_sociales'
  }
  ```

### Nosotros Section

**Eventos:**
- `cta_click` cuando click en "Trabajemos juntos"
  ```javascript
  {
    event: 'cta_click',
    cta_text: 'Trabajemos juntos',
    cta_location: 'team_section',
    cta_type: 'primary'
  }
  ```

### Reviews Section

**Eventos:**
- `scroll_tracking` cuando llega a reviews
  ```javascript
  {
    event: 'review_view',
    review_count: 10,
    section: 'reviews'
  }
  ```

### Portafolio Section

**Eventos:**
1. `portfolio_view` cuando cambia categoría
   ```javascript
   {
     event: 'portfolio_view',
     category: 'web',
     project_count: 8
   }
   ```

2. `project_click` cuando click en proyecto
   ```javascript
   {
     event: 'project_click',
     project_name: 'Contadoor',
     project_category: 'web',
     project_url: 'https://contadoor.cl/'
   }
   ```

### Cotizador Section

**Eventos:**

1. **Step 1 - Inicio:**
   ```javascript
   {
     event: 'form_start',
     form_name: 'cotizador'
   }
   ```

2. **Completación Step 1:**
   ```javascript
   {
     event: 'step_completed',
     step_number: 1,
     form_name: 'cotizador',
     has_data: true
   }
   ```

3. **Completación Step 2:**
   ```javascript
   {
     event: 'step_completed',
     step_number: 2,
     form_name: 'cotizador',
     services_count: 3
   }
   ```

4. **Formulario Completado:**
   ```javascript
   {
     event: 'quote_completed',
     services_selected: ['web-simple', 'google-ads', 'meta-ads'],
     services_count: 3,
     has_funnel_completo: false,
     value: 539970, // Suma de servicios
     currency: 'CLP',
     form_name: 'cotizador'
   }
   ```

5. **Detección de Funnel Completo:**
   ```javascript
   {
     event: 'funnel_completo_detected',
     services_selected: ['web-simple', 'google-ads', 'meta-ads', 'social-media', 'automatizacion'],
     discount_applied: true,
     discount_percentage: 10
   }
   ```

6. **Click en "Enviar Cotización" (WhatsApp):**
   ```javascript
   {
     event: 'whatsapp_click',
     click_location: 'cotizador_submit',
     service_interested: 'cotización_múltiple',
     services_count: 3,
     value: 539970,
     currency: 'CLP'
   }
   ```

### FAQ Section

**Eventos:**
- `faq_opened` cuando abre una pregunta
  ```javascript
  {
    event: 'faq_opened',
    question: '¿Entregan factura?',
    section: 'faq'
  }
  ```

---

## 📝 Checklist de Configuración

### Antes de Implementar

- [ ] Crear cuenta GA4 y obtener Measurement ID (G-XXXXXXXXXX)
- [ ] Crear cuenta GTM y obtener Container ID (GTM-XXXXXXX)
- [ ] Crear Meta Pixel y obtener Pixel ID
- [ ] Actualizar archivo `.env` con los IDs

### Implementación Técnica

- [ ] Agregar GTM script al `index.html`
- [ ] Agregar Meta Pixel script al `index.html`
- [ ] Actualizar `useAnalytics.ts` con todos los eventos
- [ ] Integrar tracking en Hero section
- [ ] Integrar tracking en Servicios section
- [ ] Integrar tracking en Cotizador completo
- [ ] Integrar tracking en Portafolio
- [ ] Integrar tracking en FAQ
- [ ] Integrar tracking en todos los CTAs de WhatsApp

### Después de Deploy (24-48h)

- [ ] Verificar eventos en GA4 DebugView
- [ ] Verificar eventos en Meta Events Manager
- [ ] **GA4 → Admin → Events**
- [ ] ✅ Marcar `whatsapp_click` como conversión (PRINCIPAL)
- [ ] ⚠️ (Opcional) Marcar `quote_completed` como conversión secundaria
- [ ] ⚠️ (Opcional) Marcar `service_card_click` como micro-conversión

### Primera Semana

- [ ] Crear audiencia: "Completaron Cotizador pero NO Contactaron"
- [ ] Crear audiencia: "Contactaron vía WhatsApp"
- [ ] Crear audiencia: "Iniciaron Cotizador pero Abandonaron"
- [ ] Configurar embudo de conversión en GA4
- [ ] Configurar conversión personalizada en Meta Ads Manager

### Primer Mes

- [ ] Crear resto de audiencias recomendadas
- [ ] Configurar alertas de caída en conversiones
- [ ] Analizar KPIs y optimizar
- [ ] A/B test de mensajes de WhatsApp
- [ ] Revisar abandono entre steps del cotizador

---

## 🎯 Informes Personalizados Recomendados

### Informe 1: "Embudo Cotizador Completo"

**Ir a:** `GA4 → Explorar → Análisis de embudo`

```
Paso 1: page_view (Cotizador section)
   ↓
Paso 2: form_start
   ↓
Paso 3: step_completed (step_number = 1)
   ↓
Paso 4: step_completed (step_number = 2)
   ↓
Paso 5: quote_completed
   ↓
Paso 6: whatsapp_click (CONVERSIÓN)
```

### Informe 2: "Rendimiento por Servicio"

```
Dimensiones:
- event_name = service_card_click
- service_name
- service_value

Métricas:
- Recuento de eventos
- Conversiones subsecuentes (whatsapp_click)
- Tasa de conversión por servicio
```

### Informe 3: "Origen de Conversiones WhatsApp"

```
Dimensiones:
- event_name = whatsapp_click
- click_location

Métricas:
- Recuento de conversiones
- % del total
- Valor promedio
```

---

## 🚨 Alertas Recomendadas

### Alerta 1: Caída en Conversiones WhatsApp
```
Condición: whatsapp_click disminuye > 30% día tras día
Frecuencia: Diaria
Acción: Email a equipo
```

### Alerta 2: Aumento en Abandonos Cotizador
```
Condición: form_start aumenta pero quote_completed NO aumenta
Frecuencia: Semanal
Acción: Revisar UX del cotizador
```

### Alerta 3: Cero Conversiones en 24h
```
Condición: whatsapp_click = 0 en últimas 24h
Frecuencia: Diaria
Acción: Email urgente - verificar botones WhatsApp
```

---

**Última actualización:** Noviembre 2024
**Desarrollador:** Claude Code
**Cliente:** Demosle
