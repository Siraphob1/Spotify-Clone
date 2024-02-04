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

type Props = {
  code: string;
};

const Dashboard = ({ code }: Props) => {
  const accessToken = useAuth(code);
  const refresh = useRefreshToken();
  const { setPlaylists } = useUser();
  const { status } = useDashboard();

  useEffect(() => {
    const getPlaylist = async () => {
      const newAccessToken = await refresh();
      const resp = await getPlaylistAPI(newAccessToken);
      setPlaylists(resp.items);
    };
    getPlaylist();
  }, [accessToken]);

  return (
    <div className="text-white w-full p-[0.5rem] ">
      <section className="flex gap-x-[0.5rem]">
        <SideBar />
        {status === DashboardStatusE.SEARCH && <SearchSong />}
        {status === DashboardStatusE.PLAYLIST && <Playlist />}
      </section>
    </div>
  );
};

export default Dashboard;
