import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TopNavbar.scss';

const TopNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((navbarOpen) => !navbarOpen);
  };

  return (
    <div className="header">
      <div className="flex pl-[12%] py-5 text-md 2xl:text-xl">
        <div className="w-[50%]">
          <Link to="/">
            <span className="font-bold">Teach</span>
            <span className="font-bold text-indigo-700">Easy</span>
          </Link>
        </div>
        <div className="w-[50%] flex gap-[12%] md:flex gap-[6%] invisible md:visible">
          <div>Teachers</div>
          <div>Lessons</div>
          <div>Donate</div>
          <div>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
        <div className="navbar visible md:invisible pr-5">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={handleToggle}
            className={`button ${navbarOpen ? 'invisible' : 'visible'}`}
          />
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={handleToggle}
            className={`button ${navbarOpen ? 'visible' : 'invisible'}`}
          />
          <ul className={`menuNav ${navbarOpen ? 'visible' : 'invisible'}`}>
            <li>Teachers</li>
            <li>Lessons</li>
            <li>Donate</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
