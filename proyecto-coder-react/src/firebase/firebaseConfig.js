import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_YW5BK9wWHjpuwXHfE0tDv8b1Vj7v7Yg",
  authDomain: "proyecto-final-react-ec41e.firebaseapp.com",
  projectId: "proyecto-final-react-ec41e",
  storageBucket: "proyecto-final-react-ec41e.firebasestorage.app",
  messagingSenderId: "162656779770",
  appId: "1:162656779770:web:98386ed35bc10f1559b843"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


