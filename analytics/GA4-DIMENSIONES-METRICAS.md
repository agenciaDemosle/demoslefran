# GA4 - Dimensiones y Métricas Personalizadas - Demosle

> Basado en la configuración actual de GTM y el hook useAnalytics.ts

## 📋 RESUMEN

- **Total de eventos configurados**: 16 eventos
- **Total de parámetros únicos**: 46 parámetros
- **Dimensiones personalizadas requeridas**: ~35-40 (depende de cuáles activar)
- **Límite GA4**: 50 dimensiones personalizadas por propiedad

---

## 🎯 EVENTOS CONFIGURADOS EN GTM

### Eventos de Navegación
1. **page_view** - Vista de página
2. **hash_change** - Cambio de sección (#servicios, #portafolio, etc.)

### Eventos de Conversión (Principales)
3. **whatsapp_click** - Click en WhatsApp (conversión primaria)
4. **quote_completed** - Cotización completada (conversión secundaria)

### Eventos de Engagement
5. **service_selection** - Selección/deselección de servicio
6. **service_combination** - Combinación final de servicios
7. **cta_click** - Click en CTA

### Eventos de Portafolio
8. **portfolio_view** - Cambio de categoría en portafolio
9. **project_click** - Click en proyecto

### Eventos de Formulario
10. **form_start** - Inicio de formulario
11. **step_completed** - Paso completado en formulario

### Eventos de Interacción
12. **faq_opened** - Apertura de FAQ
13. **scroll_depth** - Profundidad de scroll (25%, 50%, 75%, 100%)
14. **section_view** - Vista de sección (Intersection Observer al 50%)
15. **engagement_time** - Tiempo de engagement (10s, 30s, 1min, 2min, 5min)

### Eventos Meta Pixel
16. **Meta Pixel - Contact** (whatsapp_click trigger)
17. **Meta Pixel - Lead** (quote_completed trigger)

---

## 📊 DIMENSIONES PERSONALIZADAS A CREAR EN GA4

### ⭐ PRIORIDAD CRÍTICA (Conversiones y Atribución)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Page Type | `page_type` | Event | Tipo de página (home, servicios, portafolio, cotizador, etc.) |
| Service Interested | `service_interested` | Event | Servicio de interés del usuario |
| Services Selected | `services_selected` | Event | Lista de servicios seleccionados (separados por coma) |
| Has Funnel Completo | `has_funnel_completo` | Event | Si tiene el funnel completo de servicios |
| Click Location | `click_location` | Event | Ubicación del click (hero, footer, floating, etc.) |
| Value | `value` | Event | Valor monetario del evento |
| Currency | `currency` | Event | Moneda (CLP) |

### 🔥 PRIORIDAD ALTA (Engagement y Formularios)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| CTA Location | `cta_location` | Event | Ubicación del CTA |
| CTA Text | `cta_text` | Event | Texto del CTA |
| CTA Type | `cta_type` | Event | Tipo de CTA (primary, secondary) |
| Button Text | `button_text` | Event | Texto del botón |
| Form Name | `form_name` | Event | Nombre del formulario |
| Step Name | `step_name` | Event | Nombre del paso del formulario |
| Step Number | `step_number` | Event | Número de paso |
| Services Count | `services_count` | Event | Cantidad de servicios seleccionados |

### 📈 PRIORIDAD MEDIA (Análisis de Servicios)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Service ID | `service_id` | Event | ID del servicio |
| Service Name | `service_name` | Event | Nombre del servicio |
| Selection Action | `selection_action` | Event | Acción (selected/deselected) |
| Combination Type | `combination_type` | Event | Tipo de combinación (funnel_completo, web_ads, etc.) |
| Has Web | `has_web` | Event | Incluye servicio web |
| Has Ads | `has_ads` | Event | Incluye servicio ads |
| Has Social | `has_social` | Event | Incluye servicio social |
| Has Automation | `has_automation` | Event | Incluye servicio automation |
| Discount Applied | `discount_applied` | Event | Descuento aplicado |
| Discount Percentage | `discount_percentage` | Event | Porcentaje de descuento |

### 🎨 PRIORIDAD MEDIA (Portafolio)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Category | `category` | Event | Categoría del portafolio |
| Project Count | `project_count` | Event | Cantidad de proyectos mostrados |
| Project Name | `project_name` | Event | Nombre del proyecto clickeado |
| Project Category | `project_category` | Event | Categoría del proyecto |
| Project URL | `project_url` | Event | URL del proyecto |

### 📄 PRIORIDAD BAJA (Navegación y Páginas)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Page Path | `page_path` | Event | Ruta de la página |
| Page Title | `page_title` | Event | Título de la página |
| Section Name | `section_name` | Event | Nombre de la sección |
| Section | `section` | Event | Sección (alternativo a section_name) |

### 📊 PRIORIDAD BAJA (FAQ y Otros)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Question | `question` | Event | Pregunta del FAQ |
| Review Count | `review_count` | Event | Cantidad de reviews |
| Outbound URL | `outbound_url` | Event | URL externa |
| Link Text | `link_text` | Event | Texto del enlace |

### 📜 PRIORIDAD BAJA (Scroll y Engagement)

| Dimension Name | Event Parameter | Scope | Descripción |
|---|---|---|---|
| Scroll Depth | `scroll_depth` | Event | Profundidad de scroll (25%, 50%, 75%, 100%) |
| Scroll Percentage | `scroll_percentage` | Event | Porcentaje de scroll |
| Visibility Percentage | `visibility_percentage` | Event | Porcentaje de visibilidad de sección |
| Engagement Time | `engagement_time` | Event | Tiempo de engagement en segundos |

---

## 📝 VARIABLES DEL DATA LAYER (GTM)

Estas son todas las variables configuradas en GTM que alimentan las dimensiones:

```javascript
// Variables de constante
- GA4 Measurement ID: G-W0JLPYHXMJ
- Meta Pixel ID: 757787516978508
- Website URL: https://demosle.cl

// Variables del DataLayer (46 variables)
DL - Page Path
DL - Page Title
DL - Page Type
DL - Section Name
DL - CTA Text
DL - CTA Location
DL - CTA Type
DL - Button Text
DL - Click Location
DL - Service ID
DL - Service Name
DL - Service Value
DL - Service Interested
DL - Services Selected
DL - Services Count
DL - Has Funnel Completo
DL - Discount Applied
DL - Discount Percentage
DL - Selection Action
DL - Combination Type
DL - Has Web
DL - Has Ads
DL - Has Social
DL - Has Automation
DL - Form Name
DL - Step Number
DL - Step Name
DL - Category
DL - Project Count
DL - Project Name
DL - Project Category
DL - Project URL
DL - Question
DL - Section
DL - Review Count
DL - Outbound URL
DL - Link Text
DL - Scroll Depth
DL - Scroll Percentage
DL - Visibility Percentage
DL - Engagement Time
DL - Value
DL - Currency
```

---

## 🎯 CONVERSIONES A CONFIGURAR EN GA4

### Conversión Primaria
- **whatsapp_click** → Marcar como conversión principal

### Conversión Secundaria
- **quote_completed** → Marcar como conversión secundaria

### Micro-conversiones (Opcional)
- **form_start** → Inicio de cotización
- **service_selection** → Interés en servicio
- **cta_click** → Engagement con CTAs
- **scroll_depth** (75% o 100%) → Engagement alto

---

## 🔧 INSTRUCCIONES PARA CREAR DIMENSIONES EN GA4

1. Ve a **Google Analytics 4** → **Admin** (⚙️)
2. En la columna **Property** → **Custom definitions**
3. Click en **Create custom dimension**
4. Para cada dimensión:
   - **Dimension name**: Copia el nombre de la tabla (ej: "Page Type")
   - **Scope**: **Event** (para todas)
   - **Description**: Opcional, copia la descripción de la tabla
   - **Event parameter**: Copia exactamente el valor (ej: `page_type`)
5. Click **Save**

**IMPORTANTE**: Respeta exactamente los nombres de los parámetros (case-sensitive).

---

## 📊 MÉTRICAS ESTÁNDAR USADAS

Estas métricas no requieren configuración, GA4 las captura automáticamente:

- **Event Count** - Cantidad de eventos
- **Users** - Usuarios únicos
- **Sessions** - Sesiones
- **Event Value** - Suma de valores (parámetro `value`)
- **Conversions** - Eventos marcados como conversión

---

## 🚀 EVENTOS ADICIONALES EN useAnalytics.ts (No en GTM)

Estos eventos están codificados pero **NO tienen tags en GTM**:

- `service_card_click` - Click en tarjeta de servicio
- `phone_click` - Click en teléfono
- `outbound_click` - Click en enlace externo
- `review_view` - Vista de sección de reviews
- `funnel_completo_detected` - Detección automática de funnel completo

**Recomendación**: Crear tags en GTM para estos eventos si quieres trackearlos.

---

## 📱 META CONVERSIONS API (CAPI)

El código incluye soporte para enviar eventos a Meta CAPI vía servidor PHP:

- Endpoint: `/api/capi.php` (o variable de entorno `VITE_CAPI_ENDPOINT`)
- Eventos hasheados: email, phone, firstName, lastName (SHA-256)
- Cookies rastreadas: `_fbp`, `_fbc`

**Estado actual**: Codificado en `useAnalytics.ts` pero requiere implementar el endpoint PHP en el servidor.

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### En GTM
- [x] 16 tags de GA4 configurados
- [x] 2 tags de Meta Pixel
- [x] 1 tag de Consent Mode
- [x] 46 variables del DataLayer
- [x] 16 triggers personalizados

### En GA4 (Por hacer)
- [ ] Crear ~35-40 dimensiones personalizadas
- [ ] Marcar `whatsapp_click` como conversión
- [ ] Marcar `quote_completed` como conversión
- [ ] Configurar audiences basadas en `service_interested`
- [ ] Configurar audiences basadas en `has_funnel_completo`
- [ ] Crear explorations para analizar `service_combination`

### En el Servidor (Por hacer)
- [ ] Implementar endpoint `/api/capi.php` para Meta CAPI
- [ ] Configurar variables de entorno:
  - `META_ACCESS_TOKEN`
  - `META_PIXEL_ID`

---

## 🎓 TIPS DE OPTIMIZACIÓN

1. **No crear todas las dimensiones**: Empieza con las de prioridad crítica y alta (25-30 dimensiones)
2. **Validar eventos**: Usa el DebugView de GA4 para confirmar que los eventos llegan correctamente
3. **Esperar 24-48h**: Las dimensiones personalizadas tardan en aparecer en reportes
4. **Crear segmentos**: Usa `has_funnel_completo`, `services_count`, `page_type` para crear segmentos valiosos
5. **Exportar a BigQuery**: Si necesitas análisis avanzado de combinaciones de servicios

---

## 📞 CONTACTO Y SOPORTE

- **Archivo de configuración**: `demosleWeb/analytics/gtm-container-demosle.json`
- **Hook de tracking**: `demosleWeb/src/hooks/useAnalytics.ts`
- **GTM Container ID**: GTM-5QFTXQ8B
- **GA4 Measurement ID**: G-W0JLPYHXMJ
- **Meta Pixel ID**: 757787516978508

---

## 👥 PÚBLICOS (AUDIENCES) RECOMENDADOS

### 🎯 Públicos de Conversión

#### 1. **Alto Valor - Funnel Completo**
- **Condición**: `has_funnel_completo` = true
- **Uso**: Remarketing premium, ofertas especiales
- **Tamaño estimado**: Bajo (5-10% del tráfico)

#### 2. **Interesados en Servicios Específicos**
- **Web**: `service_interested` contiene "web"
- **Ads**: `service_interested` contiene "ads"
- **Social**: `service_interested` contiene "social"
- **Automation**: `service_interested` contiene "automation"
- **Uso**: Campañas segmentadas por servicio

#### 3. **Clicks en WhatsApp sin Conversión**
- **Condición**: `whatsapp_click` > 0 AND `quote_completed` = 0
- **Ventana**: 7 días
- **Uso**: Remarketing para completar cotización
- **Tamaño estimado**: Medio (15-20%)

#### 4. **Inicio Cotización sin Completar**
- **Condición**: `form_start` > 0 AND `quote_completed` = 0
- **Ventana**: 7 días
- **Uso**: Emails de recuperación, remarketing
- **Tamaño estimado**: Medio-Alto (20-30%)

#### 5. **Usuarios Multi-Servicio**
- **Condición**: `services_count` >= 2
- **Uso**: Ofertas de paquetes, cross-selling
- **Tamaño estimado**: Medio (10-15%)

### 📊 Públicos de Engagement

#### 6. **Alto Engagement**
- **Condiciones**:
  - `scroll_depth` >= 75%
  - `engagement_time` >= 60 segundos
  - `section_view` >= 3
- **Uso**: Contenido premium, webinars
- **Tamaño estimado**: Medio (15-20%)

#### 7. **Interesados en Portafolio**
- **Condición**: `portfolio_view` > 0 OR `project_click` > 0
- **Uso**: Casos de éxito, testimonios
- **Tamaño estimado**: Medio (10-15%)

#### 8. **FAQ Readers**
- **Condición**: `faq_opened` >= 3
- **Ventana**: 30 días
- **Uso**: Contenido educativo, demos
- **Tamaño estimado**: Bajo-Medio (5-10%)

### 🔄 Públicos de Retargeting

#### 9. **Visitantes Recientes sin Conversión**
- **Condiciones**:
  - `page_view` > 0
  - `whatsapp_click` = 0
  - `quote_completed` = 0
- **Ventana**: 30 días
- **Uso**: Remarketing genérico
- **Tamaño estimado**: Alto (60-70%)

#### 10. **Usuarios con Combinaciones Premium**
- **Condición**: `combination_type` contiene "funnel_completo" OR "web_ads"
- **Uso**: Ofertas exclusivas, descuentos
- **Tamaño estimado**: Bajo (5-8%)

---

## 📈 INFORMES PERSONALIZADOS RECOMENDADOS

### 📊 Informe 1: Análisis de Conversiones por Servicio

**Nombre**: "Conversiones por Tipo de Servicio"

**Dimensiones**:
- Dimensión primaria: `Service Interested`
- Dimensión secundaria: `Click Location`

**Métricas**:
- Conversiones (`whatsapp_click`)
- Tasa de conversión
- Valor de conversión (`value`)

**Segmento**: Usuarios con `whatsapp_click` > 0

**Uso**: Identificar qué servicios generan más leads

---

### 📊 Informe 2: Funnel de Cotización

**Nombre**: "Análisis de Funnel - Cotizador"

**Pasos del funnel**:
1. `form_start` (Inicio)
2. `service_selection` (Selección)
3. `service_combination` (Combinación)
4. `quote_completed` (Completado)

**Dimensiones**:
- `Services Count`
- `Has Funnel Completo`
- `Combination Type`

**Métricas**:
- Eventos por paso
- Tasa de abandono
- Tiempo promedio entre pasos

**Uso**: Optimizar el flujo del cotizador

---

### 📊 Informe 3: Engagement por Sección

**Nombre**: "Análisis de Engagement por Sección"

**Dimensiones**:
- Dimensión primaria: `Section Name`
- Dimensión secundaria: `Page Type`

**Métricas**:
- `section_view` (vistas)
- `Engagement Time` (tiempo promedio)
- `Scroll Percentage` (scroll promedio)

**Filtro**: `section_view` > 0

**Uso**: Identificar secciones más atractivas

---

### 📊 Informe 4: CTAs Performance

**Nombre**: "Rendimiento de CTAs"

**Dimensiones**:
- Dimensión primaria: `CTA Location`
- Dimensión secundaria: `CTA Text`
- Dimensión terciaria: `CTA Type`

**Métricas**:
- `cta_click` (clicks)
- Conversiones posteriores
- Tasa de conversión

**Uso**: Optimizar ubicación y copy de CTAs

---

### 📊 Informe 5: Portafolio Insights

**Nombre**: "Análisis de Portafolio"

**Dimensiones**:
- Dimensión primaria: `Project Category`
- Dimensión secundaria: `Project Name`

**Métricas**:
- `portfolio_view` (vistas)
- `project_click` (clicks)
- CTR (Click-through rate)
- Conversiones posteriores

**Uso**: Identificar proyectos que generan más interés

---

### 📊 Informe 6: Combinaciones de Servicios

**Nombre**: "Análisis de Combinaciones de Servicios"

**Dimensiones**:
- Dimensión primaria: `Combination Type`
- Dimensión secundaria: `Services Count`

**Métricas**:
- `service_combination` (eventos)
- Valor promedio (`value`)
- Tasa de conversión a `quote_completed`

**Breakdown**:
- `Has Web`
- `Has Ads`
- `Has Social`
- `Has Automation`

**Uso**: Identificar paquetes más populares

---

### 📊 Informe 7: User Journey Map

**Nombre**: "Mapa de Recorrido del Usuario"

**Path Exploration** con:
- Nodo inicial: `page_view`
- Nodos intermedios: `cta_click`, `form_start`, `service_selection`
- Nodo final: `whatsapp_click` OR `quote_completed`

**Dimensiones de segmentación**:
- `Page Type`
- `Service Interested`
- `Has Funnel Completo`

**Uso**: Visualizar el camino completo hacia la conversión

---

### 📊 Informe 8: Valor por Canal

**Nombre**: "ROI por Canal de Adquisición"

**Dimensiones**:
- Dimensión primaria: `Default Channel Group`
- Dimensión secundaria: `Service Interested`

**Métricas**:
- Usuarios
- Conversiones
- Valor de conversión (`value`)
- Costo por conversión (si está conectado a Google Ads)

**Filtro**: `whatsapp_click` > 0 OR `quote_completed` > 0

**Uso**: Identificar canales más rentables

---

## 🎯 CÓMO CREAR PÚBLICOS EN GA4

### Pasos:

1. **GA4** → **Admin** → **Audiences**
2. Click **New audience**
3. Opción 1: **Create a custom audience**
4. **Add condition group**:
   - Selecciona evento (ej: `whatsapp_click`)
   - Configura condiciones (ej: `has_funnel_completo` = true)
5. **Audience triggers**: Configura cuando se activa
6. **Membership duration**: 30, 60 o 90 días (según tu ciclo de venta)
7. Click **Save**

### Vincular con Google Ads:

1. **GA4** → **Admin** → **Google Ads Links**
2. Link tu cuenta de Google Ads
3. Activa la exportación de audiences
4. En Google Ads, ve a **Tools** → **Audience Manager**
5. Usa los públicos de GA4 para campañas de remarketing

---

## 🎯 CÓMO CREAR INFORMES EN GA4

### Explorations (Informes Personalizados):

1. **GA4** → **Explore** (menú izquierdo)
2. Click **Blank** (plantilla en blanco)
3. **Variables**:
   - **Dimensions**: Arrastra las dimensiones personalizadas
   - **Metrics**: Selecciona las métricas relevantes
4. **Tab Settings**:
   - **Technique**: Free form, Funnel, Path, etc.
   - **Rows**: Arrastra dimensión primaria
   - **Columns**: Arrastra dimensión secundaria (opcional)
   - **Values**: Arrastra métricas
5. **Filters**: Aplica filtros según necesites
6. Click **Save** para guardar el informe

---

## 📅 FRECUENCIA DE REVISIÓN RECOMENDADA

### Diario (DebugView cuando testeas):
- Validar eventos nuevos
- Verificar parámetros

### Semanal:
- Informe de Conversiones por Servicio
- CTAs Performance
- Funnel de Cotización

### Mensual:
- Análisis de Combinaciones de Servicios
- User Journey Map
- Portafolio Insights
- Valor por Canal

### Trimestral:
- Revisión completa de públicos
- Optimización de informes
- Limpieza de dimensiones no utilizadas

---

**Última actualización**: 2025-11-12
**Versión del container**: GTM v0 (exportFormatVersion: 2)
**Estado**: ✅ Debug Mode funcionando | ⏳ Dimensiones pendientes | ⏳ Conversiones pendientes
