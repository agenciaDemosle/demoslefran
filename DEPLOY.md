# Guía de Deploy - Demosle

Esta guía te ayudará a subir el sitio web de Demosle a SiteGround (https://franciscal40.sg-host.com).

## Pasos para hacer deploy

### 1. Preparar el build de producción

Ejecuta el comando de deploy que automáticamente hace el build y prepara la carpeta `deployServer/`:

```bash
npm run deploy
```

Esto creará la carpeta `deployServer/` con todo listo para subir.

### 2. Configurar el email del formulario

**IMPORTANTE:** Antes de subir, edita el archivo `deployServer/api/send-email.php` y cambia el email de destino:

```php
$to = 'info@demosle.com'; // Cambiar por tu email real
```

### 3. Subir archivos a SiteGround

#### Opción A: Usando File Manager de SiteGround

1. Ingresa al panel de SiteGround
2. Ve a "Site Tools" → "File Manager"
3. Navega a la carpeta `public_html` (o la raíz de tu dominio)
4. **Borra todo el contenido actual** (si existe)
5. Sube **TODO** el contenido de la carpeta `deployServer/` a `public_html`

#### Opción B: Usando FTP/SFTP

1. Conéctate por SFTP usando FileZilla, Cyberduck o tu cliente favorito
2. Credenciales están en SiteGround → Site Tools → FTP Accounts
3. Navega a `public_html`
4. Sube todo el contenido de `deployServer/`

### 4. Verificar permisos (importante)

Asegúrate de que los permisos sean correctos:

- **Archivos regulares:** 644
- **Carpetas:** 755
- **PHP files:** 644

Especialmente verifica:
```bash
chmod 644 .htaccess
chmod 644 api/send-email.php
chmod 755 api
```

### 5. Verificar configuración de PHP

En SiteGround → Site Tools → Dev → PHP Manager:
- **Versión recomendada:** PHP 8.0 o superior
- Verificar que `mail()` function esté habilitada

### 6. Probar el sitio

Visita https://franciscal40.sg-host.com y verifica:

1. **Navegación:**
   - Navega entre páginas
   - Verifica que las URLs se vean limpias (sin #)
   - Actualiza la página en diferentes rutas para verificar que no dé error 404

2. **Formulario de contacto:**
   - Ve a `/contacto`
   - Llena el formulario con datos de prueba
   - Envía y verifica que llegue el email

3. **Performance:**
   - Abre DevTools → Network
   - Verifica que los assets carguen correctamente
   - Comprueba tiempos de carga

4. **SEO:**
   - Visita https://franciscal40.sg-host.com/robots.txt
   - Visita https://franciscal40.sg-host.com/sitemap.xml
   - Usa View Source y verifica meta tags

## Estructura de archivos en el servidor

```
public_html/
├── index.html              # Archivo principal
├── .htaccess               # Configuración Apache (SPA routing)
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── assets/                 # JS, CSS, imágenes
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── react-vendor-[hash].js
│   ├── ui-vendor-[hash].js
│   ├── form-vendor-[hash].js
│   └── query-vendor-[hash].js
└── api/                    # Endpoints PHP
    └── send-email.php
```

## Troubleshooting

### Problema: Error 404 al refrescar la página

**Causa:** El `.htaccess` no está funcionando o `mod_rewrite` no está habilitado.

**Solución:**
1. Verifica que `.htaccess` esté en la raíz (no dentro de una subcarpeta)
2. Verifica que el contenido del `.htaccess` no se haya corrompido
3. Contacta a soporte de SiteGround para habilitar `mod_rewrite`

### Problema: Formulario no envía emails

**Causa 1:** Email de destino no está configurado.
**Solución:** Edita `api/send-email.php` y configura `$to = 'tu-email@real.com';`

**Causa 2:** PHP `mail()` no está habilitado.
**Solución:** Contacta a SiteGround para habilitar la función `mail()`

**Causa 3:** Email va a spam.
**Solución:** Configura SPF, DKIM y DMARC en SiteGround → Email → Authentication

### Problema: Assets no cargan (CSS/JS)

**Causa:** Permisos incorrectos o ruta base incorrecta.

**Solución:**
1. Verifica permisos: `chmod 644` para archivos, `chmod 755` para carpetas
2. Verifica en DevTools Network qué archivos están dando 404
3. Asegúrate de que la carpeta `assets/` esté en la raíz

### Problema: El sitio se ve sin estilos

**Causa:** Los archivos CSS no están cargando o hay un problema con las rutas.

**Solución:**
1. Abre DevTools → Console y busca errores
2. Ve a Network y verifica que los CSS carguen (status 200)
3. Limpia cache del navegador (Ctrl+Shift+R / Cmd+Shift+R)

## Actualizaciones futuras

Para actualizar el sitio:

1. Hacer cambios en el código local
2. Probar localmente con `npm run dev`
3. Hacer build con `npm run deploy`
4. Subir **solo los archivos modificados** de `deployServer/`

**Nota:** Si cambias algo en `api/send-email.php`, recuerda volver a configurar el email de destino.

## Variables de entorno en producción

El archivo `.env` NO se sube al servidor (está en `.gitignore`).

Las variables se compilan en el build. Si necesitas cambiar URLs:

1. Edita `.env` localmente
2. Vuelve a ejecutar `npm run deploy`
3. Sube el nuevo build

## Contacto y soporte

Si tienes problemas con el deploy:

1. Revisa esta guía de troubleshooting
2. Consulta los logs de error en SiteGround → Site Tools → Statistics → Error Log
3. Verifica en la consola del navegador (DevTools → Console)

---

**Desarrollado por Demosle** - Creamos sistemas que venden
