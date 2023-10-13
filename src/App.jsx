import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h1>404 ! Not Found</h1>} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
