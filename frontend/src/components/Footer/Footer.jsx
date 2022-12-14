import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer bg-[#19004E] text-white">
      <div className="container">
        <h2 className="text-2xl sm:text-1xl lg:text-3xl text-center dark:text-white py-10 font-semibold">
          Teach easy
        </h2>
        <div className="w-full md:px-[20%] flex flex-wrap gap-[9%] py-5 items-center justify-center justify-self-center">
          <div className="text-lg">About Us</div>
          <div className="text-lg">Help</div>
          <div className="text-lg">Privacy</div>
          <div className="text-lg">Contact Us</div>
        </div>
        {/* Links for testing */}
        <div className="w-full md:px-[20%] flex flex-nowrap gap-[9%] py-5 items-center justify-center justify-self-center">
          <Link className="text-sm text-pink-300" to="/sampleTeacherProfile">
            {/* TODO: remove when profile is accessible from dashboard or search */}
            Sample Teachers profile
          </Link>
          <Link className="text-sm text-pink-300" to="/student-dashboard">
            {/* TODO: remove when profile is accessible from dashboard or search */}
            student-Dash
          </Link>
          <Link className="text-sm text-pink-300" to="/teacher-dashboard">
            {/* TODO: remove when profile is accessible from dashboard or search */}
            teacher-Dash
          </Link>
          <Link className="text-sm text-pink-300" to="/setgoals">
            {/* TODO: remove when profile is accessible from dashboard or search */}
            Student goals
          </Link>
          <Link className="text-sm text-pink-300" to="/setprofile">
            {/* TODO: remove when profile is accessible from dashboard or search */}
            Teacher goals
          </Link>
        </div>
        {/*end */}
        <div className="w-full flex flex-wrap gap-[4%] py-10 items-center justify-center">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          <a href="https://github.com/chingu-voyages/Teach-Easy">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="footer-icon-link"
            />
          </a>
        </div>
        <div className="content w-full md:order-1 text-center pb-8">
          <p className="mt-3 text-sm  text-center max-w-3xl mx-auto dark:text-slate-400">
            Copyright &copy; 2022{' '}
            <a
              className="footer-link"
              href="https://github.com/orgs/chingu-voyages/teams/v41-bears-team-27/members"
            >
              v41-bears-team-27 team
            </a>{' '}
            at{' '}
            <a className="footer-link" href="https://www.chingu.io/">
              Chingu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
