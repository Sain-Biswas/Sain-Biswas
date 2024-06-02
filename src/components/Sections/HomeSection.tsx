import Image from "next/image";

import TypeWritterAnimation from "../TypeWritterAnimation";
import Link from "next/link";
import DownloadIcon from "@/libs/icons/DownloadIcon";

export default function HomeSection() {
  return (
    <section id="home" className="h-screen grid place-content-center">
      Home Section
    </section>
  );
}

/*
<h5 className=" lg:text-7xl">Hello &#128075;, I&apos;m</h5>
<h1 className="text-2xl lg:text-9xl bg-base-grad bg-clip-text text-transparent drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]">Sain Biswas</h1>
<h1 className="text-2xl lg:text-9xl bg-base-grad bg-clip-text text-transparent bor drop-shadow-[2px_30px_30px_rgba(0, 0, 0, 0.5)]"><TypeWritterAnimation strings={["Web Developer", "Android Developer", "Student"]} loop typeSpeed={40} backSpeed={20} /></h1>
*/
