import { getPlaylistItemAPI } from '../../api/playlist';
import { useDashboard } from '../../hooks/useDashboard';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { DashboardStatusE } from '../../type/dashboard';
import { PlaylistItem } from '../../type/playlist';

type Props = {
  playlist?: PlaylistItem;
};

const Card = ({ playlist }: Props) => {
  const refresh = useRefreshToken();
  const { setStatus, setSelectPlaylist } = useDashboard();

  const getImage = () => {
    return playlist?.images[0].url;
  };

  const getPlaylistName = () => {
    return playlist?.name;
  };

  const getDescription = () => {
    return 'Playlist';
  };

  const fetchPlaylistItem = async () => {
    setStatus(DashboardStatusE.PLAYLIST);
    setSelectPlaylist(playlist);
  };

  return (
    <section
      className="flex gap-x-[1rem] p-[0.5rem]   hover:bg-h-playlist cursor-pointer rounded-md"
      onClick={fetchPlaylistItem}
    >
      <img src={getImage()} alt={getImage()} className="w-[50px] h-[50px]" />
      <section>
        <div>{getPlaylistName()}</div>
        <div className="text-[0.9rem] text-gray-400">{getDescription()}</div>
      </section>
    </section>
  );
};

export default Card;
