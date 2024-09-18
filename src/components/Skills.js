import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const SkillsList = styled.ul`
  columns: 2;
  list-style-type: square;
  margin-left: 20px;

  @media (max-width: 768px) {
    columns: 1;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>Skills</h2>
      <SkillsList>
        <li>Computer Hardware Knowledge</li>
        <li>C/C++</li>
        <li>HTML5 & CSS</li>
        <li>JavaScript</li>
        <li>Assembly Language</li>
        <li>MySQL</li>
        <li>Node.js</li>
        <li>Network Protocols</li>
        <li>Analytical Thinking</li>
      </SkillsList>
    </SkillsSection>
  );
}

export default Skills;