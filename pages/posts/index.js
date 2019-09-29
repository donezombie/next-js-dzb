import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const PostsView = (props) => {
  const { posts } = props;
  const posts10 = posts.slice(0, 10);
  return (
    <div>
      {posts10.map(el => (
        <div key={el.id}>
          <Link href={`/posts/post?id=${el.id}`} as={`/posts/${el.id}`}>
            <a>{el.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

PostsView.getInitialProps = async (props) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
      posts: res.data,
      query: props.query,
    }
  } catch (error) {
    return {
      posts: null,
    }
  }
}

export default PostsView;