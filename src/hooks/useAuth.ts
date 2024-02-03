import { useEffect, useState } from 'react';
import { loginAPI } from '../api/login';
import { useUser } from './useUser';
import { refreshTokenAPI } from '../api/refresh';

export const useAuth = (code: string) => {
  const { refreshToken, setRefreshToken } = useUser();
  const [accessToken, setAccessToken] = useState<string>('');
  const [expiresIn, setExpiresIn] = useState<number>();

  useEffect(() => {
    const login = async () => {
      console.log(new Date().toString());
      try {
        const resp = await loginAPI(code);
        setAccessToken(resp.accessToken);
        setRefreshToken(resp.refreshToken);
        setExpiresIn(resp.expiresIn);

        window.history.pushState({}, '', '/');
      } catch (error) {
        console.log(error);
        window.location.assign('/');
      }
    };

    login();
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      async () => {
        try {
          const { accessToken, expiresIn } = await refreshTokenAPI(
            refreshToken
          );
          setAccessToken(accessToken);
          setExpiresIn(expiresIn);
        } catch (error) {
          console.log(error);
          window.location.assign('/');
        }
      };
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};
