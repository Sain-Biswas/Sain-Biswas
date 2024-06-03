import Image from "next/image";

import aboutImage from "#/about.svg";
import indiaImage from "#/india.svg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col justify-between gap-5 p-5 pt-16 md:min-h-screen lg:grid lg:h-screen lg:grid-cols-12 lg:grid-rows-12"
    >
      <div className="col-start-1 col-end-13 row-start-1 row-end-3 text-right font-rowdies text-3xl sm:text-5xl md:text-7xl">
        <h1 className="bg-base-grad bg-clip-text text-transparent">About Me</h1>
      </div>
      <div className="col-start-5 col-end-13 row-start-3 row-end-10 flex flex-col gap-4 font-wenkai sm:text-xl md:text-2xl">
        <p className="">
          What&apos;s up! I&apos;m{" "}
          <span className="bg-base-grad bg-clip-text font-rowdies text-transparent">
            Sain Biswas
          </span>
          , a 3<sup>rd</sup> at Chandigarh University majoring in Computer
          Science. I enjoy building things for the web and mobile, and I&apos;m
          constantly learning new languages and frameworks to push the
          boundaries of what&apos;s possible.
        </p>
        <p className="">
          I love the challenge of crafting new and user-friendly web
          experiences, whether it&apos;s a sleek landing page or a complex
          interactive application. On the mobile side, I&apos;m fascinated by
          the power of creating apps that can fit in your pocket and completely
          transform the way we interact with the world.
        </p>
        <p className="">
          When I&apos;m not coding, you&apos;ll probably find me tinkering with
          open-source projects, participating in hackathons, or brainstorming
          ideas with friends. This hands-on approach keeps my skills sharp and
          fuels my passion for innovation. I&apos;m always looking for new
          opportunities to collaborate and bring fresh perspectives to the
          table.
        </p>
      </div>
      <div className="col-start-1 col-end-5 row-start-8 row-end-13">
        <div className="relative h-80 w-80 lg:h-full lg:w-full">
          <Image
            src={aboutImage}
            alt=""
            draggable={false}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>
      <div className="relative col-start-2 col-end-4 row-start-2 row-end-4 hidden lg:block">
        <Image
          src={indiaImage}
          alt=""
          draggable={false}
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
