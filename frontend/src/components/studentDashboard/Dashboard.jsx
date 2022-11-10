import React from 'react';
import StudentProfile from './StudentProfile';

function Dashboard() {
  return (
    <div className="main-wrapper bg-gray-200">
      <div className="main-container max-w-6xl mx-auto my-0">
        <StudentProfile />
      </div>
    </div>
  );
}

export default Dashboard;
