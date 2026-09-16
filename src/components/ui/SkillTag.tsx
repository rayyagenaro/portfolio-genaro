import type { IconType } from 'react-icons';
import {
  SiCamunda,
  SiCisco,
  SiGooglecloud,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSap,
  SiSupabase,
} from 'react-icons/si';

const skillIcons: Partial<Record<string, IconType>> = {
  Laravel: SiLaravel,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
  React: SiReact,
  Supabase: SiSupabase,
  Python: SiPython,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'SAP S/4HANA (SD, MM, PP)': SiSap,
  'Camunda BPMN Modeler': SiCamunda,
  'SAP ERP': SiSap,
  'Google Cloud Platform (GCP)': SiGooglecloud,
  Cisco: SiCisco,
};

export function SkillTag({ skill }: { skill: string }) {
  const Icon = skillIcons[skill];

  return (
    <span className={`tag skill-tag ${Icon ? '' : 'skill-tag-text'}`}>
      {Icon && <span className="skill-logo" aria-hidden="true"><Icon /></span>}
      <span>{skill}</span>
    </span>
  );
}
