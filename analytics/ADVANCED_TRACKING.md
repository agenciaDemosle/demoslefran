# 🚀 Advanced Tracking - Nivel PRO

**Fecha:** Noviembre 2024
**Estado:** Roadmap de implementación

---

## ✅ Ya Implementado (16 eventos)

- [x] Page views
- [x] Scroll depth
- [x] Engagement time
- [x] Section visibility
- [x] Hash navigation
- [x] WhatsApp clicks (conversión)
- [x] Quote completed (conversión)
- [x] Service card clicks
- [x] CTA clicks
- [x] Portfolio views
- [x] Project clicks
- [x] FAQ opened
- [x] Form start
- [x] Step completed
- [x] Phone clicks
- [x] Outbound clicks

---

## 🎯 Nivel PRO - Lo que falta

### 🔴 Crítico (Implementar YA)

#### 1. **Rage Clicks / Dead Clicks** 😡

**¿Qué es?**
Detecta cuando un usuario hace click repetidamente en algo que no responde (frustración).

**Por qué es crítico:**
- Identifica problemas de UX
- Detecta bugs que no sabías que existían
- Señala elementos confusos (parecen clickeables pero no lo son)

**Casos de uso:**
- Usuario hace 3+ clicks en botón que no responde
- Click en texto que parece link pero no lo es
- Click en imagen que parece botón

**Implementación:**
```javascript
event: 'rage_click',
element_type: 'button',
element_text: 'Cotizar',
element_selector: '.cta-button',
click_count: 5,
time_window: 1500 // ms
```

**Valor:** 🔥🔥🔥🔥🔥

---

#### 2. **Form Field Analytics** 📝

**¿Qué es?**
Trackea interacción con cada campo del formulario.

**Métricas:**
- Tiempo en cada campo
- Campos abandonados
- Campos con errores
- Orden de completación

**Casos de uso:**
- Campo "email" toma 30s → probablemente tienen que buscar su email
- Campo "teléfono" se abandona 50% → muy invasivo o no está claro
- Usuarios vuelven al campo anterior → confusión

**Implementación:**
```javascript
// Al hacer focus
event: 'form_field_focus',
field_name: 'email',
form_name: 'cotizador',
step_number: 1

// Al hacer blur
event: 'form_field_blur',
field_name: 'email',
time_spent: 15, // segundos
field_filled: true,
field_valid: true

// Al cambiar valor
event: 'form_field_change',
field_name: 'nombre',
field_length: 12,
has_error: false
```

**Valor:** 🔥🔥🔥🔥🔥

---

#### 3. **JavaScript Error Tracking** 🐛

**¿Qué es?**
Captura errores de JavaScript que rompen la experiencia.

**Por qué es crítico:**
- Detecta bugs en producción
- Saber qué navegadores tienen problemas
- Priorizar fixes

**Implementación:**
```javascript
window.addEventListener('error', (event) => {
  dataLayer.push({
    event: 'javascript_error',
    error_message: event.message,
    error_source: event.filename,
    error_line: event.lineno,
    error_column: event.colno,
    user_agent: navigator.userAgent
  });
});

// Promise rejections
window.addEventListener('unhandledrejection', (event) => {
  dataLayer.push({
    event: 'promise_rejection',
    error_reason: event.reason
  });
});
```

**Valor:** 🔥🔥🔥🔥🔥

---

#### 4. **Core Web Vitals (Performance)** ⚡

**¿Qué es?**
Métricas de rendimiento que Google usa para ranking.

**Métricas:**
- **LCP** (Largest Contentful Paint): Velocidad de carga percibida
- **FID** (First Input Delay): Interactividad
- **CLS** (Cumulative Layout Shift): Estabilidad visual
- **TTFB** (Time to First Byte): Respuesta del servidor
- **FCP** (First Contentful Paint): Primera renderización

**Implementación:**
```javascript
// Usando web-vitals library
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

getCLS((metric) => {
  dataLayer.push({
    event: 'web_vitals',
    metric_name: 'CLS',
    metric_value: metric.value,
    metric_rating: metric.rating, // good, needs-improvement, poor
  });
});

getLCP((metric) => {
  dataLayer.push({
    event: 'web_vitals',
    metric_name: 'LCP',
    metric_value: metric.value,
    metric_rating: metric.rating,
  });
});
```

**Valor:** 🔥🔥🔥🔥

---

#### 5. **Exit Intent Tracking** 👋

**¿Qué es?**
Detecta cuando el usuario está por abandonar el sitio.

**Por qué es crítico:**
- Ofrecer descuento/oferta de último momento
- Capturar email antes de que se vaya
- Entender por qué se va

