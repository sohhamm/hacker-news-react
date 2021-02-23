import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Post.module.scss';

export default function Post({ children, objectID }) {
  const history = useHistory();

  const handleClick = (id) => {
    window.localStorage.setItem('id', Number(id));
    history.push('/PostDetails');
  };
  return (
    <>
      <div className={classes.list} onClick={() => handleClick(objectID)}>
        <p>{children}</p>
      </div>
    </>
  );
}
