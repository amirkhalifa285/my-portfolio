import coolVisionLogo from '../assets/coolvision.png';
import isiLogo from '../assets/isi.png';
import femiLogo from '../assets/Femi.png';
import yesLogo from '../assets/yes.png';
import aristocratLogo from '../assets/aristocrat-interactive.png';

// Newest first. Roles within a company are also newest first.
// `collapsed: true` hides bullets until expanded (used for older roles).
export const experience = [
  {
    id: 'aristocrat',
    company: 'Aristocrat Interactive',
    logo: aristocratLogo,
    location: 'Tel Aviv',
    roles: [
      {
        title: 'NOC Team Leader',
        subtitle: 'Production Operations & IT Support',
        duration: 'Oct 2025 – Present',
        highlights: [
          'Promoted within 8 months to lead 24/7 monitoring, incident triage and cross-team escalations.',
          'Built an incident email / Jira ticket generator, saving team time and reducing communication errors.',
          'Developed a production health dashboard giving a consolidated view of all production systems, deployed through AWS CloudFront.',
          'Automated daily and repetitive NOC tasks with Bash, Python and PowerShell, and standardized Confluence runbooks.',
          'Investigated incidents using logs and metrics and managed stakeholder updates through resolution.',
        ],
      },
      {
        title: 'NOC/SOC Engineer',
        duration: 'Mar 2025 – Oct 2025',
        highlights: [
          'Monitored regulated lottery platforms using Datadog, Coralogix and Logz.io; investigated alerts and escalated with supporting evidence.',
          'Supported patching and releases through post-deployment checks and documented issues for remediation.',
          'Triaged security alerts and provided incident context for escalation to security teams.',
        ],
      },
    ],
    tech: ['Datadog', 'Coralogix', 'Logz.io', 'OpsGenie', 'AWS CloudFront', 'Python', 'Bash', 'PowerShell', 'Jira', 'Azure DevOps', 'Confluence'],
  },
  {
    id: 'coolvision',
    company: 'CoolVision',
    logo: coolVisionLogo,
    roles: [
      {
        title: 'Network Operations Center (NOC) Engineer',
        duration: 'Feb 2024 – Feb 2025',
        highlights: [
          'Monitored services with Opsview, Dynatrace and Zabbix while maintaining 99.9% uptime on the Pingdom platform.',
          'Managed AWS cloud resources, performing server resets and maintenance within AWS environments.',
          'Analyzed system logs and metrics to identify trends and prevent future incidents.',
          'Conducted manual QA testing on multiple company websites to identify and resolve functionality issues.',
          'Supported deployments by coordinating with development teams to roll out new features and services.',
          'Developed and maintained operational documentation for procedures, incident reports and best practices.',
        ],
      },
    ],
    tech: ['AWS', 'Opsview', 'Dynatrace', 'Zabbix', 'Pingdom', 'QA Testing'],
  },
  {
    id: 'isi',
    company: 'Israel Standardization Institute',
    logo: isiLogo,
    location: 'Tel Aviv',
    roles: [
      {
        title: 'IT, Gold Department',
        duration: 'May 2023 – Aug 2024',
        collapsed: true,
        highlights: [
          'Handled technical issues with laboratory and office equipment within the department.',
          'Calculated net weight of processed gold, ensuring 100% accuracy through precise measurement and verification.',
          'Managed orders for over 50 importers using an organized inventory management system.',
        ],
      },
    ],
    tech: ['IT Support', 'Excel', 'Inventory Management'],
  },
  {
    id: 'femi',
    company: 'Femi Premium',
    logo: femiLogo,
    location: 'Ben-Gurion Airport',
    roles: [
      {
        title: 'SQL Technician',
        duration: 'Jan 2022 – Jun 2022',
        collapsed: true,
        highlights: [
          'Provided technical support to the COVID-19 testing project at Ben-Gurion Airport, managing over 1,000 tests daily using SQL.',
          'Supplied data to customers and other departments, ensuring 99% accuracy through rigorous validation.',
          'Troubleshot and resolved SQL-based problems, reducing system downtime by 20%.',
          'Collaborated with the Ministry of Health and five major laboratories.',
        ],
      },
    ],
    tech: ['SQL', 'MySQL', 'Data Analysis'],
  },
  {
    id: 'yes',
    company: 'Yes TV',
    logo: yesLogo,
    location: 'Babcom Centers',
    roles: [
      {
        title: 'Technical Support Agent',
        duration: 'Jun 2019 – Nov 2020',
        collapsed: true,
        highlights: [
          'Provided technical support for company devices, achieving a 90% customer satisfaction rate.',
          'Improved task completion speed by 30% using the Wizard Windows application.',
          'Maintained a 4.8/5 customer satisfaction rating through clear communication and problem solving.',
        ],
      },
    ],
    tech: ['Technical Support', 'Customer Service'],
  },
];
