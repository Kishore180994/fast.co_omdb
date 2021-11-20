import axios from 'axios';

const APIKEY = '1fb9c0d8';
export default axios.create({
  baseURL: `http://www.omdbapi.com/`,
  params: {
    apikey: APIKEY,
  },
});
