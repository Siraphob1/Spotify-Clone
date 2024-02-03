import { useEffect, useState } from 'react';
import { loginAPI } from '../api/login';
import { useUser } from './useUser';

export const useAuth = (code: string) => {
  const { refreshToken, setRefreshToken } = useUser();
  const [accessToken, setAccessToken] = useState<string>('');
  const [expiresIn, setExpiresIn] = useState<number>();

  useEffect(() => {
    const login = async () => {
      try {
        const resp = await loginAPI(code);
        setAccessToken(resp.accessToken);
        setRefreshToken(resp.refreshToken);
        setExpiresIn(resp.expiresIn);
        window.history.pushState({}, '', '/');
      } catch (error) {
        console.log(error);
        // window.location.assign('/');
      }
    };

    login();
  }, [code]);

  //   useEffect(() => {
  //     if (!refreshToken || !expiresIn) return;
  //     const interval = setInterval(() => {
  //       axios
  //         .post('http://localhost:3001/refresh', {
  //           refreshToken,
  //         })
  //         .then((res) => {
  //           setAccessToken(res.data.accessToken);
  //           setExpiresIn(res.data.expiresIn);
  //         })
  //         .catch(() => {
  //           window.location.assign('/');
  //         });
  //     }, (expiresIn - 60) * 1000);

  //     return () => clearInterval(interval);
  //   }, [refreshToken, expiresIn]);

  return accessToken;
};
