import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowUpRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import { profile } from '../data/profile';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: ${({ theme }) => theme.space['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

const Channels = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Channel = styled.li`
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  a {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 4px;
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg:first-child {
    color: ${({ theme }) => theme.colors.subtle};
    flex-shrink: 0;
  }

  span {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  small {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const inputStyles = ({ theme, $invalid }) => `
  width: 100%;
  padding: 10px 12px;
  font-family: inherit;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.text};
  background: ${theme.colors.background};
  border: 1px solid ${$invalid ? '#ef4444' : theme.colors.border};
  border-radius: ${theme.radii.md};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${theme.colors.subtle};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}26;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  min-height: 140px;
  resize: vertical;
`;

const FieldError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #ef4444;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ $tone }) => ($tone === 'error' ? '#ef4444' : '#16a34a')};
  background: ${({ $tone }) => ($tone === 'error' ? '#ef444414' : '#16a34a14')};
  border: 1px solid ${({ $tone }) => ($tone === 'error' ? '#ef444440' : '#16a34a40')};
`;

const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
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
        setErrors({ submit: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Open to software engineering roles and interesting projects. The fastest way to reach me is email or the form."
      />
      <Grid>
        <Channels>
          <Channel>
            <a href={`mailto:${profile.email}`}>
              <FiMail size={18} />
              <span><small>Email</small>{profile.email}</span>
            </a>
          </Channel>
          <Channel>
            <a href={`tel:${profile.phone}`}>
              <FiPhone size={18} />
              <span><small>Phone</small>{profile.phoneDisplay}</span>
            </a>
          </Channel>
          <Channel>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={18} />
              <span><small>LinkedIn</small>amir-khalifa</span>
              <FiArrowUpRight />
            </a>
          </Channel>
          <Channel>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub size={18} />
              <span><small>GitHub</small>amirkhalifa285</span>
              <FiArrowUpRight />
            </a>
          </Channel>
        </Channels>

        <Form onSubmit={handleSubmit} noValidate>
          {showSuccess && (
            <Notice $tone="success" role="status">
              <FiCheckCircle /> Thank you for your message! I'll get back to you soon.
            </Notice>
          )}

          {errors.submit && (
            <Notice $tone="error" role="alert">
              <FiAlertCircle /> {errors.submit}
            </Notice>
          )}

          <Row>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                $invalid={!!errors.name}
                aria-invalid={!!errors.name}
              />
              {errors.name && <FieldError>{errors.name}</FieldError>}
            </Field>

            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                $invalid={!!errors.email}
                aria-invalid={!!errors.email}
              />
              {errors.email && <FieldError>{errors.email}</FieldError>}
            </Field>
          </Row>

          <Field>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              $invalid={!!errors.subject}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && <FieldError>{errors.subject}</FieldError>}
          </Field>

          <Field>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              $invalid={!!errors.message}
              aria-invalid={!!errors.message}
            />
            {errors.message && <FieldError>{errors.message}</FieldError>}
          </Field>

          <SubmitRow>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
          </SubmitRow>
        </Form>
      </Grid>
    </Section>
  );
}

export default Contact;
