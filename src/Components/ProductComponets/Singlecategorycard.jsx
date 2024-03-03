import React from "react";
import { Link } from "react-router-dom";

const Singlecategorycard = ({ product }) => {

  return (
    <div className="Singlecategorycard">
      <img src={product.image} alt="img" />
      <div style={{height:'30%',padding:' 2px 5%', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
        <h2>{product.brand}</h2>
        <p>{product.name}</p>
        <Link ><b style={{color:"black"}}>Shop Now</b></Link>
      </div>
    </div>
  );
};

export default Singlecategorycard;
