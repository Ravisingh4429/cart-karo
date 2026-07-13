import React, { useContext } from "react";
import "./FeatureCard.css";
import star from "../../assets/glowing-star.png";
import cart from "../../assets/basket.png";
import { NavLink } from "react-router-dom";
import cartContext from "../../contexts/cartContext";
import userContext from "../../contexts/userContext";
const FeatureCard = ({ pid, image, price, name, rating, stock }) => {
  const { cartLogic } = useContext(cartContext);
  const { user } = useContext(userContext);
  return (
    <div className="mainCard">
      <div className="pro_img">
        <NavLink to={`/products/product/${pid}`}>
          <img src={image} alt="" />{" "}
        </NavLink>
      </div>
      <div className="pro_details">
        <strong>${price}</strong>
        <p>{name}</p>
        <a href="" className="rating_details">
          <img src={star} alt="" />
          {rating}
        </a>
        {stock > 0 && user && (
          <button onClick={() => cartLogic(pid, 1)} className="add_to_cart">
            <img src={cart} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
