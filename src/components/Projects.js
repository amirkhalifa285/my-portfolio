import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaFileAlt, FaPencilRuler, FaTimes, FaExpand } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import project logos
import lostFoundLogo from '../assets/lostandfound.png';
import drinkSmartLogo from '../assets/drinkSmartlogo.png';
import flyEaseLogo from '../assets/FlyEaseLogo.png';

// Import project screenshots
import lostFound1 from '../assets/Lost&Found1.png';
import drinkSmart1 from '../assets/DrinkSmart1.png';
import drinkSmart2 from '../assets/DrinkSmart2.png';
import drinkSmart3 from '../assets/DrinkSmart3.png';
import drinkSmart4 from '../assets/DrinkSmart4.png';
import drinkSmart5 from '../assets/DrinkSmart5.png';
import drinkSmartArchitecture from '../assets/DrinkSmart-Architecture.png';
import flyEase1 from '../assets/FlyEase1.png';
import flyEase2 from '../assets/FlyEase2.png';
import flyEase3 from '../assets/FlyEase3.png';
import flyEase4 from '../assets/FlyEase4.png';
import flyEase5 from '../assets/FlyEase5.png';

// Import technology icons
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.jpg';
import jsIcon from '../assets/javascript.png';
import nodeIcon from '../assets/node.png';
import sqlIcon from '../assets/sql.png';
import pythonIcon from '../assets/python.png';
import fastApiIcon from '../assets/FastAPI.png';
import reactIcon from '../assets/react.png';
import moqupsIcon from '../assets/moqups.jpg';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
  position: relative;
  padding-left: 60px;
  
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

// Timeline Line
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

// Timeline Node
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

const ProjectCard = styled.div`
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
  
  &:hover ${TimelineNode} {
    width: 20px;
    height: 20px;
    left: -49px;
    top: 38px;
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.primary}30;
    
    @media (max-width: 768px) {
      left: -39px;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const ProjectName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProjectLogo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
  padding: 5px;
`;

const ProjectType = styled.p`
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

const ProjectDetails = styled(motion.div)`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.accent}30;
  overflow: hidden;
`;

// Image Carousel Styles
const ImageCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
  margin-bottom: 25px;
  cursor: pointer;
  
  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    
    .expand-icon {
      opacity: 1;
    }
  }
`;

const ExpandIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 3;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  cursor: default;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  padding: 10px;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 1.5em;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  
  &.prev {
    left: -60px;
  }
  
  &.next {
    right: -60px;
  }
  
  @media (max-width: 768px) {
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`;

const ModalIndicators = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const ModalIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 4;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
`;

const ImageIndicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const TechSection = styled.div`
  margin-bottom: 25px;
`;

const TechTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  margin: 0 0 15px 0;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.accent}20;
  border-radius: 8px;
`;

const TechIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const TechIconComponent = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const TechInfo = styled.div`
  flex: 1;
`;

const TechName = styled.p`
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

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const Feature = styled.li`
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

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
  }
  
  svg {
    font-size: 1.1em;
  }
`;

