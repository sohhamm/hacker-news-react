import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title" onClick={handleClick}>
          Hacker News
        </p>
        <p className="subtitle">Happy Hacking!</p>
      </div>
    </section>
  );
}
