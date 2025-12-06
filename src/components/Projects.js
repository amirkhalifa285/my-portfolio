import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import { projects } from '../data/projects';
import Card from './ui/Card';
import Modal from './ui/Modal';

const ProjectsSection = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3em;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'systems', label: 'Systems Programming' },
  { id: 'design', label: 'Design' }
];

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
`;

const CategoryTab = styled.button`
  padding: 10px 24px;
  border-radius: 30px;
  border: 2px solid ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.cardBorder};
  background: ${({ theme, $active }) => $active
    ? `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.accent}20)`
    : 'transparent'};
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.text};
  font-weight: 600;
  font-size: 0.95em;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => `${theme.colors.primary}10`};
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const ProjectImage = styled.div`
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  background: white;
  padding: 5px;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Details = styled(motion.div)`
  overflow: hidden;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const FeatureList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
  
  li {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Modal Styles
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 1.5em;
  transition: background 0.3s;
  z-index: 2;

  &:hover {
    background: rgba(0,0,0,0.8);
  }

  &.prev { left: 10px; }
  &.next { right: 10px; }
`;

function Projects() {
  const [expandedId, setExpandedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <ProjectsSection id="projects">
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </Title>

      <CategoryTabs>
        {categories.map((cat) => (
          <CategoryTab
            key={cat.id}
            $active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <ProjectGrid layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectImage onClick={() => openModal(project)}>
                <img src={project.images[0]} alt={project.name} />
                <div style={{ position: 'absolute', bottom: 10, right: 10, color: 'white', zIndex: 1 }}>
                  <FaExpand />
                </div>
              </ProjectImage>

              <ProjectHeader>
                <Logo src={project.logo} alt="logo" />
                <div>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <div style={{ fontSize: '0.9em', color: '#8892b0' }}>{project.type}</div>
                </div>
              </ProjectHeader>

              <Tags>
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <Tag key={i}>{tech.name}</Tag>
                ))}
                {project.technologies.length > 3 && <Tag>+{project.technologies.length - 3}</Tag>}
              </Tags>

              <Description>
                {project.features[0]}
              </Description>

              <ExpandButton onClick={() => toggleExpand(project.id)}>
                {expandedId === project.id ? (
                  <>Less Details <FaChevronUp /></>
                ) : (
                  <>More Details <FaChevronDown /></>
                )}
              </ExpandButton>

              <AnimatePresence>
                {expandedId === project.id && (
                  <Details
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <FeatureList>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </FeatureList>

                    <Links>
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          GitHub Repo
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                    </Links>
                  </Details>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </AnimatePresence>
      </ProjectGrid>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <ModalContent>
            <ModalImageContainer>
              {selectedProject.images.length > 1 && (
                <>
                  <NavButton className="prev" onClick={prevImage}><FaChevronLeft /></NavButton>
                  <NavButton className="next" onClick={nextImage}><FaChevronRight /></NavButton>
                </>
              )}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.name} screenshot`}
              />
            </ModalImageContainer>
            <div style={{ textAlign: 'center' }}>
              <h3>{selectedProject.name} Gallery</h3>
              <p>{currentImageIndex + 1} / {selectedProject.images.length}</p>
            </div>
          </ModalContent>
        )}
      </Modal>
    </ProjectsSection>
  );
}

export default Projects;