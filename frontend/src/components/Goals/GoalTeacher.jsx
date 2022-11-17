import React, { useState } from 'react';
import './goal.scss';
function GoalTeacher() {
  const [language, setlanguage] = useState({ value: 'English' });
  const [level, setlevel] = useState('');
  const [bio, setBio] = useState({ value: '' });
  const [step, setStep] = useState([true, false, false]);
  const [activelang, setactivelang] = useState(null);
  const [activelevel, setactivelevel] = useState(null);
  const languages = ['English', 'French', 'Italian', 'Arabic'];
  const levels = [
    'Beginner / A1',
    'Beginner / A2',
    'Intermediate / B1',
    'Intermediate / B2',
    'Advanced / C1',
    'Advanced / C2',
    'Native speaker',
  ];

  return (
    <div className="container teachergoal flex items-center justify-center">
      <div className="stepper w-full max-w-[500px] py-8">
        <h2 className="text-2xl font-semibold py-6 ">
          Hello "username", Tell Us About You
        </h2>
        <div className="steps">
          <div className={step[0] ? 'step active' : 'step'}>
            <h3 className="py-5 text-2xl ">
              What is the main language you want to teach?
            </h3>
            <select
              value={language.value}
              onChange={(event) => {
                setlanguage({ value: event.target.value });
              }}
            >
              {languages.map((item, k) => {
                return (
                  <option
                    key={k}
                    value={item}
                    onClick={() => {
                      setactivelang(k);
                    }}
                    className={activelang == k ? 'answer selected' : 'answer'}
                  >
                    {item}
                  </option>
                );
              })}
            </select>

            <div className="buttons w-full max-w-[400px] flex py-4 justify-between">
              <div className="empty h-9"></div>
              {language.value ? (
                <button
                  onClick={() => {
                    setStep([false, true, false]);
                  }}
                  className="next"
                >
                  Next
                </button>
              ) : (
                <div className="empty h-9"></div>
              )}
            </div>
          </div>
          <div className={step[1] ? 'step active' : 'step'}>
            <h3 className="py-5 text-2xl ">What is your language level?</h3>
            <div className="options">
              {levels.map((item, k) => {
                return (
                  <div
                    key={k}
                    value={item}
                    onClick={() => {
                      setactivelevel(k);
                      setlevel(item);
                    }}
                    className={activelevel == k ? 'answer selected' : 'answer'}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="buttons w-full max-w-[400px]  flex py-4 justify-between">
              <button
                onClick={() => {
                  setStep([true, false, false]);
                }}
                className=" prev"
              >
                Previous
              </button>
              {level ? (
                <button
                  onClick={() => {
                    setStep([false, false, true]);
                  }}
                  className="next"
                >
                  Next
                </button>
              ) : (
                <div className="empty h-9"></div>
              )}
            </div>
          </div>
          <div className={step[2] ? 'step active' : 'step'}>
            <h3 className="py-5 text-2xl ">
              Write a short introduction about yourself
            </h3>
            <textarea
              className="bio"
              value={bio.value}
              onChange={(event) => {
                setBio({ value: event.target.value });
              }}
            />
            <div className="buttons  w-full max-w-[400px]  flex py-4 justify-between">
              <button
                onClick={() => {
                  setStep([false, true, false]);
                }}
                className=" prev"
              >
                Previous
              </button>
              {bio.value ? (
                <button
                  onClick={() => {
                    /*post info in the backend*/
                    console.log(language.value, level, bio.value);
                  }}
                  className="next"
                >
                  Next
                </button>
              ) : (
                <div className="empty h-9"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GoalTeacher;
