import axios from 'axios';
import { RefreshResponse } from '../type/login';
import { env } from '../environment/enviroment';

export const refreshTokenAPI = async (
  refreshToken: string
): Promise<RefreshResponse> => {
  const url = `${env.BackendURL}/refresh`;
  const resp = await axios.post(url, { refreshToken });
  return resp.data;
};
