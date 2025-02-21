import Title from "@/components/custom/title";
import Sticky from "../custom/sticky";
import { projects } from "@/lib/data";
import ProjectCard from "../custom/projectcard";

const Projects = () => {
    return (
        <div className="w-full pt-10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <Sticky>
                    <Title content={"My Projects"} />
                </Sticky>

                <div className="flex gap-8 flex-wrap justify-center items-center">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
