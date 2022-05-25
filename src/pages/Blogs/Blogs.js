import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center my-5 text-5xl">Question &#38; Answer</h1>
      {/* First question */}
      <div className="qa">
        <h2 className="text-2xl text-accent">
          <span>Q1:</span> How will you improve the performance of a React
          Application?
        </h2>
        <p>
          <span>Ans:</span> <br />
          1. Reduce the number of nodes in the DOM by using React.Fragment
          <br />
          2. Lazy loading components can be achieved using React.Suspense and
          React.Lazy
          <br />
          3. React.memo can be used for component memory management
          <br />
          4. Don't use anonymous functions
          <br />
          5. Preventing unnecessary renderings by implementing
          shouldComponentUpdate
        </p>
      </div>
    </div>
  );
};

export default Blogs;
