import { IoIosPlay } from 'react-icons/io';
type Props = {
  icon?: JSX.Element;
  label: string;
  isDropdown?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
};

const FloatingMenu = ({
  icon,
  label,
  isDropdown,
  onClick,
  onMouseOver,
}: Props) => {
  return (
    <section
      className="w-[220px] h-[40px] flex items-center justify-between  bg-n-floating hover:bg-h-floating p-[0.5rem] rounded-sm cursor-pointer"
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      <div className="flex items-center gap-x-[0.5rem] ">
        {icon && <span>{icon}</span>}{' '}
        <span className="text-[0.9rem]">{label}</span>
      </div>
      {isDropdown && <IoIosPlay />}
    </section>
  );
};

export default FloatingMenu;
