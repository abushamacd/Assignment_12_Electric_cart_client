import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  // Load data reverse and slice
  const reverseTools = [...tools].reverse();
  const slicedTools = reverseTools.slice(0, 6);
  // Load product
  useEffect(() => {
    const url = "https://electric-cart-server.onrender.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);

  console.log(tools);
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl capitalize text-primary">Our Products</h2>
      </div>
      {tools.length < 1 ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16">
          {slicedTools.map((tool) => (
            <Tool key={tool._id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
