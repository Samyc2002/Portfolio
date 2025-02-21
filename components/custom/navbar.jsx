"use client"
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { FolderOpenIcon, PhoneCall } from 'lucide-react';
import useWindowScroll from '../useWindowSize';

const NavBar = () => {
    const { y } = useWindowScroll();

    return (
        <header className="sticky top-0 bg-background/30 backdrop-blur-xl z-10">
            <div className="flex flex-col px-10 md:px-40 xl:px-64">
                <div className="py-4 flex gap-4 items-center justify-between">
                    <div className="flex gap-4 items-center">
                        {y < 360 && (
                            <>
                                <Image src="/logo.svg" width={50} height={50} alt="logo" />
                                <h1 className="text-2xl font-bold">Samy.exe</h1>
                            </>
                        )}
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="/Samriddha_Chattopadhyay_2025.pdf">
                            <Button className="hover:bg-cyan-400">
                                <FolderOpenIcon />
                                <p className="hidden md:block">CV</p>
                            </Button>
                        </a>
                        <Button variant="outline">
                            <PhoneCall />
                            <p className="hidden md:block">Contact</p>
                        </Button>
                    </div>
                </div>

                <Separator className="bg-slate-600" />
            </div>
        </header>
    )
};

export default NavBar;
