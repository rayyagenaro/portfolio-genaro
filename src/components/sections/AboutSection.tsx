/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { profile } from '@/src/data/profile';

const portraits = [
  { src: '/photos/profile1.webp', alt: 'Genaro after completing his final project presentation', className: 'portrait-main' },
  { src: '/photos/profile3.webp', alt: 'Genaro in a relaxed portrait', className: 'portrait-candid' },
  { src: '/photos/profile2.webp', alt: 'Genaro at the beach during sunset', className: 'portrait-outside' },
];

export function AboutSection() {
  return (
    <section id="about">
      <Container>
        <SectionHeading index="01" title="Built between code, data, and operations." />
        <div className="about-grid">
          <div className="portrait-collage" aria-label="Portraits of Genaro in academic and everyday settings">
            {portraits.map((portrait) => (
              <figure className={portrait.className} key={portrait.src} style={{ backgroundImage: `url("${portrait.src}")` }}>
                <img className="semantic-photo" src={portrait.src} alt={portrait.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
          <div className="about-copy">
            <p className="about-lead">I turn complex operational questions into systems people can use and decisions they can trust.</p>
            <p>{profile.about}</p>
            <div className="facts">
              <div><span>Based in</span><b>{profile.location}</b></div>
              <div><span>Education</span><b>Information Systems, ITS</b></div>
              <div><span>Languages</span><b>Bahasa Indonesia · English</b></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
