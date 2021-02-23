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
        <div className={classes.progress}>
          <progress
            className="progress is-large
         is-primary"
            max="100"
          />
        </div>
      ) : (
        <div className={classes.container}>
          <button className={classes.button1} onClick={handleBack}>
            BACK
          </button>
          <div className={classes.postDetails}>
            <a
              className={classes.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
            >
              {post.title}
            </a>
            <p className={classes.author}>Author-{post.author}</p>
            <p className={classes.points}>
              <span>
                points: <strong>{post.points}</strong>
              </span>
            </p>
          </div>
          <div className>
            <div className={classes.comments}>COMMENTS</div>
            {post.comments.map((e) => {
              let element = document.createElement('div');
              element.innerHTML = e.text;
              return (
                <div className={classes.list} key={e.id}>
                  {element.innerText}
                  {/* <span className="tag is-light">{e.created_at}</span> */}
                </div>
              );
            })}
            <div className={classes.buttonDiv}>
              <button className={classes.button2} onClick={handleBack}>
                BACK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
