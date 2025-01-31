/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
    const [scope, animate] = useAnimate();

    // Simple animation for the whole content rather than individual spans
    useEffect(() => {
        animate(
            scope.current,
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration }}>
                {/* Use dangerouslySetInnerHTML to inject HTML */}
                <div
                    className="dark:text-white text-black text-2xl leading-snug tracking-wide"
                    dangerouslySetInnerHTML={{ __html: words }}
                />
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                {renderWords()}
            </div>
        </div>
    );
};