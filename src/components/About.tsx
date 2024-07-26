import Image from "next/image";
import React from "react";
import myImage from "public/me.jpg";

const About = () => {
  return (
    <div id="about" className="w-screen h-[45rem] bg-black px-24 flex items-center">
      <div className="w-[30%]">
        <Image
          className="rounded-full aspect-square object-cover"
          src={myImage}
          height={600}
          width={600}
          alt="Cygnuxxs"
        />
      </div>
      <div className="w-[70%] space-y-8 pl-[7rem]">
        <p className="text-white text-2xl">About</p>
        <div className="flex flex-col space-y-4">
        <p className="text-white text-5xl font-bold">Who is <span className="text-neutral-400">Cygnuxxs</span></p>
        <p className="text-white text-5xl font-bold">Full Stack Developer ?</p>
        </div>
        <p className="text-neutral-400 text-xl font-light tracking-wide leading-relaxed">
          I&apos;m <span className="font-semibold text-white">Ashok Atragadda</span>, a.k.a. Cygnuxxs, an enthusiastic person who
          writes code for fun and a Full Stack Developer.<br /> With a strong
          foundation in both frontend and backend development, I excel at <span className="font-semibold text-white">turning ideas into reality</span>, whether it&apos;s crafting intuitive user
          interfaces or designing efficient server-side logic.
        </p>
      </div>
    </div>
  );
};

export default About;
