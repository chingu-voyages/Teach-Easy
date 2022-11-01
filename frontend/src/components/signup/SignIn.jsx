import React, { useState } from 'react';
import SignInForm from './SignInForm';

function SignIn() {
  // const [info, setinfo] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    // console.log(firstName.value, lastName.value, email.value, password.value);
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);

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
