import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import cartContext from "./contexts/cartContext.js";
import "./App.css";
import "react-toastify/ReactToastify.css";
import Nav from "../src/components/Nav/Nav.jsx";
import Routes_CartKaro from "./components/Common/Routes_CartKaro";
import sendjwt from "./utils/sendJwt.js";
import { addtocart, getCartApi } from "./services/cartService.js";
import userContext from "./contexts/userContext.js";
sendjwt(localStorage.getItem("token"));
const App = () => {
  const [user, setuser] = useState(null);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    try {
      const jwtuser = jwtDecode(localStorage.getItem("token"));
      if (Date.now() >= jwtuser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setuser(jwtuser);
      }
    } catch (error) {}
  }, []);

  const cartLogic = (product, quantity) => {
    addtocart(product, quantity)
      .then((res) => {
        toast.success("Product added successfully"), getcart();
      })
      .catch((err) => {
        toast.error("Faild to add product");
      });
  };

  const getcart = () => {
    getCartApi()
      .then((res) => setcart(res.data))
      .catch((err) => toast.error("Somthing went wrong"));
  };
  useEffect(() => {
    if (user) {
      getcart();
    }
  }, [user]);
  const cartCount =
    cart?.[0]?.products.reduce((sum, item) => sum + item.quantity, 0) || 0;
  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <Nav cartCount={cartCount} />
        <main>
          <ToastContainer position="bottom-right" />
          <cartContext.Provider value={{ cart, getcart, cartLogic }}>
            <Routes_CartKaro />
          </cartContext.Provider>
        </main>
      </div>
    </userContext.Provider>
  );
};

export default App;
