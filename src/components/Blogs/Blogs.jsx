import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Blogs = () => {
  const questions = useLoaderData();
  
  return (
    <div className='blogs-container'>
      <Banner>Blogs</Banner>
      <div className='question-container grid grid-cols-1 md:grid-cols-2 gap-8'>
        {questions.map((singleQuestion) => (
          <Question key={singleQuestion.id} singleQuestion={singleQuestion} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
