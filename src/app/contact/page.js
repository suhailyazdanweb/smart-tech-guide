import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata = {
  title: "Start a Project | Kreative Grafix",
  description: "Tell Kreative Grafix about the digital experience you want to build.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="bg-[var(--background)] px-0 pb-32 pt-40 max-[640px]:pb-20 max-[640px]:pt-32">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[.8fr_1.2fr] gap-24 px-8 max-[900px]:grid-cols-1 max-[900px]:gap-14 max-[640px]:px-5">
          <div><p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--teal-dark)] before:block before:h-[7px] before:w-[7px] before:bg-current">Start a project</p><h1 className="mt-7 font-serif text-[clamp(54px,8vw,112px)] font-normal leading-[.9] tracking-[-.035em]">Tell us what you&apos;re <em className="text-[var(--teal-dark)] not-italic">thinking.</em></h1><p className="mt-9 max-w-[390px] text-base leading-[1.65] text-[var(--muted)]">A few details are enough to begin. We&apos;ll use them to understand where design, technology or both could help.</p></div>
          <div className="border-t border-[var(--ink)] pt-8"><ContactForm /></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
