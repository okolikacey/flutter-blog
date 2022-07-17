import client from "./client";

const ALL_POST = "posts";

const getAllPosts = () => client.apiClient.get(ALL_POST, {});

export default {
  getAllPosts,
};
