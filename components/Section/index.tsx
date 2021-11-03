import React from 'react';

interface Iprops{
    children?: React.ReactNode,
    cols?: number,
    spread?: boolean,
    stretch?: boolean,
    gap?: number,
    type: "center" | "right" | "left" | "top" | "bottom",
    style?: string
}

const Section = ({ children, cols, gap, spread, stretch, type, style }: Iprops) => {

    const section = () => {

        const spreadStyle = spread?'md:place-content-between':'';
        const stretchStyle = stretch?'place-content-stretch':'';
        const gridCols = `grid-cols-${cols?cols:2}`;
        const gridGap = `gap-${gap?gap:0}`;

        const baseStyle = `grid ${gridCols} ${gridGap} ${spreadStyle} ${stretchStyle} ${style}`;

        switch(type) {
            case "center": return <div className={`${baseStyle} place-content-center`}>{children}</div>;
            case "right": return <div className={`${baseStyle} place-content-center justify-self-end`}>{children}</div>;
            case "left": return <div className={`${baseStyle} place-content-center justify-self-start`}>{children}</div>;
            case "top": return <div className={`${baseStyle} place-content-center`}>{children}</div>;
            case "bottom": return <div className={`${baseStyle} place-content-center`}>{children}</div>;
            default: return <div>lol</div>;
        }
    }

    return (
        <>
            {section()}
        </>
    )
}

export default Section;