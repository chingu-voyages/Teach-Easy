import React from 'react';
import ImagePlaceholder from './../../assets/image-placeholder.png';
import {
  faStar,
  faTag,
  faGraduationCap,
  faChalkboardUser,
  faPenToSquare,
  faUpload
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
      className={`filter-tag ${
        toggle === false ? 'bg-gray-200' : 'bg-purple-600 text-white'
      }`}
      type="button"
    >
      {value}
    </button>
  );
}

function TeacherInfo({ setUploading }) {
  const [tags, setTags] = React.useState([]);
  const [data, setData] = useState(null);

  const tagNames = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Business',
    'Travel',
    'Technical',
    'Grammar',
  ];

  const uploadLesson = () => {
    setUploading(prev => !prev);
  }

  const editAboutMe = ()=> {
    console.log('clicked')
  }

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

  useEffect(() => {
    fetch('localhost/3000').then((res) => setData(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="py-5 flex flex-col gap-6">
        <div className="grid-item">
          <div className="flex-item  flex flex-row gap-3 mb-4">
            <img
              src={ImagePlaceholder}
              className="w-10 h-10 rounded-full"
              alt="profile picture"
            />
            <h3 className="font-bold text-lg">Teacher Name</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Welcome back, Teacher Name</p>

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
            <h3 className="font-bold text-lg">About Me </h3>
            <FontAwesomeIcon 
            onClick={editAboutMe}
            icon={faPenToSquare}
            // size=""
            className="text-purple-600 ml-auto"
             />
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Education</strong> University of ....
            </p>
            <p>
              <strong>Teaching style </strong> 
            </p>
            <strong>Languages taught</strong>
            <p>
              English, Spanish ...
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
            <div className='flex gap-10'>
              <h2 className="font-bold text-xl">
                <FontAwesomeIcon
                  icon={faUpload}
                  size="1x"
                  className=" text-purple-600 mr-2"
                />
                Upload a lesson
              </h2> 
              <button 
              className='btn'
              onClick={uploadLesson}
              >Upload</button>
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

export default TeacherInfo;
