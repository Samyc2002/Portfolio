import React from 'react';
import Head from 'next/head';

import ProjectComponent from '../components/Projects';
import Management from '../components/Management';

const Projects = () => {
  return (
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
  )
}

export default Projects;