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

function ResultItem() {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null,
  });
  const searchQuery = 'search query';
  const [classes, setClasses] = useState({});
  useEffect(() => {
    setState({ status: 'loading', data: null, error: null });
    const fetchData = async () => {
      const res = await window
        .fetch(`localhost:3000/results${searchQuery}`)
        .then((res) => res.json());
      if (res.status == 'ok') {
        setState({ status: 'finish', data: res.data, error: null });
      }
      if (res.status !== 'ok') {
        setState({ ...state, error: 'error while fetching lessons' });
      }
    };
    fetchData();
  }, [searchQuery]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className=" py-5 flex flex-col gap-6">
          <div className="grid-item">
            <div className="flex-item  flex flex-row gap-3 mb-4">
              <img
                src={ImagePlaceholder}
                className="w-10 h-10 rounded-full"
                alt="profile picture"
              />
              <h3 className="font-bold text-lg">student name</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">Welcome back, student name</p>

              <p className="leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                a voluptatibus molestiae ullam amet provident dolores delectus
                aut optio eum
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
              <h2 className="font-bold text-xl">Search Results For</h2>
              <input
                type="search"
                className="justify-self-stretch px-3 py-4 rounded-md mt-2 bg-gray-200"
                placeholder={searchQuery}
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="flex-item  flex  gap-3 mb-4">
              <img src={ImagePlaceholder} className="w-1/3" />
              <div className="">
                <h3 className="font-bold text-xl mb-1">
                  Advanced Grammar With Real World Examples
                </h3>
                <div className="flex-item  flex flex-row gap-3 mb-4 items-center">
                  <img
                    src={ImagePlaceholder}
                    className="w-8 h-8 rounded-full"
                    alt="profile picture"
                  />
                  <h5 className="font-bold text-md">Nilson Nobody</h5>
                </div>
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  aspernatur accusantium, autem tenetur iure fugiat expedita,
                  quisquam. Vel quaerat neque facilis sed nam?
                </p>

                <a href="" className="text-blue-700 underline ">
                  See the full lesson
                </a>
              </div>
            </div>
          </div>

          {/* lessons mapping */}
          {/* {lessons.map((lesson) => {
            return (
              <div className="grid-item">
                <div className="flex-item  flex  gap-3 mb-4">
                  <img src={ImagePlaceholder} className="w-1/3" />
                  <div className="">
                    <h3 className="font-bold text-xl mb-1">{lesson.title}</h3>
                    <div className="flex-item  flex flex-row gap-3 mb-4 items-center">
                      <img
                        src={ImagePlaceholder}
                        className="w-8 h-8 rounded-full"
                        alt="profile picture"
                      />
                      <h5 className="font-bold text-md">{lesson.teacher}</h5>
                    </div>
                    <p className="mb-5">{lesson.discription}</p>

                    <a href="" className="text-blue-700 underline ">
                      See the full lesson
                    </a>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
