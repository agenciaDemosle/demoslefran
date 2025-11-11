import { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface GoogleReviewsData {
  reviews: GoogleReview[];
  placeName: string;
  rating: number;
  totalRatings: number;
}

export function useGoogleReviews() {
  const [data, setData] = useState<GoogleReviewsData>({
    reviews: [],
    placeName: '',
    rating: 0,
    totalRatings: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Llamar al endpoint PHP que maneja la API de Google
        const response = await fetch(`${API_BASE_URL}/google-reviews.php`);

        if (!response.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const result = await response.json();

        if (result.status === 'OK') {
          setData({
            reviews: result.reviews || [],
            placeName: result.place_name || '',
            rating: result.rating || 0,
            totalRatings: result.user_ratings_total || 0
          });
        } else {
          throw new Error(result.error || 'Error al obtener reseñas');
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');

        // Fallback: usar reseñas estáticas si hay error
        setData({
          reviews: [
            {
              author_name: "Claudio Alonso Cotroneo",
              rating: 5,
              text: "Fantástico servicio, rápidos, amables, destacables más allá de lo que me podía esperar, ha sido una emocionante experiencia y han dejado muy en alto las expectativas que tenía, totalmente recomendado.",
              relative_time_description: "hace 2 meses"
            }
          ],
          placeName: "Agencia Demosle",
          rating: 5,
          totalRatings: 1
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { ...data, loading, error };
}
