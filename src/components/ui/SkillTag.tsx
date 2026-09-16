import type { IconType } from 'react-icons';
import {
  LuBraces,
  LuChartColumn,
  LuChartNoAxesCombined,
  LuChartSpline,
  LuDatabaseZap,
  LuNetwork,
  LuPanelsTopLeft,
  LuRoute,
  LuShieldCheck,
  LuWorkflow,
} from 'react-icons/lu';
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

const skillIcons: Record<string, IconType> = {
  Laravel: SiLaravel,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
  React: SiReact,
  'REST API': LuBraces,
  Supabase: SiSupabase,
  Python: SiPython,
  'Network Infrastructure Automation': LuNetwork,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'Data Analysis': LuChartNoAxesCombined,
  'Time Series Forecasting': LuChartSpline,
  'Route Optimization': LuRoute,
  ETL: LuWorkflow,
  'Pentaho Data Integration': LuDatabaseZap,
  'Microsoft Power BI': LuChartColumn,
  'SAP S/4HANA (SD, MM, PP)': SiSap,
  'Business Process Modelling (BPMN)': LuWorkflow,
  'Camunda BPMN Modeler': SiCamunda,
  'System Analysis': LuPanelsTopLeft,
  'SAP ERP': SiSap,
  'Google Cloud Platform (GCP)': SiGooglecloud,
  Cisco: SiCisco,
  'IP Addressing & Subnetting': LuNetwork,
  'Network Security': LuShieldCheck,
};

export function SkillTag({ skill }: { skill: string }) {
  const Icon = skillIcons[skill] ?? LuBraces;

  return (
    <span className="tag skill-tag">
      <span className="skill-logo" aria-hidden="true">
        <Icon />
      </span>
      <span>{skill}</span>
    </span>
  );
}
