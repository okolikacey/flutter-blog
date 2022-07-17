import React from "react";
import image from "../assets/large.svg";
import styles from "./styles/large.module.css";
import arrow from "../assets/arrow.svg";

function Large(props) {
  return (
    <div className={styles.container}>
      <img src={image} alt="large icon" />
      <div className={styles.text}>
        <div className={styles.time}>
          <b>Front-end</b> . 1 Hour Ago
        </div>
        <h2>Optimizing CSS for faster page loads</h2>
        <p>
          Not long ago I decided to improve the loading times of my website. It
          already loads pretty fast, but I knew there was still room for
          improvement and one of them was CSS loading. I will walk you through
          the process and show you how you can improve your load times as well.
          <br />
          <br />
          To see how CSS affects the load time of a webpage we first have to
          know how the browser converts an HTML document into a functional
          webpage...
        </p>
        <div className={styles.readtime}>
          <text>3 Min Read</text>
          <text>
            {" "}
            Read Full <img src={arrow} alt="arrow right" />{" "}
          </text>
        </div>
      </div>
    </div>
  );
}

export default Large;
