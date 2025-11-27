import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  padding: 12px 24px;
  background: ${({ theme, variant }) =>
        variant === 'outline' ? 'transparent' : theme.colors.primary};
  color: ${({ theme, variant }) =>
        variant === 'outline' ? theme.colors.primary : theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;

  &:hover {
    background: ${({ theme, variant }) =>
        variant === 'outline' ? theme.colors.primary : theme.colors.accent};
    border-color: ${({ theme, variant }) =>
        variant === 'outline' ? theme.colors.primary : theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.primary}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export default Button;
