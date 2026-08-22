const designItems = ["UX", "UI", "Wireframes", "Prototypes", "Design systems"];
const devItems = ["React", "Next.js", "MERN", "Node.js", "Supabase", "Firebase"];

function PillList({ items }) {
  return <div className="flex flex-wrap gap-2">{items.map((item) => <span className="border border-[#465452] px-[13px] py-[11px] text-xs transition hover:border-[var(--teal)] hover:text-[var(--teal)]" key={item}>{item}</span>)}</div>;
}

export default function DesignDevelopment() {
  return (
    <section className="bg-[var(--dark)] px-0 py-[135px] text-[var(--surface)] max-[640px]:py-[88px]" id="approach">
      <div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5">
        <div className="flex items-center justify-between border-b border-[#465452] pb-[18px]"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal)] before:block before:h-[7px] before:w-[7px] before:bg-current">The useful tension</p><span className="text-[10px] uppercase tracking-[.12em] text-[#8c9893]">Design × Development</span></div>
        <h2 className="my-[72px] mb-[94px] max-w-[1000px] font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:my-[48px] max-[640px]:mb-[55px]">Designers who understand <em className="text-[var(--teal)] not-italic">technology.</em><br />Developers who understand <em className="text-[var(--teal)] not-italic">design.</em></h2>
        <div className="grid grid-cols-[1fr_100px_1fr_1fr] gap-[30px] max-[640px]:grid-cols-2 max-[640px]:gap-x-[15px] max-[640px]:gap-y-8"><div><span className="mb-[22px] block text-[10px] uppercase tracking-[.14em] text-[#8c9893]">01 / Design</span><PillList items={designItems} /></div><div className="flex flex-col items-center pt-[26px] max-[640px]:hidden"><span className="font-serif text-4xl text-[var(--coral)]">×</span><i className="mt-5 block h-px w-full bg-[var(--teal)]" /></div><div><span className="mb-[22px] block text-[10px] uppercase tracking-[.14em] text-[#8c9893]">02 / Development</span><PillList items={devItems} /></div><div className="relative border-l border-[#465452] pl-[30px] max-[640px]:col-span-2 max-[640px]:border-l-0 max-[640px]:border-t max-[640px]:pl-0 max-[640px]:pt-[25px]"><span className="mb-[22px] block text-[10px] uppercase tracking-[.14em] text-[#8c9893]">03 / Result</span><strong className="font-serif text-[42px] font-normal leading-[.95] tracking-[-.04em]">Digital<br /><em className="text-[var(--teal)] not-italic">experience</em></strong><span className="absolute bottom-0 right-0 text-3xl text-[var(--coral)]">↘</span></div>
        </div>
      </div>
    </section>
  );
}
