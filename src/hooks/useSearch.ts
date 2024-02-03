import { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export const useSearch = () => {
  return useContext(SearchContext);
};
