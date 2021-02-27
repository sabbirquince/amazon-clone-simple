import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />

      <nav className="navigation">
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/manage">Manage Inventory</a>
      </nav>
    </header>
  );
};

export default Header;
