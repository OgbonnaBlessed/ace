"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `
<p>
    Hi, I'm Ogbonna Blessed, a passionate software engineer based in Lagos, Nigeria, with over 2 years of experience in the tech industry. I specialize in developing innovative solutions that bridge technology with human experience. From optimizing performance to creating scalable applications, I am dedicated to building impactful software that empowers users and businesses to succeed in today's digital age. With a keen eye for detail and an unwavering commitment to excellence, I approach every project with a focus on delivering exceptional results.
</p>
<br />
<p>
    Throughout my career, I have continuously adapted to the evolving landscape of technology. My journey is not just about coding—it's about crafting intuitive, efficient, and robust solutions to complex challenges. I take pride in my ability to learn new technologies and apply them effectively to transform how people interact with the world. Whether collaborating with teams or working independently, my goal is to make a lasting impact and contribute meaningfully to the development of cutting-edge software solutions.
</p>
`;

export function TextEffect() {
    return (
        <TextGenerateEffect duration={2} filter={false} words={words} />
    );
}