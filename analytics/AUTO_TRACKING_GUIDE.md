# 🤖 Auto-Tracking Guide - Demosle

**Última actualización:** Noviembre 2024

---

## 🎯 ¿Qué se trackea automáticamente?

Con solo llamar `useAnalytics()` en tu componente, se trackea automáticamente:

### ✅ 1. Page Views
- Cada vez que cambias de página o sección
- Detecta automáticamente el hash (#servicios, #portafolio, etc.)
- Parámetros: `page_path`, `page_type`, `section_name`

### ✅ 2. Scroll Depth
- Cuando llegas a: 25%, 50%, 75%, 100%
- Se trackea solo una vez por cada threshold
- Parámetros: `scroll_depth`, `scroll_percentage`

### ✅ 3. Engagement Time
- A los: 10s, 30s, 1min, 2min, 5min
- Mide tiempo real en la página
- Parámetro: `engagement_time`

### ✅ 4. Section Visibility (NUEVO)
- Detecta cuando ves 50% de una sección
- Auto-detecta TODAS las secciones con ID
- Parámetros: `section_name`, `visibility_percentage`

### ✅ 5. Hash Changes (NUEVO)
- Trackea clicks en links de navegación (#servicios, etc.)
- Evento separado: `hash_change`
- Parámetros: `section_name`, `page_type`

---

## 🚀 Cómo usar (Super Simple)

### Opción 1: Auto-tracking completo (Recomendado)

Solo llama `useAnalytics()` en tu componente principal:

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

export function Home() {
  // ✅ Esto auto-trackea TODO:
  // - Page views
  // - Scroll depth (25%, 50%, 75%, 100%)
  // - Engagement time (10s, 30s, 1min, 2min, 5min)
  // - Section visibility (hero, servicios, portafolio, cotizador, faq)
  // - Hash changes (#servicios → #portafolio)
  useAnalytics();

  return (
    <>
      <section id="hero">Hero</section>
      <section id="servicios">Servicios</section>
      <section id="portafolio">Portafolio</section>
      <section id="cotizador">Cotizador</section>
      <section id="faq">FAQ</section>
    </>
  );
}
```

**¡Eso es todo!** No necesitas:
- ❌ Crear refs manualmente
- ❌ Pasar secciones como props
- ❌ Configurar Intersection Observer manualmente
- ❌ Agregar event listeners a los links

---

## 🔍 Cómo funciona internamente

### Auto-detección de secciones

El hook busca automáticamente todas las secciones con ID:

```tsx
// Auto-detecta secciones con estos selectores:
const selectors = [
  'section[id]',           // Todos los <section> con id
  'div[id="hero"]',        // Hero section
  'div[id="servicios"]',   // Servicios
  'div[id="nosotros"]',    // Nosotros
  'div[id="portafolio"]',  // Portafolio
  'div[id="cotizador"]',   // Cotizador
  'div[id="faq"]',         // FAQ
];
```

### Intersection Observer

Usa Intersection Observer para detectar cuando una sección es visible:

```tsx
const observerOptions = {
  threshold: [0.5], // Trackea cuando 50% de la sección es visible
  rootMargin: '0px',
};
```

### Hash Change Listener

Escucha cambios en el hash de la URL:

```tsx
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  // Trackea: hash_change
});
```

---

## 📊 Eventos que se disparan

### Flujo completo de un usuario:

```
Usuario llega al sitio
    ↓
📊 page_view (page_type: 'home')
    ↓
👁️ section_view (section_name: 'hero', visibility_percentage: 100)
    ↓
📜 scroll_depth (scroll_percentage: 25)
    ↓
⏱️ engagement_time (engagement_time: 10)
    ↓
Usuario hace click en "Servicios" del navbar
    ↓
🔗 hash_change (section_name: 'servicios')
📊 page_view (page_type: 'servicios', page_path: '/#servicios')
    ↓
👁️ section_view (section_name: 'servicios', visibility_percentage: 50)
    ↓
📜 scroll_depth (scroll_percentage: 50)
    ↓
⏱️ engagement_time (engagement_time: 30)
    ↓
Usuario hace scroll hasta portafolio
    ↓
👁️ section_view (section_name: 'portafolio', visibility_percentage: 50)
    ↓
📜 scroll_depth (scroll_percentage: 75)
    ↓
