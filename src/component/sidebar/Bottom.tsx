import { VscLibrary } from 'react-icons/vsc';
import { GoPlus } from 'react-icons/go';
import { IoReload } from 'react-icons/io5';
import Tooltip from '../share/Tooltip';
import ButtonCircle from '../share/ButtonCircle';
import { useUser } from '../../hooks/useUser';
import Card from '../playlist/Card';
import CreatePlaylist from '../playlist/CreatePlaylist';
import { useState } from 'react';
import { getPlaylistAPI } from '../../api/playlist';
import { useRefreshToken } from '../../hooks/useRefreshToken';

type Props = {
  className: string;
};

const Bottom = ({ className }: Props) => {
  const refresh = useRefreshToken();
  const { playlists, setPlaylists } = useUser();

  const [openCreatePlaylist, setOpenCreatePlaylist] = useState<boolean>(false);
  const [loadingReload, setLoadingReload] = useState<boolean>(false);

  const getPlaylist = async () => {
    try {
      setLoadingReload(true);
      const newAccessToken = await refresh();
      const resp = await getPlaylistAPI(newAccessToken);
      setPlaylists(resp.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingReload(false);
    }
  };
  return (
    <div className={className}>
      {/* section top */}
      <section className="flex justify-between items-center ">
        {/* left */}
        <Tooltip label="This is your library">
          <span className="flex items-center gap-x-[1rem]">
            <VscLibrary className="text-[1.5rem]" /> <span>Your Library</span>
          </span>
        </Tooltip>
        {/* right */}
        <div className="flex items-center gap-x-[0.5rem]">
          {/* reload button */}
          <ButtonCircle
            label="Reload"
            isLoading={loadingReload}
            onClick={() => console.log('ss')}
          >
            <IoReload className="text-[1.2rem]" onClick={getPlaylist} />
          </ButtonCircle>
          {/* create playlist */}
          <ButtonCircle
            label="Create new playlist"
            onClick={() => setOpenCreatePlaylist(true)}
          >
            <GoPlus className="text-[1.4rem]" />
          </ButtonCircle>
        </div>
      </section>

      {/* section bottom */}
      <section className="mt-[2rem]">
        {playlists?.map((element, index) => {
          return <Card key={index} playlist={element} />;
        })}
      </section>

      <CreatePlaylist
        isOpen={openCreatePlaylist}
        setOpen={setOpenCreatePlaylist}
      />
    </div>
  );
};

export default Bottom;
