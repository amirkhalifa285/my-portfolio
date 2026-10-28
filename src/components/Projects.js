import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiPlay, FiFileText } from 'react-icons/fi';
import { projects } from '../data/projects';
import Section from './ui/Section';
import SectionHeader, { Eyebrow } from './ui/SectionHeader';
import Modal from './ui/Modal';
import Tag, { TagList } from './ui/Tag';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'cybersecurity', label: 'Security' },
  { id: 'systems', label: 'Systems' },
  { id: 'design', label: 'Design' },
];

const summaryOf = (project) => project.description || project.features[0];

const linksOf = (project) => [
  project.githubLink && { href: project.githubLink, label: project.githubLinkBackend ? 'Frontend' : 'Code', icon: <FiGithub size={14} /> },
  project.githubLinkBackend && { href: project.githubLinkBackend, label: 'Backend', icon: <FiGithub size={14} /> },
  project.docsLink && { href: project.docsLink, label: 'Docs', icon: <FiFileText size={14} /> },
  project.liveLink && { href: project.liveLink, label: 'Live', icon: <FiArrowUpRight size={14} /> },
].filter(Boolean);

const mediaOf = (project) => [
  ...(project.video ? [{ type: 'video', src: project.video }] : []),
  ...project.images.map((src) => ({ type: 'image', src })),
];

/* ---------- Featured ---------- */

const Featured = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2xl']};
  margin-bottom: ${({ theme }) => theme.space['2xl']};
`;

const FeaturedItem = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

const Cover = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const CoverBadge = styled.span`
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const ProjectName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin: 0 0 4px;
`;

const ProjectMeta = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subtle};
`;

const Summary = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.md};
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.lg};
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

/* ---------- Archive ---------- */

const ArchiveHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const ArchiveTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 0;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const Filter = styled.button`
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.border)};
  background: ${({ theme, $active }) => ($active ? theme.colors.text : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.background : theme.colors.muted)};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.colors.background : theme.colors.text)};
  }
`;

const Archive = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.li`
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const RowButton = styled.button`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto auto;
  gap: ${({ theme }) => theme.space.lg};
  align-items: center;
  width: 100%;
  padding: 18px 8px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  color: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 6px 16px;
  }
`;

const RowName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  small {
    display: block;
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const RowTags = styled(TagList)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const RowYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.subtle};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const RowArrow = styled(FiArrowUpRight)`
  color: ${({ theme }) => theme.colors.subtle};
`;

/* ---------- Detail modal ---------- */

const Stage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StageNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'prev' ? 'left: 12px;' : 'right: 12px;')}
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
  }
`;

const Counter = styled.span`
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const Thumbs = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px ${({ theme }) => theme.space.lg} 0;
  overflow-x: auto;
`;

const Thumb = styled.button`
  flex: 0 0 72px;
  height: 48px;
  padding: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 2px solid ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  background: ${({ theme }) => theme.colors.surfaceHover};
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 1;
  }
`;

const DetailBody = styled.div`
  padding: ${({ theme }) => theme.space.lg};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: ${({ theme }) => theme.space.lg} 0 ${({ theme }) => theme.space.sm};
  }

  ul.features {
    margin: 0;
    padding-left: 18px;
  }

  ul.features li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 6px;
  }
`;

