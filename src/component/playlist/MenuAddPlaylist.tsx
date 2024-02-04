import FloatingMenu from '../share/FloatingMenu';
import { GoPlus } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';
import {
  createPlaylistAPI,
  getPlaylistAPI,
  saveSongToPlayListAPI,
} from '../../api/playlist';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useUser } from '../../hooks/useUser';
import { PayloadCreatePlaylist } from '../../type/playlist';
import moment from 'moment';
import classNames from 'classnames';

type Props = {
  onMouseLeave?: () => void;
  uri: string;
};

const MenuAddPlaylist = ({ onMouseLeave, uri }: Props) => {
  const refresh = useRefreshToken();
  const { profile, playlists, setPlaylists } = useUser();

  const getPlaylist = async () => {
    const newAccessToken = await refresh();
    const resp = await getPlaylistAPI(newAccessToken);
    setPlaylists(resp.items);
  };

  const handleCreatePlaylist = async () => {
    const newAccessToken = await refresh();
    const userId = profile?.id;
    if (!newAccessToken || !userId) return;

    const payload: PayloadCreatePlaylist = {
      name: `New playlist ${moment().format('M/D/YYYY')}`,
      description: '',
    };

    try {
      await createPlaylistAPI(newAccessToken, userId, payload);
      getPlaylist();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveSongToPlaylist = async (playlistId: string) => {
    try {
      const newAccessToken = await refresh();
      await saveSongToPlayListAPI(newAccessToken, playlistId, uri);
      getPlaylist();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="p-[0.5rem] bg-n-floating flex flex-col gap-y-[0.5rem]"
      onMouseLeave={onMouseLeave}
    >
      <section className="flex justify-center relative ">
        <input
          type="text"
          placeholder="Find a playlist"
          className="rounded-sm w-[220px] text-[0.9rem] pl-[1.5rem] py-[0.2rem]"
        />
        <RiSearchLine
          className={classNames('absolute top-[50%] translate-y-[-50%] ', {
            'left-[0.7rem]': playlists.length > 4,
            'left-[0.3rem]': playlists.length <= 4,
          })}
        />
      </section>
      <FloatingMenu
        icon={<GoPlus className="text-[1.2rem]" />}
        label="Create playlist"
        onClick={handleCreatePlaylist}
      />
      <hr className="border-gray-400" />
      <section
        className={classNames('h-[160px]', {
          'overflow-y-scroll': playlists.length > 4,
        })}
      >
        {playlists?.map((element, index) => {
          return (
            <FloatingMenu
              key={index}
              label={element.name}
              onClick={() => handleSaveSongToPlaylist(element.id)}
            />
          );
        })}
      </section>
    </section>
  );
};

export default MenuAddPlaylist;
