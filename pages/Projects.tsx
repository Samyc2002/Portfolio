import React from 'react';
import Head from 'next/head';

import ProjectComponent from '../components/Projects';
import Management from '../components/Management';
import Loading from '../components/Loading';

const Projects = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      var state = JSON.parse(localStorage.getItem('state') as string);
      if (!state) {
        state = {
          'Home': 0,
          'About': 0,
          'Projects': 1,
          'Profile': 0,
          'Blogs': 0,
        };
      } else {
        state['Projects']++;
      }
      localStorage.setItem('state', JSON.stringify(state));
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading?(
        <Loading/>
      ):(
        <>
          <Head>
            <title>Projects - Samy.exe</title>
            <meta name="description" content="Samriddha's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <br/>
          <br/>
          <br/>
          <ProjectComponent/>
          <br/>
          <br/>
          <br/>
          <Management/>
          <br/>
          <br/>
        </>
      )}
    </>
  )
}

export default Projects;