import React from "react";
import styles from "./styles/small.module.css";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import parse from "html-react-parser";

function Small({ postItem }) {
  dayjs.extend(relativeTime);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={postItem.jetpack_featured_media_url}
          alt={postItem.title.rendered}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.time}>
          <b>Front-end </b> <div className={styles.dot}> . </div>{" "}
          {dayjs(postItem.date).fromNow()}
        </div>
        <div className={styles.body}>
          <h2>{parse(postItem.title.rendered)}</h2>
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

export default Small;
