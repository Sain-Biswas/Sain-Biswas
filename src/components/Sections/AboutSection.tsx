import Image from "next/image";

import aboutImage from "#/about.svg";
import indiaImage from "#/india.svg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="md:min-h-screen lg:h-screen flex flex-col gap-5 p-5 pt-16 justify-between lg:grid lg:grid-cols-12 lg:grid-rows-12"
    >
      <div className="font-rowdies text-3xl sm:text-5xl md:text-7xl text-right col-start-1 col-end-13 row-start-1 row-end-3">
        <span className="bg-base-grad bg-clip-text text-transparent">
          About Us
        </span>
      </div>
      <div className="font-wenkai sm:text-xl md:text-2xl flex flex-col gap-4 col-start-5 col-end-13 row-start-3 row-end-10">
        <p className="">
          What's up! I'm{" "}
          <span className="font-rowdies bg-base-grad bg-clip-text text-transparent">
            Sain Biswas
          </span>
          , a 3<sup>rd</sup> at Chandigarh University majoring in Computer
          Science. I enjoy building things for the web and mobile, and I'm
          constantly learning new languages and frameworks to push the
          boundaries of what's possible.
        </p>
        <p className="">
          I love the challenge of crafting new and user-friendly web
          experiences, whether it's a sleek landing page or a complex
          interactive application. On the mobile side, I'm fascinated by the
          power of creating apps that can fit in your pocket and completely
          transform the way we interact with the world.
        </p>
        <p className="">
          When I'm not coding, you'll probably find me tinkering with
          open-source projects, participating in hackathons, or brainstorming
          ideas with friends. This hands-on approach keeps my skills sharp and
          fuels my passion for innovation. I'm always looking for new
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
      <div className="hidden lg:block relative col-start-2 col-end-4 row-start-2 row-end-4">
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
