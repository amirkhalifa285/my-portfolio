import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp, FaDatabase, FaServer, FaCode, FaChartLine, FaShieldAlt, FaUsers, FaClipboardList, FaTools } from 'react-icons/fa';
import { SiMysql, SiJira, SiConfluence } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

// Import company logos
import coolVisionLogo from '../assets/coolvision.png';
import isiLogo from '../assets/isi.png';
import femiLogo from '../assets/Femi.png';
import yesLogo from '../assets/yes.png';
import aristocratLogo from '../assets/aristocrat-interactive.png';

// Import technology icons
import awsIcon from '../assets/aws.png';
import excelIcon from '../assets/excel.png';
import opsviewIcon from '../assets/opsview.png';
import dynatraceIcon from '../assets/dynatrace.png';
import zabbixIcon from '../assets/zabbix.png';
import datadogIcon from '../assets/datadog.png';
import coralogixIcon from '../assets/coralogix.png';
import logzioIcon from '../assets/logzio.png';
import opsgenieIcon from '../assets/opsgenie.jpg';

const ExperienceSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const ExperienceContainer = styled.div`
  position: relative;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary}40,
    ${({ theme }) => theme.colors.primary}20
  );
  
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: -47px;
  top: 40px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}20;
  
  ${({ isActive }) => isActive && `
    width: 20px;
    height: 20px;
    left: -49px;
    top: 38px;
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.primary}30;
  `}
  
  @media (max-width: 768px) {
    left: -37px;
    
    ${({ isActive }) => isActive && `
      left: -39px;
    `}
  }
`;

const JobCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 15px rgba(100, 255, 218, 0.2);
    border-color: ${({ theme }) => theme.colors.primary}40;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CompanyLogo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
  padding: 5px;
`;

const JobTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.1em;
  margin: 0 0 5px 0;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-style: italic;
  margin: 0;
  font-size: 0.95em;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9em;
  margin-top: 10px;
  padding-left: 60px;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    margin-top: 15px;
    padding-left: 0;
  }
`;

const JobDetails = styled(motion.div)`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.accent}30;
  overflow: hidden;
`;

const SkillsSection = styled.div`
  margin-bottom: 25px;
`;

const SkillsTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  margin: 0 0 15px 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent}20;
  border-radius: 8px;
`;

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const SkillIconComponent = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.p`
  margin: 0 0 4px 0;
  font-size: 0.9em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillLevel = styled.div`
  display: flex;
  gap: 3px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ filled, theme }) =>
    filled ? theme.colors.primary : theme.colors.accent + '30'};
  transition: background-color 0.3s ease;
`;

const ResponsibilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Responsibility = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  
  &:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2em;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

