"use client";

import { Footer } from '@/components/Footer'
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials';
import { FloatingNav } from '@/components/ui/floating-navbar'
import { Home, Layers, MessageSquareQuote, Package, User } from 'lucide-react'
import React from 'react'

const page = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-cyan-500" />,
            isInternal: false,
        },
        {
            name: "About",
            link: "/about",
            icon: <User className="h-4 w-4 text-cyan-500" />,
            isInternal: false,
        },
        {
            name: "Services",
            link: "services-section",
            icon: <Package className="h-4 w-4 text-white" />,
            isInternal: true,
        },
        {
            name: "Projects",
            link: "projects-section",
            icon: <Layers className="h-4 w-4 text-white" />,
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
            <Testimonials />
            <Footer />
        </div>
    )
}

export default page