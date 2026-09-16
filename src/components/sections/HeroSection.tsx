/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { Container } from '../layout/Container';
import { profile } from '@/src/data/profile';
import { experience } from '@/src/data/experience';
import { projects } from '@/src/data/projects';
import { skillGroups } from '@/src/data/skills';

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <Container className="hero-grid">
        <div className="hero-copy">
          <h1><span>Athaalla Rayya</span><br />Genaro Iswandoko</h1>
          <p className="role">{profile.positioningTagline}</p>
          <p className="hero-intro">{profile.shortIntro}</p>
          <p className="availability-line">Currently available for early-career opportunities.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href={profile.resumeUrl} download>Download CV</a>
          </div>
          <div className="proof-strip" aria-label="Portfolio overview">
            <div><strong>{experience.length}</strong><span>Internships</span></div>
            <div><strong>{projects.length}</strong><span>Selected projects</span></div>
            <div><strong>{skillGroups.length}</strong><span>Skill domains</span></div>
          </div>
          <div className="hero-links">
            <a href="mailto:gennarorayya05@gmail.com">Email</a>
            <a href="https://linkedin.com/in/rayyagenaro" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>Surabaya, Indonesia</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="A profile spanning web development, data analytics, and systems analysis">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-mark"><img src="/photos/profile4formal.webp" alt="Formal portrait of Rayya Genaro" /></div>
          <div className="capability cap-one"><span>Web<br />Development</span></div>
          <div className="capability cap-two"><span>Data & Business<br />Intelligence</span></div>
          <div className="capability cap-three"><span>Project<br />Management</span></div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span></div>
      </Container>
    </section>
  );
}
