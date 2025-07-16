import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

import Loader from '../components/Loader';
import AnimatedCheckmark from '../components/AnimatedCheckmark';
import { countryList } from '../assets/country-list';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, x: '100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '-100vw' },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Staggered animation for content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AppFrame = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  width: 100%;
  max-width: 420px;
  height: 85vh;
  max-height: 900px;
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 40px;

  @media (max-width: 480px) {
    height: 100vh;
    border-radius: 0;
  }
`;

const ResultContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;

const ConvertedAmount = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 25px;
`;

const InfoBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const InfoLabel = styled.span`
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`;

const BackButton = styled.button`
  width: 100%;
  padding: 18px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ResultPage = () => {
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [result, setResult] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, from, to } = location.state || {};

  useEffect(() => {
    if (!amount || !from || !to) {
      navigate('/');
      return;
    }

    const getExchangeRate = async () => {
      const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`;
      try {
        const response = await axios.get(URL);
        const rate = response.data[from.toLowerCase()][to.toLowerCase()];
        const date = response.data.date;
        if (!rate) throw new Error('Rate not found');

        setResult({
          toAmount: (amount * rate).toFixed(2),
          rate: rate.toFixed(4),
          date: new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });

        // Simulate processing time
        setTimeout(() => setStatus('success'), 2000);
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setStatus('error');
      }
    };

    getExchangeRate();
  }, [amount, from, to, navigate]);

  if (!location.state) return null;

  return (
    <AppFrame
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence mode="wait">
        {status === 'loading' && (
          <motion.div key="loader" exit={{ opacity: 0 }}>
            <Loader />
          </motion.div>
        )}

        {status === 'success' && result && (
          <ResultContainer
            key="result"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatedCheckmark />

            <Title variants={itemVariants}>
              {amount} {from} equals
            </Title>
            <ConvertedAmount variants={itemVariants}>
              {result.toAmount} {to}
            </ConvertedAmount>

            <InfoBox variants={itemVariants}>
              <InfoRow>
                <InfoLabel>
                  <Flag src={`https://flagsapi.com/${countryList[from]}/flat/64.png`} /> From
                </InfoLabel>
                <InfoValue>
                  {amount} {from}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>
                  <Flag src={`https://flagsapi.com/${countryList[to]}/flat/64.png`} /> To
                </InfoLabel>
                <InfoValue>
                  {result.toAmount} {to}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Rate</InfoLabel>
                <InfoValue>
                  1 {from} = {result.rate} {to}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Last Updated</InfoLabel>
                <InfoValue>{result.date}</InfoValue>
              </InfoRow>
            </InfoBox>

            <BackButton as={motion.button} variants={itemVariants} onClick={() => navigate('/')}>
              Convert Again
            </BackButton>
          </ResultContainer>
        )}

        {status === 'error' && (
          <ResultContainer key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Conversion Failed</h2>
            <p>Could not fetch the exchange rate. Please try again later.</p>
            <BackButton onClick={() => navigate('/')}>Try Again</BackButton>
          </ResultContainer>
        )}
      </AnimatePresence>
    </AppFrame>
  );
};

export default ResultPage;