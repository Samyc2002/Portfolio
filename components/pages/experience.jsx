"use client"
import { useEffect, useRef } from "react";
import Sticky from "../custom/sticky";
import Title from "../custom/title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ExperienceCard from "../custom/experiencecard";
import { Separator } from "../ui/separator";
import Text from "../custom/text";
import { awards, education, volunteering, workExperiences } from "@/lib/data";

const experiences = [
    {
        key: "item-1",
        title: "Work Experiences",
        data: workExperiences
    },
    {
        key: "item-2",
        title: "Leadership",
        data: volunteering
    },
    {
        key: "item-3",
        title: "Awards and Recognition",
        data: awards
    },
    {
        key: "item-4",
        title: "Education",
        data: education
    }
]

const Experience = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        if (experienceRef) {
            if (experienceRef?.current?.getBoundingClientRect()?.top) {
                localStorage.setItem("top-1", experienceRef?.current?.getBoundingClientRect()?.top);
            }
        }
    }, [experienceRef])

    return (
        <div className="w-full pt-10 flex flex-col gap-4" id="myaccomplishments" ref={experienceRef}>
            <Sticky>
                <Title content={"🏅 My Accomplishments"} />
            </Sticky>

            <Accordion type="multiple" collapsible="true" defaultValue={["item-1", "item-3"]}>
                <Separator />
                {experiences.map(({ key, title, data }, index) => (
                    <AccordionItem value={key} key={index}>
                        <AccordionTrigger>
                            <Text content={title} />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-4">
                                {data.map((exp, index) => (
                                    <ExperienceCard experience={exp} key={index} />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Experience;
