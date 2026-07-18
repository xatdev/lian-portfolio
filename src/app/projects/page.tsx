import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-14 md:px-8 md:py-20">
      <AnimatedReveal className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-sand/70">Projects</p>
        <h1 className="display text-5xl leading-tight md:text-6xl">Design Stories</h1>
        <p className="max-w-3xl text-sand/80">
          From material-led objects to system thinking and visual communication, each project captures process, intent,
          and impact.
        </p>
      </AnimatedReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}