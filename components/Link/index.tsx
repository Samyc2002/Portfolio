import React from 'react';
import Link from 'next/link';

interface Iprops {
    href: string;
    children: React.ReactNode;
}

const LinkComponent = ({ href, children }: Iprops) => {
    return (
        <Link href={href}>
            <span className="cursor-pointer">{children}</span>
        </Link>
    )
}

export default LinkComponent
