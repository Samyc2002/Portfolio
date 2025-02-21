import { useEffect, useState } from "react";
import { MediumArticles } from "medium-article-api";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

const MediumCard = () => {
    const medium = MediumArticles();
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const data = await medium.getData("samyc2002")
        console.log(data.feed);
        setUser(data.feed);
    };

    useEffect(() => { getUser() }, []);

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a href={user?.url || ""} className="underline transition duration-100 hover:text-cyan-400">Medium</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <a href={user?.url || ""} className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Samriddha Chattopadhyay</h4>
                        <p className="text-sm text-slate-400">
                            {user?.description}
                        </p>
                    </div>
                </a>
            </HoverCardContent>
        </HoverCard>
    )
};

export default MediumCard;
