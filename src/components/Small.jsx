import React from "react";
import styles from "./styles/small.module.css";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

function Small({ postItem }) {
  const { id, image, published, read_time, text, title, author } = postItem;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.text}>
        <div className={styles.time}>
          <b>Front-end</b> . {published}
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.readtime}>
          <text>{read_time} Min Read</text>
          <Link to={`/${id}`} state={{ id, image, published, title, author }}>
            <div className={styles.link}>
              Read Full <img src={arrow} alt="arrow right" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Small;
