// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import AboutPage from './Components/AboutPage';
import Projects from './Components/Projects';
import Inogurations from './Components/Inogurations';
import Activities from './Components/Activities';
import RegistrationForm from './Components/RegistrationForm';

const HomePage = () => (
  <>
    <MainPage />
    <AboutPage />
    <Inogurations />
    <Projects />
    <Activities />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;