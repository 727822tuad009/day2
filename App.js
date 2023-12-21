// App.js
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import RoomBooking from './components/RoomBooking';
import PaymentPage from './components/PaymentPage';
import BusList from './components/BusList';
import './components/Login.css';
import './components/Signup.css';

const App = () => {
 

  return (
    <Router>
      <div>
      <Routes>
       
        <Route path="/" element={<Home />} />
      
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/room-booking" element={<RoomBooking />} />
        <Route path="/payment" element={<PaymentPage />} />
      <Route path="/BusList" element={<BusList/>}/>
      </Routes>
      </div>
    </Router>
  );
};

export default App;
