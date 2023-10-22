import React, { useContext, useEffect, useReducer, useState } from "react";
import CartContext from "../context/CartContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [product, setproduct] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  const fetchproducts = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setproduct(data);
    } catch (err) {
      seterror(err);
    }
  };

  useEffect(() => {
    fetchproducts();
    setTimeout(() => {
       setloading(false);
    }, 1200);
  }, []);

  if (error != null)
    return (
      <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
        <div class="flex items-center gap-2 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <strong class="block font-medium"> Something went wrong </strong>
        </div>

        <p class="mt-2 text-sm text-red-700">
          Error While Fetching Products Data
        </p>
      </div>
    );

  return (
    <>
      {loading ? (
        <div className="container p-8 m-auto">
          <div className="flex justify-center flex-wrap gap-4 ">
            {Array.from({ length: 20 }).map((_, index) => (
              <div className="" key={index}>
                <div>
                  <Skeleton height={300} width={320} />
                </div>
                <div>
                  <h3>
                    <Skeleton />
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      <Skeleton width={135} height={40} />
                    </span>
                    <button>
                      <SkeletonTheme highlightColor="#2563eb">
                        <Skeleton height={40} width={111} />
                      </SkeletonTheme>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container p-8 m-auto">
          <div className="flex justify-center flex-wrap gap-4 ">
            {product.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg w-80 dark:bg-gray-600 dark:border-gray-700"
              >
                <div className="h-[300px] w-full">
                  <img
                    className="object-contain  p-4 h-full w-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                      {product.title.slice(0, 10)}
                    </h3>
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      Rs.{product.price}
                    </span>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.title,
                          product.price,
                          product.image
                        )
                      }
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
