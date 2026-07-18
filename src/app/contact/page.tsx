import { AnimatedReveal } from "@/components/animated-reveal";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
      <AnimatedReveal className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-sand/70">Contact</p>
        <h1 className="display text-5xl leading-tight md:text-6xl">Let’s Build Something Meaningful</h1>
        <p className="max-w-2xl text-sand/82">
          I am currently open to internships, studio collaborations, and conversations with teams working at the
          intersection of product innovation and human-centered design.
        </p>
      </AnimatedReveal>

      <AnimatedReveal delay={0.1} className="space-y-4 rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-8">
        <p className="text-sm text-sand/68">Reach me at</p>
        <Link href="mailto:lian.design@gmail.com" className="display text-2xl text-mint md:text-3xl">
          lian.design@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/lian-lijo-655898321/"
          target="_blank"
          className="inline-flex text-sand/84 hover:text-sand"
        >
          LinkedIn profile
        </Link>
        <Link href="/projects" className="inline-flex text-sand/84 hover:text-sand">
          Browse project work
        </Link>
      </AnimatedReveal>
    </section>
  );
}