import React, { useState } from 'react';
import SignupForm from './signupForm';
import { auth } from '../../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignupTeacher() {
  // const [info, setinfo] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  // const signupAuth = async (data) => {
  //   try {
  //     const {email, password} = data
  //     const user = await createUserWithEmailAndPassword(auth, email, password );
  //     console.log('used created',user);
  //   } catch (error) {
  //     console.error(error.message);
  //   } 
  //   console.log('signup');
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;
    // console.log(firstName.value, lastName.value, email.value, password.value);
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };
    console.log(data);

    fetch('localhost:3000/signup-teacher', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="signup-page_wrapper h-screen	">
      <SignupForm handleSubmit={handleSubmit} role="teacher" />
    </div>
  );
}

export default SignupTeacher;
