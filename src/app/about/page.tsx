"use client";

import React from 'react';
import { TextEffect } from '@/components/TextEffect';
import { Connect } from '@/components/Connect';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Briefcase, GraduationCap, Home, UserRound } from 'lucide-react';

const Page = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-white" />,
            isInternal: false,
        },
        {
            name: "About",
            link: "about-section",
            icon: <UserRound className="h-4 w-4 text-white" />,
            isInternal: true,
        },
        {
            name: "Experience",
            link: "experience-section",
            icon: <Briefcase className="h-4 w-4 text-white" />,
            isInternal: true,
        },
        {
            name: "Education",
            link: "education-section",
            icon: <GraduationCap className="h-4 w-4 text-white" />,
            isInternal: true,
        }
    ];

    const handleNavItemClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-start justify-center text-white bg-blend-darken relative w-full">
            <FloatingNav navItems={navItems} onNavItemClick={handleNavItemClick} />
            
            <div 
                id="about-section"
                style={{ backgroundImage: "url('/assets/blessed.jpeg')" }}
                className="md:p-20 p-6 min-h-screen flex flex-col gap-5 items-start justify-center bg-cover bg-center bg-no-repeat w-full"
            >
                <TextEffect />
                <Connect />
            </div>

            <Experience />
            <Education />
            <Footer />
        </div>
    );
};

export default Page;