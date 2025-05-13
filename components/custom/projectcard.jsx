import { ExternalLink, GhostIcon, Link } from "lucide-react";
import { Separator } from "../ui/separator";
import SubText from "./subtext";
import Text from "./text";

const ProjectCard = ({ project }) => {
    return (
        <a href={project.link} target="_blank" className="w-[350px]">
            <div className="relative p-4 rounded-lg bg-background border-transparent border-2 cursor-pointer transition duration-200 hover:border-slate-800 hover:bg-black hover:text-cyan-300">
                <div className="absolute top-4 right-4">
                    <ExternalLink className="size-4" />
                </div>
                <div className="flex flex-col gap-2">
                    <Text content={project.name} />
                    <SubText content={project.description} styles={{ fontSize: 18 }} />
                </div>
            </div>
        </a>
    )
};

export default ProjectCard;
