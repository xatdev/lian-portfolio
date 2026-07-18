import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[calc(100svh-73px)] min-h-[420px] w-full items-center overflow-hidden border-b border-line/70 bg-panel/55">
        <AnimatedReveal className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sand/65">Product Design Portfolio</p>
            <h1 className="display text-6xl leading-[0.95] text-sand sm:text-7xl md:text-8xl">Lian&apos;s Portfolio</h1>
            <p className="max-w-2xl text-base leading-relaxed text-sand/80 md:text-lg">
              A curated body of product design work exploring sustainability, material innovation, and human-centered
              experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="rounded-full border border-line bg-ink px-6 py-3 text-sm text-sand transition hover:bg-sand hover:text-ink"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-line px-6 py-3 text-sm text-sand/82 transition hover:border-sand hover:text-sand"
              >
                About Lian Lijo
              </Link>
            </div>
          </div>
        </AnimatedReveal>
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
