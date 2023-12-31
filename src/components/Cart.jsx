import React, { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import CartContext from "../context/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState([]);
  const {cartProduct, removeFromCart} = useContext(CartContext);

  useEffect(() => {
    const prices = cartProduct.map(p=>p.price)
    const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(totalPrice);
  }, [cartProduct]);

  return (
    <>
      <div className="container px-6 mx-auto mt-4">
        <div className="flex shadow-md my-10 flex-col md:flex-row">
          <div className="md:w-3/4 bg-white px-10 py-10 w-full">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div className="flex mt-10 mb-5">
              {cartProduct.length > 0 ? (
                <>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Price
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Total
                  </h3>
                </>
              ) : (
                <h1 className="text-white text-sm font-semibold bg-indigo-500 p-2 w-full" > No Product Available in Cart </h1>
              )}
            </div>
            {cartProduct.map((cardproduct) => (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 flex-wrap">
                <div className="flex flex-col sm:flex-row w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={cardproduct.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between sm:ml-4 flex-grow">
                    <span className="font-bold text-sm"></span>
                    <span className="text-gray-900 text-sm font-medium ">
                      {cardproduct.title ? cardproduct.title : "No Products"}
                    </span>
                    <button
                      onClick={() => removeFromCart(cardproduct.id)}
                      className="font-semibold bg-red-500 p-2  max-w-[80px] rounded-lg hover:bg-red-600 text-white text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg 
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={1}
                    min={1}
                  />

                  <svg 
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  Rs. {cardproduct.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  Rs. {cardproduct.price}
                </span>
              </div>
            ))}

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="md:w-1/4 px-8 py-10 w-full">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Total Items
              </span>
              <span className="font-semibold text-sm">
                {cartProduct.length}
              </span>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>Rs. {totalPrice}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
