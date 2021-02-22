import React from 'react';
import useDataFetcher from '../../hooks/useDataFetcher';

import { useHistory } from 'react-router-dom';

// export const idContext = React.createContext();

export default function Post({ children, objectID }) {
  const history = useHistory();

  const handleClick = (id) => {
    window.localStorage.setItem('id', Number(id));
    history.push('/PostDetails');
  };
  return (
    <>
      <div onClick={() => handleClick(objectID)}>{children}</div>
    </>
  );
}
