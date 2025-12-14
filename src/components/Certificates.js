import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';

const CertificatesSection = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.primary};
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled(motion.div)`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.background}dd
  );
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 16px;
  padding: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.15);
    border-color: ${({ theme }) => theme.colors.primary}60;
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

const CertificateInfo = styled.div`
  flex: 1;
`;

const CertificateName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3em;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const Issuer = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  margin: 0 0 5px 0;
  font-weight: 500;
`;

const IssueDate = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9em;
  margin: 0;
  font-style: italic;
`;

const ViewButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.primary}15;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: all 0.3s ease;
  
  ${CertificateCard}:hover & {
    background: ${({ theme }) => theme.colors.primary}25;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const BadgeIcon = styled(FaCertificate)`
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 120px;
  color: ${({ theme }) => theme.colors.primary}08;
  pointer-events: none;
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
  height: 85vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;
  background: ${({ theme }) => theme.colors.background};
`;

const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.primary}15;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: rotate(90deg);
  }
`;

const PDFViewer = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  background: #1a1a1a;
`;

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      date: "December 2025",
      icon: <SiDocker />,
      pdfPath: "/docker-foundations-certificate.pdf"
    }
    // Add more certificates here as you acquire them
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  const openInNewTab = () => {
    if (selectedCert) {
      window.open(selectedCert.pdfPath, '_blank');
    }
  };

  return (
    <CertificatesSection id="certificates">
      <Title>Certifications</Title>
      <CertificatesGrid>
        {certificates.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            onClick={() => openModal(cert)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BadgeIcon />
            <CertificateHeader>
              <IconContainer>
                {cert.icon}
              </IconContainer>
              <CertificateInfo>
                <CertificateName>{cert.name}</CertificateName>
                <Issuer>{cert.issuer}</Issuer>
                <IssueDate>Issued: {cert.date}</IssueDate>
              </CertificateInfo>
            </CertificateHeader>
            <ViewButton>
              <FaCertificate /> View Certificate
            </ViewButton>
          </CertificateCard>
        ))}
      </CertificatesGrid>

      {/* Certificate Modal */}
      {selectedCert && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>
                {selectedCert.icon}
                {selectedCert.name}
              </ModalTitle>
              <ModalActions>
                <ActionButton onClick={openInNewTab}>
                  <FaExternalLinkAlt /> Open in New Tab
                </ActionButton>
                <CloseButton onClick={closeModal}>
                  <FaTimes />
                </CloseButton>
              </ModalActions>
            </ModalHeader>
            <PDFViewer
              src={selectedCert.pdfPath}
              title={selectedCert.name}
            />
          </ModalContainer>
        </ModalOverlay>
      )}
    </CertificatesSection>
  );
}

export default Certificates;
