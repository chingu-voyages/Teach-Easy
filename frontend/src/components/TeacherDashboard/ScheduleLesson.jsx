import React from 'react'
import { useState, useEffect } from'react'
import {times, options} from './selectorOptions'

const ScheduleLesson = ({ setScheduling }) => {
  

  const sendScheduleData =  async ({...scheduleData}) => {

    console.log('data,', scheduleData)

    try {
      const sendData = await fetch("http://localhost:3000/teacher/scheduleLesson/", {
        method: "put",
        mode: 'cors',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(scheduleData)
      })
      const res = await sendData.json();
      if(sendData.ok){
        setScheduling(false)
      }
      if(!sendData.ok){
        //handle error display to user
      }
    } catch (error) {
      console.error(error.message)
    }

  }

  const handleCancel = () => {
    setScheduling(false);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const { lessonTitle, lessonDescription, lessonDate, lessonTime, lessonLanguage, lessonTimeZone } = event.target.elements;
    const scheduleData = {
      //development only: TO BE the UID / LoginID to match the teacher model
        id: "12345",
        lessonTitle: lessonTitle.value,
        lessonDescription: lessonDescription.value,
        lessonDate: lessonDate.value,
        lessonTime: lessonTime.value,
        lessonLanguage: lessonLanguage.value,
        lessonTimeZone: lessonTimeZone.value
    };
    sendScheduleData(scheduleData)
    // setScheduling(false);
  };


  return (
    <div className='upload-form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="lessonTitle">Lesson Title:</label>
            <input 
              type="text" 
              className='w-full px-2 py-2 rounded-lg my-3 border bg-gray-200 border-gray-300 focus:border-2 focus:border-purple-600 focus:outline-none'
              placeholder='The title of the lesson'
              name="lessonTitle"
              required
              />
            <label htmlFor="lessonDescription">Lesson Description:</label>
            <textarea 
              type='text' 
              placeholder='Your lesson description here...'
              className='w-full h-16 px-2 py-2 rounded-lg my-3 border border-gray-300 focus:border-2 focus:border-purple-600 focus:outline-none'
              name="lessonDescription"
              required
            ></textarea>

            <div>
                <select 
                className='w-full px-2 py-2 rounded-lg my-3 border bg-gray-200 border-gray-300 focus:border-2 focus:border-purple-600 focus:outline-none'
                name="lessonLanguage"
                >
                {options.map((option) => (
                    <option 
                    key={option.value}
                    >{option.label}
                    </option>
                ))}
                </select>
            </div>

            <div className='flex flex-col justify-evenly'>
                <div className='flex items-center gap-4 py-1'>
                    <label htmlFor="Schedule Date">Date: </label>
                    <input 
                        type="date"
                        name="lessonDate"
                        min={new Date().toISOString().split('T')[0]}
                        className='focus:outline-none'
                        required
                    />
                </div>
                <div className='flex items-center gap-4 py-1'>
                    <label htmlFor="Schedule Time">Time: </label>
                    <input 
                        type="time"
                        name="lessonTime"
                        className='focus:outline-none'
                        required
                    />
                </div>
                <div className="flex items-center ">
                  <label 
                    className="text-left"
                    htmlFor="lessonTimeZone">Time Zone: </label>
                  <select 
                  className='w-full px-1 py-2 rounded-lg border bg-gray-200 
                   border-gray-300 focus:border-2 focus:border-purple-600 focus:outline-none'
                  name="lessonTimeZone"
                  >
                  {times.map((times) => (
                      <option 
                      className=""
                      key={times.value}
                      >{times.label}
                      </option>
                  ))}
                  </select>
                </div>
            </div>

        <hr />
        <div className='flex justify-center gap-5 mt-3'>
            <button 
              type="submit" 
              className="inactive-btn"
            >
              Submit
            </button>
            <button 
              onClick={handleCancel} 
              className='inactive-btn'
            >
              Cancel
            </button>
        </div>
        </form>
    </div>
  )
}

export default ScheduleLesson