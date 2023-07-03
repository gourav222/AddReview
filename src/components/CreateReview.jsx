import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import reviewList from "../AllReviews/ReviewList";
import "./Reviews.css";
function CreateReview({ addReview }) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [commet, setCommet] = useState("");

  function ratingChange(value) {
    setRating(value);
  }

  function handleReset() {
    setTitle("");
    setCommet("");
  }
  function handleSubit() {
    const reviewData = {
      id: reviewList.length + 1,
      title: title,
      rating: rating,
      description: commet,
    };
    addReview(reviewData);
  }

  return (
    <div id="create-review">
      <div>
        <label htmlFor="">Rating</label>

        <ReactStars
          count={5}
          onChange={ratingChange}
          size={24}
          activeColor="#ffd700"
        />

        <input
          id="title-to-review"
          type="text"
          value={title}
          placeholder="Add title for review"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Add you review"
          id="commet"
          rows="10"
          value={commet}
          onChange={(e) => {
            setCommet(e.target.value);
          }}
        ></textarea>

        <div id="buttons">
          <button id="submit" onClick={handleSubit}>
            Submit
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateReview;
