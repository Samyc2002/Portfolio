import React, { createContext, useContext } from 'react';

interface Iprops{
    children: React.ReactNode;
}

const scheme = {
    white: '#D9E1EE',
    black: '#282C34',
    background: '#3E4451',
    red: '#FF6C6B',
    yellow: '#ECBE7B',
    blue: '#46D9FF',
    magenta: '#A9A1E1'
}

const ColourContext = createContext(scheme);

const ColourScheme = ({ children }: Iprops) => {
    return (
        <ColourContext.Provider value={{ ...scheme }}>
            {children}
        </ColourContext.Provider>
    )
}

export const useColourScheme = () => useContext(ColourContext);

export default ColourScheme;
