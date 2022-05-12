import React from 'react';
import Fade from 'react-reveal/Fade';
import TextTransition, { presets } from "react-text-transition";
import Typewriter from "typewriter-effect";


const phrases = ['MERN Stack Development', 'Competitive Programming', 'UI/UX Designing', 'Open Source Contributors'];

const Designation = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: phrases,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    skipAddStyles: true,
                    // cursor: ' :)'
                }}
            />
        </>
    )
}

export default Designation;
