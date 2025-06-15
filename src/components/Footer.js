import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
  font-size: 0.9em;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Amir Khalifa</p>
    </FooterContainer>
  );
}

export default Footer;