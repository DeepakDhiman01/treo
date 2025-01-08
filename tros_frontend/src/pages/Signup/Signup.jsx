


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Auth/Authcontext';
// import './Signup.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();


  //  radio buttton
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');

  // Handle gender change
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Handle role change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    if (!username || !phone || !email || !password || !role || !gender) {
      alert('All fields are required');
      return;
    }

    const data = {
      username,
      phone,
      email,
      password,
      role,
      gender,
    };

    axios
      .post('http://localhost:7000/user/signup', data)
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        // const tok = res.data.token;

        // console.log("token", tok);
        // console.log('Signup response:', res);
        login(res.data.token);
        // navigate('/');
      })
      .catch((err) => {
        console.error('Signup error:', err);
        alert('Signup failed. Please try again.');
      });
  };
   


  return (
    <div className=" sec-signup ">
      <form
        className=" signup-form mt-11 "
        onSubmit={handleSubmit}
        
      >
        <h2 className=" text-black " >Sign Up</h2>

        <div className="signup-name">
        <FaUser  className='signup-user-icon' />

          <input
            type="text"
            id="username"
            className="signup-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="signup-email">
        <MdEmail className='signup-email-icon' />

          <input
            type="email"
            id="email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="signup-number">
        <FaPhone className='signup-number-icon' />

          <input
            type="text"
            id="phone"
            className="signup-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your number"
          />
        </div>

        <div className="signup-password">

        <RiLockPasswordFill className='signup-password-icon' />

          <input
            type="password"
            id="password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>


        <div>
      {/* Gender Selection */}
      <div>
        <h3>Gender</h3>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={gender === 'male'} 
            onChange={handleGenderChange} 
          /> 
          Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={gender === 'female'} 
            onChange={handleGenderChange} 
          /> 
          Female
        </label>
      </div>

      {/* Role Selection */}
      <div>
        <h3>Role</h3>
        <label>
          <input 
            type="radio" 
            name="role" 
            value="client" 
            checked={role === 'client'} 
            onChange={handleRoleChange} 
          /> 
          Client
        </label>
        <label>
          <input 
            type="radio" 
            name="role" 
            value="professional" 
            checked={role === 'professional'} 
            onChange={handleRoleChange} 
          /> 
          Professional
        </label>
      </div>

      {/* Display the selected values */}
      {/* <div>
        <p>Selected Gender: {gender}</p>
        <p>Selected Role: {role}</p>
      </div> */}
    </div>

        <button type="submit" className="singup-submit  ">Signup</button>
      </form>


      

    </div>
  );
};

export default Signup;

