const services = [
  { number: "01", title: "Web Design", text: "Responsive websites with strong visual identity, usability and a structure that earns attention.", items: "Direction / UX / Visual systems" },
  { number: "02", title: "Web Development", text: "Modern websites and web applications built for speed, flexibility and the realities of the web.", items: "Next.js / React / Full-stack" },
  { number: "03", title: "UI/UX Design", text: "Research, information architecture, wireframes, prototypes, interfaces and design systems.", items: "Flows / Prototypes / Systems" },
  { number: "04", title: "Graphic Design", text: "Brand identity, marketing graphics and digital assets that make visual communication feel intentional.", items: "Identity / Campaigns / Assets" },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-topline"><p className="eyebrow">What we make</p><span>01 — 04</span></div>
        <div className="services-intro"><h2 className="section-heading">Ideas, given <em>form.</em></h2><p className="body-copy">From first sketch to final line of code, thoughtful design and robust technology working as one.</p></div>
        <div className="service-list">
          {services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-items">{service.items}</span><span className="service-arrow">↗</span></article>)}
        </div>
      </div>
    </section>
  );
}
