import React from "react";
import Skill from "./Skill";
import nextLogo from "public/nextLogo.svg";
import reactLogo from "public/reactLogo.svg";
import mongoLogo from "public/mongoLogo.svg";
import dockerLogo from "public/dockerLogo.svg";
import flaskLogo from "public/flaskLogo.svg";
import nodeLogo from "public/nodeLogo.svg";
import tailwindLogo from "public/tailwindLogo.svg";

const Skills = () => {
  const skills = [
    { logo: nextLogo, tech: "NextJS" },
    { logo: reactLogo, tech: "ReactJS" },
    { logo: nodeLogo, tech: "NodeJS" },
    { logo: dockerLogo, tech: "Docker" },
    { logo: tailwindLogo, tech: "TailwindCSS" },
    { logo: flaskLogo, tech: "Flask" },
    { logo: mongoLogo, tech: "MongoDB" },
  ];

  return (
    <div id="skills" className="py-[10rem] flex flex-col items-center justify-center bg-neutral-100 w-full">
      <p className="text-xl mb-8 font-medium text-neutral-500">My Skills</p>
      <p className="text-3xl font-semibold">
        Showcasing My Expertise And Technical Proficiencies
      </p>
      <div className="grid grid-flow-row mt-12 grid-cols-4 gap-x-6 gap-y-4">
        {skills.map((skill, key) => (
            <Skill logo={skill.logo} tech={skill.tech} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
