import React, { useEffect, useState } from "react";

const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [product, setproduct] = useState([]);

  const fetchproducts = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    setproduct(data);
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
      <div className="container p-8 m-auto">
        <div className="flex justify-between flex-wrap gap-4 ">
          {product.map((product)=>(
            <div key={product.id} className="bg-white flex-grow shadow-md rounded-lg w-80 dark:bg-gray-800 dark:border-gray-700">
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
                  {product.title.slice(0,10)}
                </h3>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
