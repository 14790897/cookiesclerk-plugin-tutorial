import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InstallGuide from './components/InstallGuide';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<InstallGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
