import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const array = `const products = [
    { name: "iphone 6", price: 46000, color: "silver" },
    { name: "watch", price: 1500, color: "silver" },
    { name: "Canon camera", price: 19000, color: "black" },
    { name: "Nikon camera", price: 19000, color: "black" },
  ];
  
  products.map(
    (product) => product.name.includes("camera") && console.log(product)
  );
  `;
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
      {/* Second question */}
      <div className="qa">
        <h2 className="text-2xl text-accent">
          <span>Q2:</span> What are the different ways to manage a state in a
          React application?
        </h2>
        <p>
          <span>Ans:</span> <br />
          1. Local state - We manage local (UI) state in one or more components.
          React's useState hook is typically used to manage state local to the
          component.
          <br />
          2. Global state - Global state refers to data we manage across
          multiple components. It is necessary to keep a global state when we
          need to update data across multiple components, or at least across
          them all.
          <br />
          3. Server state - A server-side data source that must be integrated
          with our UI state.
          <br />
          4. URL state - Our URLs include data such as pathnames and query
          parameters. Our application relies on URL state access for many of its
          major parts.
        </p>
      </div>
      {/* Thrid question */}
      <div className="qa">
        <h2 className="text-2xl text-accent">
          <span>Q3:</span> How does prototypical inheritance work?
        </h2>
        <p>
          <span>Ans:</span> <br />
          JavaScript automatically takes a property that's missing from an
          object when we read it. It's called prototypal inheritance.
          Javascript's prototype inheritance feature allows users to add methods
          and properties to objects. Inheritance refers to the process of
          passing properties or methods from one object to another. In
          traditional programming, we use Object.getPrototypeOf and
          Object.setPrototypeOf to get and set the prototype of an object.
          Modern languages use prototyping to set it today.
        </p>
      </div>
      {/* Fourth question */}
      <div className="qa">
        <h2 className="text-2xl text-accent">
          <span>Q4:</span> Why you do not set the state directly in React?
        </h2>
        <p>
          <span>Ans:</span> <br />A composition's states contain its data.
          Directly updating the state does not update this.state immediately. A
          pending state transition is created instead, and when accessed after
          calling this method, the present value will be returned. Calling
          setState() after you update it may just replace the changes you made.
          All components will lose control of the state. That's why do not set
          the state directly.
        </p>
      </div>
      {/* Fifth question */}
      <div className="qa">
        <h2 className="text-2xl text-accent">
          <span>Q5:</span> How will find products by name of an array?
        </h2>
        <p>
          <span>Ans:</span> <br />
          <br />
          <textarea
            readOnly
            value={array}
            name=""
            id=""
            className="w-full"
            rows="10"
          >
            {" "}
          </textarea>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
