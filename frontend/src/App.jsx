import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTeacher from './components/signup/signupTeacher';
import SignupStudent from './components/signup/signupStudent';
import SignIn from './components/signup/SignIn';
import TeacherProfile from './components/teacherProfile/teacherProfile';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup-teacher" element={<SignupTeacher />} />
          <Route path="/signup-student" element={<SignupStudent />} />
          <Route path="/sampleTeacherProfile" element={<TeacherProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
