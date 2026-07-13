import React, { useEffect, useState } from "react";
import "./FeatureProducts.css";
import FeatureCard from "./FeatureCard";
import iphone from "../../../src/assets/iphone.jpg";
import switc from "../../assets/id-button.png";
import macbook from "../../assets/mac-system-cut.jfif";
import apiclient from "../../utils/api-client";
import { toast } from "react-toastify";

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);
  useEffect(() => {
    apiclient
      .get("/products/featured")
      .then((res) => setFeatureProducts(res.data))
      .catch((err) => toast.error("Error in featureProducts"));
  }, []);
  {
    // console.log(featureProducts[0]?._id);
  }
  return (
    <div className="featureProducts">
      <h3>Featured Products</h3>
      <div className="featureGrid">
        {featureProducts.map((prod) => (
          <FeatureCard
            key={prod._id}
            pid={prod._id}
            // image={`http://localhost:3000/products/${prod.images[0]}`}
            price={prod.price}
            name={prod.title}
            rating={prod.reviews.rate}
            stock={prod.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
