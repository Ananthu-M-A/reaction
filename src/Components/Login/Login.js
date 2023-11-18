import React from 'react';
import { useState } from 'react';
import './Login.css';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';

 
function Login() {
  const [email,setEmail] = useState(''); 
  const [pswd,setPswd] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    //   const userCredential = await signInWithEmailAndPassword(auth, email, pswd);
    //   const user = userCredential.user;
    //   console.log('User logged in successfully:', user);
      navigate('/');
    } catch (error) {
      console.log(error);
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <>
    <div className='Row text-center'>
    <div className='Column text-center p-5'>

      <div className="loginParentDiv">
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={(e)=>{setPswd(e.target.value)}}
            value={pswd}
          />
          <br />
          <br />
          <button onClick = {handleLogin}>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
      </div>
      </div>
    </>
  );
}

export default Login;
