import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae eum voluptate unde velit? Dignissimos, architecto quasi.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae eum voluptate unde velit? Dignissimos, architecto quasi.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae eum voluptate unde velit? Dignissimos, architecto quasi.",
      live: true,
      case: true,
    },
    {
      title: "YAHOO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae eum voluptate unde velit? Dignissimos, architecto quasi.",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="bg-zinc-900 mt-32">
      {products.map((val, index) => (
        <Product val={val} 
        key={index} />
      ))}
    </div>
  );
}

export default Products;
