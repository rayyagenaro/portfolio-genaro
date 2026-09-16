import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FeaturedProject } from '../project/FeaturedProject';
import { projects } from '@/src/data/projects';

export function ProjectsSection() {
  return (
    <section id="projects">
      <Container>
        <SectionHeading index="03" title="Selected work, unpacked." intro="Five projects, shown with their real interfaces and the decisions behind each build." />
        <div className="featured-list">
          {projects.map((project, index) => <FeaturedProject key={project.id} project={project} index={index} />)}
        </div>
        <aside className="many-projects" aria-label="More projects on GitHub">
          <div>
            <p className="meta">The archive continues</p>
            <h3>Many more projects.</h3>
          </div>
          <p>Coursework, experiments, and smaller builds across web development, analytics, optimization, and information systems.</p>
          <a href="https://github.com/rayyagenaro" target="_blank" rel="noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a>
        </aside>
      </Container>
    </section>
  );
}
