"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

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
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
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
                                                className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
                                                width={100}
                                                height={100}
                                                src={card.src}
                                                alt={card.title}
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

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.05 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
  {
    title: "Ace Tech Academia",
    src: "/projects/lms.png",
    ctaText: "Visit",
    ctaLink: "https://acetechacademia.com",
    category: ["website", "full-stack"],
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
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
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
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
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
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
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
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
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
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
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aliquam vero perspiciatis aliquid cumque soluta iusto ipsum nulla enim. Accusantium nobis libero quo eum inventore voluptas debitis cumque hic sint iusto mollitia, dolorum ipsam magni nam tenetur, aperiam fuga! Enim facere sit laudantium harum cum distinctio aut quaerat necessitatibus, saepe neque iste adipisci ab facilis ullam corrupti doloribus? Velit, quod? Adipisci soluta dolorem sunt odio, ab nostrum tempora possimus minus deleniti architecto quo sapiente enim exercitationem ipsa illo deserunt officiis! Eveniet vitae odio reiciendis, porro rem soluta sapiente nam, nisi officia vel ratione sint magnam voluptatum at. Minus, aliquid obcaecati.
        </p>
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aliquam vero perspiciatis aliquid cumque soluta iusto ipsum nulla enim. Accusantium nobis libero quo eum inventore voluptas debitis cumque hic sint iusto mollitia, dolorum ipsam magni nam tenetur, aperiam fuga! Enim facere sit laudantium harum cum distinctio aut quaerat necessitatibus, saepe neque iste adipisci ab facilis ullam corrupti doloribus? Velit, quod? Adipisci soluta dolorem sunt odio, ab nostrum tempora possimus minus deleniti architecto quo sapiente enim exercitationem ipsa illo deserunt officiis! Eveniet vitae odio reiciendis, porro rem soluta sapiente nam, nisi officia vel ratione sint magnam voluptatum at. Minus, aliquid obcaecati.
        </p>
      );
    },
  },
];