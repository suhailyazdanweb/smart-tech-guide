const groups = [
  ["Front-end", "React", "Next.js", "JavaScript", "Tailwind CSS"],
  ["Full stack", "MERN", "Node.js", "Express", "MongoDB"],
  ["Backend / cloud", "Supabase", "Firebase"],
  ["CMS / commerce", "WordPress", "Shopify"],
];

export default function Technology() {
  return <section className="technology section-pad"><div className="container"><div className="tech-layout"><div><p className="eyebrow">Tools with intent</p><h2 className="section-heading">Technology that <em>performs.</em></h2><p className="body-copy">The right tool is the one that helps the idea hold up in the real world. Our stack stays flexible, current and purposeful.</p></div><div className="tech-groups">{groups.map(([title, ...items]) => <div className="tech-group" key={title}><span>{title}</span><div>{items.map((item) => <strong key={item}>{item}</strong>)}</div></div>)}</div></div></div></section>;
}
