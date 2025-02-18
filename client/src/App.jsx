import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './components/Auth/Login';
//import RequestPasswordReset from './components/Auth/RequestPasswordReset';
//import ConfirmPasswordReset from './components/Auth/ConfirmPasswordReset';
import { AppProvider } from './context/AppContext';
import VerifyOTP from './components/Auth/OTPverify';
import Register from './components/Auth/Register';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
