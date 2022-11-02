import React from 'react';
import studentsImage from './../../assets/students.png';
import stars from './../../assets/stars.svg';

function SignInForm({ handleSubmit }) {
  return (
    <div className="signup-wrapper flex flex-row-reverse content-center justify-items-center 0 h-full">
      <div className="signup-form-container py-20 p-16 flex flex-col items-center	 justify-center sm:w-full ">
        <h2 className="signup_header heading-text">Sign In to TeachEasy</h2>
        <button className="social-signup  mt-6 social-button">
          Sign In With Google
        </button>
        <p className="heading-text text-xl mt-6">Or Sign In With Email</p>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="form-item">
            <input
              className="form_input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-item">
            <input
              className="form_input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <input
            className="mr-1 border-none"
            type="checkbox"
            id="remember-me"
            name="remember-me"
          />
          <label
            className="font-bold text-gray-500 text-sm"
            htmlFor="remember-me"
          >
            Remember me
          </label>
          <div className="cta">
            <button className="signup-btn mt-6" type="submit">
              Sign In
            </button>
            <p className="text-right mt-2">forgot password?</p>
          </div>
        </form>
      </div>
      <div className="form-image-background w-5/12 bg-students-bg relative  justify-center hidden md:flex">
        <p className="text-5xl text-center mt-11">
          Start Your Journey With TeachEasy
        </p>
        <img
          src={studentsImage}
          alt="an illustartion of students"
          className="w-3/5  absolute top-1/3"
        />
        <img src={stars} className="w-full h-full absolute z-55 top-0 " />
      </div>
    </div>
  );
}

export default SignInForm;
