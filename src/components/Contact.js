import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { QRCodeSVG } from 'qrcode.react';

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5em;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const ContactInfo = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 25px;
    font-size: 1.5em;
  }
`;

const ContactItem = styled.div`
  font-size: 1.1em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 20px;
    flex-shrink: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
    word-break: break-word;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 25px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 220px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const QRWrapper = styled.div`
  padding: 10px;
  background-color: white;
`;

const QRLabel = styled.p`
  margin: 0;
  color: #333;
  font-weight: 600;
  font-size: 1em;
  text-align: center;
`;

const ContactFormSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ContactForm = styled.form`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 30px;
    font-size: 1.5em;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.95em;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.primary}40;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.85em;
  margin-top: 5px;
  display: block;
`;

const SuccessMessage = styled.div`
  padding: 15px;
  background-color: #51cf66;
  color: white;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

const ApiErrorMessage = styled.div`
  padding: 15px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Change this line in Contact.js:
  const contactUrl = `mailto:amir.kh28@hotmail.com?subject=Portfolio%20Inquiry`;

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://dddj5rowmf.execute-api.eu-west-1.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        // Handle error response
        console.error('Error:', data);
        setErrors({ submit: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Contact Me</SectionTitle>
        
        <ContactContent>
          <ContactInfoSection>
            <ContactInfo>
              <h3>Get in Touch</h3>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:amir.kh28@hotmail.com">amir.kh28@hotmail.com</a>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+972546773232">054-677-3232</a>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/amir-khalifa-598a76239" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/amirkhalifa285" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </ContactItem>
            </ContactInfo>
            
            <QRContainer>
              <QRWrapper>
                <QRCodeSVG 
                  value={contactUrl}
                  size={140}
                  level="H"
                  includeMargin={true}
                />
              </QRWrapper>
              <QRLabel>Scan to Contact Me</QRLabel>
            </QRContainer>
          </ContactInfoSection>
          
          <ContactFormSection>
            <ContactForm onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              {showSuccess && (
                <SuccessMessage>
                  Thank you for your message! I'll get back to you soon.
                </SuccessMessage>
              )}
              
              {errors.submit && (
                <ApiErrorMessage>
                  {errors.submit}
                </ApiErrorMessage>
              )}
              
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>
              </FormGrid>
              
              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactFormSection>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
}

export default Contact;