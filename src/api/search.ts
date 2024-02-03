import { axiosService } from '../config/axiosService';
import { queryParams } from '../type/queryParams';
import { TrackResponse } from '../type/song';

export const searchAPI = async (
  queryString: queryParams,
  accessToken: string
): Promise<TrackResponse> => {
  const resp = await axiosService.get('/search', {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: queryString,
  });
  return resp.data.tracks;
};
