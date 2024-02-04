import { useEffect, useState } from 'react';
import { getPlaylistItemAPI } from '../../api/playlist';
import { useDashboard } from '../../hooks/useDashboard';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import LayoutMain from '../../layout/LayoutMain';
import { PlaylistItemResponse, TrackInPlaylistId } from '../../type/playlist';
import Search from '../share/Search';
import Card from '../song/Card';
// type Props = {};

const Playlist = () => {
  const { selectPlaylist } = useDashboard();
  const refresh = useRefreshToken();

  const [playlistItem, setPlaylistItem] = useState<PlaylistItemResponse>();
  const [search, setSearch] = useState<string>('');
  const [clickedOptionId, setClickedOptionId] = useState<string>('');

  const [filterSongs, setFilterSongs] = useState<TrackInPlaylistId[]>([]);

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
    setFilterSongs(resp.items);
    setSearch('');
    console.log('fetch playlist item', resp);
  };

  const handleClickCardOption = (id: string) => {
    if (clickedOptionId === id) {
      setClickedOptionId('');
    } else {
      setClickedOptionId(id);
    }
  };

  // fetch when change playlist
  useEffect(() => {
    fetchPlaylistItem();
  }, [selectPlaylist?.id]);

  // filter when enter search
  useEffect(() => {
    const filterSearch = playlistItem?.items.filter((element) =>
      element.track.name.toLocaleLowerCase().includes(search)
    );
    if (!filterSearch) return setFilterSongs([]);
    setFilterSongs(filterSearch);
  }, [search]);

  return (
    <LayoutMain>
      {playlistItem && (
        <section className="flex items-center gap-x-[1rem]  p-[2rem]  ">
          <img
            src={getImage()}
            alt={getImage()}
            className="w-[150px] h-[150px] rounded-md"
          />
          <section className=" h-[150px] ">
            <p className="uppercase">Playlist</p>
            <h1 className="text-[4rem] font-bold ">{getPlaylistName()}</h1>
            <p>{getTotal()}</p>
          </section>
        </section>
      )}

      {/* search filter */}
      <section className="p-[1rem]">
        <Search placeholder={'Filter'} search={search} setSearch={setSearch} />
      </section>

      {/* song */}
      <section>
        {filterSongs?.map((element, index) => {
          return (
            <Card
              key={index}
              index={index}
              added_at={element.added_at}
              song={element.track}
              clickedOptionId={clickedOptionId}
              handleClickCardOption={handleClickCardOption}
            />
          );
        })}
      </section>
    </LayoutMain>
  );
};

export default Playlist;
