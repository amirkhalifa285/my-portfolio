import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Job = styled.div`
  margin-bottom: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.primary}; /* Dynamic primary color */
    margin-bottom: 5px;
    transition: color 0.3s ease; /* Smooth transition for color changes */
  }

  p {
    color: ${({ theme }) => theme.colors.accent}; /* Dynamic accent color */
    margin-bottom: 10px;
    transition: color 0.3s ease; /* Smooth transition for color changes */
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2>Work Experience</h2>

      {/* New Job */}
      <Job>
        <h3>CoolVision</h3>
        <p>
          <strong>Network Operations Center (NOC) Engineer</strong> | <em>Aug 2024 - Present</em>
        </p>
        <ul>
          <li>
            Monitored Opsview, Dynatrace, and Zabbix services while achieving 99.9% uptime at the Pingdom platform.
          </li>
          <li>
            Managed AWS Cloud Resources, performing server resets and maintenance tasks within Amazon Web Services environments.
          </li>
          <li>
            Conducted Manual QA Testing on multiple company websites to identify and resolve functionality issues.
          </li>
          <li>
            Troubleshot and resolved technical issues promptly to minimize downtime and service disruptions.
          </li>
          <li>
            Collaborated with cross-functional teams to implement system upgrades and optimize performance.
          </li>
          <li>
            Developed and maintained operational documentation for procedures, incident reports, and best practices.
          </li>
          <li>
            Implemented monitoring strategies to proactively detect and address potential system vulnerabilities.
          </li>
          <li>
            Analyzed system logs and metrics to identify trends and prevent future incidents.
          </li>
          <li>
            Supported deployment processes by coordinating with development teams to roll out new features and services.
          </li>
        </ul>
      </Job>

      {/* Existing Job 1 */}
      <Job>
        <h3>Israel Standardization Institute</h3>
        <p>
          <strong>Gold Department IT, Tel Aviv</strong> | <em>May 2023 - Aug 2024</em>
        </p>
        <ul>
          <li>
            Handled technical issues with laboratory and office equipment within the department.
          </li>
          <li>
            Calculated net weight of gold processed, ensuring 100% accuracy through precise measurements and verification processes.
          </li>
          <li>
            Managed orders for over 50 importers using an organized inventory management system, effectively managing their orders.
          </li>
        </ul>
      </Job>

      {/* Existing Job 2 */}
      <Job>
        <h3>Femi Premium</h3>
        <p>
          <strong>SQL-Technician, Ben-Gurion Airport</strong> | <em>Jan 2022 - Jun 2022</em>
        </p>
        <ul>
          <li>
            Provided technical support to the COVID-19 testing project at Ben-Gurion airport, efficiently managing over 1,000 tests daily using SQL for data management.
          </li>
          <li>
            Supplied data to customers and other departments, ensuring 99% accuracy through rigorous validation.
          </li>
          <li>
            Troubleshot and resolved SQL-based problems, reducing system downtime by 20%.
          </li>
          <li>
            Collaborated with the Ministry of Health and five major laboratories, improving collaboration efficiency by 25%.
          </li>
        </ul>
      </Job>

      {/** Existing Job 3 */}

      <Job>
        <h3>Yes TV</h3>
        <p>
          <strong>Technical Support Agent, Babcom Centers</strong> | <em>Jun 2019 - Nov 2020</em>
        </p>
        <ul>
          <li>
            Provided technical support for company devices, achieving a customer satisfaction rate of 90% by effectively resolving issues.
          </li>
          <li>
            Improved task completion speed by 30% using the Wizard Windows application.
          </li>
          <li>
            Maintained a 4.8/5 customer satisfaction rating through effective problem-solving techniques and clear communication.
          </li>
        </ul>
      </Job>
    </ExperienceSection>
  );
}

export default Experience;