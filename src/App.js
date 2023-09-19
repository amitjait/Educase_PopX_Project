import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Profile from "./Components/Profile";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}
