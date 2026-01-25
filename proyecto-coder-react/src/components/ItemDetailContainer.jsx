import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const productRef = doc(db, "products", id);

    getDoc(productRef).then(snapshot => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  if (!product) return <h2>Cargando producto...</h2>;

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setQuantityAdded(quantity);
  };

  return (
    <>
      <h1>Detalle del producto</h1>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>

      {quantityAdded === 0 ? (
        <ItemCount
          stock={product.stock}
          initial={1}
          onAdd={handleAdd}
        />
      ) : (
        <p>Producto agregado al carrito ✔️</p>
      )}
    </>
  );
}
