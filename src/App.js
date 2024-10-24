import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SSHTab from './SSHTab';
import TelnetTab from './TelnetTab';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Route (showing title and buttons) */}
        <Route
          path="/"
          element={
            <div>
              <h1>WebTerm - Remote Connection Tool</h1>
              <div className="button-container">
                {/* SSH Button */}
                <a href="/ssh" target="_blank">
                  <img src="/images/button1.png" alt="SSH Button" />
                </a>

                {/* Telnet Button */}
                <a href="/telnet" target="_blank">
                  <img src="/images/button2.png" alt="Telnet Button" />
                </a>
              </div>
            </div>
          }
        />

        {/* SSH Route - New Tab (only displays the SSH form) */}
        <Route path="/ssh" element={<SSHTab />} />

        {/* Telnet Route - New Tab (only displays the Telnet form) */}
        <Route path="/telnet" element={<TelnetTab />} />
      </Routes>
    </Router>
  );
}

export default App;

