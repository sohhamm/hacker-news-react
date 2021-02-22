import { useState, useEffect } from 'react';
import { getSearches } from '../utils/apis';

export default function useDataFetcher(query) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSearches(query)
      .then((res) => {
        // console.log(res);
        setSearchResults(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [query]);

  return { isLoading, searchResults };
}
