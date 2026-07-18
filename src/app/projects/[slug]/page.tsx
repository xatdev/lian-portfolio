import { AnimatedReveal } from "@/components/animated-reveal";
import { projects } from "@/lib/portfolio-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const usesFullPageImages = slug === "ambient-cork-lamp" || slug === "mycocradle";

  if (!project) {
    notFound();
  }

  return (
    <section className="pb-12">
      <div className="relative h-[62vh] min-h-[430px] overflow-hidden border-b border-line/70 bg-panel/45">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className={usesFullPageImages ? "object-contain" : "object-cover"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-sand/72">{project.category}</p>
          <h1 className="display max-w-4xl text-5xl leading-tight md:text-7xl">{project.title}</h1>
          <p className="mt-3 text-base text-sand/82 md:text-lg">{project.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-16">
        <AnimatedReveal className="space-y-6 rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-7">
          <p className="text-sm text-sand/70">Year: {project.year}</p>
          <p className="text-base leading-relaxed text-sand/84">{project.overview}</p>
          <Link href="/projects" className="inline-flex text-sm text-mint hover:text-sand/80">
            Back to projects
          </Link>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08} className="grid gap-5">
          <article className="rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-7">
            <h2 className="display text-3xl">Challenge</h2>
            <p className="mt-3 text-sand/82">{project.challenge}</p>
          </article>
          <article className="rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-7">
            <h2 className="display text-3xl">Solution</h2>
            <p className="mt-3 text-sand/82">{project.solution}</p>
          </article>
          <article className="rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-7">
            <h2 className="display text-3xl">Impact</h2>
            <p className="mt-3 text-sand/82">{project.impact}</p>
          </article>
        </AnimatedReveal>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 md:grid-cols-2 md:px-8">
        {project.images.slice(1).map((image, index) => (
          <AnimatedReveal
            key={image}
            delay={index * 0.05}
            className={
              usesFullPageImages
                ? "relative h-[58vh] min-h-[420px] overflow-hidden rounded-3xl border border-line/70 bg-panel/45"
                : "relative aspect-[4/3] overflow-hidden rounded-3xl border border-line/70"
            }
          >
            <Image
              src={image}
              alt={`${project.title} visual ${index + 2}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={usesFullPageImages ? "object-contain" : "object-cover"}
            />
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}