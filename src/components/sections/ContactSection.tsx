import { Container } from '../layout/Container';
import { profile } from '@/src/data/profile';

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <Container>
        <div className="contact-grid">
          <h2>Have a problem where technology and operations meet?</h2>
          <div>
            <p>I am currently open to early-career roles, projects, and collaboration across web development, analytics, and systems analysis.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="contact-actions">
              <a href="https://linkedin.com/in/rayyagenaro" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.resumeUrl} download>Download CV</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
