import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SvgContainer = styled(motion.svg)`
  width: 80px;
  height: 80px;
  display: block;
  margin-bottom: 20px;
`;

const AnimatedCheckmark = () => {
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.4,
        ease: 'circOut',
        delay: 0.2, // Start drawing after the circle appears
      },
    },
  };

  return (
    <SvgContainer
      viewBox="0 0 52 52"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="26"
        cy="26"
        r="25"
        fill="#28a745" // Green background
        variants={circleVariants}
      />
      <motion.path
        d="M14 27l5.5 5.5L38 20" // SVG path for the checkmark
        fill="transparent"
        strokeWidth="4"
        stroke="#ffffff" // White stroke
        strokeLinecap="round"
        variants={checkmarkVariants}
      />
    </SvgContainer>
  );
};

export default AnimatedCheckmark;