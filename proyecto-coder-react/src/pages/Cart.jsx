import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleConfirmOrder = async () => {
    const order = {
      buyer: {
        name: "Julieta",
        email: "julieta@mail.com",
        phone: "123456789",
      },
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);

      console.log("✅ Orden generada con ID:", docRef.id);
      setOrderId(docRef.id); // ✅ ACÁ SÍ EXISTE
      clearCart();
    } catch (error) {
      console.error("❌ Error al generar la orden", error);
    }
  };


  if (orderId) {
    return (
      <div>
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h1>Carrito</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total: ${totalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <button onClick={handleConfirmOrder}>Finalizar compra</button>
    </div>
  );
};

export default Cart;

