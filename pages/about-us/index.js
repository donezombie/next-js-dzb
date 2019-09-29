import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const AboutUs = (props) => {
  const { shows } = props;
  const router = useRouter()
  const { pid } = router.query
  return (
    <div>
      {shows.map(el => (
        <div key={el.score}>{el.score}</div>
      ))}
    </div>
  )
}

AboutUs.getInitialProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  return {
    shows: res.data
  };
}

export default AboutUs;

