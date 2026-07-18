"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/portfolio-data";

const accentMap = {
  mint: "from-mint/35 to-transparent",
  coral: "from-coral/35 to-transparent",
  sun: "from-sun/40 to-transparent",
  teal: "from-teal/35 to-transparent",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block overflow-hidden rounded-3xl border border-line/60 bg-white/5"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
            priority={index < 2}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${accentMap[project.accent]} via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
          />
        </div>
        <div className="space-y-3 p-6 md:p-8">
          <div className="flex items-center justify-between text-sm text-sand/70">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="display text-3xl leading-tight md:text-4xl">{project.title}</h3>
          <p className="max-w-2xl text-sand/78">{project.subtitle}</p>
        </div>
      </Link>
    </motion.article>
  );
}