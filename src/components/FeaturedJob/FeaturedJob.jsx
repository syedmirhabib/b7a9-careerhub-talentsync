import React from 'react';
import { MapPinIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ showedJob }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = showedJob;
  return (
    <div className='border rounded-md p-5 drop-shadow-sm	flex flex-col'>
      <div className=''>
        <img className='object-cover h-[20px] mb-10' src={logo} alt="" />
      </div>
      <p className='font-bold'>{job_title}</p>
      <p className='font-light tracking-wide	'>{company_name}</p>
      <div className='flex gap-2 py-2'>
        <button className='border border-indigo-300 text-indigo-600 px-3 font-medium text-sm py-1 rounded-lg bg-none disabled'>{remote_or_onsite}</button>
        <button className='border border-indigo-300 text-indigo-600 px-3 font-medium text-sm py-1 rounded-lg bg-none disabled'>{fulltime_or_parttime}</button>
      </div>
      <div className='flex gap-3'>
        <div className='flex items-center'>
          <MapPinIcon className="h-5 w-5 text-gray-500" />
          <p className='text-sm text-gray-500'>{location}</p>
        </div>
        <div className='flex items-center'>
          <CurrencyBangladeshiIcon className="h-5 w-5 text-gray-500" />
          <p className='text-sm text-gray-500'>{salary}</p>
        </div>
      </div>
      <div>
        <Link to={`job-details/${id}`}>
          <button className='job-details-btn'>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;