/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import type { Project } from '@/src/types';
import { Tag } from '../ui/Tag';

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`featured-project ${index % 2 ? 'reverse' : ''}`}>
      <figure className={`project-visual project-${project.id}`} style={project.image ? { backgroundImage: `url("${project.image}")` } : undefined}>
        {project.image && <img className="semantic-photo" src={project.image} alt={`Mockup of ${project.title}`} loading="lazy" decoding="async" />}
        <strong>{project.category}</strong>
      </figure>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.shortDescription}</p>
        <dl>
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>Approach</dt><dd>{project.solution}</dd></div>
          <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
          <div className="result"><dt>Result</dt><dd>{project.results}</dd></div>
        </dl>
        <div className="tags">{project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
        {(project.demo || project.github) && (
          <div className="project-links" aria-label={`${project.title} links`}>
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">View live website <span aria-hidden="true">↗</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub repository <span aria-hidden="true">↗</span></a>}
          </div>
        )}
      </div>
    </article>
  );
}
