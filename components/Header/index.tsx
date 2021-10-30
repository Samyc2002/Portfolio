import React from 'react';

import Logo from '../Logo';
import { Center } from '../Section';

const Header = () => {
    return (
        <header>
            <nav className="pt-6">
                <Center spread stretch gap={12}>
                    <Logo/> Header
                </Center>
            </nav>
        </header>
    )
}

export default Header;
