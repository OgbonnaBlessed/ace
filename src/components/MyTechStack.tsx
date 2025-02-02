import { animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiAmazondynamodb,
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiAwsamplify,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "React", icon: SiReact, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "DynamoDB", icon: SiAmazondynamodb, color: "text-blue-700" },
  { name: "Express.js", icon: SiExpress, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "AWS", icon: SiAwsamplify, color: "text-orange-700" },
];

const MyTechStack = () => {
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

    useEffect(() => {
        let index = 0;
    
        const interval = setInterval(() => {
            // Reset all animations first
            techStack.forEach((_, i) => {
                animate(`.circle-${i}`, { y: 0 }, { duration: 0.3 });
            });
    
            // Animate only the current icon
            animate(`.circle-${index}`, { y: -8 }, { duration: 0.5 });
        
            // Move to the next icon (loop back to start)
            index = (index + 1) % techStack.length;
        }, 700); // Adjust timing for smooth transition
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col gap-5">
            {/* Heading Section */}
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-white py-2">My Tech Stack</h1>
                <p className="text-sm font-normal text-neutral-400 max-w-sm">
                    A few of the tools and technologies I use.
                </p>
            </div>

            {/* Icons Grid */}
            <div className="w-full flex items-center justify-center">
                <div className="w-md max-w-[90%] grid md:grid-cols-6 grid-cols-4 gap-5">
                    {techStack.map((tech, index) => {
                        const IconComponent = tech.icon;

                        return (
                        <div
                            key={index}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHoveredIcon(index)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {/* Tooltip (Visible on Hover) */}
                            {hoveredIcon === index && (
                                <div
                                    className="absolute -top-10 bg-gray-800 text-white text-xs px-3 py-1 rounded-md shadow-lg 
                                    transition-opacity duration-300 ease-in-out opacity-100 text-nowrap"
                                >
                                    {tech.name}
                                    <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 transform -translate-x-1/2"></div>
                                </div>
                            )}

                            {/* Icon Circle */}
                            <div
                                className={`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                                shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
                                cursor-pointer transition-transform duration-300 ease-in-out circle-${index}`}
                            >
                                <IconComponent className={`h-6 w-6 ${tech.color}`} />
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyTechStack;