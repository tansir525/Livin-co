import React, { useEffect, useState } from "react";
import Review from "./Review.js/Review";

const Reviews = () => {
  const [reviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("https://infinite-beyond-28980.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div className="border-5">
      <h1 className="title p-5 m-5">Total Reviews : {reviews.length} </h1>

      <div className="row mx-auto container">
        {reviews.map((review) => (
          <Review key={review._id} reviews={review}></Review>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
