import React, { useState } from 'react';
import DataCard from '../DataCard/DataCard';
import sampleProfilePic from '../../assets/sampleProfilePic.png';
import LessonCard from '../LessonCard/LessonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faGraduationCap,
  faEarthAmericas,
  faBrain,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

const sampleLessons = [
  {
    title: 'Talking in the past',
    level: 'Lower intermediate',
    dateTime: '26/10/2022 Wednesday - 10:30-11:30',
    joinLink: 'https://meet.google.com/aks-join-mny',
    viewLink: 'https://meet.google.com/aks-view-iss',
  },
  {
    title: 'Talking in the present',
    level: 'Beginner',
    dateTime: '29/10/2022 Saturday - 10:30-11:30',
    joinLink: 'https://meet.google.com/aks-join-mnl',
    viewLink: 'https://meet.google.com/aks-view-isz',
  },
  {
    title: 'Future perfect',
    level: 'Lower intermediate',
    dateTime: '1/11/2022 Monday - 10:30-11:30',
    joinLink: 'https://meet.google.com/aks-join-mng',
    viewLink: 'https://meet.google.com/aks-view-isl',
  },
];

const TeacherProfile = () => {
  const [lessons, setLessons] = useState(sampleLessons);

  return (
    <div className="bg-[#CBCBCB]">
      <div className="cardsContainer p-3">
        <DataCard>
          <img src={sampleProfilePic} className="w-40" />
          <div className="text-content">
            <div className="text-2xl">Hi, I'm [Teacher Name]</div>
            <div className="text-xl">An English teacher from [Canada]</div>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faFaceSmile} className="text-indigo-800" />
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
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-indigo-800"
            />
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
            <FontAwesomeIcon
              icon={faEarthAmericas}
              className="text-indigo-800"
            />
          </div>
          <div className="text-content">
            <div className="text-xl pb-2">Languages</div>
            <ul>
              <li>English - Native Speaker</li>
              <li>Spanish - B2/Upper Intermediate</li>
            </ul>
          </div>
        </DataCard>

        <DataCard>
          <div className="card-icon">
            <FontAwesomeIcon icon={faBrain} className="text-indigo-800" />
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
            <FontAwesomeIcon icon={faBrain} className="text-indigo-800" />
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
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-indigo-800"
            />
          </div>
          <div className="text-content w-full">
            <div className="text-xl pb-2">Lesson Schedule</div>
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.title}
                title={lesson.title}
                level={lesson.level}
                datetime={lesson.dateTime}
                joinLink={lesson.joinLink}
                viewLink={lesson.viewLink}
              />
            ))}
          </div>
        </DataCard>
      </div>
    </div>
  );
};

export default TeacherProfile;
