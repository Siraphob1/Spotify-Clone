import { useDashboard } from '../../hooks/useDashboard';
// import { useRefreshToken } from '../../hooks/useRefreshToken';
import { DashboardStatusE } from '../../type/dashboard';
import { PlaylistItem } from '../../type/playlist';
import PlaylistImage from '../share/PlaylistImage';

type Props = {
  playlist?: PlaylistItem;
};

const Card = ({ playlist }: Props) => {
  //   const refresh = useRefreshToken();
  const { setStatus, setSelectPlaylist } = useDashboard();

  const getImage = () => {
    return playlist?.images[0]?.url;
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
      {!!getImage() && (
        <img src={getImage()} alt={getImage()} className="w-[50px] h-[50px]" />
      )}
      {!getImage() && (
        <PlaylistImage
          className={
            'bg-n-createPlaylist  w-[50px] h-[50px] text-[1.5rem] flex justify-center items-center rounded-md  shadow-2xl drop-shadow-2xl '
          }
        />
      )}

      <section>
        <div>{getPlaylistName()}</div>
        <div className="text-[0.9rem] text-gray-400">{getDescription()}</div>
      </section>
    </section>
  );
};

export default Card;
