import { PropsWithChildren, createContext, useState } from 'react';
import { DashboardStatusE } from '../type/dashboard';
import { PlaylistItem } from '../type/playlist';
import { TrackItem } from '../type/song';

type DashboardContextT = {
  status: DashboardStatusE;
  setStatus: React.Dispatch<React.SetStateAction<DashboardStatusE>>;
  selectPlaylist: PlaylistItem | undefined;
  setSelectPlaylist: React.Dispatch<
    React.SetStateAction<PlaylistItem | undefined>
  >;
  playingSong: TrackItem | undefined;
  setPlayingSong: React.Dispatch<React.SetStateAction<TrackItem | undefined>>;
};

const DashboardContext = createContext<DashboardContextT>(undefined!);

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<DashboardStatusE>(
    DashboardStatusE.SEARCH
  );
  const [selectPlaylist, setSelectPlaylist] = useState<PlaylistItem>();
  const [playingSong, setPlayingSong] = useState<TrackItem>();

  return (
    <DashboardContext.Provider
      value={{
        status,
        setStatus,
        selectPlaylist,
        setSelectPlaylist,
        playingSong,
        setPlayingSong,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
