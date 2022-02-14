import type { NextPage } from 'next';

import styles from '../styles/Projects.module.css';
import { useStyles } from '../styles/Projects.styles';
import { Navbar } from '../components';

const Projects: NextPage = () => {

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.toolbar} />
    </>
  )
}

export default Projects;
