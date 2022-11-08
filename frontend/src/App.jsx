import Homepage from './components/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTeacher from './components/signup/signupTeacher';
import SignupStudent from './components/signup/signupStudent';
import SignIn from './components/signup/SignIn';
import StudentProfile from './components/studentDashboard/StudentProfile';
import Dashboard from './components/studentDashboard/Dashboard';
import TeacherProfile from './components/teacherProfile/teacherProfile';
import TeacherDashboard from './components/TeacherDashboard/TeacherDash'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup-teacher" element={<SignupTeacher />} />
          <Route path="/signup-student" element={<SignupStudent />} />
          <Route path="/student-dashboard" element={<Dashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/sampleTeacherProfile" element={<TeacherProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
