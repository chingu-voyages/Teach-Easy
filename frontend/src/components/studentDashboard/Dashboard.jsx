import React from 'react';
import Footer from '../Footer/Footer';
import TopNavbar from '../TopNavbar/TopNavbar';
import StudentProfile from './StudentProfile';

function Dashboard() {
  return (
    <div className="main-wrapper bg-gray-200">
      <TopNavbar />
      <div className="main-container max-w-6xl mx-auto my-0">
        <StudentProfile />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
