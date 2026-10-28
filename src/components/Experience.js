import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Tag, { TagList } from './ui/Tag';
import { experience } from '../data/experience';

const PREVIEW_COUNT = 3;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Company = styled.li`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.md};
  }
`;

const CompanyHead = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #ffffff;
  object-fit: contain;
  padding: 3px;
  flex-shrink: 0;
`;

const CompanyName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin: 0;
`;

const Location = styled.p`
  margin: 2px 0 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subtle};
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`;

const Role = styled.div`
  position: relative;
`;

const RoleHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 16px;
`;

const RoleTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: 0;

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const Duration = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.subtle};
  white-space: nowrap;
`;

const Highlights = styled.ul`
  margin: 12px 0 0;
  padding-left: 18px;

  li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 6px;
    padding-left: 4px;
  }

  li::marker {
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    transition: transform 0.2s ease;
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  }
`;

const Tags = styled(TagList)`
  margin-top: ${({ theme }) => theme.space.md};
`;

function RoleEntry({ role }) {
  const [expanded, setExpanded] = useState(false);
  const { highlights, collapsed } = role;

  const visible = expanded
    ? highlights
    : collapsed
      ? []
      : highlights.slice(0, PREVIEW_COUNT);
  const hiddenCount = highlights.length - visible.length;

  return (
    <Role>
      <RoleHeader>
        <RoleTitle>
          {role.title}
          {role.subtitle && <span> · {role.subtitle}</span>}
        </RoleTitle>
        <Duration>{role.duration}</Duration>
      </RoleHeader>
      {visible.length > 0 && (
        <Highlights>
          {visible.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Highlights>
      )}
      {(hiddenCount > 0 || expanded) && (
        <Toggle $open={expanded} onClick={() => setExpanded((open) => !open)} aria-expanded={expanded}>
          {expanded ? 'Show less' : collapsed ? 'Show details' : `Show ${hiddenCount} more`}
          <FiChevronDown size={14} />
        </Toggle>
      )}
    </Role>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've worked" />
      <List>
        {experience.map((job) => (
          <Company key={job.id}>
            <CompanyHead>
              <Logo src={job.logo} alt="" />
              <div>
                <CompanyName>{job.company}</CompanyName>
                {job.location && <Location>{job.location}</Location>}
              </div>
            </CompanyHead>
            <div>
              <Roles>
                {job.roles.map((role) => (
                  <RoleEntry key={role.title} role={role} />
                ))}
              </Roles>
              <Tags aria-label="Technologies">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tags>
            </div>
          </Company>
        ))}
      </List>
    </Section>
  );
}

export default Experience;
