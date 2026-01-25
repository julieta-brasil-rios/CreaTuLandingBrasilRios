import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getProducts = async () => {
  const productsCollection = collection(db, "products");
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProduct = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

export const getCategory = async (categoryId) => {
  const productsCollection = collection(db, "products");
  const q = query(productsCollection, where("category", "==", categoryId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
