"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import MyTechStack from "./MyTechStack";

const services = [
    {
        title: "Frontend Web Development",
        description:
            "I specialize in building interactive, high-performance, and user-friendly web applications using modern frameworks like React.js and Next.js. I always aim to build seamless, responsive, and visually appealing interfaces that enhance user experience.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/services/frontend-dev.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Frontend Web Development"
                />
            </div>
        ),
    },
    {
        title: "Backend Development",
        description:
            "I develop scalable, secure, and high-performing backend systems using Node.js, Express, and MongoDB. My focus is on building RESTful APIs, database management, authentication, and server-side logic to power web applications efficiently.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/services/backend-dev.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Backend Development"
                />
            </div>
        ),
    },
    {
        title: "Full Stack Web Development",
        description:
            "With expertise in both frontend and backend development, I build robust full-stack applications using technologies like React.js, Next.js, Node.js, and Express. From database design to appealing user interfaces, I ensure seamless integration and high-performance applications.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/services/full-stack-dev.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Full Stack Web Development"
                />
            </div>
        ),
    },
    {
        title: "Mobile Development",
        description:
            "I build high-performance, cross-platform mobile applications using React Native. With a focus on performance, smooth user experience, and seamless integration with APIs, I create apps that run efficiently on both iOS and Android.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="/services/mobile-dev.jpeg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Mobile Development"
                />
            </div>
        ),
    },
];

export function Services() {
    return (
        <div 
            className="md:p-10 p-5 flex flex-col gap-5" 
            id="services-section"
        >
            <StickyScroll content={services} />
            <MyTechStack />
        </div>
    );
}