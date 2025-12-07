import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.background}; /* Dynamic background */
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px${({ theme }) => theme.colors.primary}; /* This can remain unchanged */

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic primary color */
    margin-bottom: 15px;
    text-align: center;
    transition: color 0.3s ease; /* Smooth transition for theme toggle */
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text}; /* Dynamic text color */
      text-align: center;
      transition: color 0.3s ease; /* Smooth transition for text color */
    }
  }

  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth background transition */
`;


function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsContainer>
        <SkillCategory>
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>C/C++</li>
            <li>Bash</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Backend & APIs</h3>
          <ul>
            <li>FastAPI</li>
            <li>Node.js/Express</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Supabase</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Cloud, DevOps & Monitoring</h3>
          <ul>
            <li>AWS</li>
            <li>Docker</li>
            <li>Linux (Ubuntu, Debian, RHEL)</li>
            <li>Datadog</li>
            <li>Coralogix</li>
            <li>Logz.io</li>
            <li>OpsGenie</li>
            <li>Azure DevOps</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>Git</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Security & Networking</h3>
          <ul>
            <li>TCP/IP, HTTP</li>
            <li>Wireshark</li>
            <li>Kali Linux</li>
            <li>Burp Suite (Community)</li>
            <li>Scapy</li>
            <li>Web Security (XSS, CSRF, SQL Injection)</li>
            <li>Basic Cryptography</li>
            <li>Secure Coding Concepts</li>
          </ul>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;
