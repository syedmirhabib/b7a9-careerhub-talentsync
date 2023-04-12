import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Chart = ({ marks }) => {
  const data = marks.map(({ assignment_name, assignment_marks }) => ({
    subject: assignment_name,
    marks: assignment_marks
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Marks" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
