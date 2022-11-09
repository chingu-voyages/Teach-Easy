import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TopNavbar.scss';

const TopNavbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  if (click) {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'visible';
    }
  }
  return (
    <nav className="navbar" onClick={(e) => e.stopPropagation()}>
      <div className="nav-container px-6 md:px-10 lg:px-14">
        <Link to="/">
          <span className="font-bold">Teach</span>
          <span className="font-bold text-indigo-700">Easy</span>
        </Link>
        <div className="menu">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                to="/teachers"
              >
                Teachers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                to="/lessons"
              >
                Lessons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                to="/Donate"
              >
                Donate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                to="/login"
              >
                Sign In
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
