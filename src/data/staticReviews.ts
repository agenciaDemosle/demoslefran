export interface StaticReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export const staticReviews: StaticReview[] = [
  {
    author_name: "Piscinas AS Revestimiento",
    rating: 5,
    text: "Quiero agradecer a agencia démosle por su excelente trabajo en la creación de mi página web. Desde el primer momento demostraron un alto nivel de profesionalismo, compromiso y dedicación. Cumplieron con los plazos, entendieron perfectamente lo que necesitaba para mi negocio y superaron mis expectativas con el resultado final. 100% recomendados por su calidad y atención personalizada.",
    relative_time_description: "hace 4 días"
  },
  {
    author_name: "Felipe Arias Beltran",
    rating: 5,
    text: "Excelente experiencia en su servicio. Con disposición a la buena y profesional comunicación. Felicidades!! Éxito!",
    relative_time_description: "hace 5 días"
  },
  {
    author_name: "Grúas JPV",
    rating: 5,
    text: "Excelente servicio de publicidad, me ayudaron a aumentar mi visibilidad y ventas. Muy recomendable",
    relative_time_description: "hace 3 semanas"
  },
  {
    author_name: "Fumigaciones Lourdes",
    rating: 5,
    text: "Exelente atencion logramos una pagina, agradable visualmente, con contenidos muy bien realizados 100% recomendables",
    relative_time_description: "hace 5 semanas"
  },
  {
    author_name: "Rocio Viviana Provoste Rivas",
    rating: 5,
    text: "No podría haber encontrado un mejor lugar para crear la página web que tenía en mente. Desde el primer momento me sentí escuchada y acompañada en cada paso del proceso. No me ofrecieron solo paquetes predeterminados, sino una experiencia personalizada, con comunicación constante, asesoría y un profesionalismo que se nota en cada detalle. Destaco especialmente su paciencia, empatía y la forma en que se involucran para potenciar la marca, haciéndote sentir que tu proyecto también es importante para ellos.",
    relative_time_description: "hace 7 semanas"
  },
  {
    author_name: "Luciano Duarte",
    rating: 5,
    text: "Buena experiencia, rapidez y buena atención, siempre a un paso adelante.. recomendados!",
    relative_time_description: "hace 10 semanas"
  },
  {
    author_name: "Jennifer Rebolledo",
    rating: 5,
    text: "Es una excelente mujer.. a mí me tuvo mucha paciencia y siempre escuchó sugerencias. Gracias por todo bella..",
    relative_time_description: "hace 10 semanas"
  },
  {
    author_name: "Rodrigo Ortega Rojas",
    rating: 5,
    text: "Excelente la voluntad y trabajo del equipo de demosle, no podría estar mas contento con el servicio entregado, los plazos super razonables para todas las exigencias que puse, me ayudaron a desarrollar exactamente lo que tenia en mente, si o si los vuelvo a contratar para los pasos futuros que me faltan.",
    relative_time_description: "hace 10 semanas"
  },
  {
    author_name: "Claudio Alonso Cotroneo",
    rating: 5,
    text: "Fantástico servicio, rápidos, amables, destacables más allá de lo que me podía esperar, ha sido una emocionante experiencia y han dejado muy en alto las expectativas que tenía, totalmente recomendado.",
    relative_time_description: "hace 12 semanas"
  },
  {
    author_name: "Angeles Spa",
    rating: 5,
    text: "Excelente servicio, desde el primer día y hasta que estuvo la página para mi negocio lista. Atención rápida, cercana y profesional.",
    relative_time_description: "hace 12 semanas"
  },
  {
    author_name: "Doris Lopez",
    rating: 5,
    text: "Muchas gracias, es mi primera página y quedó mejor de lo que esperaba.",
    relative_time_description: "hace 13 semanas"
  },
  {
    author_name: "Emerson Alexandro",
    rating: 5,
    text: "Muy buen servicio, hicieron mi web tal como la necesitaba y a un excelente precio.",
    relative_time_description: "hace 14 semanas"
  },
  {
    author_name: "Andrés Andrade",
    rating: 5,
    text: "Muy buen servicio, muy preocupada, 100% recomiendo. Prácticamente dejo todo en sus manos muy muy bien. Muy agradecido!!!",
    relative_time_description: "hace 14 semanas"
  },
  {
    author_name: "Seba Andres",
    rating: 5,
    text: "Excelente servicio, bastante útil",
    relative_time_description: "hace 14 semanas"
  },
  {
    author_name: "Alejandra Guerrero Sasso",
    rating: 5,
    text: "Muy buen servicio, día a día me siguen aumentando las ventas. Gracias los recomendaré de todas maneras.",
    relative_time_description: "hace 14 semanas"
  },
  {
    author_name: "Gonzalo Honorato",
    rating: 5,
    text: "Buen servicio, han diseñado nuestro landing para nuestro Saas. Innovación de vanguardia",
    relative_time_description: "hace 14 semanas"
  },
  {
    author_name: "Escandalosos Pizza",
    rating: 5,
    text: "Excelente servicios, realizaron nuestra página web y llevan el marketing de nuestra empresa, impecable!",
    relative_time_description: "hace 14 semanas"
  }
];

export const placeInfo = {
  placeName: "Agencia Demosle",
  rating: 5.0,
  totalRatings: staticReviews.length
};
