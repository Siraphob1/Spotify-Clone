import { TrackItem } from '../../type/song';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import Tooltip from '../share/Tooltip';
import { ToolTipPositionE } from '../../type/tooltip';
import { Menu } from '../../type/floatingMenu';
import FloatingMenu from '../share/FloatingMenu';
import { useState } from 'react';
import MenuAddPlaylist from '../playlist/MenuAddPlaylist';

type Props = {
  index: number;
  song: TrackItem;
  clickedOptionId: string;
  handleClickCardOption: (id: string) => void;
};

const Card = ({
  index,
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
    {
      label: 'Save to your Liked Songs',
      icon: <GoPlus className="text-[1.2rem]" />,
      isDropdown: false,
      onMouseOver: () => {
        setShowAddPlaylist(false);
      },
    },
  ];
  const [showAddPlaylist, setShowAddPlaylist] = useState<boolean>(false);

  const getImage = (): string => {
    const imageUrl = song.album.images[0].url;
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
  return (
    <section className="flex items-center justify-between  p-[0.5rem] pr-[2rem] hover:bg-hoverSong  rounded-md ">
      <section className="flex items-center gap-x-[1rem] text-[0.9rem]  w-full cursor-pointer">
        {/* no songs */}
        <section className="px-[1rem]">{index + 1}</section>
        {/* title  */}
        <section className="flex gap-x-[1rem] w-[400px]">
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
        <section>{getAlbumName()}</section>
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

        <div className="absolute right-0 ">
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
              </div>

              {showAddPlaylist && <MenuAddPlaylist onMouseLeave={() => {}} />}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Card;
