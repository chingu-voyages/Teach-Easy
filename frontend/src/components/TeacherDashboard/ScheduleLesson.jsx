import React from 'react'
import { useState, useEffect } from'react'


const ScheduleLesson = ({ setScheduling }) => {
  

  const sendScheduleData =  async ({lessonTitle, lessonDescription, lessonDocument, tags, id, language}) => {


    try {
      const post = await fetch("http://localhost:3000/lesson/upload", {
        method: "POST",
        mode: 'cors',
            
      })
      const res = await post.json();
      console.log('response: ', res)
    } catch (error) {
      console.error(error.message)
    }

  }

  const handleCancel = () => {
    setScheduling(false);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const { lessonTitle, lessonDescription, lessonDate, lessonTime, lessonLanguage } = event.target.elements;
    const scheduleData = {
        lessonTitle: lessonTitle.value,
        lessonDescription: lessonDescription.value,
        lessonDate: lessonDate.value,
        lessonTime: lessonTime.value,
        lessonLanguage: lessonLanguage.value
    };
    console.log('submitted: ', scheduleData)
    sendScheduleData({ ...scheduleData })
    // setScheduling(false);
  };

  const options = [

    {
      label: "English",
      value: "English",
    },
    {
      label: "Spanish",
      value: "Spanish",
    },
    {
      label: "French",
      value: "French",
    },
    {
      label: "Italian",
      value: "Italian",
    },
    {
      label: "Arabic",
      value: "Arabic",
    },
    {
      label: "Madarin",
      value: "Mandarin",
    },
    {
      label: "Russian",
      value: "Russian",
    },
    {
      label: "Portugese",
      value: "Portugese",
    },
  ];


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

            <div className='flex justify-center gap-10 w-full'>
                <div className='date flex items-center gap-2'>
                    <label htmlFor="Schedule Date">Date: </label>
                    <input 
                        type="date"
                        name="lessonDate"
                        min={new Date().toISOString().split('T')[0]}
                        className='focus:outline-none'
                        required
                    />
                </div>
                <div className='date flex items-center gap-2'>
                    <label htmlFor="Schedule Time">Time: </label>
                    <input 
                        type="time"
                        name="lessonTime"
                        className='focus:outline-none'
                        required
                    />
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