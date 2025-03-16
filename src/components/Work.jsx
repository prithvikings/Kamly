import React, { useState } from "react";
import { motion, useScroll } from "motion/react";
import { useMotionValueEvent } from "motion/react";
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards-p-1600.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
    }
  });
  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className='leading-none text-[30vw] font-["gilroy_medium"] tracking-tight select-none'>
          Work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                src={elem.url}
                alt=""
                className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