function Experience() {
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderSkillLevel = (level) => {
    return (
      <SkillLevel>
        {[1, 2, 3, 4, 5].map((dot) => (
          <Dot key={dot} filled={dot <= level} />
        ))}
      </SkillLevel>
    );
  };

  const experiences = [
    {
      id: 1,
      company: "Aristocrat Interactive",
      logo: aristocratLogo,
      title: "NOC Shift Leader",
      duration: "October 2025 - Present | Tel Aviv",
      skills: [
        { name: "Datadog", icon: datadogIcon, level: 5, isImage: true },
        { name: "Coralogix", icon: coralogixIcon, level: 5, isImage: true },
        { name: "OpsGenie", icon: opsgenieIcon, level: 5, isImage: true },
        { name: "Jira", icon: <SiJira />, level: 5 },
        { name: "Azure DevOps", icon: <FaTools />, level: 4 },
        { name: "Confluence", icon: <SiConfluence />, level: 5 },
        { name: "Team Leadership", icon: <FaUsers />, level: 4 },
        { name: "Incident Management", icon: <FaClipboardList />, level: 5 }
      ],
      responsibilities: [
        "Promoted to shift leader position in 8 months to oversee 24/7 monitoring for real-money iGaming platforms, coordinating team tasks and workflows.",
        "Led end-to-end incident handling through root cause analysis and swift coordination with infrastructure teams via Jira and Azure DevOps.",
        "Provided problem management support for customers during incidents, delivering clear status updates and post-incident reports.",
        "Maintained playbooks and documentation in Atlassian Confluence to ensure operational consistency."
      ]
    },
    {
      id: 2,
      company: "Aristocrat Interactive",
      logo: aristocratLogo,
      title: "NOC/SOC Engineer",
      duration: "March 2025 - October 2025 | Tel Aviv",
      skills: [
        { name: "Datadog", icon: datadogIcon, level: 5, isImage: true },
        { name: "Coralogix", icon: coralogixIcon, level: 5, isImage: true },
        { name: "Logz.io", icon: logzioIcon, level: 4, isImage: true },
        { name: "OpsGenie", icon: opsgenieIcon, level: 5, isImage: true },
        { name: "Jira", icon: <SiJira />, level: 5 },
        { name: "Azure DevOps", icon: <FaTools />, level: 4 }
      ],
      responsibilities: [
        "Monitored multiple regulated lottery environments using Datadog, Coralogix, Logz.io, and OpsGenie.",
        "Acted as first line of defense during daily maintenance windows including OS patches, new releases, and infrastructure changes.",
        "Investigated logs and metrics to understand impact and ownership, then routed incidents to DevOps, IT, Developers, or DBAs via Jira and Azure DevOps."
      ]
    },
    {
      id: 3,
      company: "CoolVision",
      logo: coolVisionLogo,
      title: "Network Operations Center (NOC) Engineer",
      duration: "Feb 2024 - Feb 2025",
      skills: [
        { name: "AWS", icon: awsIcon, level: 4, isImage: true },
        { name: "Opsview", icon: opsviewIcon, level: 5, isImage: true },
        { name: "Dynatrace", icon: dynatraceIcon, level: 5, isImage: true },
        { name: "Zabbix", icon: zabbixIcon, level: 4, isImage: true },
        { name: "QA Testing", icon: <FaShieldAlt />, level: 4 },
        { name: "Server Management", icon: <FaServer />, level: 5 }
      ],
      responsibilities: [
        "Monitored Opsview, Dynatrace, and Zabbix services while achieving 99.9% uptime at the Pingdom platform.",
        "Managed AWS Cloud Resources, performing server resets and maintenance tasks within Amazon Web Services environments.",
        "Conducted Manual QA Testing on multiple company websites to identify and resolve functionality issues.",
        "Troubleshot and resolved technical issues promptly to minimize downtime and service disruptions.",
        "Collaborated with cross-functional teams to implement system upgrades and optimize performance.",
        "Developed and maintained operational documentation for procedures, incident reports, and best practices.",
        "Implemented monitoring strategies to proactively detect and address potential system vulnerabilities.",
        "Analyzed system logs and metrics to identify trends and prevent future incidents.",
        "Supported deployment processes by coordinating with development teams to roll out new features and services."
      ]
    },
    {
      id: 4,
      company: "Israel Standardization Institute",
      logo: isiLogo,
      title: "Gold Department IT, Tel Aviv",
      duration: "May 2023 - Aug 2024",
      skills: [
        { name: "Excel", icon: excelIcon, level: 3, isImage: true },
        { name: "Database Management", icon: <FaDatabase />, level: 1 },
        { name: "IT Support", icon: <FaServer />, level: 2 }
      ],
      responsibilities: [
        "Handled technical issues with laboratory and office equipment within the department.",
        "Calculated net weight of gold processed, ensuring 100% accuracy through precise measurements and verification processes.",
        "Managed orders for over 50 importers using an organized inventory management system, effectively managing their orders."
      ]
    },
    {
      id: 5,
      company: "Femi Premium",
      logo: femiLogo,
      title: "SQL-Technician, Ben-Gurion Airport",
      duration: "Jan 2022 - Jun 2022",
      skills: [
        { name: "SQL", icon: <FaDatabase />, level: 5 },
        { name: "MySQL", icon: <SiMysql />, level: 5 },
        { name: "Data Analysis", icon: <FaChartLine />, level: 4 },
        { name: "Technical Support", icon: <FaCode />, level: 4 }
      ],
      responsibilities: [
        "Provided technical support to the COVID-19 testing project at Ben-Gurion airport, efficiently managing over 1,000 tests daily using SQL for data management.",
        "Supplied data to customers and other departments, ensuring 99% accuracy through rigorous validation.",
        "Troubleshot and resolved SQL-based problems, reducing system downtime by 20%.",
        "Collaborated with the Ministry of Health and five major laboratories, improving collaboration efficiency by 25%."
      ]
    },
    {
      id: 6,
      company: "Yes TV",
      logo: yesLogo,
      title: "Technical Support Agent, Babcom Centers",
      duration: "Jun 2019 - Nov 2020",
      skills: [
        { name: "Technical Support", icon: <FaServer />, level: 5 },
        { name: "Customer Service", icon: <FaCode />, level: 5 },
        { name: "Problem Solving", icon: <FaChartLine />, level: 5 }
      ],
      responsibilities: [
        "Provided technical support for company devices, achieving a customer satisfaction rate of 90% by effectively resolving issues.",
        "Improved task completion speed by 30% using the Wizard Windows application.",
        "Maintained a 4.8/5 customer satisfaction rating through effective problem-solving techniques and clear communication."
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Title>Work Experience</Title>
      <ExperienceContainer>
        <TimelineLine />
        {experiences.map((job) => (
          <JobCard
            key={job.id}
            onClick={() => toggleCard(job.id)}
            onMouseEnter={() => setHoveredCard(job.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <TimelineNode isActive={hoveredCard === job.id || expandedCards[job.id]} />
            <JobHeader>
              <CompanyInfo>
                <CompanyName>
                  <CompanyLogo src={job.logo} alt={job.company} />
                  {job.company}
                </CompanyName>
                <JobTitle>{job.title}</JobTitle>
                <Duration>{job.duration}</Duration>
                <ToggleButton>
                  {expandedCards[job.id] ? (
                    <>
                      <FaChevronUp /> Hide Details
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> View Details
                    </>
                  )}
                </ToggleButton>
              </CompanyInfo>
            </JobHeader>

            <AnimatePresence>
              {expandedCards[job.id] && (
                <JobDetails
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <SkillsSection>
                    <SkillsTitle>Technologies & Skills</SkillsTitle>
                    <SkillsGrid>
                      {job.skills.map((skill, index) => (
                        <SkillItem key={index}>
                          {skill.isImage ? (
                            <SkillIcon src={skill.icon} alt={skill.name} />
                          ) : (
                            <SkillIconComponent>{skill.icon}</SkillIconComponent>
                          )}
                          <SkillInfo>
                            <SkillName>{skill.name}</SkillName>
                            {renderSkillLevel(skill.level)}
                          </SkillInfo>
                        </SkillItem>
                      ))}
                    </SkillsGrid>
                  </SkillsSection>

                  <ResponsibilityList>
                    {job.responsibilities.map((resp, index) => (
                      <Responsibility key={index}>{resp}</Responsibility>
                    ))}
                  </ResponsibilityList>
                </JobDetails>
              )}
            </AnimatePresence>
          </JobCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
}

export default Experience;
