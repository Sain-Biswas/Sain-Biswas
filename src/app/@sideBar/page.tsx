import ModeToggle from "@/components/mode-toggle";
import ContactIcon from "@/libs/icons/ContactIcon";
import GitHubIcon from "@/libs/icons/GitHubIcon";
import HomeIcon from "@/libs/icons/HomeIcon";
import LinkedInIcon from "@/libs/icons/LinkedInIcon";
import PersonIcon from "@/libs/icons/PersonIcon";
import ProjectsIcon from "@/libs/icons/ProjectsIcon";
import ResumeIcon from "@/libs/icons/ResumeIcon";
import SkillsIcon from "@/libs/icons/SkillsIcon";
import Link from "next/link";
import MobileSideBar from "./MobileSideBar";
import { JSX } from "react";

export default function Page() {
  return (
    <>
      <aside className="m-auto hidden h-screen items-center justify-between md:flex-col lg:flex lg:py-6">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-rowdies text-2xl text-transparent">
              _SB
            </p>
            <p className="font-rowdies text-xs">Sain Biswas</p>
          </div>
          <ModeToggle className="rounded-full border-2 border-border from-purple-500 to-pink-500 p-2 hover:bg-gradient-to-r hover:text-white md:p-4" />
        </div>
        <div className="flex gap-2 rounded-b-full rounded-t-full border-2 border-border px-3 py-2 md:flex-col md:gap-4 md:px-4 md:py-6">
          {sectionRoutes.map((route) => (
            <article key={route.key} className="group relative h-8 w-8 p-1">
              <Link href={route.href}>
                <route.icon className="h-6 w-6" />
              </Link>
              <div className="invisible absolute -top-1 right-[110%] rounded-md border-2 border-border bg-background px-3 py-1 group-hover:visible">
                <p className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-rowdies text-transparent">
                  {route.name}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex gap-2 md:flex-col md:gap-4">
          <button className="rounded-full border-2 border-border from-purple-500 to-pink-500 p-3 hover:bg-gradient-to-r hover:text-white">
            <a href="https://github.com/Sain-Biswas" target="_blank">
              <GitHubIcon className="h-4 w-4 md:h-8 md:w-8" />
            </a>
          </button>
          <button className="rounded-full border-2 border-border from-purple-500 to-pink-500 p-2 hover:bg-gradient-to-r hover:text-white md:p-4">
            <a href="https://www.linkedin.com/in/sainbiswas/" target="_blank">
              <LinkedInIcon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </button>
        </div>
      </aside>

      <MobileSideBar />
    </>
  );
}

interface SectionRoute {
  key: string;
  icon: ({ className }: { className: string }) => JSX.Element;
  name: string;
  href: string;
}

const sectionRoutes: SectionRoute[] = [
  {
    key: "section-home",
    icon: HomeIcon,
    name: "Home",
    href: "/#home",
  },
  {
    key: "section-about",
    icon: PersonIcon,
    name: "About",
    href: "/#about",
  },
  {
    key: "section-skills",
    icon: SkillsIcon,
    name: "Skills",
    href: "/#skills",
  },
  {
    key: "section-projects",
    icon: ProjectsIcon,
    name: "Projects",
    href: "/#projects",
  },
  {
    key: "section-resume",
    icon: ResumeIcon,
    name: "Resume",
    href: "/#resume",
  },
  {
    key: "section-contact",
    icon: ContactIcon,
    name: "Contact",
    href: "/#contact",
  },
];
