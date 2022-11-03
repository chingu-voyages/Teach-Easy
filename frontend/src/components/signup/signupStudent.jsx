import React, { useState } from 'react';
import SignupForm from './signupForm';

function SignupTeacher() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { first_Name, lastName, email, password } = event.target.elements;
    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
    };

    fetch('localhost:3000/signup-student', {
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
      <SignupForm handleSubmit={handleSubmit} role="student" />
    </div>
  );
}

export default SignupTeacher;
