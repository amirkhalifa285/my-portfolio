import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
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
  background-color: #112240;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: #64ffda;
    margin-bottom: 15px;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      line-height: 1.6;
      color: #ccd6f6;
      text-align: center;
    }
  }
`;

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsContainer>
        <SkillCategory>
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
        </SkillCategory>

        <SkillCategory>
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React.js</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Cloud & Operating Systems</h3>
          <ul>
            <li>AWS</li>
            <li>Ubuntu</li>
            <li>Unix</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Security & Networking</h3>
          <ul>
            <li>Network Protocols</li>
            <li>Cryptography</li>
          </ul>
        </SkillCategory>

        <SkillCategory>
          <h3>Soft Skills</h3>
          <ul>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Communication</li>
            <li>Monitoring</li>
          </ul>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
}

export default Skills;
