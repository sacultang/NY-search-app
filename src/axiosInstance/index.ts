import axios, { AxiosRequestConfig } from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;
const config: AxiosRequestConfig = { baseURL: BASE_URL };

export const Axios = axios.create(config);
