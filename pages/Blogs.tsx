import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import BlogsComponent from '../components/Blogs';
import Management from '../components/Management';
import Loading from '../components/Loading';

const Blogs = () => {
  const [loading, setLoading] = React.useState(true);
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      var state = JSON.parse(localStorage.getItem('state') as string);
      if (!state) {
        state = {
          Home: 0,
          About: 0,
          Projects: 1,
          Profile: 0
        };
      } else {
        state['Blogs']++;
      }
      localStorage.setItem('state', JSON.stringify(state));
      axios
        .get('https://dev.to/api/articles?username=samyc2002')
        .then(({ data }) => {
          console.log(data);
          setBlogs(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>Blogs - Samy.exe</title>
            <meta name="description" content="Samriddha's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <br />
          <br />
          <br />
          <BlogsComponent blogs={blogs} />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default Blogs;
