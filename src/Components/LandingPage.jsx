import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();

  return (
    <div className='landing'>
        <div className="landing-in">
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum  dolor sit amet, consectetur adipiscing elit,</p>

        <button className='create-acc' onClick={() => navigate("/sign-up")}>Create Account</button>
        <button className='al-reg' onClick={() => navigate("/login")}>Already Registered? Login</button>
        </div>
    </div>
  )
}
