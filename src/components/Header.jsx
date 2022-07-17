import React from "react";
import Headericons from "./Headericons";
import logo from "../assets/icon/Dasdas Logo 1.svg";
import styles from "./styles/header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div>
        <Headericons />
      </div>
    </div>
  );
}

export default Header;
