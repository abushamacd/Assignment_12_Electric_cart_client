import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  // Get ID
  const { id } = useParams();
  // Set data
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2>id: {tools._id} </h2>
      <h2>{tools.name}</h2>
    </div>
  );
};

export default Purchase;
