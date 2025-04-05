const IPA = {
  Apariencia: {
    Color: [5, 6, 7, 8, 9], // De dorado medio a ámbar rojizo claro
    Transparencia: [2, 3], // Transparente, pero se permite una ligera turbidez
    Espuma: {
      Tamaño: [2], // Mediana
      Color: [1, 2], // Blanca a blanquecina
      Persistencia: [3], // Buena
    },
  },
  Aroma: {
    Lupulo: {
      Intensidad: [3, 4], // Prominente a intenso
      Descriptores: {
        citrico: true,
        floral: true,
        pino: true,
        resinoso: true,
        especiado: true,
        "fruta-tropical": true,
        "fruta-de-carozo": true,
        bayas: true,
        melon: true,
      },
    },
    Malta: {
      Intensidad: [2, 3], // Baja a media
    },
    Fermentacion: {
      Esteres: {
        Intensidad: [1, 2], // Ligera aceptable
      },
      Fenoles: {}, // Sin datos específicos en este caso
      Alcohol: [1, 2], // Ligero alcohol opcional
    },
  },
  Sabor: {
    Lupulo: {
      Intensidad: [3, 5], // Medio a muy alto
      Descriptores: {
        citrico: true,
        floral: true,
        pino: true,
        resinoso: true,
        especiado: true,
        "fruta-tropical": true,
        "fruta-de-carozo": true,
        bayas: true,
        melon: true,
      },
    },
    Malta: {
      Intensidad: [2, 3], // Baja a media
      Descriptores: {
        Grano: true,
        "Caramelo-ligero": true,
        Tostadas: true,
      },
    },
    Fermentacion: {
      Descriptores: {
        Esteres: [1], // Bajos
        Alcohol: [1, 2], // Opcional un sabor a alcohol limpio en segundo plano
      },
    },
    Amargor: [4, 5], // Medio alto a muy alto
  },
  SensacionEnBoca: {
    Cuerpo: [2, 3], // Medio ligero a medio
    Textura: [1, 3, 4], // Suave, cremosa, cryspy
    Carbonatacion: [3, 4], // Media a media alta
    Calidez: [1], // Opcional suave y muy ligera (si es intensa sería un defecto)
  },
};
