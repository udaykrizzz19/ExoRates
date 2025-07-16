import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import AmountDisplay from '../components/AmountDisplay';
import CurrencyPairSelector from '../components/CurrencyPairSelector';
import Keypad from '../components/Keypad';
import ThemeToggle from '../components/ThemeToggle';

const AppFrame = styled(motion.div)`
  background: ${({ theme }) => theme.highlight};
  width: 100%;
  max-width: 420px;
  height: 85vh;
  max-height: 900px;
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 100vh;
    border-radius: 0;
  }
`;

const Header = styled.div`
  padding: 20px 25px 0; /* Reduced bottom padding */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 25px 0; /* Reduced top padding */
  justify-content: flex-end;
`;

const ConvertButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  margin-top: 20px;
  margin-bottom: 80px;

  &:hover {
    transform: translateY(-3px);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.subtle};
    cursor: not-allowed;
    transform: none;
  }
`;

// Define page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '100vw',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};


const ConverterPage = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const navigate = useNavigate();

  const handleKeyPress = (key) => {
    if (key === '⌫') {
      setAmount((prev) => prev.slice(0, -1));
    } else if (key === '.' && amount.includes('.')) {
      return;
    } else if (amount.length < 10) {
      setAmount((prev) => prev + key);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleConvert = () => {
    const numericAmount = parseFloat(amount);
    if (!numericAmount || numericAmount <= 0) return;
    
    navigate('/result', {
      state: { amount: numericAmount, from: fromCurrency, to: toCurrency },
    });
  };

  return (
    <AppFrame
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header>
        <ThemeToggle />
      </Header>
      
      <MainContent>
        <CurrencyPairSelector
          from={fromCurrency}
          to={toCurrency}
          onFromChange={setFromCurrency}
          onToChange={setToCurrency}
          onSwap={handleSwap}
        />
        
        <AmountDisplay amount={amount} currencyCode={fromCurrency} />

        <Keypad onKeyPress={handleKeyPress} />

        <ConvertButton onClick={handleConvert} disabled={!amount || parseFloat(amount) <= 0}>
          Convert
        </ConvertButton>
      </MainContent>
    </AppFrame>
  );
};

export default ConverterPage;