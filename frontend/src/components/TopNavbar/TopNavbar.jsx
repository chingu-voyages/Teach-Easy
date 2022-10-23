import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div className="header">
      <div className="flex pl-[12%] py-5 text-sm md:text-lg 2xl:text-xl">
        <div className="w-[50%]">
          <Link to="/">
            <span className="font-bold">Teach</span>
            <span className="font-bold text-indigo-700">Easy</span>
          </Link>
        </div>
        <div className="w-[50%] flex gap-[12%] md:flex gap-[6%]">
          <div>Teachers</div>
          <div>Lessons</div>
          <div>Donate</div>
          <div>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
