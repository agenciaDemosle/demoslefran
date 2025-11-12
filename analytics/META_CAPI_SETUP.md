# Meta Conversions API (CAPI) - Demosle

**Fecha:** Noviembre 2024
**Meta Pixel ID:** 757787516978508

---

## 📋 ¿Qué es Meta CAPI?

Meta Conversions API (CAPI) envía eventos de conversión **directamente desde tu servidor** a Meta, complementando el Pixel que trackea desde el navegador.

### ⚙️ Ventajas de usar CAPI:

1. **🛡️ Evita Ad Blockers** - Los eventos se envían desde el servidor
2. **📊 Datos más confiables** - No depende de cookies ni JavaScript del navegador
3. **🎯 Mejor atribución** - Combina datos del navegador + servidor
4. **📈 Mejor rendimiento de campañas** - Meta tiene más datos para optimizar
5. **🔒 Datos sensibles** - Puedes enviar email/teléfono hasheados de forma segura

---

## 🏗️ Arquitectura: Pixel + CAPI

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│     Navegador (demosle.com)         │
│  ┌─────────────────────────────┐   │
│  │  Meta Pixel (Browser-side)  │───┼──► Meta (Evento 1)
│  └─────────────────────────────┘   │
│                                     │
│  Usuario hace conversión            │
│  (completa cotizador)               │
│                                     │
│  dataLayer.push({ event, data })   │
│                                     │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  Backend/Serverless Function        │
│  ┌─────────────────────────────┐   │
│  │   Meta CAPI (Server-side)   │───┼──► Meta (Evento 2)
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Meta recibe AMBOS eventos y los deduplica automáticamente
```

---

## 🚀 Opciones de Implementación

### Opción 1: GTM Server-Side Container (Recomendado)

**Pros:**
- ✅ Configuración visual en GTM
- ✅ No necesitas backend propio
- ✅ Deduplicación automática
- ✅ Fácil de mantener

**Contras:**
- 💰 Costo de Google Cloud (aprox $10-50/mes)

**Pasos:**
1. Crear GTM Server Container
2. Deployar en Google Cloud Run
3. Configurar Meta Conversions API tag
4. Enviar eventos desde GTM Web → GTM Server

### Opción 2: API Directa (Backend propio)

**Pros:**
- ✅ Control total
- ✅ No depende de GTM Server
- ✅ Integra con tu backend existente

**Contras:**
- 🛠️ Requiere desarrollo backend
- 🔧 Mantenimiento manual

**Pasos:**
1. Crear endpoint en tu backend
2. Implementar Meta CAPI SDK
3. Enviar eventos desde frontend → backend → Meta

### Opción 3: Webhooks de Formulario

**Pros:**
- ✅ Simple para formularios
- ✅ No requiere mucho código

**Contras:**
- ⚠️ Solo funciona para eventos de formulario
- ⚠️ No cubre todos los eventos

---

## 📝 Implementación con GTM Server-Side (Opción 1)

### Paso 1: Crear GTM Server Container

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Click en tu workspace
3. **Admin** → **Container Settings**
4. Click **"Create Container"**
5. Selecciona **"Server"** como tipo
6. Nombre: `Demosle Server`
7. Click **"Create"**

### Paso 2: Deploy en Google Cloud Run

**Opción A: Deployment automático**

1. En GTM Server Container → **Admin** → **Container Settings**
2. Click **"Manually provision tagging server"**
3. Sigue las instrucciones para deploy en Google Cloud Run

**Opción B: Docker manual**

```bash
# 1. Instalar Google Cloud SDK
# https://cloud.google.com/sdk/docs/install

# 2. Autenticarse
gcloud auth login

# 3. Crear proyecto (si no existe)
gcloud projects create demosle-gtm-server

# 4. Deploy GTM Server
gcloud run deploy gtm-server \
  --image=gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable \
  --platform=managed \
  --region=us-central1 \
  --allow-unauthenticated
