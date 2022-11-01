import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = (props) => {
  const { title, level, datetime, joinLink, viewLink } = props;

  return (
    <div className="bg-[#F6F4F4] rounded-md flex w-full m-2 p-1">
      <div>
        <div>
          <strong>Lesson title</strong>: {title}
        </div>
        <div>
          <strong>Level</strong>: {level}
        </div>
        <div>
          <strong>Date &amp; Time</strong>: {datetime}
        </div>
      </div>
      <div className="flex ml-8">
        <Link to={joinLink}>
          <div className="bg-[#6024DF] rounded-md text-white px-3 py-2 m-1 hover:bg-violet-600 text-sm">
            Join Lesson
          </div>
        </Link>
        <Link to={viewLink}>
          <div className="bg-[#6024DF] rounded-md text-white px-3 py-2 m-1 hover:bg-violet-600 text-sm">
            View Link
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
