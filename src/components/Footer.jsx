import React from "react";
import styles from "./styles/footer.module.css";

function Footer(props) {
  return (
    <div className={styles.container}>
      <h2>Join our Team of Writers</h2>
      <p>
        On dasdas, writers earn a living doing what they love. <br /> Getting
        started is easy. Just pay a one time $25 fee and everything is ready to
        go.
      </p>
      <button>JOIN US</button>
    </div>
  );
}

export default Footer;
