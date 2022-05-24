import React from "react";
import notfound from "../../assets/404.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div
      class="hero min-h-screen mt-4"
      style={{ background: `url(${notfound})` }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-base-100">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Page Not Found</h1>
          <p class="mb-5">404 error. your requested page not found</p>
          <button onClick={navigateToHome} class="btn btn-primary">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
