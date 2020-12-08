import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.hgbrasil.com/weather?woeid=434863&format=json-cors&locale=pt",
});

export default api;
