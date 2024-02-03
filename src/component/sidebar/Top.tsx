import { RiSearchEyeLine, RiSearchLine } from 'react-icons/ri';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { useState } from 'react';

type Props = {
  className: string;
};

const Top = ({ className }: Props) => {
  const listMenu = [
    {
      label: 'Home',
      iconClicked: <IoHome />,
      iconNormal: <IoHomeOutline />,
    },
    {
      label: 'Search',
      iconClicked: <RiSearchEyeLine />,
      iconNormal: <RiSearchLine />,
    },
  ];

  const [selectMenu, setSelectMenu] = useState<string>('');
  return (
    <div className={className}>
      {listMenu.map((element, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-x-[1rem] p-[1rem] cursor-pointer "
            onClick={() => {
              setSelectMenu(element.label);
            }}
          >
            <span className="text-[1.4rem]">
              {selectMenu === element.label
                ? element.iconClicked
                : element.iconNormal}
            </span>
            <span>{element.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Top;
