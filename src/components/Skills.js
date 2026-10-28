import React from 'react';
import styled from 'styled-components';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag, { TagList } from './ui/Tag';
import Certificates from './Certificates';

const skillGroups = [
  { label: 'Languages', items: ['Python', 'C/C++', 'JavaScript/TypeScript', 'Bash', 'PowerShell', 'SQL'] },
  { label: 'Embedded & IoT', items: ['ESP32', 'ESP-NOW', 'FreeRTOS', 'PlatformIO', 'IMU/GPS sensor fusion'] },
  { label: 'ML & Simulation', items: ['Reinforcement Learning (PPO)', 'TensorFlow Lite', 'SUMO'] },
  { label: 'Backend & Data', items: ['FastAPI', 'Node.js/Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Supabase'] },
  { label: 'Frontend', items: ['React', 'HTML', 'CSS'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Docker', 'GitHub Actions', 'Git', 'Linux (Ubuntu, Debian, RHEL, Arch)', 'pytest'] },
  { label: 'Monitoring & Ops', items: ['Datadog', 'Coralogix', 'Logz.io', 'OpsGenie', 'Azure DevOps', 'Jira', 'Confluence'] },
  { label: 'Security & Networking', items: ['TCP/IP, HTTP', 'Wireshark', 'Scapy', 'Kali Linux', 'Burp Suite', 'Web Security (XSS, CSRF, SQLi)'] },
];

const Groups = styled.dl`
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  dt {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    padding-top: 2px;
  }

  dd {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.sm};
  }
`;

const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: ${({ theme }) => theme.space['2xl']} 0 ${({ theme }) => theme.space.md};
`;

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader eyebrow="Skills" title="Tools I work with" />
      <Groups>
        {skillGroups.map((group) => (
          <Group key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              <TagList>
                {group.items.map((item) => <Tag key={item}>{item}</Tag>)}
              </TagList>
            </dd>
          </Group>
        ))}
      </Groups>

      <SubHeading id="certificates">Certifications</SubHeading>
      <Certificates />
    </Section>
  );
}

export default Skills;
