import { RiSearchEyeLine, RiSearchLine } from 'react-icons/ri';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useDashboard } from '../../hooks/useDashboard';
import { DashboardStatusE } from '../../type/dashboard';

type Props = {
  className: string;
};

const Top = ({ className }: Props) => {
  const { status, setStatus } = useDashboard();
  const [selectMenu, setSelectMenu] = useState<string>('Home');
  const listMenu = [
    {
      label: 'Home',
      iconClicked: <IoHome />,
      iconNormal: <IoHomeOutline />,
      onClick: () => {
        setStatus(DashboardStatusE.HOME);
        setSelectMenu('Home');
      },
    },
    {
      label: 'Search',
      iconClicked: <RiSearchEyeLine />,
      iconNormal: <RiSearchLine />,
      onClick: () => {
        setStatus(DashboardStatusE.SEARCH);
        setSelectMenu('Search');
      },
    },
  ];

  return (
    <div className={className}>
      {listMenu.map((element, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-x-[1rem] p-[1rem] cursor-pointer "
            onClick={element.onClick}
          >
            <span className="text-[1.4rem]">
              {(status === DashboardStatusE.HOME ||
                status === DashboardStatusE.SEARCH) &&
              selectMenu === element.label
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
