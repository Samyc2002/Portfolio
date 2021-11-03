import React from 'react';

import { useColourScheme } from '../../contexts/ColourScheme';

interface Iprops{
    children: React.ReactNode,
    color?: string,
    orientation?:'horizontal'|'vertical',
    type?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span'|'pre'
}

const TextStyle = ({ children, color, orientation, type }: Iprops) => {

    const { white } = useColourScheme();

    if(!type) {
        type = 'h6';
    }

    const sizes = {
        'h1': {
            fontSize: '3.75rem',
            lineHeight: '1'
        },
        'h2': {
            fontSize: '3rem',
            lineHeight: '1'
        },
        'h3': {
            fontSize: '2.25rem',
            lineHeight: '2.5rem'
        },
        'h4': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem'
        },
        'h5': {
            fontSize: '1.5rem',
            lineHeight: '2rem'
        },
        'h6': {
            fontSize: '1.125rem',
            lineHeight: '1.75rem'
        },
        'p': {
            fontSize: '1rem',
            lineHeight: '1.5rem'
        },
        'span': {},
        'pre': {}
    }

    return (
        <>
            {(!type || type !== 'pre')?(
                <span style={{ color: color||white, ...sizes[type] }} className={orientation?`inline-flex space-x-4`:''}>
                    {children}
                </span>
            ):(
                <pre style={{ color: color||white }} className={orientation?`inline-flex space-x-4`:''}>
                    {children}
                </pre>
            )}
        </>
    )
}

export default TextStyle;
