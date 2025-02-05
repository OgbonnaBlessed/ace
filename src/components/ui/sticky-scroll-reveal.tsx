/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref,
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--slate-900)",
        "var(--slate-900)",
        "var(--slate-900)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
                className="flex flex-col"
            >
                <h1 className="text-2xl md:text-4xl md:mb-4 text-white max-w-4xl">My Services</h1>
                <p className="text-neutral-300 text-lg md:text-base max-w-sm">
                    A list of the services I offer
                </p>
            </motion.div>
        
            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scroll-bar"
                ref={ref}
            >
                <div className="div relative flex items-start px-4">
                    <div className="max-w-2xl">
                        {content.map((item, index) => (
                            <div key={item.title + index} className="my-20">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="text-2xl font-bold text-slate-100"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="text-kg text-slate-300 max-w-sm mt-10"
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}
                        <div className="h-40" />
                    </div>
                </div>
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ?? null}
                </div>
            </motion.div>
        </motion.div>
    );
};