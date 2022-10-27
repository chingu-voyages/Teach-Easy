import { useState } from 'react';
import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTeacher from './components/signup/signupTeacher';
import SignupStudent from './components/signup/signupStudent';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/sign-in" element={<SignIn />} /> */}
          <Route path="/signup-teacher" element={<SignupTeacher />} />
          <Route path="/signup-student" element={<SignupStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
