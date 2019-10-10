import React, { useState } from 'react';
import Axios from 'axios';
import Link from 'next/link';

const Users = (props) => {
  const { data } = props;
  const [loading, setLoading] = useState(false);
  return (
    loading ? (
      <div> Loading... </div>
    ) : (
      data.map(el => (
        <div key={el.id}>
          <div>Name: {el.name}</div>
          <div>Phone: {el.phone}</div>
          <div>Username: {el.username} </div>
          <div>Website: {el.website} </div>
          <Link href={`/users/[user1]`} as={`/users/${el.id}`}>
            <a onClick={() => setLoading(true)}>More detail</a>
          </Link>
          <div>_________</div>
          <br />
        </div>
      ))
    )
  )
}

Users.getInitialProps = async () => {
  try {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      data: response.data
    }
  } catch (error) {
    return {
      error,
      data: null,
    }
  }
}

export default Users;