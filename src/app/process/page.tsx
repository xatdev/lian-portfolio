import { AnimatedReveal } from "@/components/animated-reveal";
import { processSteps } from "@/lib/portfolio-data";
import Image from "next/image";

export default function ProcessPage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-14 md:px-8 md:py-20">
      <AnimatedReveal className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-sand/70">Design Process</p>
        <h1 className="display text-5xl leading-tight md:text-6xl">How I Work</h1>
        <p className="max-w-3xl text-sand/80">
          My approach balances empathy, experimentation, and craft. Every project starts with understanding people and
          ends with a proposal that is both meaningful and practical.
        </p>
      </AnimatedReveal>

      <div className="grid gap-5 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <AnimatedReveal
            key={step.title}
            delay={index * 0.07}
            className="rounded-3xl border border-line/70 bg-white/5 p-6 md:p-7"
          >
            <p className="text-sm text-sand/68">0{index + 1}</p>
            <h2 className="display mt-2 text-3xl">{step.title}</h2>
            <p className="mt-3 text-sand/82">{step.body}</p>
          </AnimatedReveal>
        ))}
      </div>

      <AnimatedReveal className="relative h-[420px] overflow-hidden rounded-3xl border border-line/70">
        <Image
          src="/images/portfolio/page-18.png"
          alt="Design process sketches"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </AnimatedReveal>
    </section>
  );
}