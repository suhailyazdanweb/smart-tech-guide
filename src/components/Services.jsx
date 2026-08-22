const services = [
  { number: "01", title: "Web Design", text: "Responsive websites with strong visual identity, usability and a structure that earns attention.", items: "Direction / UX / Visual systems" },
  { number: "02", title: "Web Development", text: "Modern websites and web applications built for speed, flexibility and the realities of the web.", items: "Next.js / React / Full-stack" },
  { number: "03", title: "UI/UX Design", text: "Research, information architecture, wireframes, prototypes, interfaces and design systems.", items: "Flows / Prototypes / Systems" },
  { number: "04", title: "Graphic Design", text: "Brand identity, marketing graphics and digital assets that make visual communication feel intentional.", items: "Identity / Campaigns / Assets" },
];

export default function Services() {
  return (
    <section className="bg-[var(--background)] px-0 py-[135px] max-[640px]:py-[88px]" id="services">
      <div className="mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-[18px]"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">What we make</p><span className="text-[10px] uppercase tracking-[.12em] text-[var(--muted)]">01 — 04</span></div>
        <div className="my-[60px] mb-[85px] grid grid-cols-2 items-end gap-[30px] max-[640px]:my-[42px] max-[640px]:mb-[55px] max-[640px]:grid-cols-1"><h2 className="m-0 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-[.96] tracking-[-.04em] max-[640px]:text-[clamp(42px,13vw,62px)]">Ideas, given <em className="text-[var(--teal-dark)] not-italic">form.</em></h2><p className="m-0 max-w-[520px] text-base leading-[1.65] text-[var(--muted)]">From first sketch to final line of code, thoughtful design and robust technology working as one.</p></div>
        <div className="border-t border-[var(--ink)]">
          {services.map((service) => <article className="grid min-h-[140px] grid-cols-[70px_1.1fr_1.3fr_1fr_32px] items-center gap-[25px] border-b border-[var(--line)] transition hover:bg-[var(--yellow)] hover:px-[18px] max-[640px]:min-h-0 max-[640px]:grid-cols-[35px_1fr_25px] max-[640px]:gap-x-[15px] max-[640px]:gap-y-2.5 max-[640px]:py-[23px]" key={service.number}><span className="text-[11px] text-[var(--muted)]">{service.number}</span><h3 className="m-0 font-serif text-[29px] font-normal tracking-[-.03em] max-[640px]:text-[26px]">{service.title}</h3><p className="m-0 max-w-[290px] text-[13px] leading-[1.45] text-[var(--muted)] max-[640px]:col-[2/-1] max-[640px]:row-[2]">{service.text}</p><span className="text-[10px] uppercase tracking-[.05em] text-[var(--muted)] max-[640px]:col-[2] max-[640px]:row-[3]">{service.items}</span><span className="text-2xl text-[var(--coral)] max-[640px]:col-[3] max-[640px]:row-[1]">↗</span></article>)}
        </div>
      </div>
    </section>
  );
}
