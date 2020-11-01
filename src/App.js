import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>ePharmacy Delivery System</h1>
      <Dashboard />
    </div>
  );
}

export default App;
