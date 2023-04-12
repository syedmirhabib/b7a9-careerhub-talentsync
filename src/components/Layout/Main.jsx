import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getAppliedList } from '../Utilities/Fakedb';
import Footer from '../Footer/Footer';

export const AppliedJobContext = createContext([]);
export const AvailableJobContext = createContext([]);

const Main = () => {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  return (
    <>
      <AvailableJobContext.Provider value={[availableJobs, setAvailableJobs]}>
        <AppliedJobContext.Provider value={[appliedJobs, setAppliedJobs]}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </AppliedJobContext.Provider>
      </AvailableJobContext.Provider>
      <Toaster position="top-right"/>
    </>
  );
};

export default Main;