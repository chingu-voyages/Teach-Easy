import React from 'react';
import TeacherInfo from './TeacherInfo';
import { useState } from 'react';
import UploadModal from './UploadModal';

function TeacherDashboard({ userId }) {
  const [uploading, setUploading] = useState(false);
  return (
    <div className="main-wrapper bg-gray-200">
      <div className="main-container max-w-6xl mx-auto my-0">
        <TeacherInfo setUploading={setUploading} userId={userId} />
      </div>
      {uploading && <UploadModal setUploading={setUploading} />}
    </div>
  );
}

export default TeacherDashboard;
