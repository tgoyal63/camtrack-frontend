import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CameraRegistration from './pages/cameraRegistration';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cameraRegistration" element={<CameraRegistration/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </React.StrictMode>
  </Router>
);
