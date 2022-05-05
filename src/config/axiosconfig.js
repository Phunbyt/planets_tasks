import axios from 'axios';
const BASE_URL = 'https://swapi.dev/api/planets';

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
