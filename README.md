# Demosle - Creamos sistemas que venden

Web corporativa moderna construida con React + Vite + TypeScript + Tailwind CSS 3.4.17, lista para producción en SiteGround.

## Tecnologías principales

- **React 18.3** con TypeScript
- **Vite 5.4** para desarrollo y build optimizado
- **Tailwind CSS 3.4.17** (NO v4)
- **React Router 7.8** para navegación SPA
- **TanStack Query** para manejo de estado asíncrono
- **React Hook Form + Zod** para formularios validados
- **Framer Motion** para animaciones
- **react-helmet-async** para SEO
- **Axios** para peticiones HTTP

## Comandos disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo en http://localhost:3000

# Build para producción
npm run build            # Compila el proyecto en dist/

# Deploy
npm run deploy           # Build + preparar carpeta deployServer/ lista para subir

# Otros
npm run preview          # Preview del build de producción
npm run lint             # Ejecutar ESLint
```

## Desarrollo local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Copiar variables de entorno:
   ```bash
   cp .env.example .env
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador: http://localhost:3000

## Deploy a producción (SiteGround)

### Usar script de deploy (recomendado)

```bash
npm run deploy
```

Esto genera la carpeta `deployServer/` con todo listo para subir a SiteGround.

### Estructura en el servidor

Subir todo el contenido de `deployServer/` a la raíz del dominio:

```
public_html/  (o raíz del dominio)
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
└── api/
    └── send-email.php
```

## Configuración importante

### Email en formulario de contacto

Editar `public/api/send-email.php` y cambiar:
```php
$to = 'info@demosle.com'; // Cambiar por tu email real
```

### Variables de entorno

Ajustar `.env` según tu dominio:
```env
VITE_SITE_URL=https://franciscal40.sg-host.com
VITE_API_BASE_URL=https://franciscal40.sg-host.com/api
```

## Rutas disponibles

- `/` - Home
- `/web` - Desarrollo Web
- `/apps` - Apps Móviles
- `/creative` - Branding & Creative
- `/metodo` - Nuestro Método
- `/nosotros` - Quiénes Somos
- `/contacto` - Formulario de Contacto

## SEO incluido

- Meta tags dinámicos por página
- Open Graph y Twitter Cards
- JSON-LD schemas (Organization, LocalBusiness, WebSite, Service)
- Sitemap.xml
- Robots.txt

## Formulario de contacto

Validación con Zod:
- Nombre (min 2 caracteres)
- Email (formato válido)
- Tipo de proyecto (Web/Apps/Creative/Otro)
- Mensaje (min 20 caracteres)

Envío a PHP con TanStack Query y feedback con toast.

## Troubleshooting

**Router no funciona en producción:**
- Verificar que `.htaccess` esté en la raíz
- Verificar que `mod_rewrite` esté habilitado

**Formulario no envía emails:**
- Verificar que PHP `mail()` esté habilitado
- Cambiar el email destino en `send-email.php`

---

**Desarrollado por Demosle** - Creamos sistemas que venden
