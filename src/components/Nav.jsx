import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 py-4">
        <div className="flex justify-center items-baseline space-x-4">
          <NavLink
            to="/product"
            className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-xl font-medium"
          >
            Cart
          </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
