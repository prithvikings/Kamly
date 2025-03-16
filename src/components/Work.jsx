import React from "react";

function Work() {
  var images = [
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
      isActive: true,
    },
  ];

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
