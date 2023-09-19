import React, { useEffect, useState } from 'react'
import user from "../Components/dummy image/user.png"
import cam from "../Components/dummy image/cam.png"

let dummyBio = "Lorem ipsum dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Daim Nonumy Eirmod Tempor Invidunt Ut Labor Et Dolore Magna Aliquyam Erat, Sed Daim";

export default function Profile() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [bio, setBio] = useState(dummyBio);

    function getUserByEmail() {
        let currenrUser = localStorage.getItem("currentUser")
        console.log("Inside")
        // Check if LocalStorage has an existing users array
        if (localStorage.getItem("users")) {
          // Retrieve the existing users array from LocalStorage and parse it from JSON
          let users = JSON.parse(localStorage.getItem("users"));
      
          // Find the user with the given email
          let foundUser = users.find(function(user) {
            return user.email === currenrUser;
          });
      
          // Check if a user with the given email was found
          if (foundUser) {
            console.log(foundUser)
            setEmail(foundUser.email);
            setFullName(foundUser.fullName)
            return foundUser; // Return the user object
          } else {
            return null; // Email not found in the users array
          }
        } else {
          return null; // No users array in LocalStorage
        }
      }

      useEffect(() =>{
        getUserByEmail();
      }, [])

  return (
    <div className="main-profile">
         <div className="setting">
                <h3>Account Settings</h3>
            </div>
        <div className='profile'>
            <div className="info">
                <div className="img">
                    <img src={user} alt="user-logo" />
                    <img src={cam} alt="add logo" className='add-logo'/>
                </div>
                <div className="right-info">
                    <h3>{fullName}</h3>
                    <p>{email}</p>
                </div>
            </div>
            <div className="bio">
                {bio}
            </div>
        </div>
    </div>
  )
}
