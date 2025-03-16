import React from "react";
import Marquee from "./Marquee";

function Marquees() {
  var images = [
    [
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c995054_Decathlon.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82c52566d454c994f5e_Upwork.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c995044_Name%3DABM%20Industries%2C%20Mode%3DLight.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1282a2e5ddf6306d15_docusign.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c99502c_ideo-logo.svg",
    ],
    [
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1d077ff1ae73acf7ce_Mizuho.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1d4f490d1737bd541b_clear-light.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fb6_Greenhouse.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82e52566d454c99502c_ideo-logo.svg",
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1d077ff1ae73acf7ce_Mizuho.svg",
    ],
  ];
  return (
    <div className="bg-zinc-900 py-20 mt-32">
      {images.map(item=><Marquee imagesurls={item} />)}
    </div>
  );
}

export default Marquees;
