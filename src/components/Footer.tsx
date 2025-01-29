"use client";

import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function Footer() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-gradient-to-b from-gray-900 via-gray-900 to-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Get in touch
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
                    Every great product starts with a conversation. Whether you need a high-performance web app, a scalable backend, or a seamless user experience, I turn ideas into reality with clean, efficient code. Let’s collaborate and create something extraordinary.
                </p>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none mt-10 outline-none cursor-pointer">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white backdrop-blur-3xl">
                        Send a message
                    </span>
                </button>
            </div>
            <BackgroundBeams />
        </div>
    );
}