import React from 'react';
import { MapPinIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ shownJob }) => {
  const { logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, id, location, salary } = shownJob
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5'>
      <div className='col-span-1 min-h-[10vh] flex justify-center items-center bg-gray-200 rounded-md'>
        <img className='w-1/2' src={logo} alt="" />
      </div>
      <div className='col-span-3 flex flex-col'>
        <p className='font-semibold text-xl'>{job_title}</p>
        <p className='text-gray-500 my-1'>{company_name}</p>
        <div className='flex gap-2 py-2 my-1'>
          <button className='job-type-btn'>{remote_or_onsite}</button>
          <button className='job-type-btn'>{fulltime_or_parttime}</button>
        </div>
        <div className='flex gap-3 mt-1'>
          <div className='flex items-center'>
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            <p className='text-sm text-gray-500'>{location}</p>
          </div>
          <div className='flex items-center'>
            <CurrencyBangladeshiIcon className="h-5 w-5 text-gray-500 mr-1" />
            <p className='text-sm text-gray-500'>Salary: {salary}</p>
          </div>
        </div>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        <div>
          <Link to={`job-details/${id}`}>
            <button className='job-details-btn-applied-jobs'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;