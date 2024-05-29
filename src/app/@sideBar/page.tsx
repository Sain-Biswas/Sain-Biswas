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

export default function Page() {

    return (
        <aside className="py-6 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
                <div className="mb-4 text-center">
                    <p className="font-rowdies text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">_SB</p>
                    <p className="text-xs font-rowdies">Sain Biswas</p>
                </div>
                <ModeToggle className="p-4 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white" />
            </div>
            <div className="px-4 py-6 border-border border-2 rounded-t-full rounded-b-full flex flex-col gap-4">
                {
                    sectionRoutes.map((route) => (
                        <article key={route.key} className="group relative p-1 w-8 h-8">
                            <Link href={route.href}>
                                <route.icon className="h-6 w-6" />
                            </Link>
                            <div className="invisible group-hover:visible bg-background right-[110%] -top-1 border-border border-2 absolute px-3 py-1 rounded-md"><p className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-rowdies">{route.name}</p></div>
                        </article>
                    ))
                }
            </div>
            <div className="flex flex-col gap-4">
                <button className="p-3 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white">
                    <Link href="https://github.com/Sain-Biswas" target="_blank">
                        <GitHubIcon className="h-8 w-8" />
                    </Link>
                </button>
                <button className="p-4 border-border border-2 rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white">
                    <Link href="https://www.linkedin.com/in/sainbiswas/" target="_blank">
                        <LinkedInIcon className="h-6 w-6" />
                    </Link>
                </button>
            </div>
        </aside>
    )
};

interface SectionRoute {
    key: string,
    icon: ({ className }: { className: string }) => JSX.Element,
    name: string,
    href: string
};

const sectionRoutes: SectionRoute[] = [
    {
        key: "section-home",
        icon: HomeIcon,
        name: "Home",
        href: "/#home"
    },
    {
        key: "section-about",
        icon: PersonIcon,
        name: "About",
        href: "/#about"
    },
    {
        key: "section-skills",
        icon: SkillsIcon,
        name: "Skills",
        href: "/#skills"
    },
    {
        key: "section-projects",
        icon: ProjectsIcon,
        name: "Projects",
        href: "/#projects"
    },
    {
        key: "section-resume",
        icon: ResumeIcon,
        name: "Resume",
        href: "/#resume"
    },
    {
        key: "section-contact",
        icon: ContactIcon,
        name: "Contact",
        href: "/#contact"
    }
]