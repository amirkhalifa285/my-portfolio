import React from 'react';
import styled from 'styled-components';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import { profile } from '../data/profile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.space['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

const Body = styled.div`
  p {
    margin: 0 0 ${({ theme }) => theme.space.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

const Facts = styled.dl`
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Fact = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: ${({ theme }) => theme.space.md};
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  dt {
    color: ${({ theme }) => theme.colors.subtle};
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FACTS = [
  ['Based in', profile.location],
  ['Education', 'B.Sc. Software Engineering, Shenkar (2026)'],
  ['Currently', 'NOC Team Leader, Aristocrat Interactive'],
  ['Languages', 'English, Hebrew, Arabic, Russian'],
];

function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title="About me" />
      <Grid>
        <Body>
          <p>
            I'm a software engineering graduate who's spent the last two years keeping production
            systems running, and building software along the way. At <strong>Aristocrat Interactive</strong> I
            lead a NOC team and write the tools we rely on: an incident/Jira ticket generator, a
            production health dashboard and task automation in Python and Bash.
          </p>
          <p>
            Outside work I build projects end to end. The most recent is <strong>SafeRide</strong>,
            a collision-avoidance system running on real vehicles.
          </p>
          <p>I run Arch, by the way.</p>
        </Body>
        <Facts>
          {FACTS.map(([label, value]) => (
            <Fact key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </Fact>
          ))}
        </Facts>
      </Grid>
    </Section>
  );
}

export default About;
