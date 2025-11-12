# 📊 Service Selection Tracking - Cotizador Demosle

**Fecha:** Noviembre 2024
**Estado:** ✅ Listo para implementar

---

## 🎯 ¿Qué trackeamos?

### Eventos nuevos (2):

**1. `service_selection`** - Cada vez que seleccionan/deseleccionan un servicio

**2. `service_combination`** - Cuando terminan de seleccionar (resumen final)

---

## 📋 Evento: service_selection

### Cuándo se dispara:

Cada vez que el usuario hace click en un servicio del cotizador (seleccionar O deseleccionar).

### Parámetros:

```javascript
{
  event: 'service_selection',
  service_id: 'web-simple',                    // ID del servicio
  service_name: 'Página Web Profesional',      // Nombre legible
  selection_action: 'selected',                // 'selected' o 'deselected'
  services_selected: 'web-simple,google-ads',  // TODOS los servicios actuales
  services_count: 2,                           // Cantidad total seleccionada
  form_name: 'cotizador'
}
```

### Ejemplo de uso:

```tsx
import { trackServiceSelection } from '@/hooks/useAnalytics';

// Cuando usuario hace click en checkbox
const handleServiceToggle = (serviceId: string, serviceName: string) => {
  const newSelected = formData.services.includes(serviceId)
    ? formData.services.filter(s => s !== serviceId)  // Deseleccionar
    : [...formData.services, serviceId];              // Seleccionar

  trackServiceSelection({
    service_id: serviceId,
    service_name: serviceName,
    action: formData.services.includes(serviceId) ? 'deselected' : 'selected',
    current_services: newSelected,
    total_services_selected: newSelected.length,
  });

  setFormData({ ...formData, services: newSelected });
};
```

### Logs en consola:

```
✅ Service selected: Página Web Profesional | Total: 1
✅ Service selected: Google Ads | Total: 2
❌ Service deselected: Meta Ads | Total: 1
```

---

## 📋 Evento: service_combination

### Cuándo se dispara:

Cuando el usuario termina de seleccionar servicios (al pasar al siguiente step o enviar formulario).

### Parámetros:

```javascript
{
  event: 'service_combination',
  services_selected: 'web-simple,google-ads,meta-ads,social-media,automatizacion',
  services_count: 5,
  has_web: true,
  has_ads: true,
  has_social: true,
  has_automation: true,
  has_funnel_completo: true,
  combination_type: 'funnel_completo'  // Ver tipos abajo
}
```

### Tipos de combinación:

| combination_type | Descripción | Servicios |
|------------------|-------------|-----------|
| `funnel_completo` | El combo completo | Web + Ads + Social + Automation (5 servicios) |
| `web_ads` | Web + publicidad | Web + Google/Meta Ads |
| `web_social` | Web + redes | Web + Social Media |
| `web_only` | Solo web | Cualquier opción de web sola |
| `ads_social` | Publicidad + redes | Ads + Social sin web |
| `ads_only` | Solo publicidad | Solo Google o Meta Ads |
| `social_only` | Solo redes | Solo Social Media |
| `automation_only` | Solo automatización | Solo Automation |
| `other` | Otras combinaciones | Otras |

### Ejemplo de uso:

```tsx
import { trackServiceCombination } from '@/hooks/useAnalytics';

// Al completar Step 2 del cotizador
const handleNextStep = () => {
  const hasWeb = formData.services.some(s => s.includes('web'));
  const hasAds = formData.services.some(s => s.includes('-ads'));
  const hasSocial = formData.services.includes('social-media');
  const hasAutomation = formData.services.includes('automatizacion');
  const hasFunnelCompleto = formData.services.length === 5;

  trackServiceCombination({
    services_selected: formData.services,
    services_count: formData.services.length,
    has_web: hasWeb,
    has_ads: hasAds,
    has_social: hasSocial,
    has_automation: hasAutomation,
    has_funnel_completo: hasFunnelCompleto,
  });

  setStep(3);
};
```

### Logs en consola:

```
🎯 Service Combination: {
  services: ['web-simple', 'google-ads', 'meta-ads', 'social-media', 'automatizacion'],
  type: 'funnel_completo',
  funnel: '✅ Completo'
}
```

---

## 📊 Insights que obtendrás en GA4

### 1. Servicios más populares

**Informe:** Exploration → Free Form

**Dimensiones:**
- `service_id`
- `service_name`

**Métricas:**
- Count of `service_selection` (action = 'selected')
- Users

**Segmento:**
- `selection_action = 'selected'`

**Resultado:**
```
Servicio                          | Selecciones | Usuarios
----------------------------------+-------------+---------
Página Web Profesional            | 450         | 350
Google Ads                        | 320         | 280
Meta Ads                          | 290         | 250
Gestión Redes Sociales            | 180         | 160
Automatización                    | 120         | 100
```

**Acción:**
- Servicios más populares → destacar en marketing
- Servicios menos populares → revisar precio/descripción

---

