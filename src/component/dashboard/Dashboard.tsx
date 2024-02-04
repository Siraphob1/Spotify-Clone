import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import LayoutMain from '../../layout/LayoutMain';
import SideBar from '../sidebar/SideBar';
import { getPlaylistAPI } from '../../api/playlist';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useUser } from '../../hooks/useUser';
import SearchSong from '../search/SearchSong';

type Props = {
  code: string;
};

const Dashboard = ({ code }: Props) => {
  const accessToken = useAuth(code);
  const refresh = useRefreshToken();
  const { setPlaylists } = useUser();

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
        <SearchSong />
      </section>
    </div>
  );
};

export default Dashboard;
