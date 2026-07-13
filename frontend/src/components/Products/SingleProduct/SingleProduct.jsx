import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./SingleProduct.css";
import apiClient from "../../../utils/api-client";
import { useParams } from "react-router-dom";
import cartContext from "../../../contexts/cartContext";
import userContext from "../../../contexts/userContext";

const SingleProduct = () => {
  const { cartLogic } = useContext(cartContext);

  const { id } = useParams();
  const [prductData, setPrductData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    apiClient
      .get(`/products/product/${id}`)
      .then((res) => setPrductData(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  const [selectedImage, setSelectedImage] = useState(0);
  const clickedImage = (index) => {
    setSelectedImage(index);
  };
  const [quantity, setQuantity] = useState(1);
  const quantityHandel = (types) => {
    if (!(quantity === prductData?.stock) && types == "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const { user } = useContext(userContext);
  return (
    <section className="single_product">
      {error && <em>{error}</em>}
      <div className="single_product_images">
        <div className="single_product_thumbnails">
          {prductData?.images.map((item, index) => (
            <img
              src={`http://localhost:3000/products/${item}`}
              onClick={() => clickedImage(index)}
              key={index}
              alt={prductData?.title}
            />
          ))}
        </div>
        <img
          src={`http://localhost:3000/products/${prductData?.images[selectedImage]}`}
          alt={prductData?.title}
          className="single_product_display"
        />
      </div>
      <div className="single_product_details">
        <h3>{prductData?.title}</h3>
        <p>{prductData?.descriptions}</p>
        <em>Stock Available {prductData?.stock}</em>
        <strong>${prductData?.price.toFixed(2)}</strong>
        {user && (
          <>
            <div className="quantity_select">
              <button
                className="quantity_input"
                disabled={quantity <= 1}
                onClick={() => quantityHandel("minus")}
              >
                -
              </button>

              <p>{quantity}</p>
              <button
                onClick={() => quantityHandel("plus")}
                disabled={quantity >= prductData?.stock}
                className="quantity_input"
              >
                +
              </button>
            </div>
            <button onClick={() => cartLogic(id, quantity)}>Add To Cart</button>
          </>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
