import React from 'react';
import Link from 'next/link';

interface Iprops{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    href?: string,
    type?: 'primary'|'secondary'|'text',
    style?: any,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void
}

const Button = ({ children, onClick, href, type, style, onMouseEnter, onMouseLeave }: Iprops) => {

    const Style = "cursor-pointer transition duration-500 ease-in-out hover:bg-gray-200 px-4 py-2 rounded flex justify-center items-center"+(type==='primary'?" bg-blue-400 hover:bg-blue-300":(type==='secondary'?" border-blue-400 hover:border-blue-300":" text-blue-400 hover:text-blue-300"));

    const child = (
        <>
            {href ? (
                <Link href={href}>
                    {children}
                </Link>
            ): (
                <>
                    {children}
                </>
            )}
        </>
    )

    return (
        <>
            {onClick ? (
                <div style={style} className={Style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {child}
                </div>
            ):(
                <div style={style} className={Style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {child}
                </div>
            )}
        </>
    )
}

export default Button;
