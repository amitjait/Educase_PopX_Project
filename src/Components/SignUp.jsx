import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [agency, setAgency] = useState("");

    const navigate = useNavigate();


    const createAccount = ()=>{
        console.log("Inside");
        if(!validateFullName()){
            alert("Enter Your Full and Valid name!");
        }else if(!validatePhoneNumber()){
            alert("Enter 10 digits phone number!");
        }else if(!validateEmail()){
            alert("Enter a valid email address!");
        }else if(password.length < 6){
            alert("Enter valid password with at least 6 characters!")
        }else{
            const newUser = {
                fullName,
                phone,
                email,
                password,
                company,
                agency
            }

            // Check if LocalStorage has an existing users array
            if (localStorage.getItem("users")) {
                // Retrieve the existing users array from LocalStorage and parse it from JSON
                var existingUsers = JSON.parse(localStorage.getItem("users"));
            
                // Add a new user to the existing array
                existingUsers.push(newUser);
            
                // Save the updated array back to LocalStorage
                localStorage.setItem("users", JSON.stringify(existingUsers));
                localStorage.setItem("currentUser", email);
                navigate("/profile");
            } else {
                // If there's no existing users array, create a new one and add a user to it
                var newUsersArray = [newUser];
            
                // Save the new array to LocalStorage
                localStorage.setItem("users", JSON.stringify(newUsersArray));
                localStorage.setItem("currentUser", email);
                navigate("/profile");
                console.log(JSON.parse(localStorage.getItem("users")))
            }
  
        }
    }

    const validateFullName = () =>{
        // Regular expression to match only alphabetic characters and spaces
        var fullNameRegex = /^[A-Za-z\s]+$/;
      
        // Test the full name against the regular expression
        return fullNameRegex.test(fullName);
    }

    function validatePhoneNumber() {
        // Regular expression to match a string containing only numeric digits
        var digitRegex = /^\d+$/;
      
        // Test the phone number against the regular expression
        return digitRegex.test(phone) && phone.length === 10;
    }

    const validateEmail = ()=>{

        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

  return (
    <div className='sign-up'>
        <h1>Create your PopX account</h1>
            <fieldset className='field'>
                <legend className='legend'>Full Name<span className='red'>*</span></legend>
                <input type="text" placeholder='Enter your Full Name' onChange={(e) => setFullName(e.target.value)}/>
            </fieldset>
            <fieldset className='field'>
                <legend>Phone Number<span className='red'>*</span></legend>
                <input type="text" placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)}/>
            </fieldset>
            <fieldset className='field'>
                <legend>Email address<span className='red'>*</span></legend>
                <input type="email" placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset className='field'>
                <legend>Password<span className='red'>*</span></legend>
                <input type="text" placeholder='Enter new password' onChange={(e) => setPassword(e.target.value)}/>
            </fieldset>
            <fieldset className='field'>
                <legend>Company Name</legend>
                <input type="text" placeholder='Enter your company name' onChange={(e) => setCompany(e.target.value)}/>
            </fieldset>

            <p>Are you an Agency?<span className='red'>*</span></p>
            <input type="radio" name="agency" value="Yes" onClick={() => setAgency("Yes")}/> <label htmlFor="Yes" >Yes</label>
            <input type="radio" name='agency' value="No" onClick={() => setAgency("No")}/> <label htmlFor="No">No</label>

            <br />
            <button className='create-acc' onClick={ createAccount}>Create Account</button>
    </div>
  )
}
