import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

