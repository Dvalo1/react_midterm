import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './pages/Registration';


function App() {
  const authorization_tkn = "token";
  return (
    <div className="react_midterm">
      <header className="react_midterm_wrapper">
        <Registration />
      </header>
    </div>
  );
}

export default App;
