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
import { JSX, memo, useState } from "react";

export default function MobileSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute right-3 top-3 rounded-full border-2 border-border bg-background from-purple-500 to-pink-500 p-2 hover:bg-gradient-to-r hover:text-white lg:hidden"
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      <aside
        className={cn(
          "absolute right-0 top-0 z-50 flex h-screen w-64 flex-col justify-between bg-accent py-5 transition-all lg:hidden",
          isOpen ? "" : "translate-x-64",
        )}
      >
        <article className="flex justify-end gap-3 pr-5">
          <ModeToggle className="rounded-full border-2 border-accent-foreground from-purple-500 to-pink-500 p-2 hover:border-white hover:bg-gradient-to-r hover:text-white" />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full border-2 border-accent-foreground from-purple-500 to-pink-500 p-3 hover:border-white hover:bg-gradient-to-r hover:text-white"
          >
            <CrossIcon className="h-4 w-4" />
          </button>
        </article>
        <article className="flex flex-col gap-2 p-2">
          {sectionRoutes.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              className="flex items-center gap-2 rounded-lg from-purple-500 to-pink-500 p-2 font-rowdies hover:bg-gradient-to-r hover:text-white"
            >
              <route.icon className="h-6 w-6 font-thin" />
              <p>{route.name}</p>
            </Link>
          ))}
        </article>
        <article className="grid gap-2 p-2 font-rowdies">
          <a
            href="https://github.com/Sain-Biswas"
            target="_blank"
            className="flex justify-center gap-2 rounded-lg border-2 border-accent-foreground from-purple-500 to-pink-500 p-2 hover:bg-gradient-to-r hover:text-white"
          >
            <GitHubIcon className="h-6 w-6" />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/sainbiswas/"
            target="_blank"
            className="flex justify-center gap-2 rounded-lg border-2 border-accent-foreground from-purple-500 to-pink-500 p-2 hover:bg-gradient-to-r hover:text-white"
          >
            <LinkedInIcon className="h-6 w-6" />
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
