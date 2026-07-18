import { AnimatedReveal } from "@/components/animated-reveal";
import Image from "next/image";
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

      <AnimatedReveal delay={0.1} className="space-y-6 rounded-3xl border border-line/80 bg-panel/70 p-6 md:p-8">
        <div className="relative -mx-6 -mt-6 h-56 w-[calc(100%+3rem)] overflow-hidden rounded-t-3xl md:h-64">
          <Image
            src="/images/lian-background.png"
            alt="Lian portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm text-sand/68">Reach me at</p>
          <Link href="mailto:lian.lijo@gmail.com" className="block display text-2xl text-mint md:text-3xl">
            lian.lijo@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/lian-lijo-655898321/"
            target="_blank"
            className="block text-sand/84 hover:text-sand"
          >
            LinkedIn profile
          </Link>
        </div>
      </AnimatedReveal>
    </section>
  );
}