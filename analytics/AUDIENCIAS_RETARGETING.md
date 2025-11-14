# Audiencias para Retargeting - Demosle

**Fecha:** Noviembre 2024
**Meta Pixel ID:** 757787516978508

---

## 🎯 Eventos Implementados con Meta CAPI

| Evento | Tipo Meta | Cuándo se dispara | Pixel | CAPI |
|--------|-----------|-------------------|-------|------|
| **InitiateCheckout** | Estándar | Abre modal cotizador | ✅ | ✅ |
| **AddToWishlist** | Estándar | Selecciona un servicio | ✅ | ✅ |
| **Lead** | Estándar | Completa cotizador | ✅ | ✅ |
| **Contact** | Estándar | Click WhatsApp/Teléfono | ✅ | ✅ |

---

## 🔥 AUDIENCIAS CLAVE PARA RETARGETING

### **1. Abandonó Cotizador (HOT LEAD)** 🔥🔥🔥

**Descripción:** Personas que seleccionaron servicios pero NO completaron la cotización.

**Configuración en Meta:**
```
Audiencia Personalizada → Website → Custom Combination

INCLUIR:
  Event: AddToWishlist
  Time: Last 7 days

EXCLUIR:
  Event: Lead
  Time: Last 7 days
```

**Por qué es clave:**
- Alta intención de compra
- Ya saben qué servicios quieren
- Solo necesitan un empujón

**Estrategia de retargeting:**
```
Mensaje: "Vimos que te interesa [servicio].
         ¿Tienes dudas? Hablemos por WhatsApp"

Incentivo: "10% descuento si cotizas hoy"

CTA: WhatsApp directo con mensaje pre-llenado
```

**Tamaño esperado:** 15-25% de quienes abren el cotizador

---

### **2. Abrió Cotizador pero No Seleccionó (WARM LEAD)** 🔥🔥

**Descripción:** Abrió el modal pero cerró sin seleccionar ningún servicio.

**Configuración en Meta:**
```
INCLUIR:
  Event: InitiateCheckout
  Time: Last 7 days

EXCLUIR:
  Event: AddToWishlist
  Time: Last 7 days
```

**Por qué es útil:**
- Tuvo interés inicial
- Quizás se confundió o necesita más info

**Estrategia de retargeting:**
```
Mensaje: "¿Dudas sobre qué servicio elegir?
         Casos de éxito por servicio"

CTA: Ver portafolio / hablar con asesor
```

**Tamaño esperado:** 10-15% de visitantes

---

### **3. Interesado en Servicio Específico** 🔥

**Descripción:** Seleccionó un servicio específico (ej: Google Ads).

**Configuración en Meta:**
```
INCLUIR:
  Event: AddToWishlist
  Filter: content_ids contains "google-ads"
  Time: Last 30 days

EXCLUIR:
  Event: Lead
  Filter: content_category contains "google-ads"
  Time: Last 30 days
```

**Crear una audiencia POR CADA servicio:**
- google-ads
- meta-ads
- web-simple
- web-ecommerce
- social-media
- automatizacion
- software

**Estrategia de retargeting:**
```
Mensaje personalizado por servicio:

Google Ads: "Caso de éxito: Cómo [Cliente]
             aumentó ventas 300% con Google Ads"

Software: "¿Tienes una idea? Agenda demo
          gratuita de tu MVP"

Web: "Portafolio de sitios web:
      Ve nuestros últimos proyectos"
```

---

### **4. Completó Cotización pero No Contactó** 🔥

**Descripción:** Llenó todos sus datos pero no hizo click en WhatsApp.

**Configuración en Meta:**
```
INCLUIR:
  Event: Lead
  Time: Last 3 days

EXCLUIR:
  Event: Contact
  Time: Last 3 days
```

**Por qué es útil:**
- Tiene email y teléfono
- Altísima intención
- Quizás se distrajo

**Estrategia de retargeting:**
```
Canal: Email + Facebook/Instagram

Email: "Hola [Nombre],
        Recibimos tu cotización para [servicios].
        ¿Cuándo podemos hablarlo?"

Anuncio: "Propuesta personalizada lista"

CTA: Click para agendar llamada
```

---

### **5. Funnel Completo - Máximo Valor** 💎

**Descripción:** Seleccionó todos los servicios (Funnel Completo).

**Configuración en Meta:**
```
INCLUIR:
  Event: Lead
  Filter: has_funnel_completo = true
  Time: Last 30 days
```

**Por qué es oro:**
- Cliente de alto valor
- Quiere servicio completo
- Potencial contrato $1M+ CLP

