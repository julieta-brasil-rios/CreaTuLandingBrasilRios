import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";



  const products = [
  {
    title: "Remera deportiva",
    price: 12000,
    stock:10,
    category: "indumentaria",
    description: "Remera deportiva unisex - talles: XL, L, M, S, XS",
    image:"/images/remeraUrbana.webp" 
  },
  {
    title: "Buzo oversize",
    price: 22000,
    stock:10,
    category: "indumentaria",
    description: "Buzo oversize de algodón - talles: XL, L, M, S, XS",
    image:"/images/buzoCanguro.webp"
  },
  {
    title: "Calza deportiva",
    price: 15000,
    stock:10,
    category: "indumentaria",
    description: "Calza elastizada - talles: XL, L, M, S, XS",
    image:"/images/calzaDeportiva.webp" 
  },
  {
    title: "Short training",
    price: 13000,
    stock:10,
    category: "indumentaria",
    description: "Short liviano para entrenamiento - talles: XL, L, M, S, XS",
    image:"/images/bikerCorto.webp" 
  },
  {
    title: "Campera deportiva",
    price: 28000,
    stock:10,
    category: "indumentaria",
    description: "Campera con cierre - talles: XL, L, M, S, XS",
    image:"/images/camperaDeportiva.webp" 
  },
  {
    title: "Musculosa",
    price: 9000,

stock:10,    category: "indumentaria",
    description: "Musculosa fresca - talles: XL, L, M, S, XS",
    image:"/images/remeraUrbana.webp" 
  },
  {
    title: "Jogging deportivo",
    price: 20000,
    stock:10,
    category: "indumentaria",
    description: "Jogging cómodo - talles: XL, L, M, S, XS",
    image:"/images/jogginDeportivo.webp" 
  },
  {
    title: "Top deportivo",
    price: 11000,
    stock:10,
    category: "indumentaria",
    description: "Top con soporte medio - talles: XL, L, M, S, XS",
    image:"/images/topDeportivo.webp" 
  },
  {
    title: "Remera dry-fit",
    price: 14000,
    stock:10,
    category: "indumentaria",
    description: "Remera tecnología dry-fit - talles: XL, L, M, S, XS",
    image:"/images/remeraMangaLarga.jpg" 
  },
  {

    title: "Pantalón cargo",
    price: 23000,
    stock:10,
    category: "indumentaria",
    description: "Pantalón cargo deportivo - talles: XL, L, M, S, XS",
    image:"/images/pantalonCargo.jpg" 
  },
  {

    title: "Biker corta",
    price: 10000,
    stock:10,
    category: "indumentaria",
    description: "Biker elastizada - talles: XL, L, M, S, XS",
    image:"/images/bikerCorta.webp" 
  },
  {

    title: "Campera liviana",
    price: 26000,
    stock:10,
    category: "indumentaria",
    description: "Campera rompeviento - talles: XL, L, M, S, XS",
    image:"/images/camperaLiviana.jpg" 
  },
  {

    title: "Remera manga larga",
    price: 16000,
    stock:10,
    category: "indumentaria",
    description: "Remera térmica - talles: XL, L, M, S, XS",
    image:"/images/remeraMangaLarga.jpg" 
  },
  {

    title: "Short biker",
    price: 12000,
    stock:10,
    category: "indumentaria",
    description: "Short biker - talles: XL, L, M, S, XS",
    image:"/images/bikerCorto.webp" 
  },
  {

    title: "Conjunto deportivo",
    price: 35000,
    stock:10,
    category: "indumentaria",
    description: "Conjunto completo - talles: XL, L, M, S, XS",
    image:"/images/conjuntoDeportivo.webp" 
  },
  {

    title: "Sudadera",
    price: 21000,
    stock:10,
    category: "indumentaria",
    description: "Sudadera clásica - talles: XL, L, M, S, XS",
    image:"/images/sudadera.jpg" 
  },
  {

    title: "Chaleco deportivo",
    price: 19000,
    stock:10,
    category: "indumentaria",
    description: "Chaleco acolchado - talles: XL, L, M, S, XS",
    image:"/images/chalecoDeportivo.jpg" 
  },
  {

    title: "Pantalón térmico",
    price: 24000,
    stock:10,
    category: "indumentaria",
    description: "Pantalón térmico - talles: XL, L, M, S, XS",
    image:"/images/pantalonTermico.jpg" 
  },
  {

    title: "Remera urbana",
    price: 13000,
    stock:10,
    category: "indumentaria",
    description: "Remera urbana oversize - talles: XL, L, M, S, XS",
    image:"/images/remeraUrbana.webp" 
  },
  {

    title: "Buzo canguro",
    price: 25000,
    stock:10,
    category: "indumentaria",
    description: "Buzo con capucha - talles: XL, L, M, S, XS",
    image:"/images/buzoCanguro.webp" 
  },

  // =========================
  // SUPLEMENTOS (20)
  // =========================
  {

    title: "Proteína Whey",
    price: 42000,
    stock:10,
    category: "suplementos",
    description: "Proteína whey sabor vainilla",
    image:"/images/proteinaWhey.jpg" 
  },
  {

    title: "Creatina Monohidratada",
    price: 30000,
    stock:10,
    category: "suplementos",
    description: "Creatina pura micronizada",
    image:"/images/creatina.jpg" 
  },
  {

    title: "Pre entreno",
    price: 28000,
    stock:10,
    category: "suplementos",
    description: "Pre workout energético",
    image:"/images/preEntreno.jpg" 
  },
  {

    title: "BCAA",
    price: 26000,
    stock:10,
    category: "suplementos",
    description: "Aminoácidos ramificados",
    image:"/images/bcaa.webp" 
  },
  {

    title: "Glutamina",
    price: 24000,
    stock:10,
    category: "suplementos",
    description: "Glutamina en polvo",
    image:"/images/glutamina.webp" 
  },
  {

    title: "Proteína Vegana",
    price: 39000,
    stock:10,
    category: "suplementos",
    description: "Proteína vegetal",
    image:"/images/proteinaVegana.webp" 
  },

  {

    title: "Omega 3",
    price: 20000,
    stock:10,
    category: "suplementos",
    description: "Ácidos grasos esenciales",
    image:"/images/omega3.webp" 
  },
  {

    title: "Quemador de grasa",
    price: 27000,
    stock:10,
    category: "suplementos",
    description: "Termogénico",
    image:"/images/quemadorDeGrasa.webp" 
  },
  {

    title: "Caseína",
    price: 41000,
    stock:10,
    category: "suplementos",
    description: "Proteína de absorción lenta",
    image:"/images/caseina.jpg" 
  },
  {

    title: "ZMA",
    price: 17000,
    stock:10,
    category: "suplementos",
    description: "Zinc, magnesio y B6",
    image:"/images/zma.webp" 
  },
  {

    title: "Electrolitos",
    price: 15000,
    stock:10,
    category: "suplementos",
    description: "Sales minerales",
    image:"/images/electrolitos.png" 
  },
  {

    title: "Proteína sabor chocolate",
    price: 43000,
    stock:10,
    category: "suplementos",
    description: "Whey chocolate",
    image:"/images/proteinaChocolate.webp" 
  },
  {

    title: "Arginina",
    price: 21000,
    stock:10,
    category: "suplementos",
    description: "Aminoácido para rendimiento",
    image:"/images/arginina.webp" 
  },
  {

    title: "Cafeína",
    price: 16000,
    stock:10,
    category: "suplementos",
    description: "Cafeína en cápsulas",
    image:"/images/cafeina.webp" 
  },
  {

    title: "Proteína aislada",
    price: 48000,
    stock:10,
    category: "suplementos",
    description: "Whey aislada premium",
    image:"/images/proteinaAislada.webp" 
  },
  {

    title: "Ganador de peso",
    price: 52000,
    stock:10,
    category: "suplementos",
    description: "Mass gainer",
    image:"/images/ganadorDePeso.webp" 
  },
  {

    title: "Vitamina D",
    price: 14000,
    stock:10,
    category: "suplementos",
    description: "Vitamina D3",
    image:"/images/vitaminaD.jpg" 
  },
  {

    title: "Magnesio",
    price: 13000,
    stock:10,
    category: "suplementos",
    description: "Magnesio en cápsulas",
    image:"/images/magnesio.webp" 
  }
];


export const seedProducts = async () => {
  const productsCollection = collection(db, "products");

  for (const product of products) {
    await addDoc(productsCollection, product);
  }

  console.log("✅ Productos cargados en Firestore");
};
