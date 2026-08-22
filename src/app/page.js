import AboutPreview from "../components/AboutPreview";
import CTA from "../components/CTA";
import DesignDevelopment from "../components/DesignDevelopment";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Process from "../components/Process";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";
import Technology from "../components/Technology";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Services />
        <DesignDevelopment />
        <SelectedWork />
        <Technology />
        <Process />
        <AboutPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
