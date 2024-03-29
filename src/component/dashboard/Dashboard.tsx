import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import SideBar from '../sidebar/SideBar';
import { getPlaylistAPI } from '../../api/playlist';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useUser } from '../../hooks/useUser';
import SearchSong from '../search/SearchSong';
import { useDashboard } from '../../hooks/useDashboard';
import Playlist from '../playlist/Playlist';
import { DashboardStatusE } from '../../type/dashboard';
import { getCurrentUserAPI } from '../../api/user';
import Player from '../player/Player';
import Home from '../home/Home';

type Props = {
  code: string;
};

const Dashboard = ({ code }: Props) => {
  const accessToken = useAuth(code);
  const refresh = useRefreshToken();
  const { setPlaylists, setProfile } = useUser();
  const { status, playingSong } = useDashboard();

  useEffect(() => {
    const getPlaylist = async () => {
      const newAccessToken = await refresh();
      const resp = await getPlaylistAPI(newAccessToken);
      setPlaylists(resp.items);
    };

    const getUserProfile = async () => {
      const newAccessToken = await refresh();
      const resp = await getCurrentUserAPI(newAccessToken);
      setProfile(resp);
    };

    getPlaylist();
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <div className="text-white w-full p-[0.5rem] relative  ">
      <section className="flex gap-x-[0.5rem] ">
        <SideBar />
        {status === DashboardStatusE.HOME && <Home />}
        {status === DashboardStatusE.SEARCH && <SearchSong />}
        {status === DashboardStatusE.PLAYLIST && <Playlist />}
      </section>
      {playingSong && <Player />}
    </div>
  );
};

export default Dashboard;
