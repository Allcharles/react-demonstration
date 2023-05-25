import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
});
client.defaults.headers.common["Content-Type"] = "application/json";

export default client;
