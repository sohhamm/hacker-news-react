import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Made with{' '}
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: 'red', marginRight: 5 }}
          />
          by
          <a
            href="https://www.linkedin.com/in/sohhamm/"
            target="_blank"
            rel="noreferrer"
          >
            <strong> Soham Sarkar</strong>
          </a>
        </p>
      </div>
      <div className="content has-text-centered">
        <a
          className={classes.logos}
          href="https://www.instagram.com/codebandit/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className={classes.logos}
          href="https://github.com/sohhamm"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={classes.logos}
          href="https://twitter.com/sohhamm_"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className={classes.logos}
          href="https://www.linkedin.com/in/sohhamm/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="content has-text-centered">
        <p>
          <a
            href="https://github.com/sohhamm/hacker-news-react"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </p>
      </div>
    </footer>
  );
}
