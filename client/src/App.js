import React from 'react';
import Home from './pages/home.js';
import Navigation from './components/nav.js';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Home />
    </Router>
  );
}

export default App;

