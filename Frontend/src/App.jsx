import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Booking from './Components/Booking/Booking';
import Support from './Components/Support/Support';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Detail from './Components/Detail/Detail';
import RoomProvider from './Context/RoomContext';

function App() {
  return (
  
    <BrowserRouter>
      <RoomProvider>
      <div>
        <Header />

        <div className="content">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='booking' element={<Booking />} />
            <Route path='support' element={<Support />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='detail' element={<Detail />} />
          </Routes>
        </div>

        <Footer />
      </div>
      </RoomProvider>
    </BrowserRouter>
 
  );
}

export default App;
