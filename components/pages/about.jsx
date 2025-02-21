import SubText from "@/components/custom/subtext";
import Text from "@/components/custom/text";
import Title from "@/components/custom/title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sticky from "../custom/sticky";
import { Card, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";

const About = () => {
    return (
        <div className="w-full pt-10 md:pt-40 flex flex-col gap-10">
            <Avatar className="border-foreground border-2 p-1 z-0">
                <Image src="/avatar.png" width={230} height={230} alt="Samriddha" />
                {/* <AvatarImage src="/avatar.png" /> */}
                {/* <AvatarFallback>Samriddha</AvatarFallback> */}
            </Avatar>

            <div className="flex flex-col gap-4">
                <Sticky>
                    <Title content={"About Me"} />
                </Sticky>

                <span>
                    <Text content={"Hi there, I am Samriddha. I am a software developer from India."} />
                    <SubText content={"I started off as a web developer in 2021 and built my first MERN stack project. Since then, I have grown into a more of a backend engineer and spend most of my time on the command line. I’m a tinkerer and like to experiment with new technologies and products. I build projects to solve my day to day problems and explore tech as much as I can in my free time."} />
                    <p style={{ color: "#828282", fontSize: "22px" }}>
                        I am also a <span style={{ color: "hsl(var(--foreground))" }}>Technical content writer</span> and write about things I learn on <a href="https://medium.com/@Samyc2002" className="underline">Medium</a>.
                    </p>
                </span>

                <div className="flex flex-col gap-4 justify-between bg-background border-none">
                    <a href="https://medium.com/subscribe/@Samyc2002?source=publishing_settings---user_settings-----------------------------------------" className="w-1/6">
                        <Button className="rounded-3xl">
                            Subscribe on Medium
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;
