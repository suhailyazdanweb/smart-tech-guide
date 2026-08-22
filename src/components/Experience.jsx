const disciplines = ["Graphic Design", "Web Design", "UI/UX", "Web Development", "Digital Marketing"];

export default function Experience() {
  return (
    <section className="experience section-pad" id="experience">
      <div className="container experience-grid">
        <div><p className="eyebrow">A broad point of view</p></div>
        <div className="experience-content">
          <h2 className="section-heading">Experience across <em>design</em> and technology.</h2>
          <p className="body-copy">The best digital work lives between disciplines. Kreative Grafix brings an experienced, multidisciplinary perspective to every brief, with a flexible network of specialists when a project calls for more hands or a deeper specialism.</p>
          <div className="discipline-list">
            {disciplines.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
