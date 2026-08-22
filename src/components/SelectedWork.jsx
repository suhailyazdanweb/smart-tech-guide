import Image from "next/image";
import { projects } from "../data/projects";

export default function SelectedWork() {
  return (
    <section className="work section-pad" id="work">
      <div className="container">
        <div className="section-topline"><p className="eyebrow">A few directions</p><span>Selected work</span></div>
        <div className="work-heading"><h2 className="section-heading">Selected <em>work.</em></h2><p className="body-copy">A selection of digital experiences, interfaces and visual work. Replace these placeholders with your own case studies as the studio grows.</p></div>
        <div className="project-grid">
          {projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.slug}>
            <a className="project-image" href={`#${project.slug}`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 60vw" />
              <span className="project-view">View case study <b>↗</b></span>
            </a>
            <div className="project-meta"><div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-details"><span>{project.category}</span><span>{project.tags.join(" / ")}</span></div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
