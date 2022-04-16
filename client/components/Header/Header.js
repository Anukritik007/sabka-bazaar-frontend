import React, { useContext, useState } from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "../../AuthContext";

const Header = () => {
  const history = useHistory();
  const [showDrawer, setShowDrawer] = useState(false);
  const { userAuthentication, toggleUserAuthentication } = useContext(
    AuthContext
  );

  const cartItemsCount = useSelector(
    (state) =>
      state.cart && state.cart.itemsAdded && state.cart.itemsAdded.length
  );

  const getAuthJSX = () => {
    return userAuthentication === "logged-in" ? (
      <li
        onClick={() => {
          sessionStorage.setItem("status", "");
          toggleUserAuthentication();
        }}
      >
        <a href="#">Logout</a>
      </li>
    ) : (
      <>
        <li>
          <Link to="/login">SignIn</Link>
        </li>
        <li>
          <Link to="/sign-up">Register</Link>
        </li>
      </>
    );
  };

  return (
    <header
      className={`header ${showDrawer ? "expand-header" : "collapse-header"}`}
    >
      <nav className="navbar">
        <button
          className="hamburger"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="brand-name">
          <img
            className="brand-logo"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="100"
          />
        </div>
        <div className="left-nav">
          <ul className="tabs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className="links">{getAuthJSX()}</ul>
          <div className="my-cart">
            <Link to="/cart">
              <img
                className="cart-icon"
                src="../static/images/cart.svg"
                alt="cart image"
                height="27"
                width="30"
              />
              <span
                style={
                  cartItemsCount > 0 ? { color: "#ea1d71" } : { color: "gray" }
                }
              >
                {cartItemsCount} {cartItemsCount === 1 ? "item" : "items"}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="menubar">
        {showDrawer && (
          <ul
            className="hamburger-menu"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {getAuthJSX()}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
