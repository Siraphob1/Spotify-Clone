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
  return resp.data;
};

export const createPlaylistAPI = async (
  accessToken: string,
  userId: string,
  payload: PayloadCreatePlaylist
) => {
  const url = `/users/${userId}/playlists`;
  await axiosService.post(
    url,
    { ...payload, public: true },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};

export const saveSongToPlayListAPI = async (
  accessToken: string,
  playlistId: string,
  uris: string
) => {
  const url = `/playlists/${playlistId}/tracks?uris=${uris}`;
  const resp = await axiosService.post(
    url,
    {
      uris: [uris],
      position: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );
  console.log('save song to playlist', resp.data);
};

export const RemoveSongFromPlayListAPI = async (
  accessToken: string,
  playlistId: string,
  uris: string
) => {
  const url = `/playlists/${playlistId}/tracks`;
  await axiosService.delete(
    url,

    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        uris: [uris],
        position: 0,
      },
    }
  );
};
