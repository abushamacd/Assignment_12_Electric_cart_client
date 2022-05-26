import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);

  const imgStorageKey = "0d249f6ebce01b322c3e885d02f76781";
  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handle submit
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            email: user?.email,
            price: data.price,
            description: data.description,
            minimum: data.minimum,
            quantity: data.quantity,
            img: img,
          };
          console.log(product);
          // Send to DB
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")} `,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Product added successfully");
                reset();
              } else {
                toast.error("Product not added");
              }
            });
        }
        console.log("imgbb", result);
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        {/* Price */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
            })}
            type="number"
            placeholder="Type your price "
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        {/* Minimum */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum Order</span>
          </label>
          <input
            {...register("minimum", {
              required: {
                value: true,
                message: "minimum is required",
              },
            })}
            type="number"
            placeholder="Type your minimum "
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.minimum?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.minimum.message}
              </span>
            )}
          </label>
        </div>
        {/* quantity */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity is required",
              },
            })}
            type="number"
            placeholder="Type your quantity "
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        {/* Description */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
            type="text"
            placeholder="Description here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        {/* Photo */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Photo is required",
              },
            })}
            type="file"
            className="input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
