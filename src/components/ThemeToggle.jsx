import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';

// Use the transient prop `$isOn` which styled-components will not pass to the DOM
const SwitchContainer = styled.div`
  width: 50px;
  height: 28px;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: ${({ $isOn }) => ($isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
  border-radius: 50px;
  padding: 4px;
  cursor: pointer;
  flex-shrink: 0;
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    // Pass the prop as `$isOn`
    <SwitchContainer $isOn={isDark} onClick={toggleTheme}>
      <Handle layout transition={{ type: 'spring', stiffness: 700, damping: 30 }} />
    </SwitchContainer>
  );
};

export default ThemeToggle;