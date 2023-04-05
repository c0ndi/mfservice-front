import axios from 'axios';

export const strapiURL = process.env.NEXT_PUBLIC_STRAPI;

const instance = axios.create({
  baseURL: strapiURL + "/api",
});

export default instance;
