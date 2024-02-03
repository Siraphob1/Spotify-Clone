import Bottom from './Bottom';
import Top from './Top';

const SideBar = () => {
  return (
    <div className=" h-[calc(100vh-1rem)] w-[300px] flex flex-col gap-y-[0.5rem] ">
      <Top className="bg-BgFirstPage rounded-xl" />
      <Bottom className="bg-BgFirstPage w-full h-full rounded-xl p-[1rem] " />
    </div>
  );
};

export default SideBar;
