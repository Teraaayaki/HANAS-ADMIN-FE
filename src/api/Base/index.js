<<<<<<< HEAD
import axios from "axios";
import Cookies from "js-cookie";

const TOKEN = Cookies.get("access_token");

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
=======
import axios from 'axios';
import Cookies from 'js-cookie';

const TOKEN = Cookies.get('access_token');

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
>>>>>>> d64fdc1c974c953e252fcac480ceab73ce6f230c
});

export default API;
