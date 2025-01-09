import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const SkillsList = styled.div`
  margin-left: 20px;

  h3 {
    color: #64ffda;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: square;
    margin-left: 20px;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    ul {
      columns: 1;
    }
  }
`;

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsList>
        <h3>Languages & Scripting</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>C/C++</li>
          <li>Assembly</li>
          <li>Bash</li>
          <li>PowerShell</li>
        </ul>

        <h3>Databases</h3>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>

        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>React.js</li>
        </ul>

        <h3>Cloud & Operating Systems</h3>
        <ul>
          <li>AWS</li>
          <li>Ubuntu</li>
          <li>Unix</li>
        </ul>

        <h3>Security & Networking</h3>
        <ul>
          <li>Network Protocols</li>
          <li>Cryptography</li>
        </ul>

        <h3>Soft Skills</h3>
        <ul>
          <li>Analytical Thinking</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Communication</li>
          <li>Monitoring</li>
        </ul>
      </SkillsList>
    </SkillsSection>
  );
}

export default Skills;
