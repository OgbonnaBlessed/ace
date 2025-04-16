/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Download, CheckCircle } from "lucide-react";
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
    const pathname = usePathname();
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadComplete, setDownloadComplete] = useState(false);

    const handleHireMeClick = () => {
        const footer = document.getElementById("footer-section");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDownload = async () => {
        setIsDownloading(true);
        setDownloadComplete(false);

        try {
            const response = await fetch("/assets/I'm Blessed.docx.pdf");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "I'm Blessed.docx.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();

            setTimeout(() => {
                window.URL.revokeObjectURL(url);
                setIsDownloading(false);
                setDownloadComplete(true);

                // Remove success message after a short delay
                setTimeout(() => {
                    setDownloadComplete(false);
                }, 2000);
            }, 1000);
        } catch (err) {
            console.error("Download failed:", err);
            setIsDownloading(false);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={cn(
                    "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-gray-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) =>
                    navItem.isInternal ? (
                        <button
                            key={idx}
                            onClick={() => onNavItemClick?.(navItem.link)}
                            className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 outline-none"
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm ">{navItem.name}</span>
                        </button>
                    ) : (
                        <Link
                            key={idx}
                            href={navItem.link}
                            className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm text-cyan-500">
                                {navItem.name}
                            </span>
                        </Link>
                    )
                )}

                {pathname === "/portfolio" ? (
                    <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onClick={handleHireMeClick}
                        className="flex items-center justify-center gap-2 bg-gradient-to-bl to-cyan-500 from-slate-950 text-sm font-medium relative text-white px-4 py-2 rounded-full"
                    >
                        Hire Me
                    </motion.button>
                ) : (
                    <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-2 bg-gradient-to-bl to-cyan-500 from-slate-950 text-sm font-medium relative text-white px-4 py-2 rounded-full cursor-pointer"
                    >
                        CV
                        <Download size={16} />
                    </motion.button>
                )}
            </motion.div>

            
            {(isDownloading || downloadComplete) && (
                <div className="fixed bottom-5 right-5 z-[9999] bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                    {isDownloading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 text-cyan-400"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                            <span>Downloading CV...</span>
                        </>
                    ) : (
                        <>
                            <CheckCircle size={20} className="text-green-400" />
                            <span>Download complete</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};