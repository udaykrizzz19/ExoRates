import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CircleContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid ${({ theme }) => theme.primary}50;
  border-radius: 50%;
`;

const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);

  img {
    filter: invert(${({ theme }) => (theme.body === '#2C3930' ? '100%' : '0%')});
  }
`;

const ProcessingText = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
`;

const Loader = () => (
  <LoaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <CircleContainer>
      <Circle animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
      <Circle animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
      <IconWrapper initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
        <img src="/contactless.svg" alt="Processing" width="48" height="48" />
      </IconWrapper>
    </CircleContainer>
    <ProcessingText>Processing...</ProcessingText>
  </LoaderContainer>
);

export default Loader;