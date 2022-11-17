import React from 'react';
import TeacherInfo from './TeacherInfo';
import { useState } from 'react';
import UploadModal from './UploadModal';
import ScheduleLesson from './ScheduleLesson';
function TeacherDashboard() {
  const [uploading, setUploading] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  return (
    <div className="main-wrapper bg-gray-200">
      <div className="main-container max-w-6xl mx-auto my-0">
        <TeacherInfo 
          setUploading={setUploading}
          setScheduling={setScheduling}
        />
      </div>
      {uploading && <UploadModal setUploading={setUploading} />}
      {scheduling && <ScheduleLesson setScheduling={setScheduling} />}
    </div>
  );
}

export default TeacherDashboard;
