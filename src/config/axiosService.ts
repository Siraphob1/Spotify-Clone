import axios from 'axios';

export const axiosService = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});
