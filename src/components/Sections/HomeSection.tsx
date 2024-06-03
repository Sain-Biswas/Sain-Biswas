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
      className="grid h-screen grid-rows-2 lg:grid-cols-12 lg:grid-rows-12"
    >
      <div className="flex flex-col items-center justify-center lg:col-start-1 lg:col-end-9 lg:row-start-4 lg:row-end-10">
        <h4 className="font-wenkai text-2xl sm:text-3xl md:text-5xl">
          Hello <span className="hover:scale-110">&#128075;</span>, I&apos;m
        </h4>
        <h1 className="bg-base-grad bg-clip-text font-rowdies text-3xl text-transparent sm:text-5xl md:text-7xl">
          Sain Biswas
        </h1>
        <h1 className="text-center font-rowdies text-3xl sm:text-5xl md:text-7xl lg:h-36">
          <TypeWritterAnimation
            strings={["Web Developer", "Android Developer", "Student"]}
            loop
            typeSpeed={40}
            backSpeed={20}
            className="bg-base-grad bg-clip-text text-transparent"
          />
        </h1>
        <h6 className="px-5 text-center font-wenkai sm:text-xl md:text-2xl">
          Developing what the heart desires, for the future and for fun.
        </h6>
        <div className="mt-5 flex gap-5 font-wenkai md:text-lg">
          <Link
            href="/#projects"
            className="rounded-lg border-2 border-border px-6 py-2 transition-all hover:scale-110 hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white"
          >
            View Projects
          </Link>
          <a
            href={process.env.RESUME_URL as string}
            className="flex items-center gap-3 rounded-lg border-2 border-border px-6 py-2 transition-all hover:scale-110 hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white"
            download
          >
            <DownloadIcon className="h-5 w-5" />
            <h6>Resume</h6>
          </a>
        </div>
      </div>
      <div className="relative lg:col-start-9 lg:col-end-13 lg:row-start-4 lg:row-end-10">
        <Image
          src={personImage}
          alt=""
          draggable={false}
          fill
          className="rounded-full object-contain"
        />
        <div className="absolute right-20 top-10 -z-20 h-3/4 w-3/4 rounded-full bg-accent text-transparent md:w-1/2 lg:w-3/4">
          .
        </div>
      </div>
      <div className="relative col-start-11 row-start-2 hidden h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-6xl font-bold text-white lg:flex">
        TS
      </div>
      <div className="relative col-start-8 row-start-3 hidden h-24 w-24 lg:block">
        <Image
          src={reactIcon}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative col-start-8 row-start-10 hidden h-24 w-24 lg:block">
        <Image
          src={elysiaIcon}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative col-start-11 row-start-11 hidden h-24 w-24 lg:block">
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
