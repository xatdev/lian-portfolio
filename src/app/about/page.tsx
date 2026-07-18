import { AnimatedReveal } from "@/components/animated-reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-20">
      <AnimatedReveal className="relative min-h-[460px] overflow-hidden rounded-3xl border border-line/70">
        <Image
          src="/images/lian-background.png"
          alt="Lian portrait"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </AnimatedReveal>

      <AnimatedReveal delay={0.08} className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-sand/70">About</p>
          <h1 className="display text-5xl leading-tight md:text-6xl">Lian</h1>
          <p className="text-lg text-mint">Product Design Student | B.Des</p>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-sand/82 md:text-lg">
          I am a product design student who enjoys translating complex problems into clear, meaningful objects and
          experiences. My work combines research, material exploration, and visual storytelling to build products that
          feel intuitive and emotionally resonant.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Human-centered research",
            "Concept and form development",
            "Sustainable material exploration",
            "Visual storytelling and presentation",
          ].map((skill) => (
            <div key={skill} className="rounded-2xl border border-line/80 bg-panel/70 p-4 text-sand/84">
              {skill}
            </div>
          ))}
        </div>

        <p className="text-sand/76">
          Open to internships, collaborative studio projects, and conversations with design teams exploring future-ready
          products.
        </p>
      </AnimatedReveal>
    </section>
  );
}