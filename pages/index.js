import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head'
import Page from '../components/page';

const Home = (props) => {
  const state = useSelector(state => state.test2);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about-us"><a>About Us</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
        <Link href="/users"><a>Users</a></Link>
      </div>
    <button onClick={() => dispatch({ type: 'INCREASE'})}>Click To Increase</button>
    <button onClick={() => dispatch({ type: 'DECREASE'})}>Click To Decrease</button>
    <button onClick={() => dispatch({ type: 'REQUEST_GET_USER'})}>Get API SAGA</button>
    <div>Home</div>
    </div>
  )
}

Home.getInitialProps = (props) => {
  return {};
}

export default Home;
