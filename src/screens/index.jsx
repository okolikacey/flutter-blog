import React, { useEffect, useState } from "react";
import Large from "../components/Large";
import Small from "../components/Small";
import Footer from "../components/Footer";
import styles from "./styles/index.module.css";
import postApi from "../api/post";
import LoadingSpinner from "../components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/postsSlice";

function Index(props) {
  const posts = useSelector((state) => state.postsDisplay.allPosts);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getPost = async () => {
    setIsLoading(true);
    const response = await postApi.getAllPosts();
    if (!response.ok) {
      setIsLoading(false);
      return toast.error(
        "Posts could not be retrieved. Please check your internet connection "
      );
    }

    dispatch(postActions.initializePosts(response.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.container}>
          <ToastContainer />
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

          <Footer />
        </div>
      )}
    </>
  );
}

export default Index;
