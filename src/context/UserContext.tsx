import { PropsWithChildren, createContext, useState } from 'react';
import { PlaylistItem } from '../type/playlist';
import { UserResponse } from '../type/user';

type UserContextT = {
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
  profile: UserResponse | undefined;
  setProfile: React.Dispatch<React.SetStateAction<UserResponse | undefined>>;
  playlists: PlaylistItem[];
  setPlaylists: React.Dispatch<React.SetStateAction<PlaylistItem[]>>;
};

const UserContext = createContext<UserContextT>(undefined!);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [profile, setProfile] = useState<UserResponse>();
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  return (
    <UserContext.Provider
      value={{
        refreshToken,
        setRefreshToken,
        playlists,
        setPlaylists,
        profile,
        setProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
