import client from "./client";

const ALL_POST = "posts";

const getAllPosts = () => client.apiClient.get(ALL_POST, {});

const getPostAuthor = (url) => client.apiClient.get(url, {});

export default {
  getAllPosts,
  getPostAuthor,
};
