const groups = [
  ["Front-end", "React", "Next.js", "JavaScript", "Tailwind CSS"],
  ["Full stack", "MERN", "Node.js", "Express", "MongoDB"],
  ["Backend / cloud", "Supabase", "Firebase"],
  ["CMS / commerce", "WordPress", "Shopify"],
];

export default function Technology() {
  return <section className="bg-[var(--yellow)] px-0 py-[135px] max-[640px]:py-[88px]"><div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5"><div className="grid grid-cols-[.9fr_1.1fr] gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[50px]"><div><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">Tools with intent</p><h2 className="m-0 mt-6 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:text-[clamp(42px,13vw,62px)]">Technology that <em className="text-[var(--teal-dark)] not-italic">performs.</em></h2><p className="mt-[35px] max-w-[520px] text-base leading-[1.65] text-[var(--muted)]">The right tool is the one that helps the idea hold up in the real world. Our stack stays flexible, current and purposeful.</p></div><div className="border-t border-[var(--ink)]">{groups.map(([title, ...items]) => <div className="grid grid-cols-[150px_1fr] gap-[30px] border-b border-black/25 py-[26px] max-[640px]:grid-cols-1 max-[640px]:gap-[15px]" key={title}><span className="text-[10px] font-bold uppercase tracking-[.12em]">{title}</span><div className="flex flex-wrap gap-x-[25px] gap-y-2">{items.map((item) => <strong className="font-serif text-[26px] font-normal tracking-[-.03em] max-[640px]:text-2xl" key={item}>{item}</strong>)}</div></div>)}</div></div></div></section>;
}
