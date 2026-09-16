/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { leadership } from '@/src/data/leadership';

export function LeadershipSection() {
  return (
    <section id="leadership">
      <Container>
        <SectionHeading index="07" title="Leadership, documented." intro="The teams, rooms, and responsibilities behind the numbers." />
        <div className="leadership-list">
          {leadership.map((item, index) => (
            <article className={item.image ? 'has-photo' : 'no-photo'} key={item.id}>
              {item.image ? (
                <figure className="leadership-photo" style={{ backgroundImage: `url("${item.image}")`, backgroundPosition: item.imagePosition }}>
                  <img className="semantic-photo" src={item.image} alt={item.imageAlt ?? ''} loading="lazy" decoding="async" />
                  <figcaption>Field note / {String(index + 1).padStart(2, '0')}</figcaption>
                </figure>
              ) : (
                <div className="leadership-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              )}
              <time>{item.period}</time>
              <div className="leadership-copy">
                <p className="meta">{item.organization}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
              <strong>{item.impact}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
