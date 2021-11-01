import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../Logo';
import Button from '../Button';
import Section from '../Section';
import LinkComponent from '../Link';

const Header = () => {
    
    return (
        <header>
            <nav className="pt-6 h-20">
                <Section style="h-14" type="center" spread stretch>
                    <Section style="h-14" type="left" cols={1}><Logo/></Section>
                    <Section style="h-14" type="right" gap={4} cols={5}>
                        <Section type="center" cols={1}><LinkComponent href="/">Home</LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="#about">About</LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="/projects">Projects</LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="/resume">Resume</LinkComponent></Section>
                        <Button href="https://github.com/Samyc2002/Portfolio">Repo</Button>
                    </Section>
                </Section>
            </nav>
        </header>
    )
}

export default Header;
