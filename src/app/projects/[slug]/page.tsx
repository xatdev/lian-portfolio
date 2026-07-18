import { AnimatedReveal } from "@/components/animated-reveal";
import { projects } from "@/lib/portfolio-data";
import Image from "next/image";
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

  if (!project) {
    notFound();
  }

  return (
    <section className="pb-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 pt-6 md:px-8 md:pt-8">
        {project.images.map((image, index) => (
          <AnimatedReveal
            key={image}
            delay={index * 0.05}
            className="relative h-[58vh] min-h-[420px] overflow-hidden rounded-3xl border border-line/70 bg-panel/45"
          >
            <Image
              src={image}
              alt={`${project.title} visual ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-contain"
            />
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}