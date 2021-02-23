import React from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import Post from '../Post/Post';
import classes from './Home.module.css';

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
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            className="input is-primary is-rounded"
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
