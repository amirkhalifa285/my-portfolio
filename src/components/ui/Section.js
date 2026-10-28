import React from 'react';
import styled from 'styled-components';

const Outer = styled.section`
  border-top: 1px solid ${({ theme, $divider }) => ($divider ? theme.colors.border : 'transparent')};
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

function Section({ id, children, divider = true, ...rest }) {
  return (
    <Outer id={id} $divider={divider} {...rest}>
      <Container>{children}</Container>
    </Outer>
  );
}

export default Section;
