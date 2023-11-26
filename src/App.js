import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import TentangKami from './Components/Hero/Tentang';
import FiturKami from './Components/Hero/Fitur';
import DaftarList from './Components/DaftarList';
import SplashScreen from './Components/Splash/SplashScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/TentangKami" element={<TentangKami />} />
          <Route path="/FiturKami" element={<FiturKami />} />
          <Route path="/DaftarList" element={<DaftarList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default SplashScreen (App);
