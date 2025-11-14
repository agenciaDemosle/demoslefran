# Guía Práctica - Meta Ads: Audiencias y Campañas de Retargeting

**Fecha:** Noviembre 2024
**Meta Pixel ID:** 757787516978508
**Estado CAPI:** ✅ Activo y funcionando

---

## 📋 ÍNDICE

1. [Verificar que los Eventos Llegan](#verificar-eventos)
2. [Crear Audiencias Personalizadas](#crear-audiencias)
3. [Crear Audiencias Lookalike](#lookalike)
4. [Crear Campañas de Retargeting](#campanas)
5. [Métricas Clave en Meta](#metricas)
6. [Optimización de Campañas](#optimizacion)

---

## ✅ VERIFICAR QUE LOS EVENTOS LLEGAN {#verificar-eventos}

### **Paso 1: Abrir Meta Events Manager**

🔗 https://business.facebook.com/events_manager2/list/pixel/757787516978508

### **Paso 2: Ir a "Overview"**

Deberías ver estos eventos llegando:

| Evento | Descripción | Fuente |
|--------|-------------|--------|
| **InitiateCheckout** | Abrió cotizador | Browser & Server |
| **AddToWishlist** | Seleccionó servicio | Browser & Server |
| **Lead** | Completó cotizador | Browser & Server |
| **Contact** | Click WhatsApp/Teléfono | Browser & Server |

### **Paso 3: Verificar Event Match Quality**

**¿Qué es Event Match Quality (EMQ)?**
- Puntuación de 0-10 que indica qué tan bien Meta puede hacer match de usuarios
- Mientras más datos de usuario envíes, mejor EMQ

**Targets esperados:**
- **Lead:** EMQ > 6.0 (tiene email + teléfono hasheados)
- **Contact:** EMQ 2.0-4.0 (sin datos de usuario, normal)
- **AddToWishlist:** EMQ 2.0-4.0 (sin datos de usuario, normal)
- **InitiateCheckout:** EMQ 2.0-4.0 (sin datos de usuario, normal)

**Si EMQ < 4.0 en Lead:**
- ❌ No se están enviando emails/teléfonos
- Revisar que `trackQuoteCompleted()` reciba email y phone

### **Paso 4: Verificar Deduplicación**

En la columna **"Connection Method"** debe decir:
- ✅ **"Browser & Server"** (ambos canales funcionando)
- ⚠️ **"Browser"** (solo Pixel, CAPI no está funcionando)
- ⚠️ **"Server"** (solo CAPI, Pixel bloqueado)

**Deduplication Rate ideal:** ~50% (mitad browser, mitad server, sin duplicados)

---

## 🎯 CREAR AUDIENCIAS PERSONALIZADAS {#crear-audiencias}

### **Paso 1: Ir a Meta Ads Manager**

🔗 https://business.facebook.com/adsmanager

1. Click en **"☰ Menú"** (arriba izquierda)
2. Click en **"Audiences"** (Audiencias)
3. Click en **"Create Audience"** (Crear audiencia)
4. Seleccionar **"Custom Audience"** (Audiencia personalizada)
5. Seleccionar **"Website"** (Sitio web)

---

### **AUDIENCIA 1: Abandonó Cotizador (PRIORIDAD ALTA)** 🔥🔥🔥

**Paso a paso en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Website Traffic Source:**
   - Seleccionar: **Demosle Website (Pixel 757787516978508)**

3. **Events:**

   **INCLUIR:**
   ```
   - Event: AddToWishlist
   - Retention: In the last 7 days
   ```

   Click en **"Exclude"** (Excluir)

   **EXCLUIR:**
   ```
   - Event: Lead
   - Retention: In the last 7 days
   ```

4. **Name your audience:**
   ```
   Nombre: Abandonó Cotizador (7 días)
   Description: Seleccionó servicios pero no completó cotización
   ```

5. Click **"Create Audience"**

**Tamaño esperado:** 100-500 personas (dependiendo del tráfico)

**¿Qué hace esta audiencia?**
- Captura personas que **SÍ** seleccionaron servicios (AddToWishlist)
- Pero **NO** completaron el formulario (Lead)
- Son leads calientes que abandonaron el proceso

---

### **AUDIENCIA 2: Abrió Cotizador pero No Seleccionó** 🔥🔥

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: InitiateCheckout
   - Retention: In the last 7 days
   ```

   **EXCLUIR:**
   ```
   - Event: AddToWishlist
   - Retention: In the last 7 days
   ```

3. **Name your audience:**
   ```
   Nombre: Abrió Cotizador - Sin Selección (7 días)
   Description: Abrió modal pero no seleccionó ningún servicio
   ```

**Uso:** Personas interesadas pero no convencidas, necesitan más info.

---

### **AUDIENCIA 3: Interesado en Google Ads** 🔥

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: AddToWishlist
   - Retention: In the last 30 days

   Click "Refine by" → "URL/Parameter" → "Parameter"

   - Parameter: content_ids
   - Operator: contains
   - Value: google-ads
   ```

   **EXCLUIR:**
   ```
   - Event: Lead
   - Retention: In the last 30 days

   Click "Refine by" → "URL/Parameter" → "Parameter"

   - Parameter: content_category
   - Operator: contains
   - Value: google-ads
   ```

3. **Name your audience:**
   ```
   Nombre: Interesado en Google Ads (30 días)
   Description: Seleccionó Google Ads pero no convirtió
   ```

**Repetir para cada servicio:**
- `google-ads` → "Interesado en Google Ads"
- `meta-ads` → "Interesado en Meta Ads"
- `web-simple` → "Interesado en Sitios Web"
- `web-ecommerce` → "Interesado en E-commerce"
- `social-media` → "Interesado en Social Media"
- `automatizacion` → "Interesado en Automatización"
- `software` → "Interesado en Software"

---

### **AUDIENCIA 4: Completó Cotización pero No Contactó** 🔥

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: Lead
   - Retention: In the last 3 days
   ```

   **EXCLUIR:**
   ```
   - Event: Contact
   - Retention: In the last 3 days
   ```

3. **Name your audience:**
   ```
   Nombre: Lead Sin Contacto (3 días)
   Description: Completó cotización pero no hizo click en WhatsApp
   ```

**Uso:** Email + Retargeting agresivo (tienes su email y teléfono)

---

### **AUDIENCIA 5: Funnel Completo - Alto Valor** 💎

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: Lead
   - Retention: In the last 30 days

   Click "Refine by" → "URL/Parameter" → "Parameter"

   - Parameter: has_funnel_completo
   - Operator: equals
   - Value: true
   ```

3. **Name your audience:**
   ```
   Nombre: Funnel Completo (30 días)
   Description: Clientes de alto valor - cotizó paquete completo
   ```

**Uso:** Atención VIP, propuesta personalizada del director.

---

### **AUDIENCIA 6: Todos los Visitantes del Sitio (Base)** 📊

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: All website visitors
   - Retention: In the last 180 days
   ```

3. **Name your audience:**
   ```
   Nombre: Todos los Visitantes (180 días)
   Description: Base para Lookalike
   ```

**Uso:** Crear Lookalike Audiences

---

### **AUDIENCIA 7: Clientes Convertidos (para EXCLUIR)** ⛔

**Configuración en Meta:**

1. **Create Audience** → **Custom Audience** → **Website**

2. **Events:**

   **INCLUIR:**
   ```
   - Event: Lead
   - Retention: In the last 180 days
   ```

3. **Name your audience:**
   ```
   Nombre: Clientes Convertidos (180 días)
   Description: Para excluir de campañas de prospección
   ```

**Uso:** EXCLUIR de todas las campañas (no gastar en quien ya convirtió)

---

## 🎯 CREAR AUDIENCIAS LOOKALIKE {#lookalike}

### **¿Qué es Lookalike?**

Meta encuentra personas **similares** a tus mejores clientes.

### **LOOKALIKE 1: Basado en Leads**

**Paso a paso:**

1. **Audiences** → **Create Audience** → **Lookalike Audience**

2. **Source:**
   ```
   Seleccionar: "Clientes Convertidos (180 días)"

   ⚠️ Necesitas mínimo 100 personas en la audiencia fuente
   ```

3. **Location:**
   ```
   Country: Chile
   ```

4. **Audience Size:**
   ```
   1% (más similar, ~180,000 personas en Chile)
   ```

5. **Name:**
   ```
   Nombre: LAL 1% - Leads Chile
   ```

6. Click **"Create Audience"**

**Cuándo crear:**
- Espera a tener **mínimo 100 leads** en los últimos 180 días
- Mientras más leads, mejor calidad del Lookalike

**Escalar:**
- Si 1% funciona bien → Crear 2% y 3%
- Si 1% no funciona → Mejorar audiencia fuente primero

---

### **LOOKALIKE 2: Basado en Alto Valor (Funnel Completo)**

**Configuración:**

1. **Source:**
   ```
   Seleccionar: "Funnel Completo (30 días)"
   ```

2. **Location:** Chile

3. **Audience Size:** 1%

4. **Name:**
   ```
   Nombre: LAL 1% - Alto Valor Chile
   ```

**Uso:** Buscar empresas que necesitan servicio completo (alto ticket)

---

## 🚀 CREAR CAMPAÑAS DE RETARGETING {#campanas}

### **CAMPAÑA 1: Recuperar Cotizador Abandonado**

**Objetivo:** Convertir personas que abandonaron el cotizador

**Setup en Meta Ads:**

1. **Campaign:**
   ```
   Objective: Traffic o Conversions
   Name: Retargeting - Abandonó Cotizador
   ```

2. **Ad Set:**
   ```
   Audience: "Abandonó Cotizador (7 días)"

   Exclude: "Clientes Convertidos (180 días)"

   Placements: Automatic (Feed + Stories)

   Budget: $5,000 - $10,000 CLP/día

   Optimization: Landing Page Views o Leads
   ```

3. **Creative (Ad):**
   ```
   Primary Text:
   "Vimos que te interesó [servicio].
   ¿Tienes dudas? Conversemos por WhatsApp 💬"

   Headline: "10% OFF si cotizas hoy"

   Description: "Respuesta en menos de 1 hora"

   CTA: "Enviar mensaje"

   Destination: WhatsApp con mensaje pre-llenado
   ```

**Estructura de testing (3 ads):**

| Ad | Mensaje | Incentivo | CTA |
|----|---------|-----------|-----|
| Ad 1 | "¿Dudas sobre tu cotización?" | 10% descuento | WhatsApp |
| Ad 2 | "Completa tu cotización en 2 min" | Asesoría gratis | WhatsApp |
| Ad 3 | "Casos de éxito de [servicio]" | Portafolio | Ver casos |

**Métricas objetivo:**
- CTR: > 2%
- CPC: < $200 CLP
- CPL (Cost per Lead): < $2,000 CLP
- ROAS: > 8:1

---

### **CAMPAÑA 2: Retargeting por Servicio (Google Ads)**

**Setup:**

1. **Campaign:**
   ```
   Objective: Conversions
   Name: Retargeting - Google Ads
   ```

2. **Ad Set:**
   ```
   Audience: "Interesado en Google Ads (30 días)"

   Exclude: "Clientes Convertidos (180 días)"

   Budget: $3,000 CLP/día
   ```

3. **Creative:**
   ```
   Primary Text:
   "¿Viste nuestro caso de éxito con Google Ads?
   Cliente aumentó ventas 300% en 3 meses 📈"

   Headline: "Descarga caso de estudio GRATIS"

   Media: Carousel con 3-5 resultados de clientes

   CTA: "Descargar ahora"

   Destination: Landing con PDF descargable
   ```

**Repetir para cada servicio:**
- Meta Ads
- Sitios Web
- E-commerce
- etc.

---

### **CAMPAÑA 3: Prospección con Lookalike**

**Setup:**

1. **Campaign:**
   ```
   Objective: Conversions
   Name: Prospección - LAL 1% Leads
   ```

2. **Ad Set:**
   ```
   Audience: "LAL 1% - Leads Chile"

   Exclude:
   - "Clientes Convertidos (180 días)"
   - "Todos los Visitantes (180 días)"

   Age: 25-65

   Budget: $10,000 CLP/día
   ```

3. **Creative:**
   ```
   Primary Text:
   "¿Necesitas más clientes? Agenda marketing gratuito
   Somos expertos en Google Ads, Sitios Web y Meta Ads"

   Headline: "Auditoría gratuita de tu negocio"

   CTA: "Cotizar ahora"
   ```

**Métricas objetivo:**
- CPL: < $5,000 CLP
- ROAS: > 3:1

---

## 📊 MÉTRICAS CLAVE EN META {#metricas}

### **1. Meta Events Manager - Event Quality**

🔗 https://business.facebook.com/events_manager2/list/pixel/757787516978508

**Ir a "Data Quality" tab:**

| Métrica | Objetivo | Qué significa |
|---------|----------|---------------|
| **Events Received** | Creciente | Total de eventos llegando |
| **Event Match Quality** | > 6.0 para Lead | Qué tan bien Meta hace match |
| **Deduplication Rate** | ~50% | Eventos deduplicados Pixel+CAPI |
| **Connection Method** | Browser & Server | Ambos canales activos |

**Si Event Match Quality < 6.0 en Lead:**
```
Acciones:
1. Verificar que se envíen emails hasheados
2. Verificar que se envíen teléfonos hasheados
3. Agregar más datos: firstName, lastName, ciudad
```

---

### **2. Ads Manager - Métricas de Campaña**

🔗 https://business.facebook.com/adsmanager

**Columnas recomendadas:**

| Columna | Descripción | Objetivo |
|---------|-------------|----------|
| **Amount Spent** | Gasto total | Control presupuesto |
| **Impressions** | Veces que se mostró ad | - |
| **Reach** | Personas únicas | Máximo alcance |
| **CTR (Link Click-Through Rate)** | % clicks / impresiones | > 2% |
| **CPC (Cost per Link Click)** | Costo por click | < $200 CLP |
| **Leads** | Conversiones (Lead event) | Máximo posible |
| **Cost per Lead** | Costo por conversión | < $2,000 CLP retargeting |
| **ROAS** | Return on Ad Spend | > 8:1 retargeting |
| **Frequency** | Veces que persona ve ad | < 3 (evitar fatiga) |

**Cómo agregar columnas personalizadas:**

1. Click en **"Columns"** (dropdown)
2. Click en **"Customize Columns"**
3. Buscar y agregar las métricas de arriba
4. Click **"Apply"**
5. **"Save as Preset"** → Nombre: "Retargeting Metrics"

---

### **3. Audiencias - Tamaño y Crecimiento**

**Ir a Audiences:**

1. Menú → **Audiences**
2. Ver columna **"Audience Size"**

**Tamaños objetivo:**

| Audiencia | Tamaño Mínimo | Tamaño Óptimo |
|-----------|---------------|---------------|
| Abandonó Cotizador | 50 | 500+ |
| Interesado en Servicio | 50 | 300+ |
| Funnel Completo | 20 | 100+ |
| Todos los Visitantes | 1,000 | 10,000+ |
| Para Lookalike (source) | 100 | 1,000+ |

**Si audiencia < 50 personas:**
- ⚠️ Muy pequeña para usar
- Esperar más tráfico o ampliar ventana de tiempo (7→14→30 días)

**Monitorear crecimiento:**
- Exportar tamaños semanalmente
- Gráfica de crecimiento en Excel/Sheets

---

### **4. Dashboard de Métricas (crear en Google Sheets)**

**Plantilla sugerida:**

| Semana | Leads | CPL | ROAS | Gasto | Revenue | Abandonos | Conv. Rate |
|--------|-------|-----|------|-------|---------|-----------|------------|
| Sem 1 | 10 | $2,500 | 7:1 | $25,000 | $175,000 | 40 | 25% |
| Sem 2 | 15 | $2,000 | 9:1 | $30,000 | $270,000 | 50 | 30% |
| ... | ... | ... | ... | ... | ... | ... | ... |

**Calcular:**
- **CPL** = Gasto / Leads
- **ROAS** = Revenue / Gasto
- **Conv. Rate** = Leads / Abandonos

---

## 🎯 OPTIMIZACIÓN DE CAMPAÑAS {#optimizacion}

### **Semana 1: Testing**

**Qué hacer:**
1. ✅ Lanzar 3 ads por audiencia (A/B/C testing)
2. ✅ Budget bajo: $5,000 CLP/día
3. ✅ Dejar correr 3-5 días
4. ✅ No tocar nada (dejar que aprenda)

**Métricas a observar:**
- CTR > 2%
- Frequency < 2

---

### **Semana 2: Optimización**

**Qué hacer:**

1. **Pausar ads con CTR < 1%**
   - Mal copy o mal creative
   - Reemplazar con nuevo ad

2. **Escalar ads con CTR > 3%**
   - Aumentar budget 20% cada 2 días
   - No aumentar más del 50% de golpe

3. **Ajustar por Frequency**
   - Si Frequency > 3 → Pausar ad (fatiga)
   - Crear nuevo creative

4. **Testear nuevos copies**
   - Usar insights de ads ganadores

---

### **Semana 3-4: Escalar**

**Qué hacer:**

1. **Duplicar ad sets ganadores**
   - Mismo ad, mismo audience
   - Nuevo budget dedicado

2. **Ampliar audiencias**
   - Abandonó Cotizador: 7 días → 14 días
   - Interesado en Servicio: 30 días → 60 días

3. **Crear Lookalike**
   - Si tienes > 100 leads
   - Lanzar LAL 1% con presupuesto bajo

---

### **Optimizaciones Específicas por Métrica**

| Si... | Entonces... |
|-------|-------------|
| CTR < 1% | 🔴 Cambiar creative + copy |
| CTR 1-2% | 🟡 Testear nuevo copy |
| CTR > 2% | 🟢 Escalar budget +20% |
| CPC > $300 | 🔴 Revisar targeting, muy amplio |
| Frequency > 3 | 🔴 Pausar ad, crear nuevo |
| CPL > $5,000 (retargeting) | 🔴 Revisar landing, copy o incentivo |
| ROAS < 5:1 (retargeting) | 🔴 Revisar producto/precio |
| Audience < 50 | ⏸️ Pausar campaña, esperar más tráfico |

---

## ⚠️ ERRORES COMUNES A EVITAR

### **1. No excluir clientes convertidos**
```
❌ Gastar presupuesto en quien ya convirtió
✅ SIEMPRE excluir "Clientes Convertidos (180 días)"
```

### **2. Budget muy bajo en retargeting**
```
❌ $1,000 CLP/día → No aprende
✅ Mínimo $5,000 CLP/día para empezar
```

### **3. Cambiar ads muy rápido**
```
❌ Cambiar después de 1 día
✅ Esperar mínimo 3-5 días (fase de aprendizaje)
```

### **4. No rotar creatives**
```
❌ Mismo ad por 30 días → Fatiga
✅ Nuevo creative cada 7-14 días si Frequency > 3
```

### **5. Crear audiencias muy pequeñas**
```
❌ Audiencia de 20 personas
✅ Mínimo 50-100 para que funcione
```

### **6. No hacer A/B testing**
```
❌ Lanzar 1 solo ad
✅ Siempre 3 ads por campaña (A/B/C test)
```

---

## 📝 CHECKLIST: PRIMEROS 30 DÍAS

### **Día 1-7: Setup**
- [ ] Verificar eventos en Meta Events Manager
- [ ] Verificar Event Match Quality > 6.0 en Lead
- [ ] Crear audiencia "Abandonó Cotizador"
- [ ] Crear audiencia "Clientes Convertidos" (para excluir)
- [ ] Lanzar Campaña 1: Recuperar Abandonos
- [ ] 3 ads diferentes (A/B/C)
- [ ] Budget: $5,000 CLP/día

### **Día 8-14: Monitoreo**
- [ ] Revisar CTR de cada ad
- [ ] Pausar ads con CTR < 1%
- [ ] Escalar ads con CTR > 2% (+20% budget)
- [ ] Crear audiencias por servicio específico
- [ ] Monitorear CPL diario

### **Día 15-21: Optimización**
- [ ] Crear nuevos creatives para reemplazar perdedores
- [ ] Lanzar campaña por servicio (Google Ads)
- [ ] Testear nuevos copies basados en ganadores
- [ ] Revisar Frequency (pausar si > 3)

### **Día 22-30: Escalar**
- [ ] Si CPL < $2,000 → Aumentar budget 50%
- [ ] Crear Lookalike si tienes > 100 leads
- [ ] Lanzar campaña prospección LAL 1%
- [ ] Calcular ROAS real (leads → clientes → revenue)

---

## 🎓 RECURSOS ADICIONALES

### **Meta Blueprint (Cursos gratis):**
- https://www.facebook.com/business/learn/courses

**Cursos recomendados:**
1. "Custom Audiences from Website"
2. "Lookalike Audiences"
3. "Retargeting Best Practices"

### **Herramientas útiles:**

1. **Meta Pixel Helper** (Chrome Extension)
   - Verificar que Pixel funcione en el sitio
   - https://chrome.google.com/webstore (buscar "Facebook Pixel Helper")

2. **Meta Events Manager App** (Mobile)
   - Monitorear eventos en tiempo real

3. **Google Sheets Template para tracking**
   - Crear dashboard de métricas semanales

---

## 📞 SOPORTE

**Meta Events Manager:**
https://business.facebook.com/events_manager2/list/pixel/757787516978508

**Meta Ads Manager:**
https://business.facebook.com/adsmanager

**Meta Business Help Center:**
https://www.facebook.com/business/help

---

**Última actualización:** Noviembre 2024
**Próxima revisión:** Después de 30 días de campañas activas
