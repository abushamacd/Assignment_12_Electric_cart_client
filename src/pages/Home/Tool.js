import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, minimum, quantity, description, price } = tool;
  // Navigate to item detalis page
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="lg:max-h-40" src={img} alt="tools" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-accent hover:text-secondary transition duration-0 hover:duration-200">
          {name}
        </h2>
        <p title={description}>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <p className="text-xl">
          Per Item Price: $ <span className="text-secondary">{price}</span>{" "}
        </p>
        <div className="flex">
          <p>
            Minimum Order: <span className="text-secondary">{minimum}</span>{" "}
          </p>
          <p>
            {parseInt(quantity) > 0 ? (
              <span>
                {" "}
                Avaialable Itmes:{" "}
                <span className="text-secondary">{quantity}</span>{" "}
              </span>
            ) : (
              <span className="text-error"> Sold Out </span>
            )}
          </p>
        </div>
        <div class="card-actions">
          <button
            onClick={() => navigateToPurchase(_id)}
            class="btn btn-primary w-full"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
