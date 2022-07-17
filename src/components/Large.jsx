import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import image from "../assets/large.svg";
import styles from "./styles/large.module.css";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import parse from "html-react-parser";

function Large({ postItem }) {
  dayjs.extend(relativeTime);
  return (
    <div className={styles.container}>
      <img
        src={postItem.jetpack_featured_media_url}
        alt="large icon"
        height={280}
        width={500}
      />
      <div className={styles.text}>
        <div className={styles.time}>
          <b>Front-end</b> . {dayjs(postItem.date).fromNow()}
        </div>
        <div className={styles.body}>
          <h2>{postItem.title.rendered}</h2>
          {parse(postItem.excerpt.rendered)}
        </div>

        <div className={styles.readtime}>
          <text>3 Min Read</text>

          <Link to={`/${postItem.id}`} state={postItem}>
            <div className={styles.link}>
              Read Full <img src={arrow} alt="arrow right" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Large;
