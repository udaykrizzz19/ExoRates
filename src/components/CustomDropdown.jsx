import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { countryList } from '../assets/country-list';

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownHeader = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const SelectedValue = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const DropdownList = styled(motion.div)`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.highlight};
  border: 1px solid ${({ theme }) => theme.subtle};
  border-radius: 15px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const DropdownItem = styled.div`
  padding: 12px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const CustomDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const options = Object.keys(countryList);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <Flag src={`https://flagsapi.com/${countryList[value]}/flat/64.png`} />
        <SelectedValue>{value}</SelectedValue>
      </DropdownHeader>
      <AnimatePresence>
        {isOpen && (
          <DropdownList
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <DropdownItem key={option} onClick={() => handleSelect(option)}>
                <Flag src={`https://flagsapi.com/${countryList[option]}/flat/64.png`} />
                <span>{option}</span>
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

export default CustomDropdown;