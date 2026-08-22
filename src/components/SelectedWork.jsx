import Image from "next/image";
import { projects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section className="bg-[var(--surface)] px-0 py-[135px] max-[640px]:py-[88px]" id="work">
      <div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-[18px]"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">A few directions</p><span className="text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">Selected work</span></div>
        <div className="my-[60px] mb-20 grid grid-cols-[1.3fr_.7fr] items-end gap-10 max-[640px]:my-[42px] max-[640px]:mb-[55px] max-[640px]:grid-cols-1"><h2 className="m-0 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:text-[clamp(42px,13vw,62px)]">Selected <em className="text-[var(--teal-dark)] not-italic">work.</em></h2><p className="m-0 max-w-[520px] text-base leading-[1.65] text-[var(--muted)]">A selection of digital experiences, interfaces and visual work. Replace these placeholders with your own case studies as the studio grows.</p></div>
        <div className="grid grid-cols-[1.15fr_.85fr] gap-x-6 gap-y-[72px] max-[640px]:grid-cols-1 max-[640px]:gap-y-[52px]">
          {projects.map((project, index) => <article className={`min-w-0 ${index === 1 ? "mt-[125px] max-[640px]:mt-0" : ""} ${index === 2 ? "col-span-full w-[70%] max-[640px]:col-auto max-[640px]:w-full" : ""}`} key={project.slug}>
            <a className={`relative block h-[490px] overflow-hidden bg-[#d7d3c8] ${index > 0 ? "max-[900px]:h-[380px]" : ""} max-[640px]:h-[330px]`} href={`#${project.slug}`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 60vw" />
              <span className="absolute bottom-5 right-5 z-[1] text-[11px] uppercase tracking-[.1em] text-white">View case study <b className="ml-2.5 text-lg text-[var(--teal)]">↗</b></span>
            </a>
            <div className="flex justify-between gap-5 pt-5 max-[640px]:flex-col"><div><span className="text-[10px] text-[var(--coral)]">{project.number}</span><h3 className="my-2 font-serif text-[28px] font-normal tracking-[-.03em]">{project.title}</h3><p className="m-0 max-w-[370px] text-[13px] leading-[1.5] text-[var(--muted)]">{project.description}</p></div><div className="flex flex-col gap-2 text-right text-[10px] uppercase text-[var(--muted)] max-[640px]:flex-row max-[640px]:text-left"><span>{project.category}</span><span>{project.tags.join(" / ")}</span></div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
