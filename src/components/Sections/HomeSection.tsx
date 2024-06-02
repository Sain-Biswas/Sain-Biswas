import Image from "next/image";

import personImage from "#/person.png";
import reactIcon from "#/skill/react.png";
import elysiaIcon from "#/skill/elysia.svg";
import nextjsIcon from "#/skill/nextjs.svg";

import TypeWritterAnimation from "../TypeWritterAnimation";
import Link from "next/link";
import DownloadIcon from "@/libs/icons/DownloadIcon";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen grid grid-rows-2 lg:grid-cols-12 lg:grid-rows-12"
    >
      <div className="flex flex-col items-center justify-center lg:col-start-1 lg:col-end-9 lg:row-start-4 lg:row-end-10">
        <h4 className="font-wenkai text-2xl sm:text-3xl md:text-5xl">
          Hello <span className="hover:scale-110">&#128075;</span>, I&apos;m
        </h4>
        <h1 className="font-rowdies text-3xl sm:text-5xl md:text-7xl bg-base-grad bg-clip-text text-transparent">
          Sain Biswas
        </h1>
        <h1 className="font-rowdies text-3xl sm:text-5xl md:text-7xl lg:h-36 text-center">
          <TypeWritterAnimation
            strings={["Web Developer", "Android Developer", "Student"]}
            loop
            typeSpeed={40}
            backSpeed={20}
            className="bg-base-grad bg-clip-text text-transparent"
          />
        </h1>
        <p className="font-wenkai px-5 text-center sm:text-xl md:text-2xl">
          Developing what the heart desires, for the future and for fun.
        </p>
        <div className="mt-5 md:text-lg font-wenkai flex gap-5">
          <Link
            href="/#projects"
            className="px-6 py-2 hover:scale-110 border-border border-2 transition-all rounded-lg hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white"
          >
            View Projects
          </Link>
          <a
            href={process.env.RESUME_URL}
            className="px-6 py-2 hover:scale-110 flex gap-3 items-center border-border border-2 transition-all rounded-lg hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white"
            download
          >
            <DownloadIcon className="h-5 w-5" />
            <p>Resume</p>
          </a>
        </div>
      </div>
      <div className="relative lg:row-start-4 lg:col-start-9 lg:row-end-10 lg:col-end-13">
        <Image
          src={personImage}
          alt=""
          draggable={false}
          fill
          className="object-contain rounded-full"
        />
        <div className="-z-20 absolute w-3/4 md:w-1/2 lg:w-3/4 h-3/4 right-20 rounded-full bg-accent top-10 text-transparent">
          .
        </div>
      </div>
      <div className="relative hidden lg:flex h-24 w-24 col-start-11 row-start-2 font-bold bg-blue-500 text-white rounded-full justify-center items-center text-6xl">
        TS
      </div>
      <div className="relative hidden lg:block h-24 w-24 col-start-8 row-start-3">
        <Image
          src={reactIcon}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative hidden lg:block h-24 w-24 col-start-8 row-start-10">
        <Image
          src={elysiaIcon}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative hidden lg:block h-24 w-24 col-start-11 row-start-11">
        <Image
          src={nextjsIcon}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
