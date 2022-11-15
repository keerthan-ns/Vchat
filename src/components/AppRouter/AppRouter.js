import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../HomePage';
import LoginPage from '../LoginPage';
import ProfilePage from '../ProfilePage';
import NavBar from '../Navigation';


function AppRouter() {
  return (
    <Router>
      {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter