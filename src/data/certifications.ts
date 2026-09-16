import type { Certification } from '@/src/types';
export const certifications: Certification[] = [
  { id: 'sap', name: 'SAP S/4HANA with GBI 4.2', issuer: 'SAP', summary: 'Core enterprise modules: Sales & Distribution, Materials Management, and Production Planning.' },
  { id: 'devnet', name: 'DevNet Associate', issuer: 'Cisco', summary: '25+ hands-on labs covering Python, Linux, APIs, networking, and infrastructure automation.' },
  { id: 'ccna', name: 'CCNA: Introduction to Network Course', issuer: 'Cisco', summary: '50+ network simulations covering IP addressing, subnetting, routing, and security.' },
  { id: 'sql', name: 'SQL For Data Analytics', issuer: 'MySkill', summary: '36 lessons and exercises in querying, filtering, aggregation, joins, and analytics.' },
  { id: 'python', name: 'Python For Data Analytics', issuer: 'MySkill', summary: '43 lessons and exercises in cleaning, transformation, analysis, and visualization.' },
  { id: 'power-bi', name: 'Power BI', issuer: 'MySkill', summary: '42 lessons and exercises in data modeling, dashboards, visualization, and reporting.' },
];
