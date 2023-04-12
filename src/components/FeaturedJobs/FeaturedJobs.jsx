import React, { useContext, useState } from 'react';
import { AvailableJobContext } from '../Layout/Main';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
  const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
  const [showMore, setShowMore] = useState(false);

  const showedJobs = showMore ? availableJobs.slice() : availableJobs.slice(0, 4);
  

  return (
    <div>
      <div className='category-container'>
        <div className='text-center'>
          <p className='text-3xl font-semibold pt-8 md:pt-14 pb-4'>Featured Jobs</p>
          <p className='text-xs'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-7'>
          {
            showedJobs.map((showedJob) => <FeaturedJob
              key={showedJob.id}
              showedJob={showedJob}
            ></FeaturedJob>)
          }
        </div>
        <div className='flex justify-center mb-5'>
          {
            showMore ? (<button className='btn job-btn' onClick={() => setShowMore(!showMore)}>Show Less</button>) : (<button className='btn job-btn' onClick={() => setShowMore(!showMore)}>Show More</button>)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
























