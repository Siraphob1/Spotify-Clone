import { refreshTokenAPI } from '../api/refresh';
import { useUser } from './useUser';

export const useRefreshToken = () => {
  const { refreshToken } = useUser();
  const refresh = async () => {
    const resp = await refreshTokenAPI(refreshToken);
    return resp.accessToken;
  };

  return refresh;
};
