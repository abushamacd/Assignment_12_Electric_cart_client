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
    </div>
  );
};

export default Blogs;
