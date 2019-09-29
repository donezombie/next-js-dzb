import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const EachPost = (props) => {
  const { query, data } = props;
  const { id } = query;
  const router = useRouter();

  const backToHome = useCallback(() => {
    router.back();
  }, [id]);

  return (
    <div>
      <div style={{ color: 'red' }} onClick={backToHome}>
        Back
      </div>
      This is post {id}
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
    </div>
  )
}

EachPost.getInitialProps = async ({ query }) => {
  const { id } = query;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return {
      data: response.data,
      query
    }
  } catch (err) {
    return {
      data: null,
      err,
    }
  }
}

export default EachPost;