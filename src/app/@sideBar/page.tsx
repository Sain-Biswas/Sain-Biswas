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

export default function Page() {
  return (
    <>
      <aside className="hidden h-screen m-auto lg:py-6 lg:flex md:flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="font-rowdies text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              _SB
            </p>
            <p className="text-xs font-rowdies">Sain Biswas</p>
          </div>
          <ModeToggle className="p-2 md:p-4 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white" />
        </div>
        <div className="px-3 py-2  md:px-4 md:py-6 border-border border-2 rounded-t-full rounded-b-full flex md:flex-col gap-2 md:gap-4">
          {sectionRoutes.map((route) => (
            <article key={route.key} className="group relative p-1 w-8 h-8">
              <Link href={route.href}>
                <route.icon className="h-6 w-6" />
              </Link>
              <div className="invisible group-hover:visible bg-background right-[110%] -top-1 border-border border-2 absolute px-3 py-1 rounded-md">
                <p className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-rowdies">
                  {route.name}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex md:flex-col gap-2 md:gap-4">
          <button className="p-3 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white">
            <a href="https://github.com/Sain-Biswas" target="_blank">
              <GitHubIcon className="h-4 w-4 md:h-8 md:w-8" />
            </a>
          </button>
          <button className="p-2 md:p-4 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white">
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
