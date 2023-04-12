import React, { useContext, useEffect } from 'react';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import { AppliedJobContext, AvailableJobContext } from '../Layout/Main';
import HomeBanner from '../HomeBanner/HomeBanner';
import { getAppliedList } from '../Utilities/Fakedb';

const Home = () => {
  const availableJobsFromLoader = useLoaderData();

  const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

  useEffect(() => {
    setAvailableJobs(availableJobsFromLoader);
  }, [availableJobsFromLoader, setAvailableJobs]);



  return (
    <div>
      <HomeBanner></HomeBanner>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;