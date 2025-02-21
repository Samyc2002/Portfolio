"use client"
import Image from "next/image";
import "./background.css";

const Background = () => {
    return (
        <div className="fixed w-screen h-screen z-[-2] hidden md:flex md:flex-col md:justify-evenly md:pl-12 xl:pl-20">
            <svg className="icon" id="controller" width="48" height="48" viewBox="0 0 24 24">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>

            <svg className="icon" id="keyboard" width="48" height="48" viewBox="0 0 24 24">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <line x1="6" y1="10" x2="6" y2="10" />
                <line x1="10" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="14" y2="10" />
                <line x1="18" y1="10" x2="18" y2="10" />
                <line x1="8" y1="14" x2="16" y2="14" />
            </svg>

            <svg className="icon" id="mouse" width="48" height="48" viewBox="0 0 24 24">
                <rect x="6" y="3" width="12" height="18" rx="6" />
                <line x1="12" y1="7" x2="12" y2="11" />
            </svg>

            <svg className="icon" id="headphones" width="48" height="48" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>

            <svg className="icon" id="laptop" width="48" height="48" viewBox="0 0 24 24">
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
            </svg>
        </div>
    )
};

export default Background;
