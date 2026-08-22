export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Independent digital studio</p>
          <h1 className="display-heading">Designing digital experiences.<br /><em>Building what&apos;s next.</em></h1>
          <p className="hero-intro">Kreative Grafix combines UI/UX, web design, development and graphic design to make digital work with clarity and character.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Start a project <span className="arrow">↗</span></a>
            <a className="button-secondary" href="#work">Explore our work <span className="arrow">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract composition of design and technology" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-panel panel-main">
            <div className="panel-top"><span>KG / 01</span><span>digital studio</span></div>
            <div className="panel-mark">K<span>×</span>G</div>
            <div className="panel-bottom"><span>Design that thinks.</span><span>2026</span></div>
          </div>
          <div className="art-panel panel-side"><span className="side-label">INTERFACE<br />AS MATERIAL</span><span className="side-dot" /></div>
          <div className="art-code">&lt;experience /&gt;</div>
          <div className="art-tag">web / ux / build</div>
        </div>
      </div>
      <div className="hero-footer container"><span>Scroll to explore</span><span className="hero-line" /><span>01 — 06</span></div>
    </section>
  );
}
