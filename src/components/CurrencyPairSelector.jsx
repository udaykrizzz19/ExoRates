import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomDropdown from './CustomDropdown'; // Import the new component

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  padding: 15px 20px;
  border-radius: 20px;
  margin-bottom: 25px; /* Adjusted margin */
  border: 1px solid ${({ theme }) => theme.subtle};
`;

const SelectorGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 5px;
`;

const SwapButton = styled(motion.button)`
  background: ${({ theme }) => theme.highlight};
  border: 1px solid ${({ theme }) => theme.subtle};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 15px;
  margin-top: 15px; /* Align with dropdown header */
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const CurrencyPairSelector = ({ from, to, onFromChange, onToChange, onSwap }) => {
  return (
    <Wrapper>
      <SelectorGroup>
        <Label>From</Label>
        <CustomDropdown value={from} onChange={onFromChange} />
      </SelectorGroup>

      <SwapButton
        onClick={onSwap}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 180 }}
      >
        ⇆
      </SwapButton>

      <SelectorGroup>
        <Label>To</Label>
        <CustomDropdown value={to} onChange={onToChange} />
      </SelectorGroup>
    </Wrapper>
  );
};

export default CurrencyPairSelector;