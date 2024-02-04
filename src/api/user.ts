import { axiosService } from '../config/axiosService';
import { UserResponse } from '../type/user';

export const getCurrentUserAPI = async (
  accessToken: string
): Promise<UserResponse> => {
  const resp = await axiosService.get('/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return resp.data;
};
