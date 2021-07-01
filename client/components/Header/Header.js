import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

const Header = () => {
  const { userAuthentication, toggleUserAuthentication } = useContext(
    AuthContext
  );
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">
          <img
            className="brand-logo"
            src="../static/images/logo.png"
            alt="Sabka Bazaar Logo"
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
          {userAuthentication === "logged-in" ? (
            <ul className="links">
              <li
                onClick={() => {
                  sessionStorage.setItem("status", "");
                  toggleUserAuthentication();
                }}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul className="links">
              <li>
                <Link to="/login">SignIn</Link>
              </li>
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </ul>
          )}
          <div className="my-cart">
            <Link to="/cart">
              <img
                className="cart-icon"
                src="../static/images/cart.svg"
                alt="cart image"
              />
              <span className="number-of-items">0 items</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
