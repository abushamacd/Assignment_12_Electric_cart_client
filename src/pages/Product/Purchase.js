import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
  const { id: _id, name, img, minimum, quantity, description, price } = tools;
  const [user, loading, error] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast("Your Order is place");
        }
      });
    // Reset form after add data
    reset();
  };

  return (
    <div>
      <div class="hero min-h-fit">
        <div class="hero-content flex-col lg:flex-row md:flex-row">
          <div class="text-center lg:text-left">
            <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img className="lg:max-h-80" src={img} alt="tools" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-accent hover:text-secondary transition duration-0 hover:duration-200">
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
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h2 className="text-center text-2xl font-bold">Order Info</h2>
              <form
                className="d-flex flex-column"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* User name */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered w-full max-w-xs"
                    value={user?.displayName}
                    readOnly
                    {...register("name")}
                  />
                </div>
                {/* Email*/}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    className="input input-bordered w-full max-w-xs"
                    value={user?.email}
                    readOnly
                    {...register("email")}
                  />
                </div>
                {/* Address*/}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your address"
                    className="input input-bordered w-full max-w-xs"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Phone*/}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type your Phone number"
                    className="input input-bordered w-full max-w-xs"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.phone?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Id*/}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Product Id</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your email"
                    className="input input-bordered w-full max-w-xs"
                    value={id}
                    readOnly
                    {...register("id")}
                  />
                </div>
                {/* Quantity */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      Minimum Order (<small>Of this item</small>) :
                      <span className="text-secondary">{minimum}</span>{" "}
                    </span>
                  </label>
                  <input
                    type="number"
                    min={minimum}
                    max={quantity}
                    placeholder="Type your order quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Quantity number is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.quantity?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.quantity.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* Submit */}
                <input
                  className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full mt-2"
                  type="submit"
                  value="Place Order"
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
