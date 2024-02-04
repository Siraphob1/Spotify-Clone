// import { useEffect, useState } from 'react';
// import Search from '../component/share/Search';
// import { useRefreshToken } from '../hooks/useRefreshToken';
// import { searchAPI } from '../api/search';
// import { queryParams } from '../type/queryParams';
// import { useSearch } from '../hooks/useSearch';
// import Card from '../component/song/Card';

import { PropsWithChildren } from 'react';

const LayoutMain = ({ children }: PropsWithChildren) => {
  // const refresh = useRefreshToken();
  // const { songs, setSongs } = useSearch();
  // const [search, setSearch] = useState<string>('');
  // const [clickedOptionId, setClickedOptionId] = useState<string>('');

  // const searchSong = async () => {
  //   if (!search) return;
  //   const accessToken = await refresh();
  //   const query: queryParams = {
  //     q: search,
  //     type: 'track',
  //   };
  //   const resp = await searchAPI(query, accessToken);
  //   setSongs(resp.items);
  //   console.log('searchSongs', resp);
  // };

  // const handleClickCardOption = (id: string) => {
  //   if (clickedOptionId === id) {
  //     setClickedOptionId('');
  //   } else {
  //     setClickedOptionId(id);
  //   }
  // };

  // useEffect(() => {
  //   searchSong();
  // }, [search]);

  return (
    <div className="bg-BgFirstPage   h-[calc(100vh-1rem)] w-[calc(100vw-300px)] rounded-xl p-[1rem]">
      {/* <Search
        placeholder={'What do you want to listen to?'}
        search={search}
        setSearch={setSearch}
      />

      <section className="mt-[2rem] h-[calc(100vh-10rem)] overflow-y-scroll">
        {songs?.map((element, index) => {
          return (
            <Card
              key={index}
              index={index}
              song={element}
              clickedOptionId={clickedOptionId}
              handleClickCardOption={handleClickCardOption}
            />
          );
        })}
      </section> */}
      {children}
    </div>
  );
};

export default LayoutMain;
