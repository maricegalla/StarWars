import axios from 'axios';


const REACT_APP_URL = "https://akabab.github.io/starwars-api/api";

const api = axios.create({
  baseURL: REACT_APP_URL,
});

export default api;