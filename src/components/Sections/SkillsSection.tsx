import Image, { StaticImageData } from "next/image";

import skillImage from "#/skills.svg";
import codingImage from "#/coding.svg";

import { FC } from "react";
import skillList from "#/skillIcons";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen p-5 pt-12 lg:grid grid-cols-12 grid-rows-12"
    >
      <div className="font-rowdies text-3xl sm:text-5xl md:text-7xl mb-5 col-start-1 col-end-13 row-start-1 row-end-3">
        <span className="bg-base-grad bg-clip-text text-transparent">
          My Skills
        </span>
      </div>
      <div className="font-wenkai sm:text-lg md:text-xl p-4 gap-4 col-start-1 col-end-11 xl:col-end-10 row-start-3 row-end-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skillList.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} logo={skill.logo} />
        ))}
      </div>
      <div className="relative lg:w-full lg:h-full col-start-10 col-end-13 row-start-9 row-end-13">
        <Image
          src={skillImage}
          alt=""
          draggable={false}
          fill
          className="object-contain -z-10"
        />
      </div>
      <div className="hidden lg:block relative p-2 col-start-10 col-end-13 row-start-1 row-end-5">
        <Image
          src={codingImage}
          alt=""
          draggable={false}
          fill
          className="object-contain -scale-x-100"
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
    <article className="flex gap-2 flex-col items-center justify-center text-center p-2 hover:scale-110">
      <div className="relative h-10 w-10 bg-accent rounded-full">
        <Image
          src={logo}
          alt=""
          draggable={false}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="">{title}</div>
    </article>
  );
};
