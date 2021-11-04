import React from 'react';

import Section from "../Section";
import { useColourScheme } from '../../contexts/ColourScheme';

const About = () => {

    const { background } = useColourScheme();
    return (
        <Section type="center">
            About
        </Section>
    )
}

export default About;