function ProjectDetail({ project }) {
  const media = mediaOf(project);
  const [index, setIndex] = useState(0);
  const current = media[index];

  const step = useCallback(
    (delta) => setIndex((i) => (i + delta + media.length) % media.length),
    [media.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [step]);

  const summary = summaryOf(project);
  const features = project.features.filter((f) => f !== summary);
  const links = linksOf(project);

  return (
    <>
      <Stage>
        {current.type === 'video' ? (
          <video key={current.src} controls autoPlay playsInline>
            <source src={current.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={current.src} alt={`${project.name} screenshot ${index + 1}`} />
        )}
        {media.length > 1 && (
          <>
            <StageNav $side="prev" onClick={() => step(-1)} aria-label="Previous"><FiChevronLeft /></StageNav>
            <StageNav $side="next" onClick={() => step(1)} aria-label="Next"><FiChevronRight /></StageNav>
            <Counter>{index + 1} / {media.length}</Counter>
          </>
        )}
      </Stage>
      {media.length > 1 && (
        <Thumbs>
          {media.map((m, i) => (
            <Thumb key={m.src} $active={i === index} onClick={() => setIndex(i)} aria-label={`Show item ${i + 1}`}>
              {m.type === 'video' ? <FiPlay /> : <img src={m.src} alt="" />}
            </Thumb>
          ))}
        </Thumbs>
      )}
      <DetailBody>
        <ProjectName>{project.name}</ProjectName>
        <ProjectMeta>{project.type} · {project.duration}</ProjectMeta>
        <Summary>{summary}</Summary>
        {links.length > 0 && (
          <LinkRow style={{ marginTop: 0 }}>
            {links.map((l) => (
              <TextLink key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.icon} {l.label}
              </TextLink>
            ))}
          </LinkRow>
        )}
        {features.length > 0 && (
          <>
            <h4>Highlights</h4>
            <ul className="features">
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </>
        )}
        <h4>Stack</h4>
        <TagList>
          {project.technologies.map((t) => <Tag key={t.name}>{t.name}</Tag>)}
        </TagList>
      </DetailBody>
    </>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const close = useCallback(() => setSelected(null), []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleCategories = categories.filter(
    (c) => c.id === 'all' || rest.some((p) => p.category === c.id)
  );
  const archive = activeCategory === 'all' ? rest : rest.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Work"
        title="Selected projects"
        description="Embedded systems, compilers, cloud and security, from ESP32 firmware to serverless backends."
      />

      <Featured>
        {featured.map((project) => (
          <FeaturedItem key={project.id}>
            <Cover onClick={() => setSelected(project)} aria-label={`Open ${project.name} gallery`}>
              <img src={project.images[0]} alt="" loading="lazy" />
              {project.video && <CoverBadge><FiPlay size={12} /> Watch demo</CoverBadge>}
            </Cover>
            <div>
              <Eyebrow>{project.duration}</Eyebrow>
              <ProjectName>{project.name}</ProjectName>
              <ProjectMeta>{project.type}</ProjectMeta>
              <Summary>{summaryOf(project)}</Summary>
              <TagList>
                {project.technologies.slice(0, 6).map((t) => <Tag key={t.name}>{t.name}</Tag>)}
              </TagList>
              <LinkRow>
                <TextButton onClick={() => setSelected(project)}>
                  Details <FiChevronRight size={14} />
                </TextButton>
                {linksOf(project).map((l) => (
                  <TextLink key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.icon} {l.label}
                  </TextLink>
                ))}
              </LinkRow>
            </div>
          </FeaturedItem>
        ))}
      </Featured>

      <ArchiveHeader>
        <ArchiveTitle>More projects</ArchiveTitle>
        <Filters role="group" aria-label="Filter projects">
          {visibleCategories.map((cat) => (
            <Filter
              key={cat.id}
              $active={activeCategory === cat.id}
              aria-pressed={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </Filter>
          ))}
        </Filters>
      </ArchiveHeader>

      <Archive>
        {archive.map((project) => (
          <Row key={project.id}>
            <RowButton onClick={() => setSelected(project)}>
              <RowName>
                {project.name}
                <small>{project.type}</small>
              </RowName>
              <RowTags>
                {project.technologies.slice(0, 3).map((t) => <Tag key={t.name}>{t.name}</Tag>)}
              </RowTags>
              <RowYear>{project.duration}</RowYear>
              <RowArrow aria-hidden="true" />
            </RowButton>
          </Row>
        ))}
      </Archive>

      <Modal isOpen={!!selected} onClose={close} label={selected ? `${selected.name} details` : 'Project details'}>
        {selected && <ProjectDetail key={selected.id} project={selected} />}
      </Modal>
    </Section>
  );
}

export default Projects;
