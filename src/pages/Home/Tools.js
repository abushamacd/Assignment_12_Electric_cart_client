import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const reverseTools = [...tools].reverse();
  const slicedTools = reverseTools.slice(0, 6);
  useEffect(() => {
    const url = "https://ancient-taiga-08773.herokuapp.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl capitalize text-primary">Our Products</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16">
        {slicedTools.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
