import React from 'react';
import './Question.css'; // Import the CSS file

const Question = ({ singleQuestion }) => {
  const { question, answer } = singleQuestion;
  return (
    <div className='border rounded-md p-2 md:p-5 flex flex-col gap-3'>
      <p className='bg-indigo-100 text-slate-900 p-3 rounded-md border'>
        <span className='font-bold'>Question: </span>
        {question}</p>
      <p className='p-1 font-light md:p-3'>
        <span className='font-semibold'>Answer: </span>
        {answer}</p>
    </div>
  );
};

export default Question;
