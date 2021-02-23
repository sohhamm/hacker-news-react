import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Post({ children, objectID }) {
  const history = useHistory();

  const handleClick = (id) => {
    window.localStorage.setItem('id', Number(id));
    history.push('/PostDetails');
  };
  return (
    <>
      <div className="box" onClick={() => handleClick(objectID)}>
        {children}
      </div>
    </>
  );
}
