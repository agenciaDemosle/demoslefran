# Testing - Eventos de Retargeting

**Fecha:** Noviembre 2024

---

## 🧪 PLAN DE PRUEBAS

### **Preparación:**

1. ✅ Subir archivos actualizados a Siteground:
   - `deployServer/*` → `public_html/`

2. ✅ Verificar que `capi.php` tenga las credenciales correctas

3. ✅ Abrir Meta Events Manager:
   - https://business.facebook.com/events_manager2/list/pixel/757787516978508

---

## 📝 TEST 1: Apertura de Cotizador

### **Acción:**
1. Ir a https://demosle.cl
2. Hacer click en botón "Cotizar"
3. Ver que se abre el modal del cotizador

### **Evento esperado:**

**En Meta Events Manager:**
```
Event Name: InitiateCheckout
Event Source: Server (CAPI)
Parameters:
  - content_name: "cotizador"
  - content_category: "cotizador_inicio"
  - event_id: [unique_id]
```

**Verificar:**
- ✅ Aparece en Overview con origen "Server"
- ✅ Tiene `event_id` para deduplicación
- ✅ Timestamp correcto (últimos minutos)

---

## 📝 TEST 2: Selección de Servicio

### **Acción:**
1. En el modal abierto
2. Seleccionar "Google Ads"
3. Seleccionar "Sitios Web"
4. Seleccionar "Meta Ads"

### **Eventos esperados (3 eventos):**

**Evento 1: Google Ads**
```
Event Name: AddToWishlist
Event Source: Server (CAPI)
Parameters:
  - content_name: "Google Ads"
  - content_ids: ["google-ads"]
  - content_category: "cotizador_servicio"
  - num_items: 1
  - event_id: [unique_id_1]
```

**Evento 2: Sitios Web**
```
Event Name: AddToWishlist
Parameters:
  - content_name: "Página Web Profesional (sin carrito)"
  - content_ids: ["web-simple"]
  - num_items: 2
  - event_id: [unique_id_2]
```

**Evento 3: Meta Ads**
```
Event Name: AddToWishlist
Parameters:
  - content_name: "Meta Ads (Facebook & Instagram)"
  - content_ids: ["meta-ads"]
  - num_items: 3
  - event_id: [unique_id_3]
```

**Verificar:**
- ✅ 3 eventos separados con IDs únicos
- ✅ `num_items` incrementa: 1, 2, 3
- ✅ `contents` array incluye todos los seleccionados

---

## 📝 TEST 3: Abandono de Cotizador (CLAVE)

### **Acción:**
1. Con servicios seleccionados (del Test 2)
2. Cerrar el modal (X o click fuera)
3. **NO completar el formulario**

### **Resultado esperado:**

**En Meta Events Manager:**
```
Eventos visibles:
  ✅ InitiateCheckout (abrió)
  ✅ AddToWishlist x3 (seleccionó servicios)
  ❌ NO hay evento Lead (no completó)
```

**Esto crea la audiencia:**
```
"Abandonó Cotizador"
- Tiene AddToWishlist
- NO tiene Lead (últimos 7 días)
```

---

## 📝 TEST 4: Completar Cotizador (conversión)

### **Acción:**
1. Abrir cotizador de nuevo
2. Seleccionar servicios
3. Ir al paso 2: Llenar datos
   - Nombre: Test Usuario
   - Email: test@demosle.com
   - WhatsApp: 56974664281
4. Click "Enviar Cotización"

### **Eventos esperados:**

**1. Lead (conversión principal)**
```
Event Name: Lead
Event Source: Server (CAPI)
Parameters:
  - content_name: "cotizador"
  - content_category: "web-simple,google-ads,meta-ads"
  - num_items: 3
  - value: 539970
  - currency: "CLP"
  - has_funnel_completo: false
  - event_id: [unique_id_lead]

User Data (hasheado):
  - em: [SHA-256 de test@demosle.com]
  - ph: [SHA-256 de 56974664281]
  - fn: [SHA-256 de "Test"]
  - ln: [SHA-256 de "Usuario"]
```

**2. Contact (click WhatsApp)**
```
Event Name: Contact
Event Source: Server (CAPI)
Parameters:
  - content_name: "cotizador"
  - content_category: "web-simple,google-ads,meta-ads"
  - value: 539970
  - event_id: [unique_id_contact]
```

