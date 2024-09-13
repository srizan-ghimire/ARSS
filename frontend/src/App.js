import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CompanyLogin from './pages/CompanyLogin';
import IndividualLogin from './pages/IndividualLogin';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/individual-login" element={<IndividualLogin />} />
        <Route path="/signin" element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
