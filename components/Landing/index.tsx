import React from 'react';
import Image from 'next/image';
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

import { useColourScheme } from '../../contexts/ColourScheme';
import TextStyle from '../TextStyle';
import HomeSVG from '../HomeSVG';
import Section from '../Section';

const loader = ({ src, width, quality }: any) => {
    return `https://source.unsplash.com/${width}x${1080*width/1920}/?nature,water`;
}

const Landing = () => {

    const { red, blue } = useColourScheme();

    return (
        <>
            <div style={{ backgroundColor: "#1E293B" }}>
                <Image loader={loader} src="me.png" alt="background" layout="fill" sizes="50vw" className="z-0"/>
            </div>
            <div style={{ background: "linear-gradient(0deg, #1E293B 0%, rgba(30,41,59,0) 180%)" }} className="flex flex-col w-full h-screen justify-center items-center z-10 text-center">
                <HomeSVG/>
                <br/>
                <TextStyle color={red} type="h3">Hey there!</TextStyle>
                <br/>
                <TextStyle type="h5">I am <span style={{ color: blue }}>Samriddha Chattopadhyay</span> <br/> and welcome to my portfolio website.</TextStyle>
                <br/>
                <TextStyle type="h4">
                    <Section type="center" cols={4} gap={8}>
                        <BsGithub/> <BsLinkedin/> <BsInstagram/> <BsTwitter/>
                    </Section>
                </TextStyle>
            </div>
        </>
    )
}

export default Landing;
