import React from 'react';

import { useColourScheme } from '../../contexts/ColourScheme';
import TextStyle from '../TextStyle';

const Footer = () => {

    const { background } = useColourScheme();
    
    return (
        <div className="h-20 px-4 py-2 grid grid-cols-2 justify-between items-center" style={{ backgroundColor: background }}>
            <TextStyle>&copy;Designed, Developed and Hosted by Samriddha Chattopadhyay.</TextStyle>
            <div className="flex justify-end gap-3 items-center">
                <TextStyle>Interested in doing a project ? Drop an email</TextStyle>
                <button className="text-sm rounded px-4 py-2 transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-300">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Footer;
