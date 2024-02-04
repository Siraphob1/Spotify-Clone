import { axiosService } from '../config/axiosService';
import {
  PayloadCreatePlaylist,
  PlaylistItemResponse,
  PlaylistResponse,
} from '../type/playlist';

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

export const createPlaylistAPI = async (
  accessToken: string,
  userId: string,
  payload: PayloadCreatePlaylist
) => {
  const url = `/users/${userId}/playlists`;
  const resp = await axiosService.post(
    url,
    { ...payload, public: true },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  console.log('create playlist', resp.data);
};
