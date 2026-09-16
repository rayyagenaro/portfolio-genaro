import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';
import { experience } from '@/src/data/experience';

export function ExperienceSection() {
  return (
    <section id="experience">
      <Container>
        <SectionHeading title="Experience with real operating constraints." intro="Three internships across energy, banking, and enterprise workflow systems." />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.id}>
              <div>
                <h3>{item.position} <span aria-hidden="true">-</span> {item.company}</h3>
                <p>{item.summary}</p>
                <ul>{item.responsibilities.map((line) => <li key={line}>{line}</li>)}</ul>
                <p className="impact">{item.impact}</p>
                <div className="tags">{item.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
              </div>
              <time>{item.period}</time>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
