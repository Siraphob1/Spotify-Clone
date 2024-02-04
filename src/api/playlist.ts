import { axiosService } from '../config/axiosService';
import { PlaylistItemResponse, PlaylistResponse } from '../type/playlist';

export const getPlaylistAPI = async (
  accessToken: string
): Promise<PlaylistResponse> => {
  const resp = await axiosService.get('/me/playlists', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  //   console.log(resp.data);
  return resp.data;
};

export const getPlaylistItemAPI = async (
  accessToken: string,
  playlistId: string
): Promise<PlaylistItemResponse> => {
  const url = `/playlists/${playlistId}/tracks`;
  const resp = await axiosService.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  //   console.log(resp);
  return resp.data;
};
