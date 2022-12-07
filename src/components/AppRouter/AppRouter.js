import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from '../Explore';
import Home from '../HomePage';
import LoginPage from '../LoginPage';
import MessagePage from '../MessagePage';
import Notifications from '../Notifications';
import ProfilePage from '../ProfilePage';
import User from '../User';
import UStory from '../UStory';


function AppRouter() {
  return (
    <Router>
      {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/messages" element={<MessagePage/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/user/:username" element={<User/>}/>
            <Route path="/storyOf/:username" element={<UStory/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter