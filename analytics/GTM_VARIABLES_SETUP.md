# Variables de DataLayer para GTM - Demosle

**Fecha:** Noviembre 2024
**GTM Container ID:** GTM-5QFTXQ8B

---

## 📋 Variables de DataLayer a Crear en GTM

Estas son **TODAS las variables** que el código está enviando al dataLayer. Debes crear cada una de estas en GTM como **"Data Layer Variable"**.

### Cómo Crear Variables en GTM

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Selecciona contenedor `GTM-5QFTXQ8B`
3. **Variables** → **New** → **User-Defined Variables**
4. Click **"New"**
5. Tipo: **Data Layer Variable**
6. Nombre de la variable del dataLayer: `[nombre_del_parámetro]`

---

## 🔧 Lista Completa de Variables

### 1. Variables Core

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Event** | `event` | Nombre del evento |
| **DL - Event Category** | `event_category` | Categoría del evento |
| **DL - Event Label** | `event_label` | Label del evento |

### 2. Variables de Página

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Page Path** | `page_path` | Ruta de la página + hash |
| **DL - Page Title** | `page_title` | Título de la página |
| **DL - Page Type** | `page_type` | Tipo de página (home, cotizador, servicios, etc.) |

### 3. Variables de CTA/Click

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - CTA Text** | `cta_text` | Texto del CTA |
| **DL - CTA Location** | `cta_location` | Ubicación del CTA |
| **DL - CTA Type** | `cta_type` | Tipo de CTA (primary, secondary) |
| **DL - Button Text** | `button_text` | Texto del botón clickeado |
| **DL - Click Location** | `click_location` | Ubicación del click |

### 4. Variables de Servicios

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Service Name** | `service_name` | Nombre del servicio |
| **DL - Service Value** | `service_value` | Valor del servicio en CLP |
| **DL - Service Interested** | `service_interested` | Servicio de interés |

### 5. Variables de Cotización/Servicios

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Services Selected** | `services_selected` | Servicios seleccionados (separados por coma) |
| **DL - Services Count** | `services_count` | Cantidad de servicios seleccionados |
| **DL - Has Funnel Completo** | `has_funnel_completo` | Si tiene funnel completo (true/false) |
| **DL - Discount Applied** | `discount_applied` | Si se aplicó descuento (true/false) |
| **DL - Discount Percentage** | `discount_percentage` | Porcentaje de descuento (10) |

### 6. Variables de Valor/Moneda

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Value** | `value` | Valor monetario del evento |
| **DL - Currency** | `currency` | Moneda (CLP) |

### 7. Variables de Formulario

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Form Name** | `form_name` | Nombre del formulario |
| **DL - Step Number** | `step_number` | Número de paso |
| **DL - Step Name** | `step_name` | Nombre del paso (datos_personales, seleccion_servicios) |

### 8. Variables de Portafolio

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Category** | `category` | Categoría del portafolio (web, ecommerce, social, identidad) |
| **DL - Project Count** | `project_count` | Cantidad de proyectos en la categoría |
| **DL - Project Name** | `project_name` | Nombre del proyecto |
| **DL - Project Category** | `project_category` | Categoría del proyecto |
| **DL - Project URL** | `project_url` | URL del proyecto |

### 9. Variables de FAQ

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Question** | `question` | Pregunta del FAQ |
| **DL - Section** | `section` | Sección de la página |

### 10. Variables de Reviews

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Review Count** | `review_count` | Cantidad de reviews |

### 11. Variables de Outbound

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Outbound URL** | `outbound_url` | URL del link externo |
| **DL - Link Text** | `link_text` | Texto del link |

### 12. Variables de Scroll & Engagement

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Scroll Depth** | `scroll_depth` | Profundidad de scroll (25%, 50%, 75%, 100%) |
| **DL - Scroll Percentage** | `scroll_percentage` | Porcentaje de scroll (número) |
| **DL - Section Name** | `section_name` | Nombre de la sección visible |
| **DL - Visibility Percentage** | `visibility_percentage` | Porcentaje de visibilidad de sección |
| **DL - Engagement Time** | `engagement_time` | Tiempo de engagement en segundos |

---

## 📊 Resumen Total

**Total de variables a crear:** **36 variables**

### Agrupación por prioridad:

