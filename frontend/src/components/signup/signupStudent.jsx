import React, { useState, useEffect } from 'react';
import SignupForm from './signupForm';
import { useNavigate } from "react-router-dom";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
 } from 'firebase/auth';
import { auth } from '../../config/firebase-config'

function SignupTeacher() {
  const [userAuth, setUserAuth] = useState(false);


  const navigate = useNavigate();
  //After fetch is complete and all data is sent to the backend this navigate function direct to the user page.
  useEffect(()=>{
    if(userAuth){
      navigate("/");
    }
  }, [userAuth])

  const fetchData = (data) => {
    fetch('http://localhost:3000/auth/student/signup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    })
    .then(function (res) {
      if(res){
        setUserAuth(true)
      }
      console.log('res',res);
    })
    .catch(function (err) {
      console.log(err.message);
    });
  }
  
  const googleSignUp = () => {
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
        lastName: userName[1],
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
      console.log(error, errorMessage)
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    fetchData();
  };

  return (
    <div className="signup-page_wrapper h-screen	">
      <SignupForm handleSubmit={handleSubmit} googleSignUp={googleSignUp} role="student" />
    </div>
  );
}

export default SignupTeacher;
