import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = (props) => {
  const { title, level, datetime, joinLink, viewLink } = props;

  return (
    <div className="bg-[#F6F4F4] rounded-md flex place-content-between text-xs sm:text-sm md:text-base m-2 p-3">
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
      <div className="lg:flex">
        <Link to={joinLink}>
          <div className="bg-violet-700 rounded-md text-white px-3 py-2 m-1 hover:bg-violet-600 text-xs lg:text-sm">
            Join Lesson
          </div>
        </Link>
        <Link to={viewLink}>
          <div className="bg-violet-700 rounded-md text-white px-3 py-2 m-1 hover:bg-violet-600 text-xs lg:text-sm">
            View Link
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LessonCard;
