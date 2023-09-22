import React, { useState } from "react";
import "./review.css";
import data from '../revData.js';

const Reviews = () => {
  const [review, setReview] = useState(0);
  const {name, job, description, image} = data[review];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number
  };

  const handleAdd =() => {
    setReview((review) => {
      let newReview = review + 1;
      return checkNumber(newReview);
    });
  };

  const handleMinus =() => {
    setReview((review) => {
      let newReview = review - 1;
      return checkNumber(newReview);
    });
  };
    return (
    <>
    <div className="first">
       <center> <h2>CodeTrain Reviews</h2>  
        <div className="line"></div></center>
        </div>
      <div className="body">   
        <div className="review">   
          <img src={image} alt="#" className="image"/>
          <p>{name}</p>
          <h4>{job}</h4>
          <p className="desheight">
           {description}
          </p>
          <div className="butt" onClick={handleAdd}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></div>
          <div className="butt" onClick={handleMinus}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
