import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

const NameCard = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a
                    href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samriddha-chattopadhyay"
                    className="text-cyan-300 transition duration-100 hover:underline hover:text-cyan-400"
                >
                    Samriddha Chattopadhyay
                </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <a href="https://github.com/samyc2002/Portfolio" className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Samriddha Chattopadhyay</h4>
                        <p className="text-sm text-slate-400">
                            Click to find out where this takes you. Trust me it's not somewhere bad :)
                        </p>
                    </div>
                </a>
            </HoverCardContent>
        </HoverCard>
    )
};

export default NameCard;
