"use client"
import { useEffect, useRef } from "react";
import Title from "@/components/custom/title";
import Sticky from "../custom/sticky";
import ProjectCard from "../custom/projectcard";
import { projects } from "@/lib/data";

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        if (projectsRef) {
            if (projectsRef?.current?.getBoundingClientRect()?.top) {
                localStorage.setItem("top-2", projectsRef?.current?.getBoundingClientRect()?.top);
            }
        }
    }, [projectsRef])

    return (
        <div className="w-full pt-10 flex flex-col gap-10" id="myprojects" ref={projectsRef}>
            <div className="flex flex-col gap-4">
                <Sticky>
                    <Title content={"🛠️ My Projects"} />
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
