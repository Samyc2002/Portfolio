import React from 'react';
import Image from 'next/image';

import Section from "../Section";
import dp from '../../public/dp.png';
import TextStyle from '../TextStyle';
import { useColourScheme } from '../../contexts/ColourScheme';

const About = () => {

    const { yellow, red } = useColourScheme();

    return (
        <>
            <TextStyle type="h4" style="h-80 text-center pl-40 pt-20" color={red}><strong>WHO AM I . . . . . ?</strong></TextStyle>
            <Section type="center" gap={10}>
                <div className="flex justify-center items-center p-40 py-0" style={{ minHeight: '30rem' }}>
                    <Image src={dp} alt="dp"/>
                </div>
                <div className="flex justify-center items-center pr-12 pt-4" style={{ minHeight: '30rem' }}>    
                    <TextStyle type="h6" style="h-80 text-center lg:text-xl">
                        I am <span style={{ color: yellow }}>Samriddha Chattopadhyay</span> from West Bengal, India.
                        <br/><br/>
                        I am currently doing my B.Tech at <span style={{ color: yellow }}>Indian Institute of Technology, Dharwad</span>. I love to code and develop <span style={{ color: yellow }}>new, polished and scalable products</span> which can be used in real-time. 
                        <br/><br/>
                        I am proficient in classics like <span style={{ color: yellow }}>C, C++, Javascript</span> and <span style={{ color: yellow }}>Python</span>
                        <br/><br/>
                        My love for coding, problem solving and making new things brought me into <span style={{ color: yellow }}>Competitive Programming</span> and <span style={{ color: yellow }}>Full Stack Development</span>
                    </TextStyle>
                </div>
            </Section>
        </>
    )
}

export default About;
