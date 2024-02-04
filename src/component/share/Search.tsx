import { ChangeEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';

type Props = {
  className?: string;
  placeholder: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
const Search = ({ className, placeholder, search, setSearch }: Props) => {
  const handleClear = () => {
    setSearch('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={className ? className : 'relative  max-w-xs'}>
      <IoSearchOutline className="absolute top-[50%] translate-y-[-50%] left-[1rem] text-[1.4rem]" />
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered input-accent text-[0.9rem] w-full  rounded-full pl-[3rem] pr-[2rem]"
        value={search}
        onChange={handleChange}
      />
      {search.trim().length >= 1 && (
        <IoMdClose
          className="absolute top-[50%] translate-y-[-50%] right-[1rem] text-[1.4rem] cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default Search;
