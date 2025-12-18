const products = [
  {
    id: 1,
    title: "Remera deportiva",
    price: 12000,
    category: "indumentaria",
    description: "Remera deportiva unisex - talles: XL, L, M, S, XS",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Buzo oversize",
    price: 22000,
    category: "indumentaria",
    description: "Buzo oversize de algodón - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/buzo1/400/400"
  },
  {
    id: 3,
    title: "Calza deportiva",
    price: 15000,
    category: "indumentaria",
    description: "Calza elastizada - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/calza1/400/400"
  },
  {
    id: 4,
    title: "Short training",
    price: 13000,
    category: "indumentaria",
    description: "Short liviano para entrenamiento - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/short1/400/400"
  },
  {
    id: 5,
    title: "Campera deportiva",
    price: 28000,
    category: "indumentaria",
    description: "Campera con cierre - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/campera1/400/400"
  },
  {
    id: 6,
    title: "Musculosa",
    price: 9000,
    category: "indumentaria",
    description: "Musculosa fresca - talles: XL, L, M, S, XS",
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=300&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Jogging deportivo",
    price: 20000,
    category: "indumentaria",
    description: "Jogging cómodo - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/jogging1/400/400"
  },
  {
    id: 8,
    title: "Top deportivo",
    price: 11000,
    category: "indumentaria",
    description: "Top con soporte medio - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/top1/400/400"
  },
  {
    id: 9,
    title: "Remera dry-fit",
    price: 14000,
    category: "indumentaria",
    description: "Remera tecnología dry-fit - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/remera2/400/400"
  },
  {
    id: 10,
    title: "Pantalón cargo",
    price: 23000,
    category: "indumentaria",
    description: "Pantalón cargo deportivo - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/cargo1/400/400"
  },
  {
    id: 11,
    title: "Biker corta",
    price: 10000,
    category: "indumentaria",
    description: "Biker elastizada - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/biker1/400/400"
  },
  {
    id: 12,
    title: "Campera liviana",
    price: 26000,
    category: "indumentaria",
    description: "Campera rompeviento - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/campera2/400/400"
  },
  {
    id: 13,
    title: "Remera manga larga",
    price: 16000,
    category: "indumentaria",
    description: "Remera térmica - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/remera3/400/400"
  },
  {
    id: 14,
    title: "Short biker",
    price: 12000,
    category: "indumentaria",
    description: "Short biker - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/short2/400/400"
  },
  {
    id: 15,
    title: "Conjunto deportivo",
    price: 35000,
    category: "indumentaria",
    description: "Conjunto completo - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/conjunto1/400/400"
  },
  {
    id: 16,
    title: "Sudadera",
    price: 21000,
    category: "indumentaria",
    description: "Sudadera clásica - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/sudadera1/400/400"
  },
  {
    id: 17,
    title: "Chaleco deportivo",
    price: 19000,
    category: "indumentaria",
    description: "Chaleco acolchado - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/chaleco1/400/400"
  },
  {
    id: 18,
    title: "Pantalón térmico",
    price: 24000,
    category: "indumentaria",
    description: "Pantalón térmico - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/pantalon1/400/400"
  },
  {
    id: 19,
    title: "Remera urbana",
    price: 13000,
    category: "indumentaria",
    description: "Remera urbana oversize - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/remera4/400/400"
  },
  {
    id: 20,
    title: "Buzo canguro",
    price: 25000,
    category: "indumentaria",
    description: "Buzo con capucha - talles: XL, L, M, S, XS",
    image: "https://picsum.photos/seed/buzo2/400/400"
  },

  // =========================
  // SUPLEMENTOS (20)
  // =========================
  {
    id: 21,
    title: "Proteína Whey",
    price: 42000,
    category: "suplementos",
    description: "Proteína whey sabor vainilla",
    image: "https://picsum.photos/seed/whey1/400/400"
  },
  {
    id: 22,
    title: "Creatina Monohidratada",
    price: 30000,
    category: "suplementos",
    description: "Creatina pura micronizada",
    image: "https://picsum.photos/seed/creatina1/400/400"
  },
  {
    id: 23,
    title: "Pre entreno",
    price: 28000,
    category: "suplementos",
    description: "Pre workout energético",
    image: "https://picsum.photos/seed/pre1/400/400"
  },
  {
    id: 24,
    title: "BCAA",
    price: 26000,
    category: "suplementos",
    description: "Aminoácidos ramificados",
    image: "https://picsum.photos/seed/bcaa1/400/400"
  },
  {
    id: 25,
    title: "Glutamina",
    price: 24000,
    category: "suplementos",
    description: "Glutamina en polvo",
    image: "https://picsum.photos/seed/gluta1/400/400"
  },
  {
    id: 26,
    title: "Proteína Vegana",
    price: 39000,
    category: "suplementos",
    description: "Proteína vegetal",
    image: "https://picsum.photos/seed/vegana1/400/400"
  },
  {
    id: 27,
    title: "Colágeno",
    price: 22000,
    category: "suplementos",
    description: "Colágeno hidrolizado",
    image: "https://picsum.photos/seed/colageno1/400/400"
  },
  {
    id: 28,
    title: "Multivitamínico",
    price: 18000,
    category: "suplementos",
    description: "Vitaminas y minerales",
    image: "https://picsum.photos/seed/vit1/400/400"
  },
  {
    id: 29,
    title: "Omega 3",
    price: 20000,
    category: "suplementos",
    description: "Ácidos grasos esenciales",
    image: "https://picsum.photos/seed/omega1/400/400"
  },
  {
    id: 30,
    title: "Quemador de grasa",
    price: 27000,
    category: "suplementos",
    description: "Termogénico",
    image: "https://picsum.photos/seed/quemador1/400/400"
  },
  {
    id: 31,
    title: "Caseína",
    price: 41000,
    category: "suplementos",
    description: "Proteína de absorción lenta",
    image: "https://picsum.photos/seed/caseina1/400/400"
  },
  {
    id: 32,
    title: "ZMA",
    price: 17000,
    category: "suplementos",
    description: "Zinc, magnesio y B6",
    image: "https://picsum.photos/seed/zma1/400/400"
  },
  {
    id: 33,
    title: "Electrolitos",
    price: 15000,
    category: "suplementos",
    description: "Sales minerales",
    image: "https://picsum.photos/seed/electro1/400/400"
  },
  {
    id: 34,
    title: "Proteína sabor chocolate",
    price: 43000,
    category: "suplementos",
    description: "Whey chocolate",
    image: "https://picsum.photos/seed/whey2/400/400"
  },
  {
    id: 35,
    title: "Arginina",
    price: 21000,
    category: "suplementos",
    description: "Aminoácido para rendimiento",
    image: "https://picsum.photos/seed/arginina1/400/400"
  },
  {
    id: 36,
    title: "Cafeína",
    price: 16000,
    category: "suplementos",
    description: "Cafeína en cápsulas",
    image: "https://picsum.photos/seed/cafeina1/400/400"
  },
  {
    id: 37,
    title: "Proteína aislada",
    price: 48000,
    category: "suplementos",
    description: "Whey aislada premium",
    image: "https://picsum.photos/seed/aislada1/400/400"
  },
  {
    id: 38,
    title: "Ganador de peso",
    price: 52000,
    category: "suplementos",
    description: "Mass gainer",
    image: "https://picsum.photos/seed/gainer1/400/400"
  },
  {
    id: 39,
    title: "Vitamina D",
    price: 14000,
    category: "suplementos",
    description: "Vitamina D3",
    image: "https://picsum.photos/seed/vitd1/400/400"
  },
  {
    id: 40,
    title: "Magnesio",
    price: 13000,
    category: "suplementos",
    description: "Magnesio en cápsulas",
    image: "https://picsum.photos/seed/magnesio1/400/400"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};
