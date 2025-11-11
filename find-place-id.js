// Script temporal para encontrar el Place ID de Agencia Demosle
// Ejecutar con: node find-place-id.js

const API_KEY = 'AIzaSyAswUMYIolnDJ2u0u16WfYFz565qfMxxNc';
const BUSINESS_NAME = 'Agencia Demosle';
const LOCATION = 'Chile';

async function findPlaceId() {
  try {
    // Text Search para encontrar el negocio
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(BUSINESS_NAME + ' ' + LOCATION)}&key=${API_KEY}`;

    console.log('Buscando:', BUSINESS_NAME, LOCATION);
    console.log('URL:', searchUrl);

    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const place = data.results[0];
      console.log('\n✅ Negocio encontrado:');
      console.log('Nombre:', place.name);
      console.log('Dirección:', place.formatted_address);
      console.log('Place ID:', place.place_id);
      console.log('Rating:', place.rating);
      console.log('\n📝 Agrega esto a tu archivo .env:');
      console.log(`VITE_GOOGLE_PLACE_ID=${place.place_id}`);
    } else {
      console.log('❌ No se encontró el negocio. Status:', data.status);
      console.log('Intenta buscarlo manualmente en: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

findPlaceId();
