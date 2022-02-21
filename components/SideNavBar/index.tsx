import Image from 'next/image';
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import { FcHome, FcContacts, FcDocument } from 'react-icons/fc';
import { DiCode, DiGithubBadge } from 'react-icons/di';


const SideNavBar = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023 });

    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value: boolean) => {
        setToggled(value);
    };

    return (
        <ProSidebar
            image={`https://source.unsplash.com/1920x1080/?nature,water`}
            collapsed={isTablet}
            toggled={toggled}
            breakPoint='md'
            onToggle={handleToggleSidebar}
            style={{ height: '100vh', position: 'fixed' }}
        >
            <SidebarHeader>
                <div style={{ padding: '24px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 20, letterSpacing: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: '#D9E1EE' }}>
                    <Image src="/Logo_Light.png" alt="logo" width={50} height={50} />
                    {isTablet || isMobile ? '' : 'Samy.exe'}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem
                        icon={<FcHome style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={{ textTransform: 'uppercase', fontSize: 16, letterSpacing: '1px', overflow: 'hidden', color: '#D9E1EE' }}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        icon={<FcContacts style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={{ textTransform: 'uppercase', fontSize: 16, letterSpacing: '1px', overflow: 'hidden', color: '#D9E1EE' }}
                    >
                        About
                    </MenuItem>
                    <MenuItem
                        icon={<DiCode style={{ fontSize: 30 }}/>}
                        prefix={<>&nbsp;</>}
                        style={{ textTransform: 'uppercase', fontSize: 16, letterSpacing: '1px', overflow: 'hidden', color: '#D9E1EE' }}
                    >
                        Projects
                    </MenuItem>
                    <MenuItem
                        icon={<FcDocument style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={{ textTransform: 'uppercase', fontSize: 16, letterSpacing: '1px', overflow: 'hidden', color: '#D9E1EE' }}
                    >
                        Resume
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                <a
                    href="https://github.com/Samyc2002/Portfolio"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >
                    <DiGithubBadge style={{ fontSize: 20 }} />
                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        View Source
                    </span>
                </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideNavBar;