import React from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import Post from '../Post/Post';

export default function Home() {
  const [search, setSearch] = React.useState('');
  const [query, setQuery] = React.useState('');

  //   const searchQuery = React.useContext(query);
  const { isLoading, searchResults } = useDataFetcher(query);

  const handleChange = (e) => {
    // console.log(e.target);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="search news"
          />
        </form>
      </div>
      {isLoading ? (
        <p>spinner</p>
      ) : (
        searchResults.map((ele, index) => {
          return (
            <Post objectID={ele.objectID} key={index}>
              {ele.title}
            </Post>
          );
        })
      )}
    </>
  );
}
