"use client";

import Image from "next/image";
import React, { JSX, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Minus } from "lucide-react";
import { FaReact, FaDocker, FaAws, FaStripe, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiFramer, SiTypescript, SiZod, SiExpress, SiClerk, SiVercel, SiI3, SiNextdotjs, SiAmazondynamodb, SiShadcnui, SiReacthookform, SiGithubpages, SiJavascript, SiRender, SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si';

export function Projects() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
    const id = useId();
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    // Function to filter projects based on selected category
    const filteredProjects = selectedCategory === "all"
        ? cards
        : cards.filter(card => card.category.includes(selectedCategory));

    return (
        <div 
          className="flex flex-col gap-3 w-full py-20 px-10" 
          id="projects-section"
        >
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-white py-2">My Projects</h1>
              <p className="text-sm font-normal text-neutral-400 max-w-sm">A collection of my recent works</p>
            </div>
            <div className="flex flex-col items-center gap-5 w-full min-h-fit">
                <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4">
                    <motion.button 
                        type="button"
                        className="bg-gradient-to-tr from-cyan-500 to-slate-900 rounded-full py-3 px-6 font-semibold outline-none"
                        onClick={() => setSelectedCategory("all")}
                        whileTap={{ scale: 0.95 }} // Apply scaling effect on click
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
                    >
                        All
                    </motion.button>
                    <motion.button 
                        type="button"
                        className="bg-gradient-to-tr from-cyan-500 to-slate-900 rounded-full py-3 px-6 font-semibold outline-none"
                        onClick={() => setSelectedCategory("website")}
                        whileTap={{ scale: 0.95 }} // Apply scaling effect on click
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
                    >
                        Website
                    </motion.button>
                    <motion.button 
                        type="button"
                        className="bg-gradient-to-tr from-cyan-500 to-slate-900 rounded-full py-3 px-6 font-semibold outline-none"
                        onClick={() => setSelectedCategory("full-stack")}
                        whileTap={{ scale: 0.95 }} // Apply scaling effect on click
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
                    >
                        Full stack
                    </motion.button>
                    <motion.button 
                        type="button"
                        className="bg-gradient-to-tr from-cyan-500 to-slate-900 rounded-full py-3 px-6 font-semibold outline-none"
                        onClick={() => setSelectedCategory("mobile-app")}
                        whileTap={{ scale: 0.95 }} // Apply scaling effect on click
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
                    >
                        Mobile app
                    </motion.button>
                </div>
                <div className="relative">
                    <AnimatePresence>
                        {active && typeof active === "object" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 h-full w-full z-[50010]"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {active && typeof active === "object" ? (
                            <div className="fixed inset-0 bg-black/20 backdrop-blur-lg grid place-items-center z-[50010]">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.05 },
                                    }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-centerrounded-full text-gray-500 hover:text-gray-300 p-2"
                                    onClick={() => setActive(null)}
                                >
                                    <Minus size={20} />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-slate-900 sm:rounded-3xl overflow-hidden"
                                >
                                    <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <Image
                                            priority
                                            width={200}
                                            height={200}
                                            quality={100}
                                            src={active.src}
                                            alt={active.title}
                                            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                        />
                                    </motion.div>

                                    <div>
                                        <div className="flex justify-between items-start p-4">
                                            <div className="">
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-medium text-neutral-200 text-base"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                            </div>

                                            <motion.a
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                href={active.ctaLink}
                                                target="_blank"
                                                className="px-6 py-3 text-sm rounded-full font-bold bg-gradient-to-tr from-cyan-500 to-slate-900 text-white"
                                            >
                                                {active.ctaText}
                                            </motion.a>
                                        </div>
                                        <div className="pt-4 relative px-4">
                                        <motion.div
                                          layout
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          className="text-xs md:text-sm lg:text-base h-40 md:h-60 lg:h-72 pb-10 flex flex-col items-start gap-4 overflow-y-auto text-neutral-400 scroll-bar"
                                        >
                                          {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                      </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>
                    <ul className="mx-auto max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4">
                        <AnimatePresence>
                            {filteredProjects.map((card) => (
                                <motion.div
                                    layoutId={`card-${card.title}-${id}`}
                                    key={card.title}
                                    onClick={() => setActive(card)}
                                    className="p-4 flex flex-col hover:bg-slate-800 rounded-xl cursor-pointer"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="flex gap-4 flex-col w-full">
                                        <motion.div layoutId={`image-${card.title}-${id}`}>
                                            <Image
                                                priority
                                                width={400}
                                                height={300}
                                                src={card.src}
                                                alt={card.title}
                                                quality={100}
                                                className="h-60 w-full rounded-lg object-cover object-top"
                                            />
                                        </motion.div>
                                        <div className="flex justify-center items-center flex-col">
                                            <motion.h3
                                                layoutId={`title-${card.title}-${id}`}
                                                className="font-medium text-neutral-200 text-center md:text-left text-base"
                                            >
                                                {card.title}
                                            </motion.h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const techStackIcons: { [key: string]: JSX.Element } = {
  "Next.js": (
    <SiNextdotjs className="text-white text-2xl" />
  ),
  "Redux Toolkit": (
    <SiRedux className="text-blue-500 text-2xl" />
  ),
  "React.js": (
    <FaReact className="text-blue-500 text-2xl" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-500 text-2xl" />
  ),
  "Shadcn": (
    <SiShadcnui className="text-white text-2xl" />
  ), // Assuming Shadcn has a similar color to Tailwind
  "TypeScript": (
    <SiTypescript className="text-blue-600 text-2xl" />
  ),
  "Framer Motion": (
    <SiFramer className="text-white text-2xl" />
  ),
  "React Hook Form": (
    <SiReacthookform className="text-pink-500 text-2xl" />
  ),
  "Zod": (
    <SiZod className="text-blue-500 text-2xl" />
  ),
  "Stripe": (
    <FaStripe className="text-blue-600 text-2xl" />
  ),
  "Node.js": (
    <SiNodedotjs className="text-green-600 text-2xl" />
  ),
  "Express.js": (
    <SiExpress className="text-black text-2xl" />
  ),
  "Docker": (
    <FaDocker className="text-blue-500 text-2xl" />
  ),
  "AWS Lambda": (
    <FaAws className="text-orange-500 text-2xl" />
  ),
  "DynamoDB": (
    <SiAmazondynamodb className="text-indigo-600 text-2xl" />
  ),
  "S3": (
    <SiI3 className="text-green-500 text-2xl" />
  ),
  "CloudFront": (
    <FaAws className="text-orange-500 text-2xl" />
  ),
  "Clerk": (
    <SiClerk className="text-gray-600 text-2xl" />
  ),
  "Vercel": (
    <SiVercel className="text-black text-2xl" />
  ),
  "GitHub Pages": (
    <SiGithubpages className="text-white text-5xl" />
  ),
  "JavaScript": (
    <SiJavascript className="text-yellow-500 text-2xl" />
  ),
  "HTML": (
    <FaHtml5 className="text-pink-500 text-2xl" />
  ),
  "CSS": (
    <FaCss3 className="text-blue-500 text-2xl" />
  ),
  "Render": (
    <SiRender className="text-white text-2xl" />
  ),
  "Firebase": (
    <SiFirebase className="text-[#ffcb2b] text-2xl" />
  ),
  "MongoDB": (
    <SiMongodb className="text-green-500 text-2xl" />
  )
}

const TechStack = ({ name }: { name: keyof typeof techStackIcons }) => (
  <span className="relative group flex-col items-center inline">
    <span className="font-bold text-neutral-400 cursor-pointer">{name}</span>
    <p className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {techStackIcons[name]}
    </p>
  </span>
);

const cards = [
  {
    title: "Ace Tech Academia",
    src: "/projects/lms.png",
    ctaText: "Visit",
    ctaLink: "https://acetechacademia.com",
    category: ["website", "full-stack"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          Ace Tech Academia is an innovative learning management system (LMS) designed to provide a seamless and interactive online learning experience. The platform enables instructors to create and manage courses effortlessly while allowing students to enroll, track their progress, and engage with educational content in a user-friendly environment. 
          
          <div>
            With a focus on accessibility and scalability, Ace Tech Academia integrates modern design principles and cutting-edge technologies to enhance the teaching and learning process.
          </div> 
          
          <div>
            The platform is built using <TechStack name="Next.js" /> for the frontend, with state management handled by <TechStack name="Redux Toolkit" /> and UI components styled using <TechStack name="Tailwind CSS" /> and <TechStack name="Shadcn" />. It leverages <TechStack name="TypeScript" /> for type safety and includes <TechStack name="Framer Motion" /> for smooth animations. 
          </div>

          <div>
            Form handling is powered by <TechStack name="React Hook Form" /> and <TechStack name="Zod" />, while <TechStack name="Stripe" /> is integrated for seamless payment processing. On the backend, <TechStack name="Node.js" /> and <TechStack name="Express.js" /> provide a robust server-side architecture, containerized with Docker for scalability. 
          </div>
          
          <div>
            The system is hosted on <TechStack name="AWS Lambda" />, using API Gateway to manage requests, <TechStack name="DynamoDB" /> for efficient database management, S3 for file storage, and <TechStack name="CloudFront" /> for content delivery. Authentication is streamlined with <TechStack name="Clerk" />, and the frontend is deployed on <TechStack name="Vercel" /> for high-performance hosting.
          </div>
        </div>
      );
    },
  },
  {
    title: "Book Field",
    src: "/projects/book-field.png",
    ctaText: "Visit",
    ctaLink: "https://ogbonnablessed.github.io/books/",
    category: ["website"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            Book Field is an innovative online bookstore designed to offer an interactive and engaging shopping experience for book enthusiasts. The website allows users to explore, purchase, and manage books in a seamless way.
          </div>
          <div>
            The homepage features a dynamic book slider that showcases different books at regular intervals, giving users a visually appealing way to browse the collection. 
          </div>
          <div>
            Users can search for books by title, author, or category, making it easy to find specific books. The platform also enables users to add books to their cart or wishlist, and efficiently manage items in the cart by updating quantities or removing books.
          </div>
          <div>
            Integrated with Framer Motion for smooth animations, the website provides a delightful user experience. Built with <TechStack name="React.js" />, Slick Carousel, and deployed on <TechStack name="GitHub Pages" />, Book Field combines modern design and functionality for an optimized shopping journey.
          </div>
        </div>
      );
    },
  },
  {
    title: "Developer Portfolio",
    src: "/projects/developer-portfolio.png",
    ctaText: "Visit",
    ctaLink: "https://ogbonnablessed.github.io/Blessed/",
    category: ["website"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            Developer Portfolio is a portfolio website built to showcase the skills, projects, and experience of a developer. Designed using <TechStack name="HTML" />, <TechStack name="CSS" />, and <TechStack name="JavaScript" />, the portfolio serves as a simple yet effective representation of the abilities of a developer.
          </div>
          <div>
            The website features an intuitive layout, with sections to display projects, skills, and contact information. It&apos;s designed to provide visitors with a clear understanding of one&apos;s professional journey and technical expertise.
          </div>
          <div>
            The Developer Portfolio is a testament to my commitment to clean and efficient code, and serves as a foundational project in my ongoing development as a web developer.
          </div>
        </div>
      );
    },
  },
  {
    title: "Echelon",
    src: "/projects/echelon-ecommerce.png",
    ctaText: "Visit",
    ctaLink: "https://echelon-ecommerce-platform.onrender.com/",
    category: ["website", "full-stack"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            Echelon is a comprehensive e-commerce platform designed to bridge the gap between Nigerian consumers and both international luxury brands and emerging African designers. 
            
          </div>
          <div>
            As a fully integrated MERN stack (<TechStack name="MongoDB" />, <TechStack name="Express.js" />, <TechStack name="React.js" />, and <TechStack name="Node.js" />) application, Echelon addresses challenges such as shipping barriers, currency conversion issues, and limited visibility for African brands, while providing a seamless online shopping experience. The platform supports global shipping, local payment methods, and personalized promotions tailored to its users.
          </div>
          <div>
            This project was developed as part of my internship at {" "}
            <a 
              href="https://programmify.org/"
              target="_blank"
              rel="noopener"
              className="font-bold"
            >
              Programmify Ltd
            </a>, 
            where my team won first place for our final project. Echelon incorporates key features such as a user-friendly shopping cart, wishlist management, and a personalized user profile page with the ability to update personal details. 
          </div>
          <div>
            The admin dashboard provides functionality for managing orders, products, and tracking payments, ensuring efficient platform administration. Additionally, Echelon integrates 2FA for enhanced security and <TechStack name="Firebase" /> for social media-based authentication, including Google sign-ins.
          </div>
          <div>
            The platform utilizes <TechStack name="Redux Toolkit" /> for state management, <TechStack name="Tailwind CSS" /> for responsive and modern styling, and Axios for API communication. Payments are seamlessly processed via Paystack, and the entire application is deployed on <TechStack name="Render" /> for reliable hosting.
          </div>
        </div>
      );
    },
  },
  {
    title: "Omega Vision Christian Network",
    src: "/projects/ovcn.png",
    ctaText: "Visit",
    ctaLink: "https://ogbonnablessed.github.io/Omega-Vision-Christian-Network/",
    category: ["website"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            Omega Vision Christian Network is a dynamic church website designed to serve as a digital hub for worship, community engagement, and spiritual growth. Built with <TechStack name="HTML" />, <TechStack name="CSS" />, and <TechStack name="JavaScript" />, the site features an intuitive layout and a carousel slider that dynamically showcases key church events.
          </div>
          <div>
            The platform provides visitors with essential church information, fostering a welcoming online presence for both members and newcomers. Hosted on <TechStack name="GitHub Pages" />, it ensures seamless accessibility and reliability. This project reflects a commitment to excellence in web development while supporting the mission of the church.
          </div>
        </div>
      );
    },
  },
  {
    title: "This Jesus Blog",
    src: "/projects/this-jesus-blog.png",
    ctaText: "Visit",
    ctaLink: "https://this-jesus.onrender.com/",
    category: ["website", "full-stack"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            This Jesus Blog is a full-stack blogging platform designed to inspire and educate users on faith-based topics. Built using <TechStack name="MongoDB" />, <TechStack name="Express.js" />, <TechStack name="React.js" />, and <TechStack name="Node.js" /> (MERN stack), the platform offers a seamless user experience with intuitive navigation and engaging content.
          </div>
          <div>
            Users can create accounts, manage profiles, and bookmark articles for later reading. The platform also features an admin dashboard, where administrators can efficiently manage posts, comments, and user accounts.
          </div>
          <div>
            To enhance user engagement, <TechStack name="Framer Motion" /> ensures smooth animations and transitions across pages, while EmailJS integration on the Contact page allows visitors to reach out effortlessly.
          </div>
        </div>
      );
    },
  },
  {
    title: "Velora",
    src: "/projects/velora.png",
    ctaText: "Visit",
    ctaLink: "https://velora-96c0.onrender.com/",
    category: ["full-stack", "website"],
    content: () => {
      return (
        <div className="pb-5 flex flex-col gap-5">
          <div>
            Velora is a full-stack travel booking platform that allows users to seamlessly book flights, hotels, and car rentals. Built using <TechStack name="MongoDB" />, <TechStack name="Express.js" />, <TechStack name="React.js" />, and <TechStack name="Node.js" />, it features a two-factor authentication system, ensuring secure access for users.
          </div>
          <div>
            Once logged in, users can manage their bookings and update their profile settings, including email and password changes. The platform is powered by the Amadeus test API, providing real-time data and dynamic search capabilities for a smooth booking experience.
          </div>
          <div>
            To enhance user interaction, <TechStack name="Framer Motion" /> was integrated for smooth animations and transitions, creating a visually appealing and responsive interface. Additionally, Nodemailer is used to send timely and relevant email notifications to users regarding their bookings and account activities.
          </div>
          <div>
            Velora is designed to provide a seamless and secure travel booking experience, combining powerful backend functionality with an intuitive frontend.
          </div>
        </div>
      );
    },
  },
  {
    title: "React Native App",
    src: "/projects/coming-soon.webp",
    ctaText: "Visit",
    ctaLink: "#",
    category: ["mobile-app"],
    content: () => {
      return (
        <div>
          Coming soon
        </div>
      );
    },
  },
];