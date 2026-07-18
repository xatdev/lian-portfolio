import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-sand/72 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Designed and developed by Lian. Product Design Portfolio 2026.</p>
        <div className="flex items-center gap-5">
          <Link href="mailto:lian.design@gmail.com" className="hover:text-sand">
            Email
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-sand">
            LinkedIn
          </Link>
          <Link href="/contact" className="hover:text-sand">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}