**Verificar:**
- ✅ Evento Lead tiene user_data hasheado
- ✅ Event Match Quality > 6.0 (por email + phone)
- ✅ WhatsApp se abre con mensaje prellenado
- ✅ 2 eventos distintos (Lead + Contact)

---

## 📝 TEST 5: Deduplicación Pixel + CAPI

### **Acción:**
1. Repetir Test 4 en navegador normal (con Pixel activo)
2. Verificar que Meta recibe eventos de ambos lados

### **Resultado esperado:**

**En Meta Events Manager:**
```
InitiateCheckout:
  - Browser: 1 evento
  - Server: 1 evento
  - Total contado: 1 (deduplicado por event_id)

AddToWishlist:
  - Browser: 3 eventos
  - Server: 3 eventos
  - Total contado: 3 (deduplicados)

Lead:
  - Browser: 1 evento
  - Server: 1 evento
  - Total contado: 1 (deduplicado)
```

**Verificar:**
- ✅ En la columna "Connection Method" muestra "Browser & Server"
- ✅ NO hay eventos duplicados
- ✅ Deduplication rate ~50% (mitad de cada lado)

---

## 📊 VERIFICAR EN META EVENTS MANAGER

### **Pestaña: Overview**

1. **Total Events** (últimos 15 minutos)
   - InitiateCheckout: 1
   - AddToWishlist: 3
   - Lead: 1
   - Contact: 1

2. **Event Source Distribution**
   - Server (CAPI): ~100% si solo testeamos nosotros
   - Browser: ~50% si hay deduplicación

3. **Event Match Quality**
   - Lead event: 6.0-8.0 (tiene email + phone)
   - AddToWishlist: 2.0-4.0 (sin user data)
   - InitiateCheckout: 2.0-4.0 (sin user data)

---

## 🎯 CREAR AUDIENCIAS DE PRUEBA

### **Audiencia 1: Abandonó Cotizador (Test)**

```
Meta Ads Manager → Audiences → Create → Custom → Website

INCLUIR:
  Event: AddToWishlist
  Time: Last 1 day

EXCLUIR:
  Event: Lead
  Time: Last 1 day

Expected size: ~1 persona (tú en el test 3)
```

### **Audiencia 2: Completó Cotización**

```
INCLUIR:
  Event: Lead
  Time: Last 1 day

Expected size: ~1 persona (tú en el test 4)
```

### **Audiencia 3: Interesado en Google Ads**

```
INCLUIR:
  Event: AddToWishlist
  Filter: content_ids contains "google-ads"
  Time: Last 1 day

Expected size: ~1 persona
```

---

## ⚠️ TROUBLESHOOTING

### **Problema: No aparecen eventos en Meta**

**Soluciones:**
1. Esperar 1-2 minutos (delay normal)
2. Verificar en Test Events tab
3. Revisar que `capi.php` tenga ACCESS_TOKEN correcto
4. Ver errores en consola del navegador (F12)

### **Problema: Eventos duplicados**

**Causa:** `event_id` no está funcionando
**Solución:**
- Verificar que Pixel y CAPI usen mismo `event_id`
- Revisar en dataLayer si tiene `event_id`

### **Problema: Event Match Quality bajo (<4.0)**

**Causa:** Faltan datos de usuario
**Solución:**
- Solo Lead debería tener EMQ alto (tiene email + phone)
- AddToWishlist puede tener EMQ bajo (normal, no tiene user data)

---

## ✅ CHECKLIST FINAL

Después de las pruebas, verificar:

- [ ] InitiateCheckout se dispara al abrir modal
- [ ] AddToWishlist se dispara por cada servicio seleccionado
- [ ] Lead se dispara al completar cotizador con datos
- [ ] Contact se dispara al hacer click en WhatsApp
- [ ] Eventos tienen `event_id` únicos
- [ ] Deduplicación funciona (si Pixel está activo)
- [ ] Event Match Quality del Lead > 6.0
- [ ] User data del Lead está hasheado (no texto plano)
- [ ] Audiencia "Abandonó Cotizador" se puede crear
- [ ] Todos los eventos aparecen con origen "Server"

---

## 📞 SIGUIENTE PASO

Una vez verificado que todo funciona:

1. **Dejar activo 7 días** para acumular datos
2. **Crear audiencias reales** (no test)
3. **Lanzar primera campaña** de retargeting
4. **Monitorear métricas:**
   - Tamaño de audiencias
   - Tasa de conversión
   - Cost per Lead
   - ROAS

---

**Última actualización:** Noviembre 2024
