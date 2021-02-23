import React from 'react';
import axios from 'axios';
import classes from './PostDetails.module.scss';

const BASE_API_URL = 'https://hn.algolia.com/api/v1/items/';

export default function PostDetails() {
  const [post, setPost] = React.useState({
    title: '',
    points: 0,
    comments: [],
    created_at: '',
    author: '',
  });
  const [isloading, setIsloading] = React.useState(true);
  let id = window.localStorage.getItem('id');

  React.useEffect(() => {
    //fetch individual post
    const getPost = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}${id}`);
        console.log(data);
        setPost({
          title: data.title,
          points: data.points,
          comments: data.children,
          url: data.url,
          created_at: data.created_at,
          author: data.author,
        });
        setIsloading(false);
      } catch (e) {
        throw new Error(`${e.message}`);
      }
    };
    getPost();
  }, [id]);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="content">
      {isloading ? (
        <progress
          class="progress is-large
         is-primary"
          max="100"
        />
      ) : (
        <div className={classes.container}>
          <div className={classes.postDetails}>
            <a
              className={classes.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              {post.title}
            </a>
            <p>author:{post.author}</p>
            <p className={classes.points}>points:{post.points}</p>
            <button className="button is-primary" onClick={handleBack}>
              BACK
            </button>
          </div>
          {post.comments.map((e) => {
            let element = document.createElement('div');
            element.innerHTML = e.text;
            return (
              <p key={e.id}>
                {element.innerText}{' '}
                <span className="tag is-light">{e.created_at}</span>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
