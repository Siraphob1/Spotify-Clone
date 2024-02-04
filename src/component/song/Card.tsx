import { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import { IoIosPlay, IoMdTrash } from 'react-icons/io';
import Tooltip from '../share/Tooltip';
import FloatingMenu from '../share/FloatingMenu';
import { TrackItem } from '../../type/song';
import { ToolTipPositionE } from '../../type/tooltip';
import { Menu } from '../../type/floatingMenu';
import MenuAddPlaylist from '../playlist/MenuAddPlaylist';
import moment from 'moment';
import { useDashboard } from '../../hooks/useDashboard';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { RemoveSongFromPlayListAPI, getPlaylistAPI } from '../../api/playlist';
import { useUser } from '../../hooks/useUser';

type Props = {
  index: number;
  added_at?: string;
  song: TrackItem;
  clickedOptionId: string;
  handleClickCardOption: (id: string) => void;
};

const Card = ({
  index,
  added_at,
  song,
  clickedOptionId,
  handleClickCardOption,
}: Props) => {
  const optionMenu: Menu[] = [
    {
      label: 'Add to playlist',
      icon: <GoPlus className="text-[1.2rem]" />,
      isDropdown: true,
      onMouseOver: () => {
        setShowAddPlaylist(true);
      },
    },
    // {
    //   label: 'Save to your Liked Songs',
    //   icon: <GoPlus className="text-[1.2rem]" />,
    //   isDropdown: false,
    //   onMouseOver: () => {
    //     setShowAddPlaylist(false);
    //   },
    // },
  ];
  const refresh = useRefreshToken();
  const { selectPlaylist } = useDashboard();
  const { setPlaylists } = useUser();
  const [showAddPlaylist, setShowAddPlaylist] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const getImage = (): string => {
    const imageUrl = song.album.images[0]?.url;
    return imageUrl;
  };

  const getNameSong = (): string => {
    return song.name;
  };

  const getNameArtist = (): string => {
    return song.artists[0].name;
  };

  const getAlbumName = (): string => {
    return song.album.name;
  };

  const getDate = () => {
    return moment(added_at).fromNow();
  };

  const getPlaylist = async () => {
    const newAccessToken = await refresh();
    const resp = await getPlaylistAPI(newAccessToken);
    setPlaylists(resp.items);
  };

  const handleRemoveSongFromPlaylist = async () => {
    const newAccessToken = await refresh();
    const playlistId = selectPlaylist?.id;
    const uri = song.uri;
    if (!playlistId || !uri) return;
    try {
      await RemoveSongFromPlayListAPI(newAccessToken, playlistId, uri);
      getPlaylist();
      handleClickCardOption(song.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="flex items-center justify-between  p-[0.5rem] pr-[2rem] hover:bg-hoverSong  rounded-md "
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <section className="flex items-center gap-x-[1rem] text-[0.9rem]  w-full cursor-pointer">
        {/* no songs */}
        <section className="flex justify-center  w-[2rem]">
          {isHover ? <IoIosPlay className="text-[2rem] " /> : index + 1}
        </section>
        {/* title  */}
        <section className="flex gap-x-[1rem] w-[200px] md:w-[300px] lg:w-[400px]">
          <img
            src={getImage()}
            alt={getImage()}
            className="w-[50px] h-[50px] rounded-lg"
          />
          <div>
            <div>{getNameSong()}</div>
            <div>{getNameArtist()}</div>
          </div>
        </section>
        {/* album */}
        <section className="w-[220px]">{getAlbumName()}</section>
        {/* date */}
        {!!added_at && <section>{getDate()}</section>}
      </section>
      {/* option button */}
      <section className=" relative">
        <Tooltip
          label={`More option for ${getNameSong()}`}
          position={ToolTipPositionE.LEFT}
        >
          <HiOutlineDotsHorizontal
            className="cursor-pointer"
            onClick={() => {
              handleClickCardOption(song.id);
              setShowAddPlaylist(false);
            }}
          />
        </Tooltip>

        <div className="absolute right-0 z-[2]">
          {clickedOptionId === song.id && (
            <div className="flex flex-row-reverse gap-x-[0rem] ">
              <div>
                {optionMenu?.map((element, index) => {
                  return (
                    <FloatingMenu
                      key={index}
                      icon={element.icon}
                      label={element.label}
                      isDropdown={element.isDropdown}
                      onMouseOver={element.onMouseOver}
                    />
                  );
                })}

                {!!added_at && (
                  <FloatingMenu
                    icon={<IoMdTrash />}
                    label={'Remove from this playlist'}
                    onClick={handleRemoveSongFromPlaylist}
                    onMouseOver={() => setShowAddPlaylist(false)}
                  />
                )}
              </div>

              {showAddPlaylist && (
                <MenuAddPlaylist
                  uri={song?.uri}
                  onClick={() => {
                    setShowAddPlaylist(false);
                    handleClickCardOption(song.id);
                  }}
                />
              )}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Card;
