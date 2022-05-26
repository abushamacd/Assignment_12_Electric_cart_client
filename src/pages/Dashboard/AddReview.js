import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
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
          const review = {
            name: data.name,
            email: user?.email,
            desc: data.desc,
            rating: data.rating,
            img: img,
          };
          // Send to DB
          fetch("https://ancient-taiga-08773.herokuapp.com/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")} `,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Review added successfully");
                reset();
              } else {
                toast.error("Review not added");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
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
        {/* Email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide valid email",
              },
            })}
            value={user?.email}
            readOnly
            type="email"
            placeholder="Type your email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        {/* Ratings */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            {...register("rating", {
              required: {
                value: true,
                message: "Ratings is required",
              },
            })}
            type="number"
            max={5}
            placeholder="Type your Rating number"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.rating.message}
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
            {...register("desc", {
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
            {errors.desc?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.desc.message}
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
          value="Add Review"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
