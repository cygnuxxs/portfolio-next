import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FirstHero = () => {
  return (
    <div className="w-screen py-12 flex items-center justify-center">
      <div className="w-3/5 text-center space-y-2">
        <p className="text-6xl font-bold leading-relaxed">
          Crafting as a Full Stack Developer.
        </p>
        <p className="text-2xl font-medium text-[#79747e] leading-relaxed tracking-wide">
          I specialize in crafting dynamic, responsive, and user-centric web
          applications. With a solid foundation in both frontend and backend
          technologies, I am dedicated to delivering seamless digital
          experiences and robust server-side solutions.
        </p>
        <div className="flex gap-10 w-full pt-8 justify-center">
            <Button
              variant={"outline"}
              asChild
              className="rounded-none border-none hover:bg-neutral-300 w-48 h-14 bg-neutral-200"
              size={"lg"}
            >
              <Link href={'/'}>My Resume</Link>
            </Button>
          <Button
            variant={"outline"}
            asChild
            className="rounded-none w-48 h-14 hover:bg-neutral-800 hover:text-white bg-black text-white"
            size={"lg"}
          >
            <Link href={"#contact"}>
              Let's Work Together
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstHero;