```

### Paso 3: Configurar dominio personalizado (Opcional pero recomendado)

1. En Google Cloud Console → Cloud Run
2. Selecciona tu servicio `gtm-server`
3. **"Manage Custom Domains"**
4. Agrega: `gtm.demosle.com`
5. Configura DNS:
   ```
   Type: CNAME
   Name: gtm
   Value: ghs.googlehosted.com
   ```

### Paso 4: Configurar Meta CAPI Tag en GTM Server

**En GTM Server Container:**

1. **Variables** → **New**
   - Nombre: `Meta Pixel ID`
   - Tipo: **Constant**
   - Value: `757787516978508`

2. **Variables** → **New**
   - Nombre: `Meta Access Token`
   - Tipo: **Constant**
   - Value: `[TU_ACCESS_TOKEN]` (ver cómo obtenerlo abajo)

3. **Tags** → **New**
   - Nombre: `Meta CAPI - All Events`
   - Tipo: **Meta Conversions API**
   - Configuration:
     - Pixel ID: `{{Meta Pixel ID}}`
     - API Access Token: `{{Meta Access Token}}`
     - Test Event Code: (dejar vacío en producción)
   - Triggering: `All Events`

4. **Publish** el contenedor

### Paso 5: Conectar GTM Web con GTM Server

**En GTM Web Container:**

1. **Tags** → Abre tag `GA4 Config`
2. Agrega **Server Container URL**:
   - Si usas dominio personalizado: `https://gtm.demosle.com`
   - Si usas Cloud Run directo: `https://gtm-server-xxx.run.app`

3. **Tags** → **New**
   - Nombre: `Server - Forward All Events`
   - Tipo: **Google Tag**
   - Tag ID: (dejar vacío)
   - Configuration:
     - Server Container URL: `https://gtm.demosle.com`
   - Triggering: `All Events`

4. **Publish**

---

## 🔑 Obtener Meta Access Token

### Paso 1: Crear App de Facebook

