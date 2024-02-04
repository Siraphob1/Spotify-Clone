import { axiosService } from '../config/axiosService';
import { PlaylistResponse } from '../type/playlist';

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
) => {
  const url = `/playlists/${playlistId}/tracks`;
  const resp = await axiosService.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  console.log(resp);
};
