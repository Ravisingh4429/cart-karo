import React, { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import "./Cart.css";
import cartContext from "../../contexts/cartContext";
import apiClient from "../../utils/api-client";
import { toast } from "react-toastify";
const Cart = () => {
  const [totalvalue, setTotalvalue] = useState();

  const { cart, getcart } = useContext(cartContext);
  useEffect(() => {
    if (cart.length > 0) {
      setTotalvalue(cart[0]?.totalvalue);
    } else {
      setTotalvalue(0);
    }
  }, [cart]);

  const increse = async (id) => {
    await apiClient.patch(`/cart/increse/${id}`);
    getcart();
  };
  const decrese = async (id) => {
    await apiClient.patch(`/cart/decrease/${id}`);
    getcart();
  };
  const handelProductDelete = async (id) => {
    await apiClient.delete(`/cart/${id}`);
    getcart();
  };
  const checkout = () => {
    apiClient
      .post(`/order/create`)
      .then((res) => {
        toast.success("Order Placed Successfully"), getcart();
      })
      .catch((err) => toast.error("Error at the checkout"));
  };

  return (
    <section className="cart_main">
      <h2>Your Cart</h2>
      <section className="cart_main_contain">
        <div className="cart_items">
          {/* console.log(item.product.price) */}
          {cart[0]?.products.map((item) => (
            <CartCard
              key={item.product._id}
              id={item.product._id}
              img={`http://localhost:3000/products/${item.product.images[0]}`}
              qnty={item.quantity}
              title={item.product.title}
              price={item.product.price}
              increse={increse}
              decrese={decrese}
              handelProductDelete={handelProductDelete}
            />
          ))}
        </div>
        <div className="cart_payments">
          <p>Subtotal: ${totalvalue}</p>
          <p>Delivery: $0</p>
          <p>Total: ${totalvalue}</p>
          {cart[0]?.totalvalue > 0 && (
            <button className="check_out" onClick={checkout}>
              Checkout
            </button>
          )}
        </div>
      </section>
      <section className="cart_footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        voluptates sunt saepe vel, quasi obcaecati beatae aspernatur repellat
        dignissimos voluptatibus incidunt, maxime alias explicabo, debitis
        recusandae iusto nam. Facilis, ipsa.
      </section>
    </section>
  );
};

export default Cart;
