import axios from "axios";

const ajax = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  timeout: 10000
});

export default ajax;
