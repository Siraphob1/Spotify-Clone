import axios from 'axios';
import { RefreshResponse } from '../type/login';

export const refreshTokenAPI = async (
  refreshToken: string
): Promise<RefreshResponse> => {
  const url = 'http://localhost:3500/refresh';
  const resp = await axios.post(url, { refreshToken });
  return resp.data;
};
