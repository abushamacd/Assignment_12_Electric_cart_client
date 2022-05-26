import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  // Get ID
  const { id } = useParams();
  // Set data
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const url = `https://ancient-taiga-08773.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  const { id: _id, name, img, minimum, quantity, description, price } = tools;
  const [user] = useAuthState(auth);

  const [inputQuantity, setInputQuantity] = useState(0);

  const totalPrice = inputQuantity * price;

  // Booking Order
  const handleOrder = (event) => {
    event.preventDefault();
    // Create order
    const order = {
      productName: event.target.pName.value,
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      price: totalPrice,
      quantity: event.target.quantity.value,
    };
    // Send to DB
    fetch("https://ancient-taiga-08773.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast(`Place Order`);
        } else {
          toast.error(`Order Not place`);
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-fit">
        <div className="hero-content flex-col lg:flex-row md:flex-row">
          <div className="text-center lg:text-left">
            <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img className="lg:max-h-80" src={img} alt="tools" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-accent hover:text-secondary transition duration-0 hover:duration-200">
                  {name}
                </h2>
                <p title={description}>{description}</p>
                <p className="text-xl">
                  Per Item Price: ${" "}
                  <span className="text-secondary">{price}</span>{" "}
                </p>
                <div className="flex">
                  <p>
                    Minimum Order:{" "}
                    <span className="text-secondary">{minimum}</span>{" "}
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
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold">Order Info</h2>
              <form onSubmit={handleOrder}>
                {/* <form> */}

                <label htmlFor="">
                  <small>Your name</small>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  disabled
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />
                <label htmlFor="">
                  <small>Your email</small>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  disabled
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />

                <label htmlFor="">
                  <small>Shipping Address</small>
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />
                <label htmlFor="">
                  <small>Your phone number</small>
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />

                <label htmlFor="">
                  <small>Product name</small>
                </label>
                <input
                  disabled
                  name="pName"
                  value={name}
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />
                <label htmlFor="">
                  <small>Per unit product price </small>
                </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  disabled
                  placeholder="Phone number"
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />
                <label htmlFor="">
                  <small className="flex justify-between">
                    <span>
                      Minimum Order:
                      <span className="text-red-600">{minimum}</span>
                    </span>
                    <span>
                      Maximum Order:
                      <span className="text-red-600">{quantity}</span>
                    </span>
                  </small>
                </label>
                <input
                  required
                  type="number"
                  min={minimum}
                  max={quantity}
                  onChange={(e) => setInputQuantity(e.target.value)}
                  name="quantity"
                  placeholder="Product Quantiy"
                  className="input input-bordered input-secondary w-full max-w-lg mt-2"
                />
                <p>Total price: {totalPrice} </p>
                <input
                  disabled={
                    inputQuantity < parseInt(minimum) ||
                    inputQuantity > parseInt(quantity)
                  }
                  type="submit"
                  value="Place Order"
                  className="btn bg-secondary text-black hover:text-white w-full max-w-lg mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
