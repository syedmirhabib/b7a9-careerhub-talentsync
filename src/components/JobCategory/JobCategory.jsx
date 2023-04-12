import React from 'react';

const JobCategory = ({ category }) => {
  const { logo, name, jobs_available } = category;
  return (
    <div className='bg-indigo-50 rounded-md p-2 md:p-5 py-4'>
      <div className='mb-8'>
        <img className='bg-indigo-100 p-2 rounded-md' src={logo} alt="" />
      </div>
      <div>
        <p className='font-semibold text-black'>{name}</p>
        <p className='text-xs'>{jobs_available} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;