1. Ve a [Meta for Developers](https://developers.facebook.com/)
2. **My Apps** → **Create App**
3. Tipo: **Business**
4. Nombre: `Demosle CAPI`
5. Business Account: (selecciona tu cuenta)
6. Click **Create App**

### Paso 2: Agregar producto Conversions API

1. En tu app → **Add Product**
2. Busca **"Conversions API"**
3. Click **Set Up**

### Paso 3: Generar Access Token

1. **Settings** → **Basic**
2. Copia **App ID** y **App Secret**
3. Ve a: `https://business.facebook.com/events_manager`
4. Selecciona tu Pixel (`757787516978508`)
5. **Settings** → **Conversions API**
6. Click **"Generate Access Token"**
7. Selecciona tu app `Demosle CAPI`
8. Click **"Generate Token"**
9. **GUARDA EL TOKEN** (solo se muestra una vez)

**Formato del token:**
```
EAAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Paso 4: Configurar en GTM Server

Agrega el token en la variable `Meta Access Token` de GTM Server.

---

## 📊 Eventos a Enviar via CAPI

### Eventos Críticos (Conversiones)

```javascript
// 1. quote_completed (Lead)
{
  event_name: 'Lead',
  event_source_url: 'https://demosle.com',
  user_data: {
    em: hash(email),        // SHA256
    ph: hash(phone),        // SHA256
    fn: hash(firstName),    // SHA256
    ln: hash(lastName),     // SHA256
  },
  custom_data: {
    value: 299990,
    currency: 'CLP',
    content_name: 'cotizador',
    content_category: 'web-simple,google-ads',
    num_items: 2
  },
  event_id: 'unique_id_123' // Para deduplicación
}

// 2. whatsapp_click (Contact)
{
  event_name: 'Contact',
  event_source_url: 'https://demosle.com',
  user_data: { /* ... */ },
  custom_data: {
    content_name: 'service_card',
    content_category: 'sitios_web'
  },
  event_id: 'unique_id_456'
}
```

### Deduplicación de Eventos

**⚠️ IMPORTANTE:** Para evitar eventos duplicados entre Pixel y CAPI:

1. Cada evento debe tener un `event_id` único
2. El Pixel y CAPI deben enviar el MISMO `event_id`
3. Meta automáticamente deduplica eventos con mismo `event_id` que llegan en 48h

**Implementación:**

```javascript
// En frontend (cuando se dispara el evento)
const eventId = `${Date.now()}_${Math.random().toString(36)}`;

// Pixel (navegador)
fbq('track', 'Lead', {
  /* data */
}, {
  eventID: eventId
});

// CAPI (servidor)
dataLayer.push({
  event: 'quote_completed',
  event_id: eventId,  // ← Mismo ID
  /* other data */
});
```

---

## 🧪 Testing

### Paso 1: Usar Test Event Code

1. Ve a [Meta Events Manager](https://business.facebook.com/events_manager)
2. Selecciona tu Pixel
3. **Test Events**
4. Click **"Generate Test Event Code"**
5. Copia el código (ej: `TEST12345`)
6. Agrégalo en GTM Server tag Meta CAPI:
   - Test Event Code: `TEST12345`

### Paso 2: Enviar eventos de prueba

1. Navega por tu sitio
2. Completa el cotizador
3. Ve a Meta Events Manager → Test Events
4. Deberías ver eventos llegando con badge **"Test"**

### Paso 3: Verificar deduplicación

Si ves eventos duplicados:
- ❌ Pixel envió evento
- ❌ CAPI envió evento
- ✅ Meta solo cuenta 1 evento

Si NO hay deduplicación:
- ⚠️ Verifica que `event_id` sea el mismo
- ⚠️ Verifica que ambos eventos lleguen en < 48h

---

## 📈 Monitoreo

### Métricas clave en Meta Events Manager

1. **Event Match Quality**
   - Meta muestra qué tan bien puede hacer match de usuarios
   - Objetivo: > 6.0/10

2. **Server Events Received**
   - Cantidad de eventos recibidos via CAPI

3. **Browser Events Received**
   - Cantidad de eventos recibidos via Pixel

4. **Deduplicated Events**
   - Eventos que llegaron por ambos canales y fueron deduplicados

### Alertas recomendadas

```
- Si Event Match Quality < 5.0 → Revisar user_data
- Si Server Events = 0 → GTM Server caído o mal configurado
- Si Deduplication Rate < 50% → event_id no está funcionando
```

---

## 💰 Costos Estimados

### GTM Server-Side en Google Cloud Run

| Tráfico mensual | Requests | Costo aprox |
|-----------------|----------|-------------|
| 10k visitantes | ~100k requests | $10-15 |
| 50k visitantes | ~500k requests | $30-50 |
| 100k visitantes | ~1M requests | $60-100 |

**Free tier de Google Cloud:**
- 2 millones de requests/mes gratis
- Probablemente cubra tus primeros meses

---

## 🔒 Seguridad

### Datos sensibles (PII)

**⚠️ NUNCA envíes datos personales en texto plano**

Siempre hashea con SHA256:

```javascript
// Backend
const crypto = require('crypto');

function hashPII(data) {
  return crypto
    .createHash('sha256')
    .update(data.toLowerCase().trim())
    .digest('hex');
}

// Ejemplo
const hashedEmail = hashPII('usuario@email.com');
// → 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
```

### Datos a hashear:

- ✅ Email (`em`)
- ✅ Teléfono (`ph`)
- ✅ Nombre (`fn`)
- ✅ Apellido (`ln`)
- ✅ Ciudad (`ct`)
- ✅ Estado/Región (`st`)
- ✅ Código postal (`zp`)
- ✅ País (`country`)

---

## 📞 Recursos Útiles

- [Meta CAPI Docs](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [GTM Server-Side Docs](https://developers.google.com/tag-platform/tag-manager/server-side)
- [Event Deduplication Guide](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)
- [PII Hashing Guide](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters)

---

## ✅ Checklist de Implementación

### Setup Inicial

- [ ] Crear app de Facebook
- [ ] Generar Access Token
- [ ] Crear GTM Server Container
- [ ] Deploy en Google Cloud Run
- [ ] Configurar dominio personalizado (opcional)

### Configuración GTM

- [ ] Agregar Meta CAPI tag en GTM Server
- [ ] Configurar forward de eventos Web → Server
- [ ] Agregar event_id a eventos del Pixel
- [ ] Agregar event_id al dataLayer

### Testing

- [ ] Generar Test Event Code
- [ ] Enviar eventos de prueba
- [ ] Verificar eventos en Meta Events Manager
- [ ] Verificar deduplicación funciona
- [ ] Verificar Event Match Quality > 6.0

### Producción

- [ ] Quitar Test Event Code
- [ ] Monitorear Event Match Quality
- [ ] Configurar alertas en Meta
- [ ] Revisar costos de Cloud Run mensualmente

---

**Última actualización:** Noviembre 2024
