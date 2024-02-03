export type TrackResponse = {
  items: TrackItem[];
  total: number;
};

export type TrackItem = {
  artists: Artist[];
  album: Album;
  id: string;
  name: string;
  preview_url: string;
  uri: string;
};

export type Artist = {
  id: string;
  name: string;
  uri: string;
};

export type Album = {
  images: Image[];
  name: string;
};

export type Image = {
  height: number;
  url: string;
  width: number;
};
