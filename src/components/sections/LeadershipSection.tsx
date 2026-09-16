/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { leadership } from '@/src/data/leadership';

export function LeadershipSection() {
  return (
    <section id="leadership">
      <Container>
        <SectionHeading title="Leadership, documented." intro="The teams, rooms, and responsibilities behind the outcomes." />
        <div className="leadership-list">
          {leadership.map((item) => (
            <article className={item.image ? 'has-photo' : 'no-photo'} key={item.id}>
              {item.image && (
                <figure className="leadership-photo" style={{ backgroundImage: `url("${item.image}")`, backgroundPosition: item.imagePosition }}>
                  <img className="semantic-photo" src={item.image} alt={item.imageAlt ?? ''} loading="lazy" decoding="async" />
                </figure>
              )}
              <time>{item.period}</time>
              <div className="leadership-copy">
                <h3>{item.role} <span aria-hidden="true">-</span> {item.organization}</h3>
                <p>{item.summary}</p>
                {item.award && <p className="leadership-award">Award: {item.award}</p>}
              </div>
              <strong>{item.impact}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
