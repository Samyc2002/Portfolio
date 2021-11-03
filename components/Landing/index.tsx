import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

const loader = ({ src, width, quality }: any) => {
    return "https://source.unsplash.com/1920x1080/?nature,water";
  }

const Landing = () => {
    return (
        <>
            <Image loader={loader} src="me.png" alt="background" layout="fill" sizes="50vw" className="z-0"/>
            <div className=" flex flex-col w-full h-screen justify-center items-center z-10 text-center bg-gradient-to-t from-gray-800 to-transparent">
                <h1>Hey there!</h1>
                <h6>I am Samriddha Chattopadhyay <br/> and welcome to my portfolio website.</h6>
            </div>
        </>
    )
}

export default Landing;
