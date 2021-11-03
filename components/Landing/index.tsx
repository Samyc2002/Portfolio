import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

const loader = ({ src, width, quality }: any) => {
    return `https://source.unsplash.com/${width}x${1080*width/1920}/?nature,water`;
  }

const Landing = () => {
    return (
        <>
            <div style={{ backgroundColor: "#1E293B" }}>
                <Image loader={loader} src="me.png" alt="background" layout="fill" sizes="50vw" className="z-0"/>
            </div>
            <div style={{ background: "linear-gradient(0deg, #1E293B 0%, rgba(30,41,59,0) 180%)" }} className="flex flex-col w-full h-screen justify-center items-center z-10 text-center">
                <h1>Hey there!</h1>
                <h6>I am Samriddha Chattopadhyay <br/> and welcome to my portfolio website.</h6>
            </div>
        </>
    )
}

export default Landing;
