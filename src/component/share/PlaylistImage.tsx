import { PiMusicNotesFill } from 'react-icons/pi';

type Props = {
  className: string;
};
const PlaylistImage = ({ className }: Props) => {
  return (
    <div className={className}>
      <PiMusicNotesFill />
    </div>
  );
};

export default PlaylistImage;
