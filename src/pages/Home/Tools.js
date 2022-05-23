import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const slicedTools = tools.slice(0, 6);
  useEffect(() => {
    const url = "http://localhost:5000/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl capitalize text-primary">
          Our Products {tools.length}
        </h2>
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
