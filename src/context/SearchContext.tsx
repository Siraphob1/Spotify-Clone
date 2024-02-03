import { PropsWithChildren, createContext, useState } from 'react';
import { TrackItem } from '../type/song';

type SearchContextT = {
  songs: TrackItem[] | undefined;
  setSongs: React.Dispatch<React.SetStateAction<TrackItem[]>>;
};

const SearchContext = createContext<SearchContextT>(undefined!);

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [songs, setSongs] = useState<TrackItem[]>([]);

  return (
    <SearchContext.Provider value={{ songs, setSongs }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
