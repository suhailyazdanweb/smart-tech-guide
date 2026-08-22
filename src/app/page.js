import AboutPreview from "../components/AboutPreview";
import CTA from "../components/CTA";
import DesignDevelopment from "../components/DesignDevelopment";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Reveal from "../components/Reveal";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";
import Technology from "../components/Technology";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Reveal><Experience /></Reveal>
        <Reveal delay={40}><Services /></Reveal>
        <Reveal><DesignDevelopment /></Reveal>
        <Reveal delay={40}><SelectedWork /></Reveal>
        <Reveal><Technology /></Reveal>
        <Reveal delay={40}><Process /></Reveal>
        <Reveal><AboutPreview /></Reveal>
        <Reveal delay={40}><CTA /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
