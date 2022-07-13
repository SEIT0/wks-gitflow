import axios from 'axios';

const baseURL = 'https://swapi.dev/api'
// const baseURL = 'https://www.swapi.it/api';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);
