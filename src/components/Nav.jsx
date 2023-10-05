import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-500" >
      <ul className="flex justify-around text-xl gap-6 p-8 font-semibold text-slate-50 ">
        <li> <Link to="/">Products</Link> </li>
        <li> <Link to="/cart">Cart ({Math.floor(Math.random()*10)})</Link> </li>
      </ul>
    </nav>
  );
};

export default Nav;
