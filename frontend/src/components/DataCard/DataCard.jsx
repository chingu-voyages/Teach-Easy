import React from 'react';

const DataCard = (props) => {
  return (
    <div className="bg-white rounded-lg drop-shadow-lg mx-8 my-6 p-4 flex gap-[3%]">
      {props.children}
    </div>
  );
};

export default DataCard;
