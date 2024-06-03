import Image, { StaticImageData } from "next/image";

import skillImage from "#/skills.svg";
import codingImage from "#/coding.svg";

import { FC } from "react";
import skillList from "#/skillIcons";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen grid-cols-12 grid-rows-12 p-5 pt-12 lg:grid"
    >
      <div className="col-start-1 col-end-13 row-start-1 row-end-3 mb-5 font-rowdies text-3xl sm:text-5xl md:text-7xl">
        <h1 className="inline bg-base-grad bg-clip-text text-transparent">
          My Skills
        </h1>
      </div>
      <div className="col-start-1 col-end-11 row-start-3 row-end-11 grid grid-cols-2 gap-4 p-4 font-wenkai sm:grid-cols-3 sm:text-lg md:grid-cols-4 md:text-xl lg:grid-cols-6 xl:col-end-10">
        {skillList.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} logo={skill.logo} />
        ))}
      </div>
      <div className="relative col-start-10 col-end-13 row-start-9 row-end-13 lg:h-full lg:w-full">
        <Image
          src={skillImage}
          alt=""
          draggable={false}
          fill
          className="-z-10 object-contain"
        />
      </div>
      <div className="relative col-start-10 col-end-13 row-start-1 row-end-5 hidden p-2 lg:block">
        <Image
          src={codingImage}
          alt=""
          draggable={false}
          fill
          className="-scale-x-100 object-contain"
        />
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  logo: StaticImageData;
}

const SkillCard: FC<SkillCardProps> = ({ title, logo }) => {
  return (
    <article className="skill-animation flex flex-col items-center justify-center gap-2 p-2 text-center hover:scale-110">
      <div className="relative h-10 w-10 rounded-full bg-accent">
        <Image
          src={logo}
          alt=""
          draggable={false}
          fill
          className="rounded-md object-contain"
        />
      </div>
      <div className="">{title}</div>
    </article>
  );
};
