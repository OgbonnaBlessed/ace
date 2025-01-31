"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Connect() {
    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/ogbonna-blessed-bb435b265/",
        },
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://web.facebook.com/profile.php?id=100082996797952",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/ace_codes01/?fbclid=IwY2xjawIIL3BleHRuA2FlbQIxMAABHbVsuU8zGOtttxZlb9CzeHOJPo2pjfgSY-fbGbF18T2mpCeTxFHFUV4EtQ_aem_3WACJ1aX8Zdr6W0zHxzOGg#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/OgbonnaBlessed",
        },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="flex flex-col gap-2 items-start"
        >
            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="text-2xl leading-snug tracking-wide font-bold text-white"
            >
                Connect with me on social media
            </motion.h1>
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </motion.div>
    );
}