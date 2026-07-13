import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Myorders from "../Myorders/Myorders";
import Cart from "../Cart/Cart";
import LoginPage from "../Authentication/LoginPage";
import Logout from "../Authentication/Logout";
import Signup from "../Authentication/SignupPage";
import SingleProduct from "../Products/SingleProduct/SingleProduct";
const Routes_CartKaro = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route
        path="/products/product/:id"
        element={<SingleProduct></SingleProduct>}
      ></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/myorder" element={<Myorders></Myorders>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/Logout" element={<Logout></Logout>}></Route>
    </Routes>
  );
};

export default Routes_CartKaro;
