import React from 'react';
import { useSelector } from 'react-redux';

const Page = props => {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div>
      Test Page
    </div>
  )
}

export default Page;