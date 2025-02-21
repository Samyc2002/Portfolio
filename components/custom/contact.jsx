"use client"
import * as React from "react";
import { useRouter } from 'next/navigation';
import { PhoneCall, Send } from "lucide-react";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";

export function ContactBtn() {
    const router = useRouter();
    const [dates, setDates] = React.useState([new Date()]);
    const [message, setMessage] = React.useState("");

    function onClick() {
        const subject = "Catching Up";
        let body = "";
        if (message) {
            body += `${message}${message.endsWith(".") ? "" : "."} `;
        }
        body += `I am available on: ${dates.map(date => date.toDateString()).join(", ")}. Let's catch up.`;
        router.push(`mailto:samriddhaworkid@gmail.com?subject=${subject}&body=${body}`);
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <PhoneCall />
                    <p className="hidden md:block">Contact</p>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Let's catch up!</DrawerTitle>
                        <DrawerDescription>Send me an email with your availability.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="mt-3 flex flex-col justify-center gap-4">
                            <Calendar
                                mode="multiple"
                                selected={dates}
                                onSelect={setDates}
                                className="rounded-md border border-gray-600"
                            />
                            <Input
                                value={message}
                                onChange={(event) => {
                                    let message = event.target.value;
                                    if (message === "\n") message = " ";
                                    setMessage(message);
                                }}
                                placeholder="Type your message here."
                            />
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button onClick={onClick}><Send /> Send Email</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

