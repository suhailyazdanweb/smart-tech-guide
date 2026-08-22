const designItems = ["UX", "UI", "Wireframes", "Prototypes", "Design systems"];
const devItems = ["React", "Next.js", "MERN", "Node.js", "Supabase", "Firebase"];

function PillList({ items }) {
  return <div className="pill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function DesignDevelopment() {
  return (
    <section className="bridge section-pad" id="approach">
      <div className="container">
        <div className="section-topline light"><p className="eyebrow">The useful tension</p><span>Design × Development</span></div>
        <h2 className="section-heading bridge-heading">Designers who understand <em>technology.</em><br />Developers who understand <em>design.</em></h2>
        <div className="bridge-map">
          <div className="bridge-column"><span className="bridge-label">01 / Design</span><PillList items={designItems} /></div>
          <div className="bridge-connector"><span>×</span><i /></div>
          <div className="bridge-column"><span className="bridge-label">02 / Development</span><PillList items={devItems} /></div>
          <div className="bridge-result"><span>03 / Result</span><strong>Digital<br /><em>experience</em></strong><span className="result-arrow">↘</span></div>
        </div>
      </div>
    </section>
  );
}
