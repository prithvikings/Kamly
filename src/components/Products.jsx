import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
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

  const [pos, setPos] = useState(0);
  
  const mover = (index) => {
    setPos(index * 23);
  };
  
  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product val={val} count={index} index={index} mover={mover} />
      ))}

      {/* Animation wala part */}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: `${pos}rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="window w-[32rem] h-[23rem] absolute left-[44%] bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: `-${pos}rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;