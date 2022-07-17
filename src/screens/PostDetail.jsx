import React, { useEffect, useState } from "react";
import styles from "./styles/PostDetail.module.css";
import { useLocation } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import Small from "../components/Small";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import postApi from "../api/post";

function PostDetail(props) {
  const posts = useSelector((state) => state.postsDisplay.allPosts);
  const { state } = useLocation();
  dayjs.extend(relativeTime);

  const authorURL = state?._links?.author[0]?.href;
  const [author, setAuthor] = useState();

  const getAuthor = async () => {
    const response = await postApi.getPostAuthor(authorURL);
    if (!response.ok) return console.log(response.data);

    setAuthor(response.data.name);
  };

  useEffect(() => {
    getAuthor();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <>
      <div className={styles.container}>
        <div>{`By  ${author ? author : "Fetching author"} - ${dayjs(
          state.date
        ).fromNow()}`}</div>
        <h2>{parse(state.title.rendered)}</h2>
        {parse(state.content.rendered)}
        <img
          className={styles.postImage}
          src={state.jetpack_featured_media_url}
        />
      </div>
      <h1>More Articles</h1>

      <div className={styles.more}>
        {posts
          .filter((post) => post.id !== state.id)
          .map((item) => <Small key={item.id} postItem={item} />)
          .splice(0, 3)}
      </div>
    </>
  );
}

export default PostDetail;
