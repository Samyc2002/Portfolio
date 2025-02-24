"use client"
import { useEffect, useRef, useState } from "react";
import { MediumArticles } from 'medium-article-api';
import Title from "@/components/custom/title";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import "./blogs.css";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Badge } from "../ui/badge";
import Sticky from "../custom/sticky";

const Blogs = () => {
    const medium = MediumArticles();
    const [blogs, setBlogs] = useState([]);
    const blogsRef = useRef(null);

    const getLatestPosts = async () => {
        const parser = new DOMParser();

        const data = await medium.getData("samyc2002")
        const posts = data.items.map(item => {
            const ps = parser.parseFromString(item.description, "text/html").querySelectorAll("a");
            const req = ps[ps.length - 1].innerHTML;
            let post = {
                ...item,
                action: [...req.split(" ").slice(0, 2), req.split(" ").at(-1)].join(" ")
            }
            return post;
        })
        setBlogs(posts);
    }

    useEffect(() => { getLatestPosts() }, []);

    useEffect(() => {
        if (blogsRef) {
            if (blogsRef?.current?.getBoundingClientRect()?.top) {
                localStorage.setItem("top-3", blogsRef?.current?.getBoundingClientRect()?.top);
            }
        }
    }, [blogsRef]);

    return (
        <div className="w-full pt-10 flex flex-col gap-4" id="articlesbyme" ref={blogsRef}>
            <Sticky>
                <Title content={"📜 Articles By Me"} />
            </Sticky>

            <div className="flex justify-center align-middle">
                <Carousel className="w-11/12">
                    <CarouselContent>
                        {blogs.map((blog, index) => (
                            <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={index}>
                                <Card className="h-full flex flex-col justify-between">
                                    <CardHeader>
                                        <CardTitle>{blog.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col gap-2">
                                        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                        <div className="flex flex-wrap gap-2">
                                            {blog.categories.map((category, index) => (
                                                <Badge variant={"outline"} key={index}>{category}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <a href={blog.link}>
                                            <Button className="w-full">
                                                {blog.action}
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Blogs;
