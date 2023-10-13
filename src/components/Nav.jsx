import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";

const Nav = () => {

  const {cartProduct} = useContext(CartContext)

  return (
    <nav className="bg-slate-200 dark:bg-gray-800 py-4 sticky top-0 left-0">
        <div className="flex justify-center items-baseline space-x-4">
          <NavLink
            to="/product"
            className={({isActive})=>`${isActive?"text-gray-900 dark:text-white":"text-gray-400"} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium`}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({isActive})=>`${isActive?"text-gray-800 dark:text-white":"text-gray-400"} hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium`}
          >
            Cart ({cartProduct.length?cartProduct.length:"0"})
          </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
