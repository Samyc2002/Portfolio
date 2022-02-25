import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import { FcHome, FcContacts, FcDocument } from 'react-icons/fc';
import { DiCode, DiGithubBadge } from 'react-icons/di';

import { styles } from './styles';

interface Iprops {
    toggled: boolean,
    handleToggleSidebar: (value: boolean) => void
}

const SideNavBar = ({ toggled, handleToggleSidebar }: Iprops) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023 });

    const router = useRouter();

    return (
        <ProSidebar
            image={`https://source.unsplash.com/1920x1080/?nature,water` || '/Background.jpg'}
            collapsed={isTablet && !isMobile}
            toggled={toggled}
            breakPoint='md'
            onToggle={handleToggleSidebar}
            style={styles.common}
        >
            <SidebarHeader>
                <div
                    style={styles.header}
                    onClick={() => router.push('/')}
                >
                    <Image src="/Logo_Light.png" alt="logo" width={50} height={50} />
                    {isTablet && !isMobile ? '' : 'Samy.exe'}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem
                        icon={<FcHome style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        icon={<FcContacts style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                        onClick={() => router.push('/about')}
                    >
                        About
                    </MenuItem>
                    <MenuItem
                        icon={<DiCode style={{ fontSize: 30 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                        onClick={() => router.push('/projects')}
                    >
                        Projects
                    </MenuItem>
                    <MenuItem
                        icon={<FcDocument style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                        onClick={() => router.push('/resume')}
                    >
                        Resume
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={styles.footer.top}>
                <div
                    className="sidebar-btn-wrapper"
                    style={styles.footer.buttonPadding}
                >
                <a
                    href="https://github.com/Samyc2002/Portfolio"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >
                    <DiGithubBadge style={styles.footer.iconSize} />
                    <span style={styles.footer.child}>
                        View Source
                    </span>
                </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default SideNavBar;