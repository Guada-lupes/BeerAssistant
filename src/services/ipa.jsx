const IPA = {Apariencia: {
  Color: "de dorado medio a ámbar rojizo claro",
  Transparencia: "Trasparente, pero se permite una ligera turbidez",
  Espuma: {
    Tamaño: Mediana,
    Color: "Blanca a blanquecina"
    Persistencia: "Buena"
  }
},
Aroma: {
  Lupulo: 
    {Intensidad: "Prominente a intenso",
    Descriptores: {
      citrico: True,
      floral: True,
      pino: True,
      resinoso: True;
      especiado: True,
      fruta-tropical: True,
      fruta-de-carozo: True,
      bayas: True,
      melon: True
    }},
  Malta: {
    intensidad: "Baja a media"
  },
  Fermentación:
    {
      esteres: {
        intensidad: "ligera aceptable"
      },
      fenoles: {
      },
      alcohol: "ligero alcohol opcional"
      },
    },

Sabor: {
  Lupulo: {
    Intensidad: "medio a muy alto",
    Descriptores: {
      citrico: True,
      floral: True,
      pino: True,
      resinoso: True;
      especiado: True,
      fruta-tropical: True,
      fruta-de-carozo: True,
      bayas: True,
      melon: True
    }
  },
  Malta:{
    Intensidad: "Baja a media",
    Descriptores: {
      Grano: True,
      Caramelo-ligero: True,
      Tostadas: True,
    }},
  Fermentacion: {Descriptores: {
    esteres: "Bajos",
    alcohol: "opcional un sabor a alcohol limpio en segundo plano"
  }},
  Amargor: "medio alto a muy alto"
},
    
}},
SensacionEnBoca: {
  Cuerpo: "medio ligero a medio",
  Textura: ["suave", "sin asperezas"],
  Carbonatacion: "media a media alta",
  Calidez: "opcional suave y muy ligera" //Si es intensa sería un defecto
}}

console.log(IPA.SensacionEnBoca.Cuerpo)