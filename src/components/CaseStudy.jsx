import Image from "next/image";
import Link from "next/link";

export default function CaseStudy({ project, nextProject }) {
  return (
    <main className="bg-[var(--background)] text-[var(--ink)]">
      <section className="border-b border-[var(--line)] px-0 pb-20 pt-40 max-[640px]:pt-32">
        <div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5">
          <Link className="mb-14 inline-flex text-[11px] font-bold uppercase tracking-[.1em] text-[var(--teal-dark)] hover:text-[var(--coral)]" href="/#work">← Back to selected work</Link>
          <p className="mb-6 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">{project.number} / {project.category}</p>
          <h1 className="m-0 max-w-[950px] font-serif text-[clamp(52px,8vw,112px)] font-normal leading-[.9] tracking-[-.035em]">{project.title}</h1>
          <p className="mt-10 max-w-[570px] text-lg leading-[1.55] text-[var(--muted)]">{project.overview}</p>
          <div className="relative mt-20 h-[min(62vw,680px)] min-h-[360px] overflow-hidden bg-[#d7d3c8] max-[640px]:mt-12 max-[640px]:h-[62vw] max-[640px]:min-h-[240px]"><Image className="object-cover" src={project.image} alt={project.alt} fill priority sizes="(max-width: 700px) 100vw, 1280px" /></div>
        </div>
      </section>
      <section className="px-0 py-32 max-[640px]:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.65fr_1.35fr] gap-20 px-8 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:px-5">
          <div><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">Project overview</p><div className="mt-9 flex flex-col gap-3 text-[11px] uppercase tracking-[.08em] text-[var(--muted)]">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <div className="grid gap-24 max-[640px]:gap-14"><div><h2 className="m-0 font-serif text-5xl font-normal tracking-[-.04em]">The challenge</h2><p className="mt-6 max-w-[650px] text-lg leading-[1.6] text-[var(--muted)]">{project.challenge}</p></div><div><h2 className="m-0 font-serif text-5xl font-normal tracking-[-.04em]">The approach</h2><p className="mt-6 max-w-[650px] text-lg leading-[1.6] text-[var(--muted)]">{project.approach}</p></div></div>
        </div>
      </section>
      <section className="bg-[var(--dark)] px-0 py-28 text-[var(--surface)] max-[640px]:py-20"><div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.65fr_1.35fr] gap-20 px-8 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[640px]:px-5"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal)] before:block before:h-[7px] before:w-[7px] before:bg-current">Direction notes</p><div><h2 className="m-0 max-w-[700px] font-serif text-[clamp(40px,5vw,72px)] font-normal leading-[.96] tracking-[-.04em]">A considered system, ready for <em className="text-[var(--teal)] not-italic">the real world.</em></h2><div className="mt-16 grid grid-cols-2 border-t border-[#465452] max-[640px]:mt-10">{project.sections.map((section, index) => <div className="border-b border-[#465452] py-5 text-sm text-[#c5cbc6] even:pl-5" key={section}><span className="mr-3 text-[10px] text-[var(--coral)]">0{index + 1}</span>{section}</div>)}</div><p className="mt-8 text-xs uppercase tracking-[.08em] text-[#8c9893]">Exploratory placeholder. Replace with the final case-study narrative when project material is available.</p></div></div></section>
      <nav className="border-b border-[var(--line)] bg-[var(--surface)] px-0 py-16"><div className="mx-auto flex w-full max-w-[1280px] items-end justify-between gap-8 px-8 max-[640px]:flex-col max-[640px]:items-start max-[640px]:px-5"><span className="text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">Next direction</span><Link className="font-serif text-4xl transition hover:text-[var(--teal-dark)]" href={`/work/${nextProject.slug}`}>{nextProject.title} <span className="text-[var(--coral)]">↗</span></Link></div></nav>
    </main>
  );
}
