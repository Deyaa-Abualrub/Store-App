import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9500/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  console.log(products)
   
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Store Product</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <img
              src={product.img}
              alt={product.name}
              className="w-24 h-24 object-cover mb-3 rounded"
            />
            <p className="text-lg text-gray-700">Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
