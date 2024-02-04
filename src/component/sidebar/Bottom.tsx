import { VscLibrary } from 'react-icons/vsc';
import { GoPlus } from 'react-icons/go';
import Tooltip from '../share/Tooltip';
import ButtonCircle from '../share/ButtonCircle';
import { useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import Card from '../playlist/Card';

type Props = {
  className: string;
};

const Bottom = ({ className }: Props) => {
  const { playlists } = useUser();
  useEffect(() => {
    console.log('playlists', playlists);
  }, [playlists]);
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
        <div className="flex items-center">
          <ButtonCircle
            label="Create new playlist"
            onClick={() => console.log('ss')}
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
    </div>
  );
};

export default Bottom;
