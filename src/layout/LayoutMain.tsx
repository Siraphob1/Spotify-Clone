import { PropsWithChildren } from 'react';
import { useDashboard } from '../hooks/useDashboard';
import classNames from 'classnames';

const LayoutMain = ({ children }: PropsWithChildren) => {
  const { playingSong } = useDashboard();
  return (
    <div
      className={classNames(
        'bg-BgFirstPage   w-[calc(100vw-300px)] rounded-xl ',
        { ' h-[calc(100vh-1rem)]': !playingSong },
        { ' h-[calc(100vh-1rem-152px-0.5rem)]': playingSong }
      )}
    >
      {children}
    </div>
  );
};

export default LayoutMain;
