import React from 'react';
import Link from 'next/link';

interface Iprops {
    href: string;
    children: React.ReactNode;
}

const LinkComponent = ({ href, children }: Iprops) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

export default LinkComponent
