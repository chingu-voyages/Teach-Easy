import React from 'react';
import ImagePlaceholder from './../../assets/image-placeholder.png';
import {
  faStar,
  faTag,
  faGraduationCap,
  faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';

function CheckBoxTag({ value, tagName }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    tagName({ toggle, value });
  }, [toggle]);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <button
      onClick={handleClick}
      className={toggle === false ? 'inactive-btn' : 'btn'}
      type="button"
    >
      {value}
    </button>
  );
}

function StudentProfile({ userId }) {
  const [tags, setTags] = React.useState([]);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let url = new URL('http://localhost:3000/student/dashboard');

    url.searchParams.append('id', userId);

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => {
        res.json().then((data) => setDashboardData(data[0]));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const tagNames = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Business',
    'Travel',
    'Technical',
    'Grammar',
  ];

  const handleTags = (e) => {
    const value = e.value;
    if (e.toggle) {
      const findTag = tags.includes(value);
      if (findTag) return;
      setTags([...tags, value]);
    } else {
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className=" py-5 flex flex-col gap-6">
        <div className="grid-item">
          <div className="flex-item  flex flex-row gap-3 mb-4">
            <img
              src={(dashboardData && dashboardData.image) || ImagePlaceholder}
              className="w-10 h-10 rounded-full"
              alt="profile picture"
            />
            <h3 className="font-bold text-lg">
              {(dashboardData && dashboardData.firstName) || 'Student'}{' '}
              {(dashboardData && dashboardData.lastName) || ''}
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">
              Welcome back,{' '}
              {(dashboardData && dashboardData.firstName) || 'Student'}
            </p>

            <p className="leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit a
              voluptatibus molestiae ullam amet provident dolores delectus aut
              optio eum
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="flex-item  flex flex-row gap-3 mb-4">
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              className=" text-purple-600"
            />

            <h3 className="font-bold text-lg">Study Goals</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Starting Level: </strong>A1 - First Steps
            </p>
            <p>
              <strong>Aim: </strong>B2 - upper Intermediate
            </p>
            <strong>Reasons why:</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur dolor sit, amet
              consectetur adipisicing elit. Placeat odio ut aut officiis,{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 col-span-2 flex flex-col gap-10">
        <div className="grid-item">
          <div className="flex-item  flex flex-col gap-3 mb-4">
            <h2 className="font-bold text-xl">Find Lessons Now</h2>
            <input
              type="search"
              className="justify-self-stretch px-3 py-4 rounded-md mt-2 bg-gray-200"
              placeholder="Start your learning journey here..."
            />
          </div>
          <div className="flex-item  flex flex-col gap-3 mb-4">
            <h2 className="font-bold text-xl">
              <FontAwesomeIcon
                icon={faTag}
                size="1x"
                className=" text-purple-600 mr-2"
              />
              Search By Tags
            </h2>
            <div className="flex gap-3 mt-3 justify-center flex-wrap">
              {tagNames.map((tagName) => (
                <CheckBoxTag
                  key={tagName}
                  value={tagName}
                  tagName={handleTags}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="flex-item  flex flex-col gap-3 mb-4">
            <h2 className="font-bold text-xl">
              <FontAwesomeIcon
                icon={faGraduationCap}
                size="1x"
                className=" text-purple-600 mr-2"
              />
              Your Next Lesson
            </h2>
            <h3 className="mt-3 font-bold">Lesson title:</h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit a
              voluptatibus molestiae ullam amet provident dolores delectus aut
              optio eum
            </p>
            <p>
              <strong>Date: </strong>10/05/2023
            </p>
            <p>
              <strong>Date: </strong>10/05/2023
            </p>
          </div>
        </div>
        {/* last item */}
        <div className="grid-item">
          <div className="flex-item  flex flex-col gap-3 mb-4">
            <h2 className="font-bold text-xl">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                size="1x"
                className=" text-purple-600 mr-2"
              />
              Find Your Next Lesson
            </h2>
            <h3 className="mt-3 font-bold">Recommended Teachers</h3>
          </div>
          <div className="flex flex-col gap-3">
            <p className="leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit a
              voluptatibus molestiae ullam.
            </p>
            <div className="flex justify-between gap-8 flex-wrap sm:flex-nowrap">
              <div className="teacher-item p-2">
                <strong>Alex M.Alberten</strong>
                <img
                  src={ImagePlaceholder}
                  className="w-full mt-2 rounded-md"
                />
                <p className="mt-2">
                  a short description about the lesson and it's goals
                </p>
                <p className="mt-2">
                  <strong>Lesson level: </strong>Basic
                </p>
              </div>
              <div className="teacher-item p-2">
                <strong>Alex M.Alberten</strong>
                <img
                  src={ImagePlaceholder}
                  className="w-full mt-2 rounded-md"
                />
                <p className="mt-2">
                  a short description about the lesson and it's goals
                </p>
                <p className="mt-2">
                  <strong>Lesson level: </strong>Basic
                </p>
              </div>
              <div className="teacher-item p-2">
                <strong>Alex M.Alberten</strong>
                <img
                  src={ImagePlaceholder}
                  className="w-full mt-2 rounded-md"
                />
                <p className="mt-2">
                  a short description about the lesson and it's goals
                </p>
                <p className="mt-2">
                  <strong>Lesson level: </strong>Basic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
