import Image from "next/image";

import homeSvg from "#/home.svg";
import TypeWritterAnimation from "../TypeWritterAnimation";
import Link from "next/link";
import DownloadIcon from "@/libs/icons/DownloadIcon";

export default function HomeSection() {
  return (
    <section id="home" className="h-screen grid grid-rows-2 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-start z-20 lg:col-start-1 lg:row-start-1 lg:col-end-3 lg:row-end-3 font-rowdies pl-4 lg:pl-8">
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Hello &#128075;, I&apos;m
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-base-grad bg-clip-text text-transparent drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]">
          Sain Biswas
        </h1>
        <h1 className="text-4xl h-20 sm:text-6xl sm:h-32 md:text-7xl md:h-36 lg:text-8xl lg:h-48 xl:text-9xl xl:h-64  bg-base-grad bg-clip-text text-transparent bor drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]">
          <TypeWritterAnimation
            strings={["Web Developer", "Android Developer", "Student"]}
            loop
            typeSpeed={40}
            backSpeed={20}
          />
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl lg:w-1/2 text-center">
          Developing what the heart desires, for the future and for fun.
        </p>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-around gap-5 font-serif italic text-base sm:text-lg md:text-2xl lg:text-3xl mt-5">
          <Link
            href="/#projects"
            className="py-2 px-5 rounded-md transition-all hover:rounded-l-full hover:rounded-r-full border-2 border-border hover:bg-base-grad hover:text-white"
          >
            View Projects
          </Link>
          <Link
            href="/"
            className="py-2 px-5 rounded-md transition-all hover:rounded-l-full hover:rounded-r-full border-2 border-border hover:bg-base-grad hover:text-white flex gap-2 items-center"
          >
            <DownloadIcon className="w-4 h-4 md:w-6 md:h-6" />
            <p>Resume</p>
          </Link>
        </div>
      </div>
      <div className="relative lg:col-start-2 lg:row-start-2 lg:col-end-3 lg:row-end-3 z-10">
        <Image src={homeSvg} alt="" fill className="object-contain" />
      </div>
    </section>
  );
}

/*
<h5 className=" lg:text-7xl">Hello &#128075;, I&apos;m</h5>
<h1 className="text-2xl lg:text-9xl bg-base-grad bg-clip-text text-transparent drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]">Sain Biswas</h1>
<h1 className="text-2xl lg:text-9xl bg-base-grad bg-clip-text text-transparent bor drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]"><TypeWritterAnimation strings={["Web Developer", "Android Developer", "Student"]} loop typeSpeed={40} backSpeed={20} /></h1>
*/
