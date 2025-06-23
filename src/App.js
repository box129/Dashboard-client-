import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/customers" element={<Customers/>} />
            <Route path="/transactions" element={<Transactions />}/>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;