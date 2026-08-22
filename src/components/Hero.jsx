export default function Hero() {
  return (
    <section className="relative min-h-[min(820px,100vh)] overflow-hidden bg-[var(--background)] px-0 pb-[34px] pt-[180px] max-[900px]:pb-[100px] max-[640px]:pt-[130px]" id="home">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:80px_80px]" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[535px] w-full max-w-[1280px] grid-cols-[1.05fr_.95fr] px-8 max-[900px]:grid-cols-1 max-[640px]:px-5">
        <div className="relative z-[1] max-w-[760px] self-center">
          <p className="mb-7 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">Independent digital studio</p>
          <h1 className="m-0 max-w-[800px] font-serif text-[clamp(46px,7vw,104px)] font-normal leading-[.94] tracking-[-.04em] max-[640px]:text-[clamp(46px,14vw,72px)]">Designing digital experiences.<br /><em className="text-[var(--teal-dark)] not-italic">Building what&apos;s next.</em></h1>
          <p className="my-[30px] mb-[34px] max-w-[440px] text-base leading-[1.55] text-[var(--muted)]">Kreative Grafix combines UI/UX, web design, development and graphic design to make digital work with clarity and character.</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-4 bg-[var(--teal)] px-[21px] text-xs font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[var(--coral)]" href="#contact">Start a project <span className="text-[17px]">↗</span></a>
            <a className="inline-flex min-h-[52px] items-center justify-center gap-4 border border-current px-[21px] text-xs font-bold uppercase tracking-[.08em] transition hover:-translate-y-0.5 hover:bg-[var(--ink)] hover:text-[var(--background)]" href="#work">Explore our work <span className="text-[17px]">↓</span></a>
          </div>
        </div>
        <div className="relative h-[490px] self-center max-[900px]:mt-[55px] max-[900px]:h-[410px] max-[640px]:mt-[38px] max-[640px]:h-[330px]" aria-label="Abstract composition of design and technology" role="img">
          <div className="absolute left-1/2 top-[48%] h-[390px] w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-full border border-[var(--teal)] max-[640px]:h-[280px] max-[640px]:w-[220px]" />
          <div className="absolute left-1/2 top-[48%] h-[300px] w-[430px] -translate-x-1/2 -translate-y-1/2 rotate-[44deg] rounded-full border border-[var(--coral)] max-[640px]:h-[220px] max-[640px]:w-[320px]" />
          <div className="absolute left-[18%] top-[92px] h-[300px] w-[370px] -rotate-[7deg] bg-[var(--dark)] p-5 text-[var(--surface)] shadow-[14px_17px_0_var(--coral)] max-[640px]:left-[8%] max-[640px]:top-[55px] max-[640px]:h-[220px] max-[640px]:w-[275px] max-[640px]:p-3.5">
            <div className="flex justify-between text-[9px] uppercase tracking-[.11em]"><span>KG / 01</span><span>digital studio</span></div>
            <div className="my-[50px] font-serif text-[102px] leading-none tracking-[-.12em] text-[var(--teal)] max-[640px]:my-[37px] max-[640px]:text-[73px]">K<span className="font-sans text-[58px] text-[var(--coral)] max-[640px]:text-[42px]">×</span>G</div>
            <div className="flex justify-between text-[9px] uppercase tracking-[.11em]"><span>Design that thinks.</span><span>2026</span></div>
          </div>
          <div className="absolute right-[1%] top-[30px] flex h-[145px] w-[145px] rotate-[12deg] items-center justify-between bg-[var(--yellow)] p-[18px] text-[var(--ink)] max-[640px]:h-[105px] max-[640px]:w-[105px]"><span className="text-[10px] font-bold leading-tight">INTERFACE<br />AS MATERIAL</span><span className="h-[15px] w-[15px] rounded-full bg-[var(--coral)]" /></div>
          <div className="absolute bottom-11 left-[6%] -rotate-90 font-mono text-[13px] text-[var(--teal-dark)] max-[640px]:bottom-[30px] max-[640px]:text-[10px]">&lt;experience /&gt;</div>
          <div className="absolute bottom-[54px] right-[3%] -rotate-[5deg] bg-[var(--teal)] px-[13px] py-2 text-[10px] font-bold uppercase tracking-[.1em] max-[640px]:bottom-[30px] max-[640px]:p-[7px] max-[640px]:text-[8px]">web / ux / build</div>
        </div>
      </div>
      <div className="absolute bottom-[34px] left-1/2 flex w-full max-w-[1280px] -translate-x-1/2 items-center gap-4 px-8 text-[10px] uppercase tracking-[.1em] text-[var(--muted)] max-[640px]:bottom-[30px] max-[640px]:gap-2 max-[640px]:px-5 max-[640px]:text-[8px]"><span>Scroll to explore</span><span className="h-px w-[18vw] max-w-[150px] bg-[var(--line)]" /><span>01 — 06</span></div>
    </section>
  );
}
