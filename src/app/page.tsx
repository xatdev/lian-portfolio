import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative grid-bg overflow-hidden border-b border-line/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-8 md:py-20">
          <AnimatedReveal className="space-y-8">
            <p className="text-sm uppercase tracking-[0.2em] text-sand/70">B.Des Product Design Portfolio</p>
            <h1 className="display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              Lian builds <span className="gradient-text">vibrant, human-centered products</span> through storytelling.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-sand/80 md:text-lg">
              A premium portfolio featuring selected studio and academic explorations across product design,
              material experimentation, and visual communication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition hover:translate-y-[-1px]"
              >
                View Projects
              </Link>
              <Link href="/contact" className="rounded-full border border-line px-6 py-3 text-sm hover:bg-white/8">
                Contact Lian
              </Link>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12} className="relative h-[420px] overflow-hidden rounded-3xl border border-line/70">
            <Image
              src="/images/portfolio/page-01.png"
              alt="Lian portfolio cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </AnimatedReveal>
        </div>
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
