import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #0a192f;
  color: #8892b0;
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