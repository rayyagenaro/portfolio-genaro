import type { SkillGroup } from '@/src/types';

export const skillGroups: SkillGroup[] = [
  { id: 'web', groupName: 'Web Development & Frameworks', skills: ['Laravel', 'JavaScript', 'Next.js', 'React', 'REST API', 'Supabase', 'Python', 'Network Infrastructure Automation'] },
  { id: 'data', groupName: 'Data & Analytics', skills: ['MySQL', 'PostgreSQL', 'Data Analysis', 'Time Series Forecasting', 'Route Optimization', 'ETL', 'Pentaho Data Integration', 'Microsoft Power BI'] },
  { id: 'systems', groupName: 'Business Process & Enterprise Systems', skills: ['SAP S/4HANA (SD, MM, PP)', 'Business Process Modelling (BPMN)', 'Camunda BPMN Modeler', 'System Analysis', 'SAP ERP'] },
  { id: 'cloud', groupName: 'Cloud & Network', skills: ['Google Cloud Platform (GCP)', 'Cisco', 'IP Addressing & Subnetting', 'Network Security'] },
];

export const softSkills = ['Leadership', 'People Management', 'Problem Solving', 'Public Speaking', 'Cross-Functional Collaboration'];
