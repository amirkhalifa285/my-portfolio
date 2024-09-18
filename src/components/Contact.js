import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  /* Styles for contact section */
`;

function Contact() {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out if you're interested in collaborating or just want to connect.
      </p>
      <a href="mailto:amir.kh28@hotmail.com">Get In Touch</a>
    </ContactSection>
  );
}

export default Contact;