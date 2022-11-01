import React, { useState } from 'react';
import SignupForm from './signupForm';

function SignupTeacher() {
  // const [info, setinfo] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { first_Name, lastName, email, password } = event.target.elements;
    // console.log(firstName.value, lastName.value, email.value, password.value);
    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
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
