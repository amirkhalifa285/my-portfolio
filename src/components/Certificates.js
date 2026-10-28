import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpRight, FiAward, FiBookOpen } from 'react-icons/fi';
import Modal from './ui/Modal';

const certificates = [
  {
    id: 1,
    name: 'Docker Foundations Professional Certificate',
    issuer: 'Docker',
    date: 'Dec 2025',
    pdfPath: '/docker-foundations-certificate.pdf',
  },
  {
    id: 2,
    name: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services',
    inProgress: true,
  },
  // Add more certificates here as you acquire them.
  // When an in-progress one is earned: remove `inProgress`, add `date` and `pdfPath`.
];

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 0;
`;

const CertButton = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.subtle};
  }

  > svg:first-child {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Info = styled.span`
  flex: 1;
  min-width: 0;

  strong {
    display: block;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.subtle};
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

const sweep = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(350%); }
`;

const PendingCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;

  > svg:first-child {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.subtle};
  }

  /* Indeterminate activity line along the bottom edge */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
    animation: ${sweep} 2.4s ease-in-out infinite;
  }
`;

const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 2px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.muted};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${pulse} 1.6s ease-in-out infinite;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 64px 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    flex: 1;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    white-space: nowrap;
  }
`;

const PdfFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 75vh;
  border: none;
  background: #fff;
`;

function Certificates() {
  const [selected, setSelected] = useState(null);
  const close = React.useCallback(() => setSelected(null), []);

  return (
    <>
      <List>
        {certificates.map((cert) => (
          <Item key={cert.id}>
            {cert.inProgress ? (
              <PendingCard>
                <FiBookOpen size={20} />
                <Info>
                  <strong>{cert.name}</strong>
                  <span>{cert.issuer}</span>
                </Info>
                <StatusPill>Studying</StatusPill>
              </PendingCard>
            ) : (
              <CertButton onClick={() => setSelected(cert)}>
                <FiAward size={20} />
                <Info>
                  <strong>{cert.name}</strong>
                  <span>{cert.issuer} · {cert.date}</span>
                </Info>
                <FiArrowUpRight />
              </CertButton>
            )}
          </Item>
        ))}
      </List>

      <Modal isOpen={!!selected} onClose={close} label={selected ? selected.name : 'Certificate'} maxWidth="1000px">
        {selected && (
          <>
            <ModalHeader>
              <h3>{selected.name}</h3>
              <a href={selected.pdfPath} target="_blank" rel="noopener noreferrer">
                Open in new tab <FiArrowUpRight />
              </a>
            </ModalHeader>
            <PdfFrame src={selected.pdfPath} title={selected.name} />
          </>
        )}
      </Modal>
    </>
  );
}

export default Certificates;
