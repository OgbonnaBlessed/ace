import React from "react";
import { Timeline } from "./ui/timeline";
import { Download } from "lucide-react";

export function Education() {
  const data = [
    {
      title: "Early 2023",
      content: (
        <div className="bg-slate-900 md:rounded-xl rounded-md p-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Currently pursuing a Bachelor Degree in Computer Science at <strong>Lagos State University (LASU)</strong>, having enrolled in 2023.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            This academic journey is focused on deepening my understanding of computer science principles, software development, data structures, and algorithms. It also emphasizes critical thinking and the practical application of problem-solving techniques in computing.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Areas of focus:
          </p>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <li>Software development methodologies and programming languages.</li>
            <li>Data structures, algorithms, and computer architecture.</li>
            <li>Database management, networking, and cybersecurity principles.</li>
            <li>Problem-solving using computational and analytical thinking.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div className="bg-slate-900 md:rounded-xl rounded-md p-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Successfully completed an intensive 4-month Web Development Program at <strong>CWW Tech Africa</strong>, which ran from August to December 22, 2023.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            This program provided in-depth training on HTML, CSS, JavaScript, React.js, and modern web development best practices. It was designed to equip students with technical and problem-solving skills essential for building scalable web applications.
          </p>
          <a
            href="/assets/CWW Tech Africa.jpeg" // Update with your actual certificate path
            download="CWW Tech Africa.jpeg"
            className="bg-gradient-to-bl to-cyan-500  from-slate-950 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 w-fit mb-5"
          >
            Certificate <Download size={16} />
          </a>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Key takeaways:
          </p>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            <li>Developed real-world web applications using React.js and Tailwind CSS.</li>
            <li>Gained hands-on experience with responsive design and performance optimization.</li>
            <li>Collaborated with other learners on projects that simulated industry-level development workflows.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="education-section">
      <Timeline 
        data={data} 
        header="Educational Background"
        subheader="A journey of continuous learning and skill acquisition."
      />
    </div>
  );
}