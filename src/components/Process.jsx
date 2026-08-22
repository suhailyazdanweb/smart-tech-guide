const steps = [
  ["01", "Discover", "Understand the business, audience and objectives."],
  ["02", "Define", "Structure the requirements and the experience."],
  ["03", "Design", "Shape the UX, UI, visual direction and prototypes."],
  ["04", "Develop", "Build the responsive digital experience."],
  ["05", "Refine", "Test, optimize and polish every important detail."],
  ["06", "Launch", "Put it in the world, then keep it moving forward."],
];

export default function Process() {
  return <section className="bg-[var(--background)] px-0 py-[135px] max-[640px]:py-[88px]"><div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5"><div className="flex items-center justify-between border-b border-[var(--line)] pb-[18px]"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">How we work</p><span className="text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">From thought to thing</span></div><div className="my-[60px] mb-[90px]"><h2 className="m-0 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:text-[clamp(42px,13vw,62px)]">A clear path through<br /><em className="text-[var(--teal-dark)] not-italic">the messy middle.</em></h2></div><div className="grid grid-cols-6 border-t border-[var(--ink)] max-[900px]:grid-cols-3 max-[640px]:grid-cols-2">{steps.map(([number, title, text]) => <article className="relative min-h-[240px] border-r border-[var(--line)] p-5 pr-[18px] first:pl-0 max-[900px]:nth-[3n]:border-r-0 max-[900px]:nth-[n+4]:border-t max-[640px]:min-h-[210px] max-[640px]:nth-[3n]:border-r max-[640px]:nth-[2n]:border-r-0 max-[640px]:nth-[n+3]:border-t max-[640px]:nth-[2n]:pl-[15px]" key={number}><span className="text-[10px] text-[var(--coral)]">{number}</span><h3 className="my-[38px] mb-[13px] font-serif text-[28px] font-normal">{title}</h3><p className="m-0 max-w-[135px] text-xs leading-[1.45] text-[var(--muted)]">{text}</p><i className="absolute bottom-3 text-xl not-italic text-[var(--teal-dark)]">↗</i></article>)}</div></div></section>;
}
