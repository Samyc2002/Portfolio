import React from 'react';

interface Iprops{
    children: React.ReactNode,
    cols?: number,
    spread?: boolean,
    stretch?: boolean,
    gap?: number
}

const Center = ({ children, cols, gap, spread, stretch }: Iprops) => {
    return (
        <div className={cols?`grid grid-cols-${cols} gap-${gap?gap:0} place-items-center ${spread?'md:place-content-between':''} place-content-center ${stretch?'place-content-stretch': ''}`:`grid grid-cols-2 gap-${gap?gap:0} place-items-center ${spread?'md:place-content-between':''} place-content-center ${stretch?'place-content-stretch':''}`}>
            {children}
        </div>
    )
}

const Left = ({ children, cols, gap }: Iprops) => {
    return (
        <div className={cols?`grid grid-cols-${cols} gap-${gap?gap:0} place-items-start place-content-center`:`grid grid-cols-2 gap-${gap?gap:0} place-items-start place-content-center`}>
            {children}
        </div>
    )
}

const Right = ({ children, cols, gap }: Iprops) => {
    return (
        <div className={cols?`grid grid-cols-${cols} gap-${gap?gap:0} place-items-end place-content-center`:`grid grid-cols-2 gap-${gap?gap:0} place-items-end place-content-center`}>
            {children}
        </div>
    )
}

const Top = ({ children, cols, gap }: Iprops) => {
    return (
        <div className={cols?`grid grid-cols-${cols} gap-${gap?gap:0} place-items-center place-content-start`:`grid grid-cols-2 gap-${gap?gap:0} place-items-center place-content-start`}>
            {children}
        </div>
    )
}

const Bottom = ({ children, cols, gap }: Iprops) => {
    return (
        <div className={cols?`grid grid-cols-${cols} gap-${gap?gap:0} place-items-center place-content-end`:`grid grid-cols-2 gap-${gap?gap:0} place-items-center place-content-end`}>
            {children}
        </div>
    )
}

export { Center, Left, Right, Top, Bottom };
