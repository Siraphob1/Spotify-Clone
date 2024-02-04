import { PropsWithChildren } from 'react';

const LayoutMain = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-BgFirstPage   h-[calc(100vh-1rem)] w-[calc(100vw-300px)] rounded-xl ">
      {children}
    </div>
  );
};

export default LayoutMain;
