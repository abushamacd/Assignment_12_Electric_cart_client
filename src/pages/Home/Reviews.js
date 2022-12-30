import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // load review
  useEffect(() => {
    fetch("https://electric-cart-server.onrender.com/review").then((res) =>
      res.json().then((data) => setReviews(data))
    );
  }, []);
  const reverseReview = [...reviews].reverse();
  const slicedReviews = reverseReview.slice(0, 3);

  return (
    <div>
      <h2 className="text-center capitalize text-4xl mb-5">
        Our happy Client says
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slicedReviews.map((review) => (
          <div key={review._id} className="rounded-lg shadow-xl bg-white p-10">
            <img
              src={review.img}
              alt=""
              className="rounded-full p-4 h-40 mx-auto"
            />
            <header className=" text-2xl font-extrabold py-4 px-4 text-center">
              {review.name}
            </header>
            <div className="text-secondary text-center font-semibold flex justify-center">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <span key={idx}>
                  <FaStar />
                </span>
              ))}
            </div>
            <p className="text-center">{review.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
