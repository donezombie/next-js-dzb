import React from 'react';
import Axios from 'axios';
import Link from 'next/link';

const EachUser = (props) => {
  const { data } = props;
  return (
    <div>
      <Link href="/users"><a>Back to list User</a></Link>
      <div>Id: {data.id}</div>
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <div>Phone: {data.phone}</div>
    </div>
  )
}

EachUser.getInitialProps = async ({ ctx }) => {
  const { user } = ctx.query;
  try {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${user}`);
    return {
      data: response.data,
    }
  } catch (error) {
    return {
      error,
      data: null,
    }
  }
}

export default EachUser;