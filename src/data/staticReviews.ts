export interface StaticReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export const staticReviews: StaticReview[] = [
  {
    author_name: "Pablo Cerda Luengo",
    rating: 5,
    text: "Excelente servicio, muy buena atención, buenos profesionales y preocupados de realizar una excelente pega. Son muy rápidos en sus respuestas. 100% recomendables sin lugar a dudas.",
    relative_time_description: "hace 4 semanas"
  },
  {
    author_name: "Alejandra Perez Perez",
    rating: 5,
    text: "100% recomendable, súper comprometidos con su trabajo, muy buenos profesionales y amables. Muchas gracias!",
    relative_time_description: "hace 1 mes"
  },
  {
    author_name: "Bastian Vega",
    rating: 5,
    text: "Los mejores en lo que hacen. Muy eficientes, profesionales. Trabajan súper rápido. El tiempo de respuesta ante una urgencia es increíble. Son unos crack y cada peso vale la pena.",
    relative_time_description: "hace 3 semanas"
  },
  {
    author_name: "Raúl Vilches",
    rating: 5,
    text: "Profesionales de primera linea. Ofrecen un servicio integral y soporte cuando se requiere. Diseño y creatividad top. Recomendables al 100%.",
    relative_time_description: "hace 4 semanas"
  },
  {
    author_name: "Diego Andres Olivares Silva",
    rating: 5,
    text: "Profesionales de verdad, me ayudaron bastante en el levantamiento de mi proyecto, además de trabajar con mucha transparencia. Altamente recomendado...",
    relative_time_description: "hace 1 mes"
  },
  {
    author_name: "Matias Mancilla",
    rating: 5,
    text: "Muy buenos. Si quieres confiar en tu marca háblale a ellos. Te ayudan con tu empresa y además te dan muchas ideas y son súper innovadores.",
    relative_time_description: "hace 2 meses"
  },
  {
    author_name: "Fernando Antonio Vera Miranda",
    rating: 5,
    text: "Excelente servicio y atención a los clientes, trabajo prolijo, preocupados de entregar a tiempo y conforme a los requerimientos de la marca. Muchas gracias Demosle.",
    relative_time_description: "hace 2 meses"
  },
  {
    author_name: "Felipe Garrido",
    rating: 5,
    text: "El mejor equipo de desarrollo de aplicaciones. Profesionales y con un soporte las 24h. Todo se hace con estándares de calidad a nivel internacional. Muy bien!!!!",
    relative_time_description: "hace 2 meses"
  },
  {
    author_name: "Miguel Miranda",
    rating: 5,
    text: "Un excelente servicio, muy rápido ágil y eficaz. Me ayudaron con la creación de mi página web. 100% recomendado.",
    relative_time_description: "hace 3 meses"
  },
  {
    author_name: "C O",
    rating: 5,
    text: "Totalmente recomendados. Son rápidos, muy profesionales y con excelente servicio. Siempre atento y preocupado de cumplir con los tiempos. Lejos lo mejor del mercado.",
    relative_time_description: "hace 3 meses"
  },
  {
    author_name: "Eduardo Hernandez Padilla",
    rating: 5,
    text: "Excelentes en todo ámbito, su compromiso, responsabilidad y rapidez de desarrollo de proyectos es insuperable, los recomiendo 100%.",
    relative_time_description: "hace 3 meses"
  },
  {
    author_name: "Martin Lezana Rocha",
    rating: 5,
    text: "Muy recomendable, me crearon mi página web para mi negocio y quedó de excelente calidad. Además el precio increíble y el trato súper profesional. Super recomendados!!",
    relative_time_description: "hace 4 meses"
  },
  {
    author_name: "Miguel Ramírez",
    rating: 5,
    text: "Súper profesionales, se nota el compromiso y dedicación por hacer un buen trabajo, y los resultados hablan por si solos. 100% recomendado!",
    relative_time_description: "hace 5 meses"
  },
  {
    author_name: "Claudio Alonso Cotroneo",
    rating: 5,
    text: "Fantástico servicio, rápidos, amables, destacables más allá de lo que me podía esperar, ha sido una emocionante experiencia y han dejado muy en alto las expectativas que tenía, totalmente recomendado.",
    relative_time_description: "hace 2 meses"
  },
  {
    author_name: "Constanza Díaz",
    rating: 5,
    text: "Excelente trabajo, muy profesionales y creativos. Cumplieron con todos los plazos y superaron nuestras expectativas. Totalmente recomendados!",
    relative_time_description: "hace 1 mes"
  },
  {
    author_name: "Roberto Silva",
    rating: 5,
    text: "Increíble servicio. Me ayudaron a digitalizar mi negocio completamente. Son muy innovadores y siempre están dispuestos a ayudar. Los mejores!",
    relative_time_description: "hace 2 semanas"
  },
  {
    author_name: "Carolina Muñoz",
    rating: 5,
    text: "Muy contentos con el resultado. Son rápidos, eficientes y el producto final es de excelente calidad. Sin duda volveremos a trabajar con ellos.",
    relative_time_description: "hace 3 semanas"
  }
];

export const placeInfo = {
  placeName: "Agencia Demosle",
  rating: 5.0,
  totalRatings: staticReviews.length
};
