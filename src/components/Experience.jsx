const disciplines = ["Graphic Design", "Web Design", "UI/UX", "Web Development", "Digital Marketing"];

export default function Experience() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--surface)] px-0 py-[135px] max-[640px]:py-[88px]" id="experience">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_2.15fr] gap-20 px-8 max-[900px]:grid-cols-1 max-[640px]:gap-9 max-[640px]:px-5">
        <div><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">A broad point of view</p></div>
        <div className="max-w-[850px]">
          <h2 className="m-0 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:text-[clamp(42px,13vw,62px)]">Experience across <em className="text-[var(--teal-dark)] not-italic">design</em> and technology.</h2>
          <p className="my-[35px] mb-[55px] max-w-[520px] text-base leading-[1.65] text-[var(--muted)]">The best digital work lives between disciplines. Kreative Grafix brings an experienced, multidisciplinary perspective to every brief, with a flexible network of specialists when a project calls for more hands or a deeper specialism.</p>
          <div className="grid grid-cols-5 border-t border-[var(--line)] max-[640px]:grid-cols-2">
            {disciplines.map((item, index) => <span className="flex min-h-[88px] flex-col gap-[22px] border-r border-[var(--line)] p-4 pr-3 text-xs first:pl-0 nth-[2n]:max-[640px]:border-r-0 nth-[2n]:max-[640px]:pl-3 nth-[n+3]:max-[640px]:border-t" key={item}><b className="text-[10px] text-[var(--coral)]">0{index + 1}</b>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
