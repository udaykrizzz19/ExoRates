import React from 'react';
import styled from 'styled-components';

const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Key = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  padding: 18px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  /* <<< ADDED: A subtle border for better definition */
  border: 0.5px solid ${({ theme }) => theme.subtle};

  &:hover {
    background-color: ${({ theme }) => theme.subtle}99;
  }

  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.subtle};
  }
`;

const Keypad = ({ onKeyPress }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

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
