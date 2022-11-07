import React from 'react';
import Footer from '../Footer/Footer';
import TopNavbar from '../TopNavbar/TopNavbar';
import TeacherInfo from './TeacherInfo';
import { useState } from 'react'
import UploadModal from './UploadModal';

function TeacherDashboard() {
  const [uploading, setUploading] = useState(false);
  return (
    <div className="main-wrapper bg-gray-200">
      <TopNavbar />
      <div className="main-container max-w-6xl mx-auto my-0">
        <TeacherInfo setUploading={setUploading}/>
      </div>
      {uploading && < UploadModal setUploading={setUploading}/>}
      <Footer />
    </div>
  );
}

export default TeacherDashboard;
