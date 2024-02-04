import { Image, TrackItem } from './song';
export type PlaylistResponse = {
  items: PlaylistItem[];
  total: number;
};

export type PlaylistItem = {
  id: string;
  images: Image[];
  name: string;
  uri: string;
};

export type TrackInPlaylistId = {
  added_at: string;
  track: TrackItem;
};

export type PlaylistItemResponse = {
  items: TrackInPlaylistId[];
  total: number;
};
