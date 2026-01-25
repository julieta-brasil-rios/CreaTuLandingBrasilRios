import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

  // Agregar producto al carrito
const addItem = (product, quantity) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
    const updatedCart = cart.map(item =>
        item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCart(updatedCart);
    } else {
    setCart([...cart, { ...product, quantity }]);
    }
};

  //  Cantidad total de productos
const totalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  //  Precio total
const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //  Vaciar carrito
const clearCart = () => setCart([]);

return (
    <CartContext.Provider
    value={{
        cart,
        addItem,
        totalQuantity,
        totalPrice,
        clearCart
    }}
    >
    {children}
    </CartContext.Provider>
);
};
