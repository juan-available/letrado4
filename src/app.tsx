import React, { useState, useRef, useEffect } from 'react';
import './App.css';

interface WordsData {
  [key: string]: {
    word: string;
    direction: string;
  };
}

interface CellState {
  letter: string;
  status: 'default' | 'correct' | 'present' | 'incorrect';
}

const INITIAL_ATTEMPTS = 5;
const GRID_SIZE = 5;
const HIDDEN_CELLS = [7, 8, 9, 12, 13, 14, 17, 18, 19];

const App: React.FC = () => {
  // El resto del código que proporcioné anteriormente...
}

export default App;
