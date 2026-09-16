import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { AboutSection } from '@/src/components/sections/AboutSection';
import { ExperienceSection } from '@/src/components/sections/ExperienceSection';
import { ProjectsSection } from '@/src/components/sections/ProjectsSection';
import { SkillsSection } from '@/src/components/sections/SkillsSection';
import { EducationSection } from '@/src/components/sections/EducationSection';
import { CertificationsSection } from '@/src/components/sections/CertificationsSection';
import { LeadershipSection } from '@/src/components/sections/LeadershipSection';
import { ContactSection } from '@/src/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
