/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
    testimonials,
        autoplay = false,
    }: {
        testimonials: Testimonial[];
        autoplay?: boolean;
    }) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = (index: number) => {
        const fixedAngles = [-10, -5, 0, 5, 10]; // Fixed values
        return fixedAngles[index % fixedAngles.length]; // Ensure consistent rotation per index
    };

    return (
        <div 
            className="flex flex-col gap-3 w-full py-20 px-10"
            id="testimonials-section"
        >
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-white py-2">My Testimonials</h1>
                <p className="text-sm font-normal text-neutral-400 max-w-sm">Hear what people say about me.</p>
            </div>
            <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 flex flex-col gap-5">
                <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
                    <div>
                        <div className="relative h-80 w-full">
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(index), // Uses index instead of random value
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotateY(index), // Uses index for consistency
                                            zIndex: isActive(index) ? 1 : 0,
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 origin-bottom"
                                    >
                                        <Image
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            width={500}
                                            height={500}
                                            draggable={false}
                                            className="h-full w-full rounded-3xl object-cover object-center"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col py-4">
                        <motion.div
                            key={active}
                                initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        >
                            <h3 className="text-2xl font-bold dark:text-white text-black">
                                {testimonials[active].name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                                {testimonials[active].designation}
                            </p>
                            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                                {testimonials[active].quote.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                    className="inline-block"
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>
                        <div className="flex gap-4 pt-12 md:pt-0">
                            <button
                                onClick={handlePrev}
                                className="h-7 w-7 rounded-full bg-gradient-to-br to-cyan-500 from-slate-950 flex items-center justify-center outline-none"
                            >
                                <ArrowLeft className="h-5 w-5 text-neutral-400 transition-transform duration-300" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="h-7 w-7 rounded-full bg-gradient-to-bl to-cyan-500 from-slate-950 flex items-center justify-center outline-none"
                            >
                                <ArrowRight className="h-5 w-5 text-neutral-400 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};