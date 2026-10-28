import styled from 'styled-components';

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tag = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  line-height: 1.6;
  margin: 0;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surfaceHover};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
`;

export default Tag;
