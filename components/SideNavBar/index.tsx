import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import { FcHome, FcContacts, FcDocument } from 'react-icons/fc';
import { DiCode, DiGithubBadge } from 'react-icons/di';

interface Iprops {
    toggled: boolean,
    handleToggleSidebar: (value: boolean) => void
}

const styles = {
    common: {
        height: '100%',
        position: 'fixed',
        cursor: 'default'
    },
    header: {
        padding: '24px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: '1px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        color: '#D9E1EE',
        cursor: 'pointer'
    },
    menuItem: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: '1px',
        overflow: 'hidden',
        color: '#D9E1EE'
    },
    footer: {
        top: {
            textAlign: 'center',
            cursor: 'default'
        },
        child: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            cursor: 'default'
        },
        buttonPadding: {
            padding: '20px 24px',
            cursor: 'pointer'
        },
        iconSize: {
            fontSize: 20,
            cursor: 'pointer'
        }
    }
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
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        icon={<FcContacts style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                    >
                        About
                    </MenuItem>
                    <MenuItem
                        icon={<DiCode style={{ fontSize: 30 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
                    >
                        Projects
                    </MenuItem>
                    <MenuItem
                        icon={<FcDocument style={{ fontSize: 18 }}/>}
                        prefix={<>&nbsp;</>}
                        style={styles.menuItem}
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