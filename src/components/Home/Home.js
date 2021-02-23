import React from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';
import Post from '../Post/Post';
import classes from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <div className="content">
      <div className={classes.bar}>
        <form className={classes.form} onSubmit={handleSubmit}>
          {/* <input
            classNameName="input is-primary is-rounded"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="search news"
          /> */}
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-primary is-rounded"
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="search news"
              />
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </form>
      </div>
      {isLoading ? (
        <div className={classes.progress}>
          <progress
            className="progress is-large
         is-primary"
            max="100"
          />
        </div>
      ) : (
        searchResults.map((ele, index) => {
          return (
            <Post objectID={ele.objectID} key={index}>
              {ele.title}
            </Post>
          );
        })
      )}
    </div>
  );
}
