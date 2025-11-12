# Guía de Implementación Técnica - Analytics Demosle

**Fecha:** Noviembre 2024
**Sitio:** https://demosle.com

---

## 📋 Tabla de Contenidos

1. [Configuración Inicial de Cuentas](#configuración-inicial-de-cuentas)
2. [Instalación de Scripts](#instalación-de-scripts)
3. [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
4. [Actualización del Código](#actualización-del-código)
5. [Testing y Verificación](#testing-y-verificación)

---

## 🔧 Configuración Inicial de Cuentas

### 1. Crear Cuenta Google Analytics 4 (GA4)

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Click en **"Admin"** (esquina inferior izquierda)
3. Click en **"Create Property"**
4. Configuración:
   - **Property name:** Demosle
   - **Reporting time zone:** (GMT-03:00) Santiago
   - **Currency:** Chilean Peso (CLP)
5. Click **"Next"**
6. **Business details:**
   - Industry: Advertising & Marketing
   - Business size: Small
7. **Business objectives:** Select "Generate leads"
8. Click **"Create"**
9. Acepta los términos de servicio
10. **GUARDA el Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Crear Cuenta Google Tag Manager (GTM)

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Click en **"Create Account"**
3. Configuración:
   - **Account Name:** Demosle
   - **Country:** Chile
   - **Container name:** demosle.com
   - **Target platform:** Web
4. Click **"Create"**
5. Acepta los términos
6. **GUARDA el Container ID** (formato: `GTM-XXXXXXX`)
7. **NO cierres la ventana** - necesitas copiar los scripts

### 3. Crear Meta Pixel (Facebook Pixel)

1. Ve a [Meta Business Suite](https://business.facebook.com/)
2. En el menú, ve a **"Event Manager"**
3. Click en **"Connect Data Sources"** → **"Web"** → **"Meta Pixel"**
4. Nombre: **Demosle Website**
5. URL: **https://demosle.com**
6. Click **"Create Pixel"**
7. Selecciona **"Manually add pixel code to website"**
8. **GUARDA el Pixel ID** (solo números, ej: `1234567890123456`)

---

## 📦 Instalación de Scripts

### 1. Instalar Google Tag Manager en index.html

Abre `/index.html` y agrega los siguientes scripts:

**Después de la etiqueta `<head>`:**
```html
<!doctype html>
<html lang="es-CL">
  <head>
    <meta charset="UTF-8" />

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    <!-- End Google Tag Manager -->

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <!-- resto del head... -->
```

**Inmediatamente después de la etiqueta de apertura `<body>`:**
```html
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
```

**⚠️ Importante:** Reemplaza `GTM-XXXXXXX` con tu Container ID real.

### 2. Configurar GA4 en Google Tag Manager

**Ir a GTM:**

1. **Variables** → **New** → **User-Defined Variables**
   - Click **"New"**
   - Nombre: `GA4 Measurement ID`
   - Tipo: **Constant**
   - Value: `G-XXXXXXXXXX` (tu Measurement ID)
   - **Save**

2. **Tags** → **New**
   - Nombre: `GA4 - Configuration`
   - Tipo: **Google Analytics: GA4 Configuration**
   - **Measurement ID:** `{{GA4 Measurement ID}}`
   - **Triggering:** `All Pages`
   - **Save**

3. **Tags** → **New**
   - Nombre: `GA4 - All Events`
   - Tipo: **Google Analytics: GA4 Event**
   - **Configuration Tag:** `GA4 - Configuration`
   - **Event Name:** `{{Event}}`
   - **Event Parameters:**
     - Agregar todos los parámetros del dataLayer como variables
   - **Triggering:** `Custom Event` → Nombre: `.*` (regex para todos los eventos)
   - **Save**

### 3. Configurar Meta Pixel en Google Tag Manager

**Ir a GTM:**

1. **Variables** → **New**
   - Nombre: `Meta Pixel ID`
   - Tipo: **Constant**
   - Value: `1234567890123456` (tu Pixel ID)
   - **Save**

2. **Tags** → **New**
   - Nombre: `Meta Pixel - Base Code`
   - Tipo: **Custom HTML**
   - HTML:
   ```html
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', '{{Meta Pixel ID}}');
   fbq('track', 'PageView');
   </script>
   ```
   - **Triggering:** `All Pages`
   - **Save**

3. **Tags** → **New** (para eventos personalizados)
   - Nombre: `Meta Pixel - Custom Events`
   - Tipo: **Custom HTML**
   - HTML:
   ```html
   <script>
   var metaEventMap = {
     'quote_completed': 'Lead',
     'whatsapp_click': 'Contact',
     'form_start': 'InitiateCheckout',
     'service_card_click': 'ViewContent',
     'step_completed': 'AddToCart'
   };

   var eventName = {{Event}};
   var metaEvent = metaEventMap[eventName];

   if (metaEvent) {
     var eventData = {
       content_name: {{Click Location}} || {{Service Name}} || {{Form Name}},
       value: {{Value}} || 0,
       currency: 'CLP'
     };

     fbq('track', metaEvent, eventData);
   }
   </script>
   ```
   - **Triggering:** `Custom Event` → Nombre: `.*`
   - **Save**

4. **Submit** (publicar cambios en GTM)

---

## 🔐 Configuración de Variables de Entorno

### 1. Crear archivo `.env`

En la raíz del proyecto, crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

### 2. Actualizar variables de Analytics

Edita `.env` y actualiza estas líneas:

```env
# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_META_PIXEL_ID=1234567890123456
```

**⚠️ Importante:**
- Reemplaza con tus IDs reales
- NO commits el archivo `.env` al repositorio
- El archivo `.env.example` ya está actualizado con los placeholders

### 3. Reiniciar servidor de desarrollo

```bash
npm run dev
```

---

## 💻 Actualización del Código

### 1. Actualizar `useAnalytics.ts`

El archivo `src/hooks/useAnalytics.ts` será actualizado con:

✅ Tracking de `quote_completed`
✅ Tracking de `whatsapp_click`
✅ Tracking de `service_card_click`
✅ Tracking de `form_start` y `step_completed`
✅ Tracking de `portfolio_view` y `project_click`
✅ Tracking de `faq_opened`
✅ Tracking de `cta_click`
✅ Sistema de limpieza de dataLayer (evita contaminación)

### 2. Integrar tracking en Home.tsx

Se agregará tracking en:

**Hero Section:**
```tsx
<button
  onClick={() => {
    trackCTAClick('Cotizar', 'Hero');
    // ... scroll logic
  }}
>
```

**Servicios Section:**
```tsx
<button
  onClick={() => {
    trackServiceCardClick(service.title, service.prices[0].price, 'servicios_section');
    handleWhatsAppClick(priceLabel, priceValue);
  }}
>
```

**Cotizador:**
```tsx
// Step 1 - Start
useEffect(() => {
  if (step === 1) {
    trackFormStart('cotizador');
  }
}, [step]);

// Step completion
onClick={() => {
  trackStepCompleted(2, 'cotizador');
  setStep(2);
}}

// Quote completed
onClick={() => {
  trackQuoteCompleted({
    services_selected: formData.services,
    services_count: formData.services.length,
    has_funnel_completo: isFunnelCompleto,
    value: totalValue,
    currency: 'CLP'
  });
  handleSubmit();
}}
```

### 3. Integrar tracking en componentes adicionales

**Portfolio Section:**
```tsx
<button
  onClick={() => {
    trackPortfolioView(category, projects.length);
    setActiveCategory(category);
  }}
>

<a
  href={project.url}
  onClick={() => {
    trackProjectClick(project.title, project.category, project.url);
  }}
>
```

**FAQ Section:**
```tsx
<button
  onClick={() => {
    trackFAQOpened(faq.question, 'faq');
    setOpenIndex(index);
  }}
>
```

---

## ✅ Testing y Verificación

### 1. Testing Local con GTM Preview

1. Abre [Google Tag Manager](https://tagmanager.google.com/)
2. Click en **"Preview"** (arriba a la derecha)
3. Ingresa: `http://localhost:3000`
4. Click **"Connect"**
5. Una nueva ventana se abrirá con tu sitio en modo preview
6. Navega por el sitio y verifica que los eventos se disparen:
   - ✅ `page_view` al cargar
   - ✅ `cta_click` al hacer click en botones
   - ✅ `service_card_click` al hacer click en servicios
   - ✅ `form_start` al llegar al cotizador
   - ✅ `quote_completed` al completar formulario
   - ✅ `whatsapp_click` al hacer click en WhatsApp

### 2. Verificar en GA4 DebugView

1. Abre [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad
3. En el menú lateral: **"Configure"** → **"DebugView"**
4. Navega por tu sitio en localhost (con GTM Preview activo)
5. Verifica que los eventos lleguen a GA4 con todos sus parámetros

**Deberías ver:**
- ✅ Eventos en tiempo real
- ✅ Parámetros correctos para cada evento
- ✅ Sin eventos duplicados
- ✅ Sin contaminación de parámetros entre eventos

### 3. Verificar en Meta Events Manager

1. Abre [Meta Events Manager](https://business.facebook.com/events_manager)
2. Selecciona tu Pixel
3. Click en **"Test Events"**
4. Ingresa: `http://localhost:3000`
5. Navega por tu sitio
6. Verifica que los eventos lleguen:
   - ✅ `PageView` al cargar
   - ✅ `Lead` cuando complete cotizador
   - ✅ `Contact` cuando haga click en WhatsApp
   - ✅ `ViewContent` cuando vea servicios
   - ✅ `InitiateCheckout` cuando inicie formulario

### 4. Checklist de Verificación

Antes de hacer deploy a producción:

**GTM:**
- [ ] Todos los tags están publicados
- [ ] GTM Preview funciona correctamente
- [ ] No hay errores en la consola del navegador
- [ ] Variables de dataLayer se capturan correctamente

**GA4:**
- [ ] DebugView muestra eventos en tiempo real
- [ ] Todos los parámetros llegan correctamente
- [ ] No hay contaminación entre eventos
- [ ] Measurement ID es correcto

**Meta Pixel:**
- [ ] Test Events muestra eventos
- [ ] Mapeo de eventos GA4 → Meta es correcto
- [ ] Pixel ID es correcto
- [ ] No hay eventos duplicados

**Código:**
- [ ] `.env` tiene los IDs correctos
- [ ] `.env` está en `.gitignore`
- [ ] Scripts de GTM están en `index.html`
- [ ] `useAnalytics.ts` está actualizado
- [ ] Tracking está integrado en todos los componentes clave

---

## 🚀 Deploy a Producción

### 1. Antes del Deploy

```bash
# Verificar que no se commitea el .env
git status

# Debe aparecer en .gitignore
cat .gitignore | grep ".env"

# Build de producción
npm run build

# Verificar que el build funcionó
npm run preview
```

### 2. Configurar Variables en Producción

**Si usas Vercel:**
```bash
# En el dashboard de Vercel:
Settings → Environment Variables

VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_META_PIXEL_ID=1234567890123456
```

**Si usas Netlify:**
```bash
# En el dashboard de Netlify:
Site settings → Build & deploy → Environment

VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_META_PIXEL_ID=1234567890123456
```

### 3. Después del Deploy

1. **Actualizar GTM Preview URL** a tu URL de producción
2. **Verificar que GA4 reciba datos** de producción
3. **Verificar que Meta Pixel funcione** en producción
4. **Configurar conversiones en GA4** (ver `GA4_CONFIGURATION_GUIDE.md`)
5. **Crear audiencias en GA4** para remarketing
6. **Configurar conversión personalizada en Meta Ads Manager**

---

## 📊 Siguientes Pasos

Después de que todo esté funcionando:

1. ✅ Esperar 24-48h para que lleguen datos suficientes
2. ✅ Marcar conversiones en GA4 (`whatsapp_click` como principal)
3. ✅ Crear audiencias para remarketing
4. ✅ Configurar alertas de caída en conversiones
5. ✅ Crear informes personalizados en GA4
6. ✅ Configurar conversión personalizada en Meta Ads

Ver guía completa en: `GA4_CONFIGURATION_GUIDE.md`

---

## 🆘 Troubleshooting

### Problema: Los eventos no llegan a GA4

**Solución:**
1. Verifica que GTM Preview esté activo
2. Verifica que el Measurement ID sea correcto en GTM
3. Abre la consola del navegador y busca errores
4. Verifica que `window.dataLayer` exista: `console.log(window.dataLayer)`

### Problema: Meta Pixel no envía eventos

**Solución:**
1. Instala [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)
2. Verifica que el Pixel ID sea correcto
3. Verifica que el tag de Meta Pixel esté publicado en GTM
4. Verifica que no haya Ad Blockers activos

### Problema: Eventos duplicados

**Solución:**
1. Verifica que no tengas el código de GA4/Meta Pixel directamente en `index.html` Y en GTM
2. Usa solo GTM para gestionar todos los tags
3. Verifica que no dispares el mismo evento múltiples veces en el código

### Problema: Contaminación de parámetros

**Solución:**
- El hook `useAnalytics.ts` actualizado incluye limpieza automática del dataLayer
- Verifica que estés usando la versión actualizada del hook
- Verifica en DebugView que cada evento tenga solo sus propios parámetros

---

## 📞 Soporte

**Documentación adicional:**
- `GA4_CONFIGURATION_GUIDE.md` - Configuración completa de GA4
- `README.md` - Información general del proyecto

**Recursos útiles:**
- [Documentación GA4](https://support.google.com/analytics/answer/9304153)
- [Documentación GTM](https://support.google.com/tagmanager)
- [Meta Pixel Docs](https://developers.facebook.com/docs/meta-pixel)

---

**Última actualización:** Noviembre 2024
