import classNames from 'classnames';
import Bottom from './Bottom';
import Top from './Top';
import { useDashboard } from '../../hooks/useDashboard';

const SideBar = () => {
  const { playingSong } = useDashboard();
  return (
    <div
      className={classNames(' w-[300px] flex flex-col gap-y-[0.5rem] ', {
        'h-[calc(100vh-1rem)]': !playingSong,
        'h-[calc(100vh-1rem-152px)]': !!playingSong,
      })}
    >
      <Top className="bg-BgFirstPage rounded-xl" />
      <Bottom
        className={classNames('bg-BgFirstPage w-full  rounded-xl p-[1rem] ', {
          ' h-full': !playingSong,
          ' h-[calc(100%-1rem -152px - 2rem)]': !!playingSong,
        })}
      />
    </div>
  );
};

export default SideBar;
