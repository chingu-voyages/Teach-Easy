import React from 'react';
import TopNavbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';
import DataCard from '../DataCard/DataCard';
import sampleProfilePic from '../../assets/sampleProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faGraduationCap,
  faEarthAmericas,
  faBrain,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

const TeacherProfile = () => {
  return (
    <>
      <TopNavbar />
      <div className="bg-[#CBCBCB]">
        <DataCard>
          <img src={sampleProfilePic} className="w-40" />
          <div className="text-content">
            <div className="text-2xl">Hi, I'm [Teacher Name]</div>
            <div className="text-xl">An English teacher from [Canada]</div>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faFaceSmile} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">About me</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faGraduationCap} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Teaching Style</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faEarthAmericas} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Language</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faBrain} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Experience</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faBrain} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Education</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faCalendarDays} color="rgb(67 56 202)" />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Lesson Schedule</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </DataCard>
      </div>
      <Footer />
    </>
  );
};

export default TeacherProfile;
