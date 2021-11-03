import React from 'react';

import { useColourScheme } from '../../contexts/ColourScheme';

interface Iprops{
    children: React.ReactNode,
    color?: string,
    orientation?:'horizontal'|'vertical'
}

const TextStyle = ({ children, color, orientation }: Iprops) => {

    const { white } = useColourScheme();

    return (
        <span style={{ color: color||white }} className={orientation?`inline-flex space-x-4`:''}>
            {children}
        </span>
    )
}

export default TextStyle;
