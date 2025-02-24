"use client"
import Link from "next/link";
import useWindowScroll from "../useWindowSize";
import { useEffect } from "react";

const NavItem = ({ icon, index, content, visible, setVisible }) => {
    const { y } = useWindowScroll();

    useEffect(() => {
        let reqY = localStorage.getItem(`top-${index}`);
        if (y > reqY) {
            setVisible(index);
        }
    }, [y]);

    return (
        <div className="pr-2" style={{ borderRight: visible === index && "4px solid white" }}>
            <Link href={`#${content.split(" ").join("").toLowerCase()}`}>
                {visible === index ? (
                    <>
                        <p className="font-bold hidden xl:block">{content}</p>
                        <p className="text-3xl font-bold block xl:hidden">{icon}</p>
                    </>
                ) : (
                    <>
                        <p className="hidden xl:block">{content}</p>
                        <p className="text-3xl block xl:hidden">{icon}</p>
                    </>
                )}
            </Link>
        </div>
    )
};

export default NavItem;
