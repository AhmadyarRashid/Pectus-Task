import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseByGroup from './pages/ExoenseByGroup/ExpenseByGroup';
import HomePage from './pages/Home/Home';
import './App.css';

// Setup routes here
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filterByExpense" element={<ExpenseByGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
