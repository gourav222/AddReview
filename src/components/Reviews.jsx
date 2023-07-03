import React, { useState } from "react";
import reviewList from "../AllReviews/ReviewList";
import SingleReview from "./SingleReview";
import "./Reviews.css";
import CreateReview from "./CreateReview";
function Reviews() {
  const [reviews, setReviews] = useState(reviewList);

  const handleDeleteReview = (id) => {
    setReviews(
      reviews.filter((items) => {
        return items.id !== id;
      })
    );
  };

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };
  return (
    <div id="reviews">
      <CreateReview addReview={addReview} />

      <div id="all-reviews">
        {reviews.map((item) => (
          <SingleReview
            key={item.id}
            title={item.title}
            rating={item.rating}
            description={item.description}
            handleDeleteReview={() => {
              handleDeleteReview(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
