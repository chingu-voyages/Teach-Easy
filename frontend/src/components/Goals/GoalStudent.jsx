import React, { useEffect, useState } from 'react';
import './goal.scss';
function GoalStudent() {
  const [language, setlanguage] = useState('');
  const [level, setlevel] = useState('');
  const [goal, setgoal] = useState('');
  const [step, setStep] = useState([true, false, false]);
  const [activelang, setactivelang] = useState(null);
  const [activelevel, setactivelevel] = useState(null);
  const [activegoal, setactivegoal] = useState(null);
  const languages = ['English', 'French', 'Italian', 'Arabic'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const goals = [
    'For work and business',
    'For education and Academics',
    'For Travel',
    'I want to be fluent',
    'I want to be Intermediate',
    'Other',
  ];
  return (
    <div className="container flex items-center justify-center">
      <div className="stepper w-full max-w-[500px] py-8">
        <h2 className="text-2xl font-semibold py-6 ">
          Hello "username", Tell Us About You
        </h2>
        <div className="steps">
          <div className={step[0] ? 'step active' : 'step'}>
            <h3 className="py-5 text-2xl ">
              Which language do you want to learn ?
            </h3>
            <div className="options">
              {languages.map((item, k) => {
                return (
                  <div
                    key={k}
                    value={item}
                    onClick={() => {
                      setactivelang(k);
                      setlanguage(item);
                    }}
                    className={activelang == k ? 'answer selected' : 'answer'}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="buttons w-full max-w-[400px] flex py-4 justify-between">
              <div className="empty h-9"></div>
              {language ? (
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
              What is your goal of learning this language?
            </h3>
            <div className="options">
              {goals.map((item, k) => {
                return (
                  <div
                    key={k}
                    value={item}
                    onClick={() => {
                      setactivegoal(k);
                      setgoal(item);
                    }}
                    className={activegoal == k ? 'answer selected' : 'answer'}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="buttons  w-full max-w-[400px]  flex py-4 justify-between">
              <button
                onClick={() => {
                  setStep([false, true, false]);
                }}
                className=" prev"
              >
                Previous
              </button>
              {goal ? (
                <button
                  onClick={() => {
                    /*post info in the backend*/
                    console.log(language, level, goal);
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
export default GoalStudent;
