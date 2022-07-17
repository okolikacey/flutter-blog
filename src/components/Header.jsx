import React from "react";
import Headericons from "./Headericons";
import logo from "../assets/icon/Dasdas Logo 1.svg";
import styles from "./styles/header.module.css";

function Header(props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <div>
        <Headericons />
      </div>
    </div>
  );
}

export default Header;
