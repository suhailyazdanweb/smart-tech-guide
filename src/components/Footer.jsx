import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Work", "/#work"],
  ["About", "/#about"],
];

const serviceLinks = ["Web Design", "Web Development", "UI/UX Design", "Graphic Design"];

function FooterLinks({ links }) {
  return links.map(([label, href]) => (
    <Link className="text-xs text-[#c5cbc6] hover:text-[var(--coral)]" href={href} key={label}>{label}</Link>
  ));
}

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-0 pb-[22px] pt-20 text-[var(--surface)]">
      <div className="mx-auto grid min-h-[235px] w-full max-w-[1280px] grid-cols-[2fr_1fr_1fr_1.3fr] gap-[55px] px-8 max-[640px]:grid-cols-2 max-[640px]:gap-[42px] max-[640px]:px-5">
        <div className="max-[640px]:col-span-full">
          <Image className="h-auto w-[250px] max-[640px]:w-[210px]" src="/logo-stg.png" alt="Smart Tech Guide" width={1162} height={416} />
          <p className="mt-[22px] font-serif text-[22px] leading-[1.12] text-[#a5afa9]">Design that thinks.<br />Technology that performs.<br />Experiences that connect.</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="mb-2 text-[10px] uppercase tracking-[.13em] text-[var(--teal)]">Explore</span>
          <FooterLinks links={exploreLinks} />
        </div>
        <div className="flex flex-col gap-3">
          <span className="mb-2 text-[10px] uppercase tracking-[.13em] text-[var(--teal)]">Services</span>
          {serviceLinks.map((label) => <Link className="text-xs text-[#c5cbc6] hover:text-[var(--coral)]" href="/#services" key={label}>{label}</Link>)}
        </div>
        <div className="flex flex-col gap-3">
          <span className="mb-2 text-[10px] uppercase tracking-[.13em] text-[var(--teal)]">Say hello</span>
          <a className="text-xs text-[#c5cbc6] hover:text-[var(--coral)]" href="mailto:hello@smarttechguide.com">hello@smarttechguide.com</a>
          <Link className="text-xs text-[#c5cbc6] hover:text-[var(--coral)]" href="/contact">Start a project ↗</Link>
          <span className="mt-5 text-[10px] uppercase text-[#6f7d77]">Instagram / LinkedIn</span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap justify-between gap-3 border-t border-[#3b4744] px-8 pt-[18px] text-[10px] uppercase tracking-[.08em] text-[#7c8983] max-[640px]:px-5">
        <span>© 2026 Smart Tech Guide</span>
        <span className="max-[640px]:hidden">Independent digital studio</span>
        <Link className="hover:text-[var(--teal)]" href="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}
