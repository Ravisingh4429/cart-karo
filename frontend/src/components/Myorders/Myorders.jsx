import React, { useContext, useEffect, useState } from "react";
import "../Cart/Cart.css";
import apiClient from "../../utils/api-client";
import { toast } from "react-toastify";
import CartCard from "../Cart/CartCard";
const Myorders = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    apiClient
      .get("/order/all")
      .then((res) => setOrder(res.data.allOrders))
      .catch((err) => toast.error("error in order fetch"));
  }, []);

  return (
    <section className="cart_main">
      <h2>Your Orders</h2>
      <section className="cart_main_contain">
        <div className="cart_items">
          {order.map((orderItem) =>
            orderItem.products.map((prodItem) => (
              <CartCard
                key={prodItem.product._id}
                oid={orderItem._id}
                img={`http://localhost:3000/products/${prodItem.product.images[0]}`}
                title={prodItem.product.title}
                price={orderItem.totalValue}
                orderstatus={orderItem.orderStatus}
                readonly={true}
              />
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default Myorders;
