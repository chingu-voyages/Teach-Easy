import React, { useState } from 'react';
import SignInForm from './SignInForm';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = {
      email: email.value,
      password: password.value,
    };

    fetch('localhost:3000/signin', {
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
      <SignInForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SignIn;
