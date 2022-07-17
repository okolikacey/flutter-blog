import React from "react";
import twitter from "../assets/icon/twitter.svg";
import dribbble from "../assets/icon/dribbble.svg";
import figma from "../assets/icon/figma.svg";
import github from "../assets/icon/git.svg";
import dot from "../assets/icon/dot.svg";

import styles from "./styles/headericons.module.css";

function Headericons(props) {
  return (
    <div className={styles.container}>
      <img src={twitter} alt="twitter icon" />
      <img src={dot} alt="dot icon" />
      <img src={dribbble} alt="dribbble icon" />
      <img src={dot} alt="dot icon" />
      <img src={figma} alt="figma icon" />
      <img src={dot} alt="dot icon" />
      <img src={github} alt="github icon" />
    </div>
  );
}

export default Headericons;
