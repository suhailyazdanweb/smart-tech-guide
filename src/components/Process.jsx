const steps = [
  ["01", "Discover", "Understand the business, audience and objectives."],
  ["02", "Define", "Structure the requirements and the experience."],
  ["03", "Design", "Shape the UX, UI, visual direction and prototypes."],
  ["04", "Develop", "Build the responsive digital experience."],
  ["05", "Refine", "Test, optimize and polish every important detail."],
  ["06", "Launch", "Put it in the world, then keep it moving forward."],
];

export default function Process() {
  return <section className="process section-pad"><div className="container"><div className="section-topline"><p className="eyebrow">How we work</p><span>From thought to thing</span></div><div className="process-heading"><h2 className="section-heading">A clear path through<br /><em>the messy middle.</em></h2></div><div className="process-list">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div></div></section>;
}
