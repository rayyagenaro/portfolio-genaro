/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { Code2, ExternalLink } from 'lucide-react';
import type { Project } from '@/src/types';
import { Tag } from '../ui/Tag';

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`featured-project ${index % 2 ? 'reverse' : ''}`}>
      <figure
        className={`project-visual project-${project.id}`}
        style={project.image ? { backgroundImage: `url("${project.image}")` } : undefined}
      >
        {project.image && <img className="semantic-photo" src={project.image} alt={`Mockup of ${project.title}`} loading="lazy" decoding="async" />}
        <span className="project-code">P—0{index + 1}</span>
        <strong>{project.category}</strong>
      </figure>
      <div className="project-copy">
        <p className="meta">Featured project · 0{index + 1}</p>
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
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />View live website</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" />GitHub repository</a>}
          </div>
        )}
      </div>
    </article>
  );
}