### 2. Combinaciones de servicios más comunes

**Informe:** Exploration → Free Form

**Dimensiones:**
- `combination_type`
- `services_selected`

**Métricas:**
- Count of `service_combination`
- Users
- Conversion rate (% que completan quote)

**Resultado:**
```
Combinación        | Cotizaciones | Usuarios | Conv. Rate
-------------------+--------------+----------+-----------
funnel_completo    | 45           | 42       | 85%
web_ads            | 120          | 110      | 70%
web_only           | 180          | 165      | 55%
ads_only           | 60           | 55       | 40%
```

**Insights:**
- Funnel completo tiene mejor conversión (85%)
- Web sola tiene más volumen pero menos conversión
- Oportunidad: incentivar combos con mejor ROI

---

### 3. Secuencia de selección

**Informe:** Path Analysis

**Dimensiones:**
- Starting point: `service_selection` (first)
- Path: sequence of services selected

**Resultado:**
```
80% empiezan seleccionando Web
   ↓
   50% agregan Google Ads
   ↓
   30% agregan Meta Ads
   ↓
   20% agregan Social Media
   ↓
   10% completan funnel con Automatización
```

**Insights:**
- Mayoría empieza con web
- Muchos abandonan después de web sola
- Oportunidad: sugerir Google Ads cuando seleccionan web

---

### 4. Servicios que se deseleccionan más

**Informe:** Exploration → Free Form

**Dimensiones:**
- `service_id`
- `selection_action`

**Métricas:**
- Count where `selection_action = 'deselected'`

**Resultado:**
```
Servicio                | Deselecciones | % del total
------------------------+---------------+------------
Software a Medida       | 150           | 35%
Automatización          | 90            | 20%
eCommerce               | 70            | 15%
```

**Insights:**
- Software a Medida se deselecciona más → precio muy alto?
- Automatización confusa → mejorar descripción
- Oportunidad: A/B test de precios

---

### 5. Conversión por combinación

**Informe:** Funnel Analysis

**Steps:**
1. `service_combination`
2. `quote_completed`
3. `whatsapp_click`

**Segmentos por `combination_type`**

**Resultado:**
```
Tipo              | Cotizaciones | WhatsApp Click | Conv. Rate
------------------+--------------+----------------+-----------
funnel_completo   | 45           | 38             | 84%
web_ads           | 120          | 84             | 70%
web_only          | 180          | 90             | 50%
ads_only          | 60           | 24             | 40%
```

**Insights:**
- Funnel completo convierte mejor (84%)
- Web sola tiene peor conversión (50%)
- **Estrategia:** Ofrecer descuento en funnel completo más agresivamente

---

### 6. Tiempo promedio de decisión

**Custom Report:**

Mide tiempo entre `form_start` y `service_combination`.

**Resultado:**
```
Combinación        | Tiempo promedio | Usuarios
-------------------+-----------------+---------
funnel_completo    | 4.5 min         | 42
web_ads            | 2.8 min         | 110
web_only           | 1.2 min         | 165
```

**Insights:**
- Funnel completo requiere más decisión (4.5 min) → normal
- Web sola es rápida (1.2 min) → ya saben lo que quieren
- Oportunidad: chat en vivo para los que tardan >5 min

---

## 🎯 Audiencias para Remarketing

### 1. "Seleccionaron pero no Completaron"

```
Condiciones:
✅ Incluir: service_selection
❌ Excluir: quote_completed
Duración: 7 días

Mensaje:
"¿Necesitas ayuda para elegir? Cotiza gratis en 2 minutos"
```

---

### 2. "Casi Funnel Completo"

```
Condiciones:
✅ Incluir: services_count >= 4
❌ Excluir: has_funnel_completo = true
❌ Excluir: whatsapp_click
Duración: 30 días

Mensaje:
"¡Solo falta 1 servicio para tu Funnel Completo! 10% de descuento"
```

---

### 3. "Solo Web, No Ads"

```
Condiciones:
✅ Incluir: has_web = true
❌ Excluir: has_ads = true
❌ Excluir: whatsapp_click
Duración: 30 días

Mensaje:
"¿Ya tienes web? Agrégale Google Ads y empieza a vender"
```

---

### 4. "Deseleccionaron Automatización"

```
Condiciones:
✅ Incluir: service_selection (service_id = 'automatizacion', action = 'deselected')
❌ Excluir: whatsapp_click
Duración: 30 días

Mensaje:
"Automatización puede ahorrarte 10 horas/semana. ¿Dudas? Conversemos"
```

---

## 🛠️ Configuración en GTM

### Variables a crear (7 nuevas):

| Variable en GTM | Nombre DataLayer | Descripción |
|----------------|------------------|-------------|
| **DL - Service ID** | `service_id` | ID del servicio |
| **DL - Selection Action** | `selection_action` | 'selected' o 'deselected' |
| **DL - Combination Type** | `combination_type` | Tipo de combinación |
| **DL - Has Web** | `has_web` | Si incluye web (boolean) |
| **DL - Has Ads** | `has_ads` | Si incluye ads (boolean) |
| **DL - Has Social** | `has_social` | Si incluye social (boolean) |
| **DL - Has Automation** | `has_automation` | Si incluye automation (boolean) |

