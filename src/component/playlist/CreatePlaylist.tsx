import { IoMdClose } from 'react-icons/io';
import PlaylistImage from '../share/PlaylistImage';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { createPlaylistAPI, getPlaylistAPI } from '../../api/playlist';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useUser } from '../../hooks/useUser';
import { PayloadCreatePlaylist } from '../../type/playlist';

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreatePlaylist = ({ isOpen, setOpen }: Props) => {
  const refresh = useRefreshToken();
  const { profile, setPlaylists } = useUser();
  const [namePlaylist, setNamePlaylist] = useState<string>(`New playlist`);
  const [description, setDescription] = useState<string>('');
  const [loadingSave, setLoadingSave] = useState<boolean>(false);

  const getPlaylist = async () => {
    const newAccessToken = await refresh();
    const resp = await getPlaylistAPI(newAccessToken);
    setPlaylists(resp.items);
  };

  const handleCreatePlaylist = async () => {
    if (!namePlaylist) return;

    const newAccessToken = await refresh();
    const userId = profile?.id;
    if (!newAccessToken || !userId) return;

    setLoadingSave(true);

    const payload: PayloadCreatePlaylist = {
      name: namePlaylist,
      description: description,
    };

    try {
      await createPlaylistAPI(newAccessToken, userId, payload);
      getPlaylist();
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSave(false);
    }
  };

  useEffect(() => {
    setNamePlaylist(`New playlist ${moment().format('M/D/YYYY')}`);
  }, []);
  return (
    isOpen && (
      <section className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-30 z-[99] flex justify-center items-center">
        <main className="w-[470px]  p-[24px]  bg-n-createPlaylist rounded-lg flex flex-col gap-y-[1rem]">
          {/* top */}
          <section className="flex justify-between items-center">
            <h1 className="text-[1.5rem] font-bold shadow-2xl drop-shadow-2xl">
              Create a new playlist
            </h1>
            <IoMdClose
              className="text-[1.2rem] cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            />
          </section>
          {/* main */}
          <section className="flex gap-x-[1rem]">
            <PlaylistImage
              className={
                'bg-n-createPlaylist  w-[150px] h-[150px] text-[4rem] flex justify-center items-center rounded-md  shadow-2xl drop-shadow-2xl '
              }
            />
            <div className=" flex flex-col gap-y-[1rem]">
              <input
                type="text"
                placeholder="Add a playlist name"
                className="p-[0.5rem] pl-[1rem] rounded-md"
                value={namePlaylist}
                onChange={(e) => {
                  setNamePlaylist(e.target.value);
                }}
              />

              <textarea
                placeholder="Add a description"
                cols={30}
                rows={3}
                className="p-[0.5rem] pl-[1rem] rounded-md"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </section>

          {/* bottom */}
          <section className="flex justify-end">
            <button
              className="bg-white text-black font-bold px-[1rem] py-[0.2rem] rounded-xl"
              onClick={handleCreatePlaylist}
            >
              {loadingSave ? (
                <div>
                  <span className="loading loading-spinner"></span>
                  loading
                </div>
              ) : (
                <span>Save</span>
              )}
            </button>
          </section>
        </main>
      </section>
    )
  );
};

export default CreatePlaylist;
