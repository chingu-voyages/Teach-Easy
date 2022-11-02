import React, { useState,useEffect } from 'react';
import SignInForm from './SignInForm';
import { useNavigate } from "react-router-dom";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
 } from 'firebase/auth';
import { auth } from '../../config/firebase-config'

function SignIn() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  //After fetch is complete and all data is sent to the backend this navigate function direct to the user page.
  useEffect(()=>{
    if(auth){
      navigate("/");
    }
  }, [auth])

  const fetchData = (data) => {
    fetch('http://localhost:3000/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(function (res) {
        setAuth(true);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err.message);
      });
  }

  const googleSignIn = async () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const userName = result.user.displayName.split(' ');
      const user = {
        email: result.user.email,
        firstName: userName[0],
        lastName: userName[userName.length-1],
        image: result.user.photoURL,
        loginID: result.user.uid,
      }
      fetchData(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const loginAuth = async (data) => {

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    // console.log(firstName.value, lastName.value, email.value, password.value);
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log('typed',data);
    loginAuth(data)
  };

  return (
    <div className="signup-page_wrapper h-screen	">
      <SignInForm handleSubmit={handleSubmit} googleSignIn={googleSignIn} />
    </div>
  );
}

export default SignIn;
