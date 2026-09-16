import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillTag } from '../ui/SkillTag';
import { skillGroups, softSkills } from '@/src/data/skills';

export function SkillsSection() {
  return (
    <section id="skills">
      <Container>
        <SectionHeading title="A stack built for connected problems." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.id}>
              <h3>{group.groupName}</h3>
              <div className="tags">
                {group.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="soft-skills">
          <span>Working strengths</span>
          {softSkills.map((skill) => (
            <b key={skill}>{skill}</b>
          ))}
        </div>
      </Container>
    </section>
  );
}