**🔴 CRÍTICAS (Conversiones):**
- DL - Event
- DL - Click Location
- DL - Button Text
- DL - Service Name
- DL - Service Value
- DL - Services Selected
- DL - Services Count
- DL - Value
- DL - Currency

**🟡 IMPORTANTES (Embudo):**
- DL - Form Name
- DL - Step Number
- DL - Step Name
- DL - Has Funnel Completo
- DL - Page Type

**🟢 OPCIONALES (Engagement):**
- DL - CTA Text
- DL - CTA Location
- DL - CTA Type
- DL - Service Interested
- DL - Category
- DL - Project Name
- DL - Question
- DL - Section
- DL - Review Count

---

## 🚀 Script de Creación Rápida (JSON)

Si prefieres importar todo de una vez, aquí está el JSON con todas las variables:

```json
{
  "name": "DL - Event",
  "type": "v",
  "parameter": [
    {
      "type": "INTEGER",
      "key": "dataLayerVersion",
      "value": "2"
    },
    {
      "type": "BOOLEAN",
      "key": "setDefaultValue",
      "value": "false"
    },
    {
      "type": "TEMPLATE",
      "key": "name",
      "value": "event"
    }
  ]
}
```

Repite este patrón para cada variable, cambiando solo el `name` field con el nombre del parámetro del dataLayer.

---

## 📝 Ejemplo de Configuración de un Tag GA4

Después de crear todas las variables, configura tus tags de GA4 así:

### Tag: GA4 - WhatsApp Click

**Tipo:** Google Analytics: GA4 Event
**Configuration Tag:** GA4 Config
**Event Name:** `whatsapp_click`

**Event Parameters:**
| Parameter Name | Value |
|----------------|-------|
| `click_location` | `{{DL - Click Location}}` |
| `button_text` | `{{DL - Button Text}}` |
| `service_interested` | `{{DL - Service Interested}}` |
| `value` | `{{DL - Value}}` |
| `currency` | `{{DL - Currency}}` |

**Triggering:**
Custom Event: `whatsapp_click`

---

## ✅ Checklist de Configuración

### Variables de DataLayer

- [ ] Crear las 31 variables en GTM
- [ ] Verificar que cada variable apunte al parámetro correcto del dataLayer
- [ ] Agrupar variables por categoría (crear carpetas en GTM)

### Tags de GA4

- [ ] Crear GA4 Config tag
- [ ] Crear tag para `whatsapp_click` (CONVERSIÓN PRINCIPAL)
- [ ] Crear tag para `quote_completed` (conversión secundaria)
- [ ] Crear tag para `service_card_click`
- [ ] Crear tag para `form_start`
- [ ] Crear tag para `step_completed`
- [ ] Crear tag para `portfolio_view`
- [ ] Crear tag para `project_click`
- [ ] Crear tag para `faq_opened`
- [ ] Crear tag para `cta_click`

### Triggers

- [ ] Crear custom event trigger para cada evento
- [ ] Configurar "All Pages" trigger para GA4 Config

### Meta Pixel Tags

- [ ] Crear tag Meta Pixel - Base Code
- [ ] Crear tag Meta Pixel - Lead (para `quote_completed`)
- [ ] Crear tag Meta Pixel - Contact (para `whatsapp_click`)
- [ ] Crear tag Meta Pixel - ViewContent (para `service_card_click`)
- [ ] Crear tag Meta Pixel - InitiateCheckout (para `form_start`)

---

## 🧪 Testing

### Verificar en GTM Preview

1. Click **Preview** en GTM
2. Navega por tu sitio
3. Verifica que cada evento tenga TODOS los parámetros correctos
4. Verifica que NO haya contaminación entre eventos

### Verificar en GA4 DebugView

1. GA4 → Configure → DebugView
2. Navega por tu sitio
3. Verifica que los eventos lleguen con todas las dimensiones
4. Verifica valores correctos (value, currency, etc.)

---

## 📞 Soporte

Si tienes dudas sobre cómo configurar alguna variable:
1. Revisa `IMPLEMENTATION_GUIDE.md`
2. Consulta la documentación de GTM
3. Verifica que el código esté enviando el parámetro correctamente en la consola

---

**Última actualización:** Noviembre 2024
