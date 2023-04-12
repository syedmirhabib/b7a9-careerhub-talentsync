import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
  const marks = useLoaderData();
  return (
    <div>
      <Banner>Statistics</Banner>
      <div>
        <Chart
        marks={marks}
        ></Chart>
      </div>
    </div>
  );
};

export default Statistics;