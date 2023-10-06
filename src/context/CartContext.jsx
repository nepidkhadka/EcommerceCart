import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProduct, setcartProduct] = useState([]);

  const addToCart = (id, title, price, image) => {
    const exsitingProduct = cartProduct.find((product)=>product.id===id);
      if (!exsitingProduct) {
        setcartProduct(() => [
          ...cartProduct,
          { id: id, title: title, price: price, image: image },
        ]);
      } else {
        alert("Added Already");
      }
  };

  return (
    <CartContext.Provider value={{ cartProduct, setcartProduct, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
