import { useState } from 'react';
import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTeacher from './components/signup/signupTeacher';
import SignupStudent from './components/signup/signupStudent';
import SignIn from './components/signup/SignIn';
import StudentProfile from './components/studentDashboard/StudentProfile';
import Dashboard from './components/studentDashboard/Dashboard';
import TeacherProfile from './components/TeacherProfile/TeacherProfile';
import TeacherDashboard from './components/TeacherDashboard/TeacherDash';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Footer from './components/Footer/Footer';

function App() {
  const [uid, setUid] = useState('uid');

  const handleUidUpdate = (uid) => {
    setUid(uid);
  };

  return (
    <div className="app">
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={<SignIn updateUid={handleUidUpdate} />}
          />
          <Route path="/signup-teacher" element={<SignupTeacher />} />
          <Route path="/signup-student" element={<SignupStudent />} />
          <Route
            path="/student-dashboard"
            element={<Dashboard userId={uid} />}
          />
          <Route
            path="/teacher-dashboard"
            element={<TeacherDashboard userId={uid} />}
          />
          <Route path="/sampleTeacherProfile" element={<TeacherProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
