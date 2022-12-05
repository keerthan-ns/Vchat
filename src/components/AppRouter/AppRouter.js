import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../HomePage';
import LoginPage from '../LoginPage';
import Notifications from '../Notifications';
import ProfilePage from '../ProfilePage';
import User from '../User';


function AppRouter() {
  return (
    <Router>
      {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/user/:username" element={<User/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter