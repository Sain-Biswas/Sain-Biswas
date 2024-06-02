"use client";

import ModeToggle from "@/components/mode-toggle";
import ContactIcon from "@/libs/icons/ContactIcon";
import CrossIcon from "@/libs/icons/CrossIcon";
import GitHubIcon from "@/libs/icons/GitHubIcon";
import HomeIcon from "@/libs/icons/HomeIcon";
import LinkedInIcon from "@/libs/icons/LinkedInIcon";
import MenuIcon from "@/libs/icons/MenuIcon";
import PersonIcon from "@/libs/icons/PersonIcon";
import ProjectsIcon from "@/libs/icons/ProjectsIcon";
import ResumeIcon from "@/libs/icons/ResumeIcon";
import SkillsIcon from "@/libs/icons/SkillsIcon";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { memo, useState } from "react";

export default function MobileSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-full bg-background border-border border-2 absolute top-3 right-3 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      <aside
        className={cn(
          "lg:hidden absolute top-0 right-0 w-64 h-screen flex flex-col justify-between py-5 bg-accent z-50 transition-all",
          isOpen ? "" : "translate-x-64"
        )}
      >
        <article className="flex justify-end gap-3 pr-5">
          <ModeToggle className="border-accent-foreground rounded-full border-2 p-2 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white hover:border-white" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-full border-accent-foreground border-2 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white hover:border-white"
          >
            <CrossIcon className="w-4 h-4" />
          </button>
        </article>
        <article className="flex flex-col gap-2 p-2">
          {sectionRoutes.map((route) => (
            <Link
              href={route.href}
              className="p-2 flex items-center gap-2 font-rowdies hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white rounded-lg"
            >
              <route.icon className="w-6 h-6 font-thin" />
              <p>{route.name}</p>
            </Link>
          ))}
        </article>
        <article className="grid p-2 gap-2 font-rowdies">
          <a
            href="https://github.com/Sain-Biswas"
            target="_blank"
            className="flex gap-2 justify-center border-accent-foreground border-2 p-2 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
          >
            <GitHubIcon className="w-6 h-6" />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/sainbiswas/"
            target="_blank"
            className="flex gap-2 justify-center border-accent-foreground border-2 p-2 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
          >
            <LinkedInIcon className="w-6 h-6" />
            <p>Linked In</p>
          </a>
        </article>
      </aside>
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
