import css from "./skills/css.png";
import django from "./skills/django.webp";
import express from "./skills/express.webp";
import git from "./skills/git.png";
import html from "./skills/html.png";
import java from "./skills/java.png";
import js from "./skills/js.png";
import linux from "./skills/linux.png";
import mongodb from "./skills/mongodb.webp";
import mysql from "./skills/mysql.png";
import nextjs from "./skills/nextjs.svg";
import nodejs from "./skills/nodejs.png";
import python from "./skills/python.png";
import react from "./skills/react.png";
import tailwind from "./skills/tailwind.svg";
import ts from "./skills/typescript.png";
import cpp from "./skills/cpp.png";
import kotlin from "./skills/kotlin.svg";
import android from "./skills/android.svg";
import astro from "./skills/astro.svg";

export interface SkillList {
  title: string;
  logo: any;
}

const skillList: SkillList[] = [
  { title: "Next JS", logo: nextjs },
  { title: "React JS", logo: react },
  { title: "Django", logo: django },
  { title: "Express JS", logo: express },
  { title: "Git", logo: git },
  { title: "Node JS", logo: nodejs },
  { title: "MySQL", logo: mysql },
  { title: "MongoDB", logo: mongodb },
  { title: "Tailwind CSS", logo: tailwind },
  { title: "Python", logo: python },
  { title: "Linux", logo: linux },
  { title: "Java", logo: java },
  { title: "HTML", logo: html },
  { title: "CSS", logo: css },
  { title: "JavaScript", logo: js },
  { title: "TypeScript", logo: ts },
  { title: "C++", logo: cpp },
  { title: "Kotlin", logo: kotlin },
  { title: "Android", logo: android },
  { title: "Astro", logo: astro },
];

export default skillList;
