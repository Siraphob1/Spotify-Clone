import { PropsWithChildren, createContext, useState } from 'react';
import { PlaylistItem } from '../type/playlist';

type UserContextT = {
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  playlists: PlaylistItem[];
  setPlaylists: React.Dispatch<React.SetStateAction<PlaylistItem[]>>;
};

const UserContext = createContext<UserContextT>(undefined!);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  return (
    <UserContext.Provider
      value={{ refreshToken, setRefreshToken, playlists, setPlaylists }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
