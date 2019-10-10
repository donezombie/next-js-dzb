import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EachPost = (props) => {
  const { query, data } = props;
  const { post } = query;
  const router = useRouter();

  const backToHome = useCallback(() => {
    router.back();
  }, [post]);

  return (
    <div>
      <div style={{ color: 'red' }} onClick={backToHome}>
        Back
      </div>
      This is post {post}
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
    </div>
  )
}

EachPost.getInitialProps = async ({ ctx }) => {
  const { post } = ctx.query;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`)
    return {
      data: response.data,
      query: post,
    }
  } catch (err) {
    return {
      data: null,
      err,
    }
  }
}

export default EachPost;