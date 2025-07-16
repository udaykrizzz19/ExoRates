import React from 'react';
import styled from 'styled-components';
import { currencySymbols } from '../assets/currency-symbols';

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const CurrencySymbol = styled.span`
  font-size: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text}60;
  margin-right: 8px;
  align-self: flex-start;
  margin-top: 10px;
`;

const Amount = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  letter-spacing: -2px;
  min-height: 80px;
  word-break: break-all;
`;

// It now accepts a currencyCode prop
const AmountDisplay = ({ amount, currencyCode }) => {
  const symbol = currencySymbols[currencyCode] || '$'; // Fallback to $

  return (
    <DisplayContainer>
      <CurrencySymbol>{symbol}</CurrencySymbol>
      <Amount>{amount || '0.00'}</Amount>
    </DisplayContainer>
  );
};

export default AmountDisplay;