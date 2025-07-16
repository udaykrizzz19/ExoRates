import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ConverterPage from './pages/ConverterPage';
import ResultPage from './pages/ResultPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ConverterPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;