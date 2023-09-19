import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const btnRef = useRef(null);
    const [ready, setReady] = useState(false);

    const navigate = useNavigate();



    const login = () =>{

        if(!ready){
            return;
        }
        // Check if LocalStorage has an existing users array
        if (localStorage.getItem("users")) {
          // Retrieve the existing users array from LocalStorage and parse it from JSON
          var users = JSON.parse(localStorage.getItem("users"));
      
          // Find the user with the given email
          var foundUser = users.find(function(user) {
            return user.email === email;
          });
      
          // Check if a user with the given email was found
          if (foundUser) {
            // Match the provided password with the user's password
            if (foundUser.password === password) {
                localStorage.setItem("currentUser", email);
                navigate('/profile')
            } else {
                alert("Password does not match!")
            }
          } else {
            alert("Email not found, Enter a valid email address!")
          }
        } else {
          return "No users found"; // No users array in LocalStorage
        }
    }
      

    const checkEmail = ()=>{

        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }


    useEffect(()=>{
        if(btnRef.current != null){
            if(checkEmail() && email.length > 7 && password.length >= 6){
                btnRef.current.classList.remove("disabled");
                btnRef.current.classList.add("login-btn");
                setReady(true);
            }else{
                btnRef.current.classList.remove("login-btn");
                btnRef.current.classList.add("disabled");
                setReady(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email, password])




  return (
    <div className='login'>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor siit amet, consectetur adipiscing elit,</p>
            <fieldset className='field'>
                <legend>Email address</legend>
                <input type="email" placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset className='field'>
                <legend>Password</legend>
                <input type="password" placeholder='Enter new password' onChange={(e) => setPassword(e.target.value)}/>
            </fieldset>

            <br />
            <button className='disabled' ref={btnRef} onClick={login}>Login</button>
    </div>
  )
}
