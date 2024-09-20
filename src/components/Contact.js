import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;

  a {
    color: #64ffda;
  }
`;

function Contact() {
    return (
        <ContactSection id="contact">
            <h2>Contact Me</h2>
            <ContactInfo>
                <FontAwesomeIcon icon={faEnvelope} /> Email:{' '}
                <a href="mailto:amir.kh28@hotmail.com">amir.kh28@hotmail.com</a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+9720546773232">0546773232</a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{' '}
                <a href="https://www.linkedin.com/in/amir-khalifa-598a76239" target="_blank" rel="noopener noreferrer">
                    amir-khalifa-598a76239
                </a>
            </ContactInfo>
            <ContactInfo>
                <FontAwesomeIcon icon={faGithub} /> GitHub:{' '}
                <a href="https://github.com/amirkhalifa285" target="_blank" rel="noopener noreferrer">
                    amirkhalifa285
                </a>
            </ContactInfo>
        </ContactSection>
    );
}

export default Contact;