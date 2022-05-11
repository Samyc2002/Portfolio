import React from 'react';
import Fade from 'react-reveal/Fade';
import TextTransition, { presets } from "react-text-transition";
import Typewriter from "typewriter-effect";

const phrases = ['MERN Stack Developer', 'Competitive Programmer', 'UI/UX Designer', 'Open Source Contributor'];

const Designation = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: phrases,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    skipAddStyles: true
                }}
            />
        </>
    )
}

export default Designation;
