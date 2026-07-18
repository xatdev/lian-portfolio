import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[calc(100svh-73px)] min-h-[420px] w-full items-center overflow-hidden border-b border-line/70 bg-[#5b5b5d]">
        <AnimatedReveal className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/95">Product Design</p>
            <h1 className="display text-6xl font-semibold leading-[0.9] text-[#ff643a] sm:text-7xl md:text-8xl lg:text-[10rem]">
              Lian&apos;s
              <br />
              Portfolio.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              A curated body of product design work exploring sustainability, material innovation, and human-centered
              experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#4a4a4c]"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/40 px-6 py-3 text-sm text-white/90 transition hover:border-white hover:text-white"
              >
                About Lian Lijo
              </Link>
            </div>
          </div>
        </AnimatedReveal>
        <p className="absolute bottom-10 right-6 origin-bottom-right -rotate-90 text-sm font-semibold tracking-[0.03em] text-white/95 md:right-8 md:text-base">
          lian.lijo@gmail.com
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-14 md:px-8 md:py-20">
        <AnimatedReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-sand/70">Featured Projects</p>
              <h2 className="display text-4xl md:text-5xl">Selected Work</h2>
            </div>
            <Link href="/projects" className="text-sm text-mint hover:text-sand/80">
              See all projects
            </Link>
          </div>
        </AnimatedReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
