import React from "react";
import { Timeline } from "./ui/timeline";
import { Download } from "lucide-react"

export function Experience() {
    const data = [
        {
            title: "2024",
            content: (
                <div className="bg-slate-900 md:rounded-xl rounded-md p-6">
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-6">
                        Successfully completed an intensive internship at <strong>Programmify Ltd</strong>, where I actively contributed to the development of four high-impact projects, which took place from July 8 to Nov 12, 2024. 
                    </p>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-6">
                        Throughout this period, I honed my skills in <strong>React.js, Firebase, and modern UI/UX principles</strong>. My work involved developing scalable web applications, optimizing front-end performance, and ensuring seamless user experiences. Plus, I also earned a <strong>certificate of completion</strong> for my hard work.
                    </p>
                    <a
                        href="/assets/Certificate_of_Completion.jpeg" // Update with your actual certificate path
                        download="Certificate_of_Completion.jpeg"
                        className="bg-gradient-to-bl to-cyan-500  from-slate-950 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 w-fit"
                    >
                        Certificate <Download size={16} />
                    </a>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-3 mt-4">
                        Key achievements include:
                    </p>
                    <ul className="pl-4 text-neutral-200 text-xs md:text-sm font-normal space-y-3">
                        <li className="flex items-center">
                            <span className="md:w-2 w-1.5 md:h-2 h-1.5 rounded-full mr-3 bg-gradient-to-tr from-cyan-500 to-transparent"></span>
                            Designed and implemented four fully functional projects from start to finish.
                        </li>
                        <li className="flex items-center">
                            <span className="md:w-2 w-1.5 md:h-2 h-1.5 rounded-full mr-3 bg-gradient-to-tr from-cyan-500 to-transparent"></span>
                            Collaborated with a team of developers to refine best coding practices and workflow automation.
                        </li>
                        <li className="flex items-center">
                            <span className="md:w-2 w-1.5 md:h-2 h-1.5 rounded-full mr-3 bg-gradient-to-tr from-cyan-500 to-transparent"></span>
                            Integrated API services to enhance application performance and usability.
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    
    return (
        <div className="w-full" id="experience-section">
            <Timeline 
                data={data} 
                header="Experience"
                subheader="A summary of my work experiences."
            />
        </div>
    );
}