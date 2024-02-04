import { useEffect, useState } from 'react';
import { getPlaylistItemAPI } from '../../api/playlist';
import { useDashboard } from '../../hooks/useDashboard';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import LayoutMain from '../../layout/LayoutMain';
import { PlaylistItemResponse } from '../../type/playlist';
// type Props = {};

const Playlist = () => {
  const { selectPlaylist } = useDashboard();
  const refresh = useRefreshToken();

  const [playlistItem, setPlaylistItem] = useState<PlaylistItemResponse>();

  const getImage = (): string => {
    return selectPlaylist?.images[0].url || '';
  };

  const getPlaylistName = (): string => {
    return selectPlaylist?.name || '';
  };

  const getTotal = () => {
    const total = playlistItem?.total;
    if (!total) return 'NaN';

    if (total === 1) return `${total} song`;
    if (total > 1) return `${total} songs`;
  };

  const fetchPlaylistItem = async () => {
    const newAccessToken = await refresh();
    const playlistId = selectPlaylist?.id;
    if (!playlistId) return;

    const resp = await getPlaylistItemAPI(newAccessToken, playlistId);
    setPlaylistItem(resp);
    console.log('fetch playlist item', resp);
  };

  useEffect(() => {
    fetchPlaylistItem();
  }, [selectPlaylist?.id]);
  return (
    <LayoutMain>
      {playlistItem && (
        <section className="flex items-center gap-x-[1rem]  p-[2rem] border ">
          <img
            src={getImage()}
            alt={getImage()}
            className="w-[200px] h-[200px] rounded-md"
          />
          <section className="">
            <p className="uppercase">Playlist</p>
            <h1 className="text-[5rem] font-bold">{getPlaylistName()}</h1>
            <p>{getTotal()}</p>
          </section>
        </section>
      )}
    </LayoutMain>
  );
};

export default Playlist;
