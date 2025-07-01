import React from "react";
import App from "./../../App";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: "1",
      name: "T Shirt",
      size: "M",
      color: "Red",
      price: 29.99,
      quantity: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "2",
      name: "Jeans",
      size: "L",
      color: "Blue",
      price: 29.99,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
  ]; // This should be replaced with actual cart data from context or props
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 rounded object-cover mr-4"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}{" "}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>Price: ${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="w-6 h-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