function Projects() {
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectId, setModalProjectId] = useState(null);

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleImageChange = (projectId, direction) => {
    const project = projects.find(p => p.id === projectId);
    const currentIndex = currentImageIndex[projectId] || 0;
    const totalImages = project.images.length;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalImages;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: newIndex
    }));
  };

  const openModal = (projectId) => {
    setModalOpen(true);
    setModalProjectId(projectId);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProjectId(null);
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

  const projects = [
    {
      id: 1,
      name: "Lost and Found",
      logo: lostFoundLogo,
      type: "Web Application",
      images: [lostFound1],
      duration: "May 2024 - Aug 2024",
      technologies: [
        { name: "HTML", icon: htmlIcon, level: 5, isImage: true },
        { name: "CSS", icon: cssIcon, level: 5, isImage: true },
        { name: "JavaScript", icon: jsIcon, level: 4, isImage: true },
        { name: "Node.js", icon: nodeIcon, level: 4, isImage: true },
        { name: "SQL", icon: sqlIcon, level: 3, isImage: true }
      ],
      features: [
        "Implemented responsive design and user-friendly interface.",
        "Ensured secure handling of user data and efficient database management.",
        "Successfully deployed on Render for live use.",
        "Received positive feedback for functionality and ease of use."
      ],
      githubLink: "https://github.com/amirkhalifa285/Lost-And-Found-Project",
      liveLink: null
    },
    {
      id: 2,
      name: "DrinkSmart",
      logo: drinkSmartLogo,
      type: "Application Design and SRS",
      images: [drinkSmart1, drinkSmart2, drinkSmart3, drinkSmart4, drinkSmart5, drinkSmartArchitecture],
      duration: "2022",
      technologies: [
        { name: "Moqups", icon: moqupsIcon, level: 5, isImage: true },
        { name: "UI/UX Design", icon: <FaPencilRuler />, level: 5 },
        { name: "Documentation", icon: <FaFileAlt />, level: 5 }
      ],
      features: [
        "Completed the project 2 weeks ahead of schedule.",
        "Presented the project to the head of the Software Engineering department, receiving commendation for innovation and usability.",
        "Developed a smart bottle application prototype to track water intake and encourage hydration.",
        "Collaborated with a team to create a comprehensive Software Requirements Specification (SRS) document."
      ],
      githubLink: "https://github.com/amirkhalifa285/drinkSmart",
      liveLink: null
    },
    {
      id: 3,
      name: "FlyEase",
      logo: flyEaseLogo,
      type: "Airport Navigation Application",
      images: [flyEase1, flyEase2, flyEase3, flyEase4, flyEase5],
      duration: "Present",
      technologies: [
        { name: "Python", icon: pythonIcon, level: 5, isImage: true },
        { name: "FastAPI", icon: fastApiIcon, level: 4, isImage: true },
        { name: "React", icon: reactIcon, level: 4, isImage: true },
        { name: "JavaScript", icon: jsIcon, level: 5, isImage: true },
        { name: "CSS", icon: cssIcon, level: 5, isImage: true },
        { name: "SQL", icon: sqlIcon, level: 4, isImage: true }
      ],
      features: [
        "Designed and implemented a mock airport navigation system with features for location-based navigation and congestion visualization.",
        "Developed a backend API using FastAPI with endpoints for managing locations, paths, and dynamic navigation.",
        "Utilized Dijkstra's algorithm to compute the shortest path between airport locations based on real-time user input.",
        "Created a fully interactive front-end map using React and Fabric.js, supporting dynamic visualization of paths, congestion levels, and highlighted navigation routes.",
        "Designed a responsive UI with CSS for seamless user interaction across various devices.",
        "Implemented an admin panel for managing map entities such as locations and paths.",
        "Integrated asynchronous database operations with SQLAlchemy to handle real-time data updates efficiently.",
        "Deployed a congestion monitoring system to display real-time congestion levels using visual indicators on the map.",
        "Established a modular structure for scalability and maintainability, incorporating reusable components and controllers."
      ],
      githubLink: "https://github.com/amirkhalifa285/FlyEase-Backend",
      liveLink: null
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectsContainer>
        <TimelineLine />
        {projects.map((project) => {
          const currentIndex = currentImageIndex[project.id] || 0;
          
          return (
            <ProjectCard 
              key={project.id}
              onClick={() => toggleCard(project.id)}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <TimelineNode isActive={hoveredCard === project.id || expandedCards[project.id]} />
              <ProjectHeader>
                <ProjectInfo>
                  <ProjectName>
                    <ProjectLogo src={project.logo} alt={project.name} />
                    {project.name}
                  </ProjectName>
                  <ProjectType>{project.type}</ProjectType>
                  <Duration>{project.duration}</Duration>
                  <ToggleButton>
                    {expandedCards[project.id] ? (
                      <>
                        <FaChevronUp /> Hide Details
                      </>
                    ) : (
                      <>
                        <FaChevronDown /> View Details
                      </>
                    )}
                  </ToggleButton>
                </ProjectInfo>
              </ProjectHeader>
              
              <AnimatePresence>
                {expandedCards[project.id] && (
                  <ProjectDetails
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ImageCarousel onClick={(e) => {
                      e.stopPropagation();
                      openModal(project.id);
                    }}>
                      <ExpandIcon className="expand-icon">
                        <FaExpand />
                      </ExpandIcon>
                      <CarouselImage 
                        src={project.images[currentIndex]} 
                        alt={`${project.name} screenshot ${currentIndex + 1}`} 
                      />
                      
                      {project.images.length > 1 && (
                        <>
                          <CarouselButton 
                            className="prev" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageChange(project.id, 'prev');
                            }}
                          >
                            <FaChevronLeft />
                          </CarouselButton>
                          <CarouselButton 
                            className="next" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageChange(project.id, 'next');
                            }}
                          >
                            <FaChevronRight />
                          </CarouselButton>
                          
                          <ImageIndicators>
                            {project.images.map((_, index) => (
                              <Indicator 
                                key={index}
                                active={index === currentIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [project.id]: index
                                  }));
                                }}
                              />
                            ))}
                          </ImageIndicators>
                        </>
                      )}
                    </ImageCarousel>
                    
                    <TechSection>
                      <TechTitle>Technologies Used</TechTitle>
                      <TechGrid>
                        {project.technologies.map((tech, index) => (
                          <TechItem key={index}>
                            {tech.isImage ? (
                              <TechIcon src={tech.icon} alt={tech.name} />
                            ) : (
                              <TechIconComponent>{tech.icon}</TechIconComponent>
                            )}
                            <TechInfo>
                              <TechName>{tech.name}</TechName>
                              {renderSkillLevel(tech.level)}
                            </TechInfo>
                          </TechItem>
                        ))}
                      </TechGrid>
                    </TechSection>
                    
                    <FeatureList>
                      {project.features.map((feature, index) => (
                        <Feature key={index}>{feature}</Feature>
                      ))}
                    </FeatureList>
                    
                    <ProjectLinks>
                      <ProjectLink 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> View Repository
                      </ProjectLink>
                      {project.liveLink && (
                        <ProjectLink 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectDetails>
                )}
              </AnimatePresence>
            </ProjectCard>
          );
        })}
      </ProjectsContainer>
      
      {/* Image Modal */}
      <AnimatePresence>
        {modalOpen && modalProjectId && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalCloseButton onClick={closeModal}>
                <FaTimes />
              </ModalCloseButton>
              
              {(() => {
                const project = projects.find(p => p.id === modalProjectId);
                const currentIndex = currentImageIndex[modalProjectId] || 0;
                
                return (
                  <>
                    <ModalImage 
                      src={project.images[currentIndex]} 
                      alt={`${project.name} screenshot ${currentIndex + 1}`}
                    />
                    
                    {project.images.length > 1 && (
                      <>
                        <ModalNavButton 
                          className="prev" 
                          onClick={() => handleImageChange(modalProjectId, 'prev')}
                        >
                          <FaChevronLeft />
                        </ModalNavButton>
                        <ModalNavButton 
                          className="next" 
                          onClick={() => handleImageChange(modalProjectId, 'next')}
                        >
                          <FaChevronRight />
                        </ModalNavButton>
                        
                        <ModalIndicators>
                          {project.images.map((_, index) => (
                            <ModalIndicator 
                              key={index}
                              active={index === currentIndex}
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [modalProjectId]: index
                              }))}
                            />
                          ))}
                        </ModalIndicators>
                      </>
                    )}
                  </>
                );
              })()}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
}

export default Projects;