import React from "react";
import "./Reviews.css";
import deleteIcon from "../images/trash-bin.png";
function SingleReview({ title, rating, description, handleDeleteReview }) {
  return (
    <div id="single-review">
      <div id="title-rating">
        <span id="rating">{rating}</span>

        <span id="title">{title}</span>

        <button id="delete-review" onClick={handleDeleteReview}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>

      <div id="description">
        <h4>Review</h4>
        {description}
      </div>
    </div>
  );
}

export default SingleReview;
