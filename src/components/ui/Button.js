import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Variants: 'primary' (default), 'secondary' (bordered), 'ghost' (text only)
const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      opacity: 0.88;
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceHover};
      border-color: ${({ theme }) => theme.colors.subtle};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.muted};
    border-color: transparent;
    padding-left: 4px;
    padding-right: 4px;

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.text};
    }
  `,
};

const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;

  ${({ $variant = 'primary' }) => variants[$variant] || variants.primary}

  &:hover {
    opacity: 1;
  }

  svg {
    transition: transform 0.15s ease;
  }

  &:hover:not(:disabled) svg {
    transform: translateX(2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
