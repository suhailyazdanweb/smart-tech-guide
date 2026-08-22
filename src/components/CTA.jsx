import Image from "next/image";

export default function CTA() {
  return <section className="relative min-h-[610px] overflow-hidden bg-[var(--teal-light)] px-0 py-[130px] max-[640px]:min-h-[600px] max-[640px]:py-[90px]" id="contact"><div className="relative z-[1] mx-auto w-full max-w-[1280px] px-8 max-[640px]:px-5"><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] before:block before:h-[7px] before:w-[7px] before:bg-current">Let&apos;s make something useful</p><h2 className="m-0 my-[65px] mb-[35px] max-w-[720px] font-serif text-[clamp(48px,7vw,104px)] font-normal leading-[.94] tracking-[-.04em] max-[640px]:text-[clamp(46px,14vw,72px)]">Have an idea<br /><em className="text-[var(--surface)] not-italic">worth building?</em></h2><p className="max-w-[410px] text-base leading-[1.55]">Let&apos;s turn it into a digital experience that looks distinctive, works beautifully and supports your business.</p><a className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-4 bg-[var(--ink)] px-[21px] text-xs font-bold uppercase tracking-[.08em] text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-[var(--coral)]" href="/contact">Start a project <span className="text-[17px]">↗</span></a></div>
  
  <Image className="absolute right-[5%] top-1/2 z-[2] h-[360px] w-[360px] -translate-y-1/2 rotate-[-12deg] object-contain max-[900px]:right-[-4%] max-[900px]:h-[280px] max-[900px]:w-[280px] max-[640px]:right-[-18%] max-[640px]:h-[220px] max-[640px]:w-[220px]" src="/logo.svg" alt="" width={738} height={765} aria-hidden="true" />
  
  </section>;
}
