import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import '../styles/globals.css';
import '../styles/App.scss';

import Cursor from '../constants/Cursor';
import Loading from '../components/Loading';
import SideNavBar from '../components/SideNavBar';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading])

  const handleToggleSidebar = (value: boolean) => {
      setToggled(value);
  };
  
  return (
    <>
      {
        loading ? (
          <div className="flexFull">
            <Loading/>
          </div>
        ) : (
          <div style={{ display: 'flex' }}>
            <Cursor/>
            <SideNavBar toggled={toggled} handleToggleSidebar={handleToggleSidebar}/>
            <div className="area">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div >
            {isMobile && (
              <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
              </div>
            )}
            <div className="main">
              <div className="padding"/>
              <div className="center">
                <div className="stretch">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MyApp
