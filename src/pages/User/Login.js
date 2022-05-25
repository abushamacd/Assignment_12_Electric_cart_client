import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// hook form
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  // Google sign in
  const [signInWithGoogle, googelUser, googelLoading, googelError] =
    useSignInWithGoogle(auth);

  // Email sign in
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  // navigate
  const navigate = useNavigate();

  // hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // use hooks
  const [token] = useToken(googelUser || emailUser);

  // For required auth
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // user
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // Loading
  if (googelLoading || emailLoading) {
    return <Loading />;
  }

  // Error
  let errorMessage;
  if (googelError || emailError) {
    errorMessage = (
      <p className="text-red-600">
        {" "}
        {googelError?.message} {emailError?.message}{" "}
      </p>
    );
  }

  // handle submit
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {/* Password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minumum 6 charcter",
                  },
                })}
                type="password"
                placeholder="Type your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Navigate Signup form */}
            <p>
              <small>
                New to Electric Cart{" "}
                <Link to="/signup" className="text-secondary">
                  Create Account
                </Link>{" "}
              </small>
            </p>
            <p className="mb-2">{errorMessage}</p>
            <input
              className="btn w-full max-w-xs"
              value="Login"
              type="submit"
            />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
