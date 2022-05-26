import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const email = user.email;

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: lUser,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );
  const imgStorageKey = "0d249f6ebce01b322c3e885d02f76781";

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
          const update = {
            name: data.name,
            email: email,
            address: data.address,
            phone: data.phone,
            education: data.education,
            occupation: data.occupation,
            linkedin: data.linkedin,
            facebook: data.facebook,
            img: img,
          };

          // // Send to DB
          fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(update),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.result.acknowledged) {
                toast("Update Successfully");
                refetch();
                reset();
              } else {
                toast.error("Not Update");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  //
  return (
    <div>
      <h2>Profile</h2>

      <div class="hero min-h-fit">
        <div class="hero-content flex-col lg:flex-row md:flex-row">
          <div class="text-center lg:text-left">
            <div class="flex items-center h-screen w-full justify-center">
              <div class="max-w-xs">
                <div class="bg-white shadow-xl rounded-lg py-3">
                  <div class="photo-wrapper p-2">
                    <img
                      class="w-32 h-32 rounded-full mx-auto"
                      src={lUser?.img || "https://i.ibb.co/MgsTCcv/avater.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                      {lUser?.name}
                    </h3>
                    <table class="text-xs my-3">
                      <tbody>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Address
                          </td>
                          <td class="px-2 py-2">{lUser?.address}</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Phone
                          </td>
                          <td class="px-2 py-2">{lUser?.phone}</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Email
                          </td>
                          <td class="px-2 py-2">{lUser?.email}</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Education
                          </td>
                          <td class="px-2 py-2">{lUser?.education}</td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-gray-500 font-semibold">
                            Occupation
                          </td>
                          <td class="px-2 py-2">{lUser?.occupation}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="text-center my-3 flex justify-center text-2xl text-secondary">
                      <a target="blank" href={lUser?.linkedin}>
                        <FaLinkedin />
                      </a>
                      <a target="blank" href={lUser?.facebook}>
                        <FaFacebookSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div class="card-body">
              <h2 className="text-center text-2xl font-bold">Profile Update</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-control w-full max-w-lg">
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered w-full max-w-lg"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex">
                  {/* Addesss */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Addesss is required",
                        },
                      })}
                      type="text"
                      placeholder="Addesss here"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.address?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.address.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* Phone */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Phone is required",
                        },
                      })}
                      type="number"
                      placeholder="Type your phone number"
                      className="input input-bordered w-full max-w-xs ml-2"
                    />
                    <label className="label">
                      {errors.phone?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex">
                  {/* Education */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("education", {
                        required: {
                          value: true,
                          message: "Education is required",
                        },
                      })}
                      type="text"
                      placeholder="Education here"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.education?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.education.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* occupation */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("occupation", {
                        required: {
                          value: true,
                          message: "occupation is required",
                        },
                      })}
                      type="text"
                      max={5}
                      placeholder="Type your occupation"
                      className="input input-bordered w-full max-w-xs ml-2"
                    />
                    <label className="label">
                      {errors.occupation?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.occupation.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex">
                  {/* facebook */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("facebook", {
                        required: {
                          value: true,
                          message: "facebook link is required",
                        },
                      })}
                      type="text"
                      placeholder="facebook link here"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      {errors.facebook?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.facebook.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* linkedin */}
                  <div className="form-control w-full max-w-xs">
                    <input
                      {...register("linkedin", {
                        required: {
                          value: true,
                          message: "linkedin link is required",
                        },
                      })}
                      type="text"
                      placeholder="Your linkedin link"
                      className="input input-bordered w-full max-w-xs ml-2"
                    />
                    <label className="label">
                      {errors.linkedin?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.linkedin.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                {/* Photo */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Upload your photo</span>
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
                  className="btn w-full max-w-lg mt-4"
                  value="Update Profile"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
