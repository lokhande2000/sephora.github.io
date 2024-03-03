import { Link } from "react-router-dom";

const ProductCard = ({ element }) => {
  const { imageUrl, brand, name, price } = element;
  return (
    <>
      <div className="singleproductcard">
        <img src={imageUrl} alt="" width="100%" />
        <h3>{brand}</h3>
        <p>{name}</p>
        <p>
          <b>{price} $</b>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
