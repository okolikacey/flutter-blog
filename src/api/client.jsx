import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://techcrunch.com/wp-json/wp/v2/",
  timeout: 15000,
});

export default { apiClient };
