import axios from 'axios';
import { LoginResponse } from '../type/login';
import { env } from '../environment/enviroment';

export const loginAPI = async (code: string): Promise<LoginResponse> => {
  const url = `${env.BackendURL}/login`;
  const resp = await axios.post(url, { code });
  return resp.data;
};
