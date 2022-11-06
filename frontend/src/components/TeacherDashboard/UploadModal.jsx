import React from 'react'
import { useState, useEffect } from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
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
        className={ 
          toggle === false ? 'inactive-btn' : 'btn'
        }
        type="button"
      >
        {value}
      </button>
    );
}

const UploadModal = ({ setUploading }) => {
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

  const handleCancel = () => {
    setUploading(false);
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

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(tags)
      const { lessonTitle, lessonDescription } = event.target.elements;
      const lessonData = {
        lessonTitle: lessonTitle.value,
        lessonDescription: lessonDescription.value,
        tags
      };
      console.log('lessonData: ', lessonData)
    };

  return (
    <div className='upload-form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="lessonTitle">Lesson Title:</label>
            <input 
              type="text" 
              className='w-full px-2 py-1 rounded-lg my-3 border border-gray-300'
              placeholder='The title of the lesson'
              name="lessonTitle"
              required
              />
            <label htmlFor="lessonDescription">Lesson Description:</label>
            <textarea 
              type='text' 
              placeholder='Your lesson description here...'
              className='w-full h-16 px-2 py-1 rounded-lg my-3 border border-gray-300'
              name="lessonDescription"
              required
            ></textarea>

        <div className="flex-item  flex flex-col gap-3 mb-4">
            <h2 className="font-bold text-xl">
            <FontAwesomeIcon
                icon={faTag}
                size="1x"
                className=" text-purple-600 mr-2"
              />
              Set Tags
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

export default UploadModal