/* oxlint-disable next/no-img-element -- Vinext's next/image runtime currently breaks client hydration. */
import { ArrowDownRight, Download, ExternalLink, Mail, MapPin } from 'lucide-react';
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
          <p className="eyebrow"><span /> Available for early-career opportunities</p>
          <h1><span>Athaalla Rayya</span><br />Genaro Iswandoko</h1>
          <p className="role">{profile.positioningTagline}</p>
          <p className="hero-intro">{profile.shortIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects <ArrowDownRight aria-hidden="true" /></a>
            <a className="button secondary" href={profile.resumeUrl} download><Download aria-hidden="true" /> Download CV</a>
          </div>
          <div className="proof-strip" aria-label="Portfolio overview">
            <div><strong>{experience.length}</strong><span>Internships</span></div>
            <div><strong>{projects.length}</strong><span>Selected projects</span></div>
            <div><strong>{skillGroups.length}</strong><span>Skill domains</span></div>
          </div>
          <div className="hero-links">
            <a href="mailto:gennarorayya05@gmail.com"><Mail aria-hidden="true" />Email</a>
            <a href="https://linkedin.com/in/rayyagenaro" target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />LinkedIn</a>
            <span><MapPin aria-hidden="true" />Surabaya, Indonesia</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="A profile spanning web development, data analytics, and systems analysis">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-mark"><img src="/photos/profile4formal.webp" alt="Formal portrait of Rayya Genaro" /></div>
          <div className="capability cap-one"><b>01</b><span>Web<br />Development</span></div>
          <div className="capability cap-two"><b>02</b><span>Data & Business<br />Intelligence</span></div>
          <div className="capability cap-three"><b>03</b><span>Project<br />Management</span></div>
        </div>
        <div className="scroll-note"><span>Scroll to explore</span><ArrowDownRight aria-hidden="true" /></div>
      </Container>
    </section>
  );
}
