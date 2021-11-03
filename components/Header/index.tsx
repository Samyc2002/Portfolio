import React from 'react';
import TextStyle from '../TextStyle';
import { GoGitBranch } from 'react-icons/go';
import { MdStarOutline } from 'react-icons/md';

import Logo from '../Logo';
import Button from '../Button';
import Section from '../Section';
import LinkComponent from '../Link';
import { useColourScheme } from '../../contexts/ColourScheme';

const Header = () => {

    const { black, white } = useColourScheme();

    const [hover, setHover] = React.useState(false);
    
    return (
        <header className="fixed w-screen px-20 z-20">
            <nav className="pt-6 h-20">
                <Section style="h-14" type="center" spread stretch>
                    <Section style="h-14" type="left" cols={1}><Logo/></Section>
                    <Section style="h-14" type="right" gap={4} cols={5}>
                        <Section type="center" cols={1}><LinkComponent href="/"><TextStyle>Home</TextStyle></LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="#about"><TextStyle>About</TextStyle></LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="/projects"><TextStyle>Projects</TextStyle></LinkComponent></Section>
                        <Section type="center" cols={1}><LinkComponent href="/resume"><TextStyle>Resume</TextStyle></LinkComponent></Section>
                        <Button type="primary" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundColor: hover?'#FFFFFF':white }} href="https://github.com/Samyc2002/Portfolio">
                            <TextStyle color={black}>
                                <Section type="center" cols={2}><GoGitBranch size="1.3em"/> <MdStarOutline size="1.3em"/></Section>
                            </TextStyle>
                        </Button>
                    </Section>
                </Section>
            </nav>
        </header>
    )
}

export default Header;
