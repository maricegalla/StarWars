import axios from 'axios';


const REACT_APP_URL = "https://swapi.dev/api/";

const api = axios.create({
  baseURL: REACT_APP_URL,
});

export default api;