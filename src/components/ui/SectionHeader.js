import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin-bottom: ${({ theme }) => theme.space.xl};
  max-width: 640px;
`;

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.subtle};
  margin: 0 0 ${({ theme }) => theme.space.sm};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin: 0;
`;

const Description = styled.p`
  margin: ${({ theme }) => theme.space.md} 0 0;
  color: ${({ theme }) => theme.colors.muted};
`;

function SectionHeader({ eyebrow, title, description }) {
  return (
    <Wrapper>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}

export default SectionHeader;
