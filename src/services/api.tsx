import axios from "axios";

export const api = axios.create({
  baseURL: "https://acaiproject-34156-default-rtdb.firebaseio.com/",
});
