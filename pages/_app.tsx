import type { AppProps } from 'next/app';
import { FaBars } from 'react-icons/fa';
import '../styles/globals.css';
import '../styles/App.scss';

import Cursor from '../constants/Cursor';
import SideNavBar from '../components/SideNavBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <Cursor/>
      <SideNavBar/>
      {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div> */}
      <div className="main">
        <div className="padding"/>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
