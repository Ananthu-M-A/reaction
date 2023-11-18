import React, { useState, useContext } from 'react';
import './Signup.css';
// import { FirebaseContext } from '../../Store/Context';
// import { auth } from '../../Config/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, collection, addDoc ,doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //   const { firebaseApp } = useContext(FirebaseContext);

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      //   const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      //   const user = userCredential.user;
      //   console.log('User created successfully:', user);

      //   const db = getFirestore(firebaseApp);
      //   const usersCollection = collection(db, 'users');

      //   const newDocRef = doc(usersCollection);

      //   const docRef = await addDoc(usersCollection, {
      //     id: user.uid,
      //     username: username,
      //     mobile: mobile,
      //   });

      //   console.log('Userdata saved successfully:', docRef.id);
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };


  return (
    <div className='Row text-center'>
      <div className='Column text-center p-3'>
        <div className="signupParentDiv">
          <form onSubmit={handleSignup}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="username"
              name="name"
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <label htmlFor="mobile">Phone</label>
            <br />
            <input
              className="input"
              type="mobile"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => { setMobile(e.target.value) }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <br />
            <br />
            <button>Signup</button>
          </form>
          <a href='/login'>Login</a>
        </div>
      </div>
    </div>
  );
}

