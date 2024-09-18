import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'; 

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Project = styled.div`
  margin-bottom: 40px;

  h3 {
    color: #64ffda;
    margin-bottom: 5px;
  }

  p {
    color: #8892b0;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .project-links {
    margin-top: 10px;
  }

  .project-link {
    color: #64ffda;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-right: 15px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <Project>
        <h3>Lost and Found Web Application</h3>
        <p>
          <em>May 2024 - Aug 2024</em>
        </p>
        <ul>
          <li>Implemented responsive design and user-friendly interface.</li>
          <li>Ensured secure handling of user data and efficient database management.</li>
          <li>Successfully deployed on Render for live use.</li>
          <li>Received positive feedback for functionality and ease of use.</li>
          <li>
            <strong>Technologies:</strong> HTML, CSS, JavaScript, Node.js, SQL.
          </li>
        </ul>
        <div className="project-links">
          <a
            href="https://github.com/amirkhalifa285/Lost-And-Found-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>

      {/* Project 2 */}
      <Project>
        <h3>DrinkSmart Application Design and SRS</h3>
        <p>
          <em>2022</em>
        </p>
        <ul>
          <li>Completed the project 2 weeks ahead of schedule.</li>
          <li>
            Presented the project to the head of the Software Engineering department, receiving commendation for innovation and usability.
          </li>
          <li>
            Developed a smart bottle application prototype to track water intake and encourage hydration.
          </li>
          <li>
            Collaborated with a team to create a comprehensive Software Requirements Specification (SRS) document.
          </li>
          <li>
            <strong>Technologies:</strong> UI/UX Design, Prototyping Tools.
          </li>
        </ul>
        <div className="project-links">
          <a
            href="https://github.com/amirkhalifa285/drinkSmart"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> View Repository
          </a>
        </div>
      </Project>
    </ProjectsSection>
  );
}

export default Projects;