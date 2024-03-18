import React from "react";
import headerLogo from "../../assets/crud-logo.png";
import Styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={Styles.header}>
      <div className="container">
        <div className={Styles.headerContainer}>
          <img src={headerLogo} alt="header logo" />
          <nav className={Styles.headerNav}>
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
