import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProduct, setcartProduct] = useState(()=>{
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (id, title, price, image) => {
    const exsitingProduct = cartProduct.find(product=>product.id===id);
      if (!exsitingProduct) {
        setcartProduct(() => [...cartProduct,{ id: id, title: title, price: price, image: image }]);
      } else {
        alert("Added Already");
      }
  };

  const removeFromCart = (deleteid) => {
    setcartProduct(newCart =>newCart.filter((cartProduct) => cartProduct.id !== deleteid));
  };

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  },[cartProduct])


  return (
    <CartContext.Provider value={{ cartProduct, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
