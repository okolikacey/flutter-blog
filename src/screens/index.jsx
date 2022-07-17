import React, { useEffect, useState } from "react";
import Large from "../components/Large";
import Small from "../components/Small";
import Footer from "../components/Footer";
import styles from "./styles/index.module.css";
import postApi from "../api/post";

import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/postsSlice";

function Index(props) {
  const posts = useSelector((state) => state.postsDisplay.allPosts);
  const dispatch = useDispatch();

  const getPost = async () => {
    const response = await postApi.getAllPosts();
    if (!response.ok) return console.log(response.data);

    dispatch(postActions.initializePosts(response.data));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {posts &&
          posts.map((post, index) =>
            index === 0 ? (
              <div className={styles.large}>
                <Large postItem={post} />
              </div>
            ) : (
              <div className={styles.small}>
                <Small postItem={post} />
              </div>
            )
          )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Index;
