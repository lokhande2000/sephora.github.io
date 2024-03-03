import React from "react";
import { Link } from "react-router-dom";

const BeautyOffersCard = ({ element }) => {
  const { image, brand, name, tag, dsc } = element;
  return (
    
      <div className="singlebeautycard pd">
        <img style={{ width: "100%" }} src={image} alt="img" />
        <div className="flexcard">
          <h3>{brand}</h3>
          <p>{name}</p>
          <p className="sm">{tag}</p>
          <p className="sm">{dsc}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button style={{ borderRadius: "20px", padding: "5px 25px" }}>
              Apply
            </button>
            <a href="">See details</a>
          </div>
        </div>
      </div>
  
  );
};

export default BeautyOffersCard;