**Implementación:**
```javascript
// Desktop: mouse sale por arriba
document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0) {
    dataLayer.push({
      event: 'exit_intent',
      page_type: 'cotizador',
      time_on_page: 45,
      scroll_percentage: 60
    });
  }
});

// Mobile: antes de cerrar tab
window.addEventListener('beforeunload', () => {
  dataLayer.push({
    event: 'page_exit',
    page_type: 'cotizador',
    time_on_page: 30
  });
});
```

**Valor:** 🔥🔥🔥🔥

---

### 🟡 Importante (Implementar Pronto)

#### 6. **UTM Parameter Tracking** 📊

**¿Qué es?**
Captura parámetros UTM de campañas (source, medium, campaign, etc.)

**Implementación:**
```javascript
const urlParams = new URLSearchParams(window.location.search);

dataLayer.push({
  utm_source: urlParams.get('utm_source'),
  utm_medium: urlParams.get('utm_medium'),
  utm_campaign: urlParams.get('utm_campaign'),
  utm_content: urlParams.get('utm_content'),
  utm_term: urlParams.get('utm_term'),
  gclid: urlParams.get('gclid'), // Google Ads
  fbclid: urlParams.get('fbclid'), // Facebook Ads
});
```

**Valor:** 🔥🔥🔥🔥

---

#### 7. **Session Recording IDs** 📹

**¿Qué es?**
Genera ID único de sesión para conectar todos los eventos.

**Por qué es importante:**
- Ver journey completo de un usuario
- Debugear problemas específicos
- Analizar patrones de comportamiento

**Implementación:**
```javascript
const sessionId = `${Date.now()}_${Math.random().toString(36)}`;
sessionStorage.setItem('session_id', sessionId);

// Agregar a TODOS los eventos
dataLayer.push({
  event: '...',
  session_id: sessionId,
  user_id: userIdIfLoggedIn, // si tienen login
});
```

**Valor:** 🔥🔥🔥🔥

---

#### 8. **Tab Visibility (Visibility API)** 👁️

**¿Qué es?**
Detecta cuando el usuario cambia de tab o minimiza el navegador.

**Por qué es importante:**
- Saber si engagement time es real
- Detectar si leen contenido o solo tienen tab abierto

**Implementación:**
```javascript
document.addEventListener('visibilitychange', () => {
  dataLayer.push({
    event: 'tab_visibility_change',
    is_visible: !document.hidden,
    time_spent_visible: calculateTime()
  });
});
```

**Valor:** 🔥🔥🔥

---

#### 9. **Copy/Paste Tracking** 📋

**¿Qué es?**
Detecta qué texto copian los usuarios.

**Por qué es importante:**
- Saber qué contenido es más valioso
- Identificar información que buscan compartir
- Detectar si copian precios (comparando)

**Implementación:**
```javascript
document.addEventListener('copy', () => {
  const selection = window.getSelection().toString();
  dataLayer.push({
    event: 'text_copied',
    copied_text: selection.substring(0, 100), // Max 100 chars
    copied_length: selection.length,
    page_section: getCurrentSection()
  });
});
```

**Valor:** 🔥🔥🔥

---

#### 10. **Network Quality Detection** 📶

**¿Qué es?**
Detecta velocidad de conexión del usuario.

**Por qué es importante:**
- Adaptar contenido para conexiones lentas
- Saber si problemas de conversión son por velocidad
- Cargar imágenes más pequeñas si es necesario

**Implementación:**
```javascript
if ('connection' in navigator) {
  const connection = navigator.connection;
  dataLayer.push({
    event: 'network_info',
    effective_type: connection.effectiveType, // 4g, 3g, 2g, slow-2g
    downlink: connection.downlink, // Mbps
    rtt: connection.rtt, // Round trip time
    save_data: connection.saveData
  });
}
```

**Valor:** 🔥🔥

---

### 🟢 Nice to Have (Futuro)

#### 11. **Image Lazy Loading Tracking**

Track cuando se cargan imágenes lazy-loaded.

**Valor:** 🔥

---

#### 12. **Print Tracking**

Detecta cuando imprimen la página.

**Valor:** 🔥

---

#### 13. **Device Orientation (Mobile)**

Portrait vs Landscape.

**Valor:** 🔥

---

#### 14. **A/B Test Framework**

Sistema para correr A/B tests.

**Valor:** 🔥🔥🔥

---

#### 15. **Video Tracking**

Si agregan videos: play, pause, % completado.

**Valor:** 🔥🔥

---

## 🎯 Priorización Recomendada

### Fase 1: Implementar AHORA (Esta semana)

1. **Rage Clicks** 🔥🔥🔥🔥🔥
2. **Form Field Analytics** 🔥🔥🔥🔥🔥
3. **JavaScript Errors** 🔥🔥🔥🔥🔥

**Impacto:** Detectar y arreglar bugs críticos + mejorar conversión del cotizador

