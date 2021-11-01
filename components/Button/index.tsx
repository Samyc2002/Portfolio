import React from 'react';
import Link from 'next/link';

interface Iprops{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    href?: string
}

const Button = ({ children, onClick, href }: Iprops) => {

    const style = "transition duration-500 ease-in-out hover:bg-gray-200 px-4 py-2 rounded flex justify-center items-center";

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
                <div className={style} onClick={onClick}>
                    {child}
                </div>
            ):(
                <div className={style}>
                    {child}
                </div>
            )}
        </>
    )
}

export default Button;
