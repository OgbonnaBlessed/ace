/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
  onNavItemClick,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
        isInternal?: boolean;
    }[];
    className?: string;
    onNavItemClick?: (id: string) => void;
}) => {
    const pathname = usePathname(); // Get the current path

    // Function to scroll to the footer
    const handleHireMeClick = () => {
        const footer = document.getElementById("footer-section");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-gray-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                className
            )}
        >
            {navItems.map((navItem: any, idx: number) => (
                navItem.isInternal ? (
                    <button
                        key={idx}
                        onClick={() => onNavItemClick?.(navItem.link)}
                        className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 outline-none"
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </button>
                ) : (
                    <Link
                        key={idx}
                        href={navItem.link}
                        className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                )
            ))}

            {/* Conditionally render "Hire Me" on the Projects page, otherwise show "Download CV" */}
            {pathname === "/projects" ? (
                <button 
                    onClick={handleHireMeClick}
                    className="flex items-center justify-center gap-2 bg-gradient-to-bl to-cyan-500 from-slate-950 text-sm font-medium relative text-white px-4 py-2 rounded-full"
                >
                    Hire Me
                </button>
            ) : (
                <a 
                    href="/assets/OgbonnaBlessedCV.pdf"
                    download="OgbonnaBlessedCV.pdf"
                    className="flex items-center justify-center gap-2 bg-gradient-to-bl to-cyan-500 from-slate-950 text-sm font-medium relative text-white px-4 py-2 rounded-full"
                >
                    CV
                    <Download size={16} />
                </a>
            )}
        </motion.div>
    );
};