---

### Fase 2: Implementar PRONTO (Próximas 2 semanas)

4. **Core Web Vitals** 🔥🔥🔥🔥
5. **Exit Intent** 🔥🔥🔥🔥
6. **UTM Parameters** 🔥🔥🔥🔥
7. **Session Recording IDs** 🔥🔥🔥🔥

**Impacto:** Mejorar SEO + reducir abandonos + mejor atribución de campañas

---

### Fase 3: Futuro (Próximo mes)

8. **Tab Visibility** 🔥🔥🔥
9. **Copy/Paste** 🔥🔥🔥
10. **Network Quality** 🔥🔥

**Impacto:** Insights más profundos sobre comportamiento

---

## 📊 Comparación: Tracking Actual vs PRO

| Métrica | Actual | Con PRO | Beneficio |
|---------|--------|---------|-----------|
| **Detección de bugs** | ❌ Manual | ✅ Automático | Arreglar bugs 10x más rápido |
| **Optimización formularios** | ❌ A ciegas | ✅ Data-driven | +30% conversión |
| **Performance** | ❌ No medido | ✅ Core Web Vitals | Mejor SEO + velocidad |
| **Abandonos** | ❌ Solo vemos que se van | ✅ Sabemos por qué | Reducir 20% abandonos |
| **Atribución campañas** | ⚠️ Básico | ✅ Completo | ROI claro de cada campaña |
| **Frustración usuarios** | ❌ No detectada | ✅ Rage clicks | Mejorar UX |

---

## 💰 ROI Estimado

### Inversión:
- **Tiempo desarrollo:** 2-3 días para Fase 1
- **Costo:** $0 (todo gratis)

### Retorno:
- **+30% conversión cotizador** (form field analytics)
- **-50% errores JS** (error tracking)
- **-20% abandonos** (exit intent)
- **+15% velocidad** (Core Web Vitals)

**ROI conservador:**
- Si conviertes 10 clientes/mes a $500 promedio
- Mejora 30% conversión = 3 clientes más = $1,500/mes extra
- **ROI anual:** $18,000

---

## 🛠️ Implementación Técnica

### Opción 1: Agregar al hook actual

Crear nuevas funciones en `useAnalytics.ts`:

```typescript
// Rage clicks
export function useRageClickTracking() { /* ... */ }

// Form analytics
export function useFormFieldTracking(formRef) { /* ... */ }

// Error tracking
export function useErrorTracking() { /* ... */ }

// Core Web Vitals
export function useWebVitals() { /* ... */ }

// Exit intent
export function useExitIntent() { /* ... */ }
```

### Opción 2: Crear hook separado

```typescript
// useAdvancedAnalytics.ts
export function useAdvancedAnalytics() {
  useRageClickTracking();
  useFormFieldTracking();
  useErrorTracking();
  useWebVitals();
  useExitIntent();
  // ...
}
```

---

## 📚 Recursos

### Libraries útiles:

1. **web-vitals** - Core Web Vitals
   ```bash
   npm install web-vitals
   ```

2. **rrweb** - Session recording (si quieren grabar sesiones)
   ```bash
   npm install rrweb
   ```

3. **hotjar / smartlook** - Herramientas de heatmaps (pago)

---

## ✅ Checklist Implementación Fase 1

- [ ] Instalar dependencies (`web-vitals`)
- [ ] Crear `useRageClickTracking()`
- [ ] Crear `useFormFieldTracking()`
- [ ] Crear `useErrorTracking()`
- [ ] Agregar variables a GTM
- [ ] Crear tags en GTM
- [ ] Testing
- [ ] Deploy

---

## 🎓 Ejemplos de Insights que obtendrás

### Con Rage Clicks:
```
❌ "Botón 'Cotizar' recibe 50 rage clicks/día"
→ Descubres que el botón a veces no funciona en Safari
→ Arreglas el bug
→ Conversión +15%
```

### Con Form Field Analytics:
```
❌ "Campo 'teléfono' se abandona 60% del tiempo"
→ Lo haces opcional o lo mueves al final
→ Completación formulario +40%
```

### Con Exit Intent:
```
❌ "70% abandonan en step 2 del cotizador"
→ Agregas exit intent popup con descuento
→ Recuperas 20% de abandonos
```

### Con Core Web Vitals:
```
❌ "LCP = 4.5s (poor)"
→ Optimizas imágenes y lazy loading
→ LCP = 2.1s (good)
→ SEO ranking mejora
```

---

## 🚀 Siguiente Paso

¿Quieres que implemente **Fase 1** (Rage Clicks + Form Analytics + Error Tracking) ahora?

**Tiempo estimado:** 1-2 horas
**Impacto:** 🔥🔥🔥🔥🔥

---

**Última actualización:** Noviembre 2024
