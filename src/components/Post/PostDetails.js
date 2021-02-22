import React from 'react';
import axios from 'axios';

const BASE_API_URL = 'https://hn.algolia.com/api/v1/items/';

export default function PostDetails() {
  const [post, setPost] = React.useState({
    title: '',
    points: 0,
    comments: [],
  });
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
        });
      } catch (e) {
        throw new Error(`${e.message}`);
      }
    };
    getPost();
  }, [id]);
  return (
    <div on>
      <a href={post.url} target="_blank" rel="noreferrer">
        {post.title}
      </a>
      <p>{post.points}</p>
      {post.comments.map((e) => {
        let element = document.createElement('div');
        element.innerHTML = e.text;
        return <p key={e.id}>{element.innerText}</p>;
      })}
    </div>
  );
}
