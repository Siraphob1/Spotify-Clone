import FloatingMenu from '../share/FloatingMenu';
import { GoPlus } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';

type Props = {
  onMouseLeave: () => void;
};

const MenuAddPlaylist = ({ onMouseLeave }: Props) => {
  return (
    <section
      className="p-[0.5rem] bg-n-floating flex flex-col gap-y-[0.5rem]"
      onMouseLeave={onMouseLeave}
    >
      <section className="flex justify-center relative">
        <input
          type="text"
          placeholder="Find a playlist"
          className="rounded-sm w-[200px] text-[0.9rem] pl-[1.5rem] py-[0.2rem]"
        />
        <RiSearchLine className="absolute top-[50%] translate-y-[-50%] left-[0.3rem]" />
      </section>
      <FloatingMenu
        icon={<GoPlus className="text-[1.2rem]" />}
        label="Create playlist"
      />
      <FloatingMenu label="Create playlist" />
    </section>
  );
};

export default MenuAddPlaylist;
