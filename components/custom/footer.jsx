import { Github, Instagram, LinkedinIcon, Mail, X } from 'lucide-react';
import { Separator } from '../ui/separator';
import GithubCard from './githubcard';
import NameCard from './namecard';

const Footer = () => {
    return (
        <footer className="px-10 md:px-40 xl:px-64 p-10 flex flex-col gap-4 items-center">
            <Separator className="bg-slate-600" />
            <div>
                Built by{" "} <NameCard />. The source code is available on{" "} <GithubCard />.
            </div>
            <div className='flex gap-10 justify-center items-center md:hidden xl:flex'>
                <span className="bg-foreground rounded-lg hover:bg-yellow-400 cursor-pointer">
                    <a href="https://x.com/samy_0202">
                        <X className="text-background" />
                    </a>
                </span>
                <a href="https://www.linkedin.com/in/samriddha-chattopadhyay/">
                    <LinkedinIcon className="hover:text-yellow-400 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/samriddhachattopadhyay/">
                    <Instagram className="hover:text-yellow-400 cursor-pointer" />
                </a>
                <a href="https://github.com/Samyc2002">
                    <Github className="hover:text-yellow-400 cursor-pointer" />
                </a>
                <a href="mailto:samriddhaworkid@gmail.com">
                    <Mail className="hover:text-yellow-400 cursor-pointer" />
                </a>
            </div>
        </footer>
    )
};

export default Footer;
