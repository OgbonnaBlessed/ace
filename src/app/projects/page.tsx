"use client";

import { Footer } from '@/components/Footer'
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { Briefcase, Home, MessageSquareQuote, WorkflowIcon } from 'lucide-react'
import React from 'react'

const page = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-white" />,
            isInternal: false,
        },
        {
            name: "Services",
            link: "services-section",
            icon: <WorkflowIcon className="h-4 w-4 text-white" />,
            isInternal: true,
        },
        {
            name: "Projects",
            link: "projects-section",
            icon: <Briefcase className="h-4 w-4 text-white" />,
            isInternal: true,
        },
        {
            name: "Testimonials",
            link: "testimonials-section",
            icon: <MessageSquareQuote className="h-4 w-4 text-white" />,
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
        <div className='className="flex flex-col items-start justify-center text-white bg-blend-darken relative w-full'>
            <FloatingNav navItems={navItems} onNavItemClick={handleNavItemClick} />
            <Services />
            <Projects />
            <Footer />
        </div>
    )
}

export default page