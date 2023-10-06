import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/product' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/*' element={ <h1>404 ! Not Found</h1> } />
          </Routes>
    </>
  );
};

export default App;