⏱️ engagement_time (engagement_time: 60)
```

---

## 🎨 Logs en Consola (Development)

Durante el desarrollo, verás logs en consola con emojis:

```
📊 Auto-tracking 6 sections: hero, servicios, nosotros, portafolio, cotizador, faq
📊 Page View: / | Type: home
👁️ Section View: hero | 100%
📜 Scroll Depth: 25%
⏱️ Engagement Time: 10s
🔗 Hash Change: servicios
📊 Page View: /#servicios | Type: servicios
👁️ Section View: servicios | 50%
📜 Scroll Depth: 50%
⏱️ Engagement Time: 30s
```

---

## 📋 Variables en DataLayer

Todas estas variables se envían automáticamente al dataLayer:

### Variables de Page View

```javascript
{
  event: 'page_view',
  page_path: '/#servicios',
  page_title: 'Demosle | Creamos sistemas que venden',
  page_type: 'servicios',
  section_name: 'servicios'
}
```

### Variables de Section View

```javascript
{
  event: 'section_view',
  section_name: 'portafolio',
  section: 'portafolio',
  visibility_percentage: 50
}
```

### Variables de Hash Change

```javascript
{
  event: 'hash_change',
  section_name: 'cotizador',
  page_type: 'cotizador'
}
```

### Variables de Scroll Depth

```javascript
{
  event: 'scroll_depth',
  scroll_percentage: 75,
  scroll_depth: '75%'
}
```

### Variables de Engagement Time

```javascript
{
  event: 'engagement_time',
  engagement_time: 60
}
```

---

## 🔧 Configuración en GTM

### Variables a crear en GTM

Ya están incluidas en `GTM_VARIABLES_SETUP.md`, pero aquí un resumen:

**Para Section Tracking:**
- `DL - Section Name` → `section_name`
- `DL - Visibility Percentage` → `visibility_percentage`

**Para Scroll Tracking:**
- `DL - Scroll Depth` → `scroll_depth`
- `DL - Scroll Percentage` → `scroll_percentage`

**Para Engagement:**
- `DL - Engagement Time` → `engagement_time`

**Para Page Type:**
- `DL - Page Type` → `page_type`

### Tags a crear en GTM

**Tag: GA4 - Section View**
- Event Name: `section_view`
- Parameters:
  - `section_name`: `{{DL - Section Name}}`
  - `visibility_percentage`: `{{DL - Visibility Percentage}}`
- Trigger: Custom Event `section_view`

**Tag: GA4 - Scroll Depth**
- Event Name: `scroll_depth`
- Parameters:
  - `scroll_percentage`: `{{DL - Scroll Percentage}}`
- Trigger: Custom Event `scroll_depth`

**Tag: GA4 - Hash Change**
- Event Name: `hash_change`
- Parameters:
  - `section_name`: `{{DL - Section Name}}`
- Trigger: Custom Event `hash_change`

**Tag: GA4 - Engagement Time**
- Event Name: `engagement_time`
- Parameters:
  - `engagement_time`: `{{DL - Engagement Time}}`
- Trigger: Custom Event `engagement_time`

---

## 📈 Informes Recomendados en GA4

### 1. "Engagement por Sección"

```
Dimensiones:
- section_name

Métricas:
- Recuento de section_view
- Promedio de visibility_percentage
- Usuarios únicos

Segmento:
- visibility_percentage >= 50
```

### 2. "Profundidad de Scroll"

```
Dimensiones:
- scroll_percentage

Métricas:
- Usuarios que llegaron a cada nivel
- % del total

Visualización:
- Embudo de scroll (100% → 75% → 50% → 25%)
```

### 3. "Engagement Time Distribution"

```
Dimensiones:
- engagement_time

Métricas:
- Usuarios por tiempo de engagement
- Tasa de conversión por tiempo

Segmentos:
- 10s: Visitantes rápidos
- 30s: Engagement bajo
- 60s+: Alto engagement
```

### 4. "Navegación por Hash"

```
Dimensiones:
- section_name (de hash_change)

Métricas:
- Recuento de navegaciones
- Secuencia más común

Análisis:
- ¿Qué secciones visita la gente?
- ¿En qué orden navegan?
```

---

## 🎯 Optimizaciones basadas en datos

### Si scroll_depth promedio < 50%

**Problema:** La gente no ve el contenido completo

**Soluciones:**
- Mejorar hero para captar atención
- Hacer contenido más escaneable
- Agregar CTAs más arriba
- Reducir contenido innecesario

### Si section_view de 'cotizador' es bajo

**Problema:** La gente no llega al cotizador

**Soluciones:**
- Agregar CTAs más visibles
- Mejorar valor percibido antes del cotizador
- Reducir fricción para llegar al cotizador

### Si engagement_time promedio < 30s

**Problema:** Visitantes de baja calidad o contenido no relevante

**Soluciones:**
- Revisar fuentes de tráfico
- Mejorar relevancia del contenido
- Optimizar primera impresión

### Si hash_change muestra abandono en cierta sección

**Problema:** Hay una sección que hace que la gente se vaya

**Soluciones:**
- Revisar UX de esa sección
- A/B test de diseño
- Simplificar contenido

---

## ✅ Checklist

### Implementación

- [x] Hook `useAnalytics()` actualizado con auto-tracking
- [x] Auto-detección de secciones con ID
- [x] Intersection Observer configurado (50% threshold)
- [x] Hash change listener configurado
- [x] Limpieza de dataLayer automática

### Testing

- [ ] Verificar logs en consola (development)
- [ ] Verificar que detecte todas las secciones
- [ ] Verificar eventos en GTM Preview
- [ ] Verificar eventos en GA4 DebugView

### GTM

- [ ] Crear variables en GTM (ver `GTM_VARIABLES_SETUP.md`)
- [ ] Crear tags para cada evento
- [ ] Configurar triggers
- [ ] Publicar cambios

### GA4

- [ ] Crear informes personalizados
- [ ] Configurar segmentos de audiencia
- [ ] Analizar datos y optimizar

---

## 🆘 Troubleshooting

### Las secciones no se detectan

**Verifica:**
1. Que las secciones tengan ID: `<section id="servicios">`
2. Que el ID esté en la lista de selectores en `useAutoSectionVisibility()`
3. Mira la consola: debe decir "Auto-tracking X sections: ..."

### Los eventos no llegan a GTM

**Verifica:**
1. Que GTM esté instalado en `index.html`
2. Que las variables estén creadas en GTM
3. Que los triggers estén configurados
4. Usa GTM Preview para debug

### Eventos duplicados

**Posibles causas:**
1. `useAnalytics()` llamado en múltiples componentes
2. Solución: Llamar solo en Layout o componente principal

### Section view se dispara múltiples veces

**Es normal:** Si haces scroll hacia arriba y vuelves a la sección

**Si quieres evitarlo:** Ya está implementado con `tracked` Set

---

**Última actualización:** Noviembre 2024
**Estado:** ✅ Listo para usar