### Tags a crear (2):

**Tag 1: GA4 - Service Selection**
```
Event Name: service_selection
Parameters:
  - service_id: {{DL - Service ID}}
  - service_name: {{DL - Service Name}}
  - selection_action: {{DL - Selection Action}}
  - services_selected: {{DL - Services Selected}}
  - services_count: {{DL - Services Count}}
Trigger: Custom Event = 'service_selection'
```

**Tag 2: GA4 - Service Combination**
```
Event Name: service_combination
Parameters:
  - services_selected: {{DL - Services Selected}}
  - services_count: {{DL - Services Count}}
  - combination_type: {{DL - Combination Type}}
  - has_web: {{DL - Has Web}}
  - has_ads: {{DL - Has Ads}}
  - has_social: {{DL - Has Social}}
  - has_automation: {{DL - Has Automation}}
  - has_funnel_completo: {{DL - Has Funnel Completo}}
Trigger: Custom Event = 'service_combination'
```

---

## 📈 Optimizaciones basadas en datos

### Si "web_only" tiene alta deselección de ads:

**Hipótesis:** Precio de ads les parece caro después de ver web

**Test:**
- A: Mostrar precio combinado desde el inicio
- B: Ofrecer descuento en combo web + ads

**Métrica:** Conversión de web_only → web_ads

---

### Si "funnel_completo" tiene baja adopción pero alta conversión:

**Hipótesis:** No conocen los beneficios del funnel completo

**Test:**
- Agregar badge "RECOMENDADO" al funnel completo
- Mostrar caso de éxito de cliente con funnel completo
- Destacar el 10% de descuento más visualmente

**Métrica:** % de usuarios que seleccionan funnel completo

---

### Si hay mucho "service deselection":

**Hipótesis:** Confusión sobre qué servicios necesitan

**Solución:**
- Agregar "¿Necesitas ayuda?" con chat en vivo
- Quiz: "¿Qué necesitas?" → recomienda servicios
- Video explicativo de cada servicio

**Métrica:** Reducción en deselections

---

## ✅ Checklist de Implementación

- [ ] Integrar `trackServiceSelection()` en toggles de servicios
- [ ] Integrar `trackServiceCombination()` al completar Step 2
- [ ] Crear 7 variables en GTM
- [ ] Crear 2 tags en GTM
- [ ] Testing con GTM Preview
- [ ] Verificar eventos en GA4 DebugView
- [ ] Crear informes personalizados en GA4
- [ ] Crear audiencias para remarketing
- [ ] Analizar datos primera semana
- [ ] Implementar optimizaciones

---

## 🎓 Ejemplo de implementación completa

```tsx
import { trackServiceSelection, trackServiceCombination } from '@/hooks/useAnalytics';

export function Cotizador() {
  const [formData, setFormData] = useState({
    services: [] as string[]
  });

  // Al seleccionar/deseleccionar servicio
  const handleServiceToggle = (service: Service) => {
    const isCurrentlySelected = formData.services.includes(service.id);
    const newServices = isCurrentlySelected
      ? formData.services.filter(s => s !== service.id)
      : [...formData.services, service.id];

    // 🔥 TRACK: Cada selección/deselección
    trackServiceSelection({
      service_id: service.id,
      service_name: service.name,
      action: isCurrentlySelected ? 'deselected' : 'selected',
      current_services: newServices,
      total_services_selected: newServices.length,
    });

    setFormData({ ...formData, services: newServices });
  };

  // Al avanzar al siguiente step
  const handleSubmitServices = () => {
    const hasWeb = formData.services.some(s => s.includes('web'));
    const hasAds = formData.services.some(s => s.includes('-ads'));
    const hasSocial = formData.services.includes('social-media');
    const hasAutomation = formData.services.includes('automatizacion');
    const hasFunnelCompleto = formData.services.length === 5;

    // 🔥 TRACK: Combinación final
    trackServiceCombination({
      services_selected: formData.services,
      services_count: formData.services.length,
      has_web: hasWeb,
      has_ads: hasAds,
      has_social: hasSocial,
      has_automation: hasAutomation,
      has_funnel_completo: hasFunnelCompleto,
    });

    // Continuar con lógica normal
    setStep(3);
  };

  return (
    <div>
      {services.map(service => (
        <Checkbox
          key={service.id}
          checked={formData.services.includes(service.id)}
          onChange={() => handleServiceToggle(service)}
        >
          {service.name}
        </Checkbox>
      ))}
      <Button onClick={handleSubmitServices}>
        Siguiente
      </Button>
    </div>
  );
}
```

---

**Última actualización:** Noviembre 2024
**Estado:** ✅ Código listo, falta integrar en componente
