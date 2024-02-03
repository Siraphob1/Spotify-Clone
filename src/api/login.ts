import axios from 'axios';
import { LoginResponse } from '../type/login';

export const loginAPI = async (code: string): Promise<LoginResponse> => {
  const url = 'http://localhost:3500/login';
  const resp = await axios.post(url, { code });
  return resp.data;
};
