// import "./FeatureCard.css";
import star from "../../assets/glowing-star.png";
import "./ProductCard.css";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../contexts/cartContext";
import userContext from "../../contexts/userContext";
const ProductCard = ({
  id,
  image,
  price,
  name,
  rating,
  ratingcount,
  stock,
}) => {
  const { user } = useContext(userContext);
  const { cartLogic } = useContext(cartContext);
  return (
    <div className="mainCard">
      <div className="pro_img">
        <NavLink to={`product/${id}`}>
          <img
            src={`http://localhost:3000/products/${image}`}
            alt="coverimage"
          />{" "}
        </NavLink>
      </div>
      <div className="pro_details">
        <strong>${price}</strong>
        <p>{name}</p>
        <div className="rating_details">
          <img src={star} alt="rating" />
          <span>{rating || 0}</span>
          <span className="rating_review_count">({ratingcount || 0})</span>
        </div>
      </div>
      {stock > 0 && user && (
        <button onClick={() => cartLogic(id, 1)} className="add_to_cart">
          <img src={basket} alt="add to cart" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
