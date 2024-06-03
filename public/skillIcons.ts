import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import css from "./skill/css.png";
import django from "./skill/django.webp";
import express from "./skill/express.webp";
import git from "./skill/git.png";
import html from "./skill/html.png";
import java from "./skill/java.png";
import js from "./skill/js.png";
import linux from "./skill/linux.png";
import mongodb from "./skill/mongodb.webp";
import mysql from "./skill/mysql.png";
import nextjs from "./skill/nextjs.svg";
import nodejs from "./skill/nodejs.png";
import python from "./skill/python.png";
import react from "./skill/react.png";
import tailwind from "./skill/tailwind.svg";
import ts from "./skill/typescript.png";
import cpp from "./skill/cpp.png";
import kotlin from "./skill/kotlin.svg";
import android from "./skill/android.svg";
import astro from "./skill/astro.svg";
import bun from "./skill/Bun.svg";
import elysia from "./skill/elysia.svg";
import hono from "./skill/hono.svg";
import prisma from "./skill/prisma.svg";

export interface SkillList {
  title: string;
  logo: StaticImageData;
}

const skillList: SkillList[] = [
  { title: "Next JS", logo: nextjs },
  { title: "React JS", logo: react },
  { title: "Django", logo: django },
  { title: "Express JS", logo: express },
  { title: "Git", logo: git },
  { title: "Node JS", logo: nodejs },
  { title: "MySQL", logo: mysql },
  { title: "Mongo DB", logo: mongodb },
  { title: "Tail wind CSS", logo: tailwind },
  { title: "Python", logo: python },
  { title: "Linux", logo: linux },
  { title: "Java", logo: java },
  { title: "HTML", logo: html },
  { title: "CSS", logo: css },
  { title: "Java Script", logo: js },
  { title: "Type Script", logo: ts },
  { title: "C++", logo: cpp },
  { title: "Kotlin", logo: kotlin },
  { title: "Android", logo: android },
  { title: "Astro", logo: astro },
  { title: "Bun JS", logo: bun },
  { title: "Elysia JS", logo: elysia },
  { title: "Hono JS", logo: hono },
  { title: "Prisma", logo: prisma },
];

export default skillList;
