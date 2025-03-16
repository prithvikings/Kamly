import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    { url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fb6_Greenhouse.svg", number: 48 },
    {
      url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1d3a2b2a689e41db67_soundcloud.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1282a2e5ddf6306d15_docusign.svg",
      number: 11,
    },
    { url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e8a82d52566d454c994fb6_Greenhouse.svg", number: 48 },
    {
      url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1d3a2b2a689e41db67_soundcloud.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67c9bb1282a2e5ddf6306d15_docusign.svg",
      number: 11,
    },
    
  ];
  return (
    <div className="flex items-center">
      {data.map((item,index)=>(
        <Stripe key={index} val={item} />
      ))}
    </div>
  );
}

export default Stripes;
