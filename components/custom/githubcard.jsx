import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

const GithubCard = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a
                    href="https://github.com/samyc2002/Portfolio"
                    className="text-slate-400 underline transition duration-100 hover:underline hover:text-cyan-400"
                >
                    Github
                </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <a
                    href="https://github.com/samyc2002/Portfolio"
                    className="flex justify-between space-x-4"
                >
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                            Samriddha Chattopadhyay
                        </h4>
                        <p className="text-sm text-slate-400">
                            My personal portfolio website.
                        </p>
                    </div>
                </a>
            </HoverCardContent>
        </HoverCard>
    );
};

export default GithubCard;
