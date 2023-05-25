import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});
axiosClient.defaults.headers.common["Content-Type"] = "application/json";
export default axiosClient;
