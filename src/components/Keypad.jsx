import React from 'react';
import styled from 'styled-components';

const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px; /* Reduced gap */
`;

const Key = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem; /* Slightly smaller font */
  padding: 18px; /* Adjusted padding */
  border-radius: 20px; /* More rounded */
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.subtle}99; /* Add hover effect */
  }

  &:active {
    transform: scale(0.95); /* Add active press effect */
    background-color: ${({ theme }) => theme.subtle};
  }
`;

const Keypad = ({ onKeyPress }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⬅'];

  return (
    <KeypadGrid>
      {keys.map((key) => (
        <Key key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Key>
      ))}
    </KeypadGrid>
  );
};

export default Keypad;