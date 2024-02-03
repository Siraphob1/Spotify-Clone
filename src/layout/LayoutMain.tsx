import { useState } from 'react';
import Search from '../component/share/Search';

const LayoutMain = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="bg-BgFirstPage   h-[calc(100vh-1rem)] w-[calc(100vw-300px)] rounded-xl p-[1rem]">
      <Search
        placeholder={'What do you want to listen to?'}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default LayoutMain;
