import React from "react";
import Project from "@/components/Project";
import audioVibes from "public/audiovibes.png";
import blog from "public/blog.png";
import lyrics from "public/lyrics.png";

const Projects = () => {
  return (
    <div id="projects" className="w-screen flex flex-col pb-12 gap-4 items-center py-8 px-8">
      <p className="text-lg font-medium text-neutral-500 my-4">Projects</p>
      <Project
        image={audioVibes}
        link="https://audiovibes.vercel.app"
        title="Mp3Door Website"
        description="Mp3Door Is A NextJS-based music download application offering a seamless and intuitive user experience for effiecient downloads"
        tech="NextJS"
      />
      <Project
        image={blog}
        link=""
        title="Blog Website"
        description="A NextJS-powered blog offering fast performance and a responsive design, providing an excellent reading experience across all devices."
        tech="NextJS"
      />
      <Project
        image={lyrics}
        link="https://lyrics-finder-iota.vercel.app"
        title="Lyrics Finder Website"
        tech="MERN Stack"
        description="Lyrics Finder is a MERN Stack application that lets users quickly search for and find accurate song lyrics, featuring a user-friendly interface and robust search capabilities."
      />
    </div>
  );
};

export default Projects;
