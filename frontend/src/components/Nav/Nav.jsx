import React, { useContext, useState } from "react";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";
const Nav = ({ cartCount }) => {
  const { user } = useContext(userContext);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handelsubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <h1 className="navBarH1">Cart Karo</h1>
        <form className="navBarSearch" onSubmit={handelsubmit}>
          <input
            type="text"
            name=""
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search Products"
            id=""
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="navbarRight">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          {!user && (
            <>
              {" "}
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              {" "}
              <li>
                <NavLink to="/myorder">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/Logout">Log Out</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  Cart <p>{cartCount}</p>{" "}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
