import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');
const deployDir = join(projectRoot, 'deployServer');
const publicDir = join(projectRoot, 'public');

console.log('🚀 Iniciando proceso de deploy...\n');

// 1. Verificar que exista el build
if (!existsSync(distDir)) {
  console.error('❌ Error: No existe la carpeta dist/. Ejecuta "npm run build" primero.');
  process.exit(1);
}

// 2. Limpiar carpeta deployServer si existe
if (existsSync(deployDir)) {
  console.log('🧹 Limpiando carpeta deployServer...');
  rmSync(deployDir, { recursive: true, force: true });
}

// 3. Crear carpeta deployServer
console.log('📁 Creando carpeta deployServer...');
mkdirSync(deployDir, { recursive: true });

// 4. Copiar todo el contenido de dist/
console.log('📦 Copiando archivos del build...');
copyRecursive(distDir, deployDir);

// 5. Copiar archivos adicionales de public/
console.log('📋 Copiando archivos adicionales...');

// Copiar .htaccess
const htaccessSrc = join(publicDir, '.htaccess');
const htaccessDest = join(deployDir, '.htaccess');
if (existsSync(htaccessSrc)) {
  copyFileSync(htaccessSrc, htaccessDest);
  console.log('  ✅ .htaccess copiado');
} else {
  console.warn('  ⚠️  No se encontró .htaccess en public/');
}

// Copiar robots.txt
const robotsSrc = join(publicDir, 'robots.txt');
const robotsDest = join(deployDir, 'robots.txt');
if (existsSync(robotsSrc)) {
  copyFileSync(robotsSrc, robotsDest);
  console.log('  ✅ robots.txt copiado');
}

// Copiar sitemap.xml
const sitemapSrc = join(publicDir, 'sitemap.xml');
const sitemapDest = join(deployDir, 'sitemap.xml');
if (existsSync(sitemapSrc)) {
  copyFileSync(sitemapSrc, sitemapDest);
  console.log('  ✅ sitemap.xml copiado');
}

// 6. Copiar carpeta api/
const apiSrc = join(publicDir, 'api');
const apiDest = join(deployDir, 'api');
if (existsSync(apiSrc)) {
  mkdirSync(apiDest, { recursive: true });
  copyRecursive(apiSrc, apiDest);
  console.log('  ✅ Carpeta api/ copiada');
} else {
  console.warn('  ⚠️  No se encontró carpeta api/ en public/');
}

console.log('\n✨ Deploy completado exitosamente!');
console.log(`📂 Archivos listos en: ${deployDir}`);
console.log('\n📋 Próximos pasos:');
console.log('  1. Sube todo el contenido de deployServer/ a tu servidor (SiteGround)');
console.log('  2. Asegúrate de que el .htaccess esté en la raíz');
console.log('  3. Verifica que la carpeta api/ tenga permisos de ejecución PHP');
console.log('  4. Configura las variables de entorno en producción si es necesario');

// Función auxiliar para copiar recursivamente
function copyRecursive(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}
