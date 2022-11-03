import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TopNavbar.scss';

const TopNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setNavbarOpen((navbarOpen) => !navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
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
          {/* TODO: remove when profile is accessible from dashboard or search */}
          <div>
            <Link
              to="/sampleTeacherProfile"
              className="text-slate-500 bg-red-200"
            >
              Sample teacher profile
            </Link>
          </div>
          <div>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
        <div className="navbar visible md:invisible pr-5">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={handleToggleMobileMenu}
            className={`button ${
              navbarOpen ? 'invisible' : 'visible'
            } md:invisible`}
          />
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={handleToggleMobileMenu}
            className={`button ${navbarOpen ? 'visible' : 'invisible'}`}
          />
          <ul className={`menuNav ${navbarOpen ? 'visible' : 'invisible'}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>Teachers</li>
            <li>Lessons</li>
            <li>Donate</li>
            {/* TODO: remove when profile is accessible from dashboard or search */}
            <li>
              <Link to="/sampleTeacherProfile" className="bg-red-200">
                Sample teacher profile
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
