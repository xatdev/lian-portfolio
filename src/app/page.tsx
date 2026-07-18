import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-line/70">
        <AnimatedReveal className="relative aspect-[16/10] w-full">
          <Image
            src="/images/portfolio/page-01.png"
            alt="Lian portfolio cover"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </AnimatedReveal>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-14 md:px-8 md:py-20">
        <AnimatedReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-sand/70">Featured Projects</p>
              <h2 className="display text-4xl md:text-5xl">Selected Work</h2>
            </div>
            <Link href="/projects" className="text-sm text-mint hover:text-sand">
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
