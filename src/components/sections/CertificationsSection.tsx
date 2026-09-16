import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { certifications } from '@/src/data/certifications';

export function CertificationsSection() {
  return (
    <section id="certifications">
      <Container>
        <SectionHeading title="Certifications" />
        <div className="cert-list">
          {certifications.map((item) => (
            <article key={item.id}>
              <div><p className="meta">{item.issuer}</p><h3>{item.name}</h3><p>{item.summary}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
