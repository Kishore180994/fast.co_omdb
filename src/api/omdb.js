import axios from 'axios';

const APIKEY = '1fb9c0d8';
// API
export default axios.create({
  baseURL: `https://www.omdbapi.com/`,
  params: {
    apikey: APIKEY,
  },
});
