import React from 'react';
import styled from 'styled-components';
import { countryList } from '../assets/country-list';

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Select = styled.select`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const CurrencySelector = ({ label, selectedCurrency, onCurrencyChange }) => {
  const countryCode = countryList[selectedCurrency];

  return (
    <SelectorWrapper>
      <Flag src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt={selectedCurrency} />
      <Select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {Object.keys(countryList).map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </Select>
    </SelectorWrapper>
  );
};

export default CurrencySelector;