import type { Experience } from '@/src/types';

export const experience: Experience[] = [
  {
    id: 'ika-maju-sejahtera', company: 'PT IKA Maju Sejahtera (PLN)', position: 'PLTS Data Survey Engineer', period: 'Jun 2026 - Present',
    summary: 'Process and validate geospatial survey data for rural electrification planning across Indonesia\'s 3T regions.',
    responsibilities: ['Automate coordinate validation, point-in-polygon analysis, and administrative matching.', 'Combine boundary, population, elevation, and soil data for spatial analysis.', 'Build interactive Web GIS tools for exploration and reporting.'],
    impact: 'Geospatial datasets processed across 485 remote locations.',
    technologies: ['Python', 'GeoPandas', 'GeoJSON', 'Folium', 'Web GIS'],
  },
  {
    id: 'bank-indonesia', company: 'Bank Indonesia KpW Jawa Timur', position: 'Software Developer Intern', period: 'Jul - Aug 2025',
    summary: 'Built internal dashboards and administration tools to improve operational monitoring and workflows.',
    responsibilities: ['Designed MySQL schemas and integrated REST APIs.', 'Tested and optimized application reliability.', 'Translated cross-unit business needs into technical workflows.'],
    impact: 'Implemented Role-Based Access Control for stronger data security and access accuracy.',
    technologies: ['Next.js', 'React', 'MySQL', 'REST API', 'RBAC'],
  },
  {
    id: 'piramida', company: 'Piramida Teknologi Informasi', position: 'Information Technology Intern', period: 'Jan - Mar 2025',
    summary: 'Digitalized PT Pembangkitan Jawa-Bali business processes through functional workflow applications.',
    responsibilities: ['Mapped relational data flows between BPMN models and backend requirements.', 'Converted client requirements into structured technical documentation.', 'Tested workflow schemas before deployment.'],
    impact: 'Delivered BPMN-based process digitalization for PJB.',
    technologies: ['JavaScript', 'Camunda BPMN Modeler', 'BPMN', 'System Analysis'],
  },
];