**Estrategia de retargeting:**
```
Mensaje: "Vimos que te interesa el Funnel Completo.
         Agenda reunión con nuestro Director"

Incentivo: "Diagnóstico de marketing GRATIS
           + Propuesta personalizada"

CTA: Calendly para agendar
```

---

### **6. Interesados en Servicio por Tarjetas** 🔥

**Descripción:** Click en WhatsApp desde las tarjetas de servicios (NO cotizador).

**Configuración en Meta:**
```
INCLUIR:
  Event: Contact
  Filter: click_location = "services_section"
  Time: Last 7 days
```

**Por qué es útil:**
- Interés rápido en servicio específico
- No quiso llenar formulario (más informal)

**Estrategia de retargeting:**
```
Mensaje: "Hola! Vimos tu interés en [servicio].
         ¿Prefieres una llamada rápida?"

CTA: WhatsApp o teléfono directo
```

---

## 📊 LOOKALIKE AUDIENCES (para expansión)

### **Lookalike: Leads Calificados**

**Fuente:**
```
Event: Lead
Filter: value > 200000 (clientes de alto valor)
Time: Last 90 days
Minimum: 100 personas
```

**Configuración:**
```
Lookalike: 1% similitud en Chile
Tamaño: ~180,000 personas

Si funciona bien, expandir:
  - 2% similitud (~360,000)
  - 3% similitud (~540,000)
```

**Uso:** Campañas de prospección para encontrar nuevos clientes similares.

---

### **Lookalike: Funnel Completo**

**Fuente:**
```
Event: Lead
Filter: has_funnel_completo = true
Time: Last 180 days
```

**Uso:** Encontrar empresas que necesitan servicio completo (alto ticket).

---

## 🎯 EMBUDOS DE RETARGETING SUGERIDOS

### **Embudo 1: Recuperación de Abandono**

```
DÍA 0: Usuario abandona cotizador
  ↓
DÍA 1: Anuncio en Facebook/Instagram
       "¿Dudas sobre tu cotización?"
       CTA: WhatsApp
  ↓
DÍA 3: Anuncio con incentivo
       "10% descuento si cierras hoy"
  ↓
DÍA 7: Último recordatorio
       "Oferta expira mañana"
```

### **Embudo 2: Nurturing por Servicio**

```
SEMANA 1: Usuario seleccionó Google Ads
  ↓
SEMANA 1-2: Caso de éxito Google Ads
            CTA: Descargar PDF
  ↓
SEMANA 2-3: Video testimonial cliente
            CTA: Ver más casos
  ↓
SEMANA 3-4: Propuesta personalizada
            CTA: Agenda llamada
```

---

## 📈 MÉTRICAS DE ÉXITO

### **Por cada audiencia trackear:**

1. **Tamaño de audiencia:**
   - Mínimo: 100 personas para Lookalike
   - Óptimo: 1,000+ para campañas efectivas

2. **Tasa de conversión:**
   - Abandonó cotizador → Conversión: Target 15-25%
   - Abrió cotizador → Conversión: Target 5-10%

3. **Cost per Lead (CPL):**
   - Retargeting: $1,000 - $3,000 CLP
   - Prospección: $3,000 - $8,000 CLP

4. **ROAS (Return on Ad Spend):**
   - Retargeting: Target 8:1 (por cada $1, retornas $8)
   - Prospección: Target 3:1

---

## 🚀 QUICK WINS (implementar primero)

### **Semana 1:**
1. Crear audiencia "Abandonó Cotizador"
2. Campaña de retargeting básica
3. Mensaje: "¿Dudas? Hablemos por WhatsApp"

### **Semana 2:**
4. Crear audiencias por servicio específico
5. Anuncios personalizados por servicio
6. Casos de éxito relevantes

### **Semana 3:**
7. Crear Lookalike de Leads calificados
8. Campaña de prospección 1%
9. Medir CPL y ROAS

### **Mes 2:**
10. Email sequence para quien completó cotización
11. Optimizar mensajes según performance
12. Escalar campañas ganadoras

---

## ⚠️ EXCLUSIONES IMPORTANTES

**SIEMPRE excluir de todas las campañas:**

```
Event: Purchase o contrato cerrado
Time: Last 180 days
```

No gastes presupuesto en clientes actuales (a menos que sea upsell).

---

## 📞 SOPORTE

**Para configurar audiencias en Meta:**
1. https://business.facebook.com/adsmanager
2. Menú → Audiences
3. Create Audience → Custom Audience → Website

**Documentación oficial:**
- [Meta Custom Audiences](https://www.facebook.com/business/help/744354708981227)
- [Retargeting Best Practices](https://www.facebook.com/business/ads-guide/website-retargeting)

---

**Última actualización:** Noviembre 2024
